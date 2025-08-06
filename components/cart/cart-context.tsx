'use client';

import type { Cart, CartItem, Product, ProductVariant } from '@/lib/types';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { createCart, addToCart } from '@/lib/fourthwall';

export type UpdateType = 'plus' | 'minus' | 'delete';

type CartContextType = {
  cart: Cart;
  setCart: React.Dispatch<React.SetStateAction<Cart>>;
  updateCartItem: (merchandiseId: string, updateType: UpdateType) => void;
  addCartItem: (variant: ProductVariant, product: Product) => void;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const calculateItemCost = (quantity: number, price: string): string => {
  return (Number(price) * quantity).toString();
};

const updateLineItem = (item: CartItem, updateType: UpdateType): CartItem | null => {
  if (updateType === 'delete') return null;

  const newQuantity = updateType === 'plus' ? item.quantity + 1 : item.quantity - 1;
  if (newQuantity === 0) return null;

  const singleItemAmount = Number(item.cost.totalAmount.amount) / item.quantity;
  const newTotalAmount = calculateItemCost(newQuantity, singleItemAmount.toString());

  return {
    ...item,
    quantity: newQuantity,
    cost: {
      ...item.cost,
      totalAmount: {
        ...item.cost.totalAmount,
        amount: newTotalAmount,
      },
    },
  };
};

const createOrUpdateCartItem = (
  existingItem: CartItem | undefined,
  variant: ProductVariant,
  product: Product
): CartItem => {
  const quantity = existingItem ? existingItem.quantity + 1 : 1;
  const totalAmount = calculateItemCost(quantity, variant.price.amount);

  return {
    id: existingItem?.id ?? variant.id,
    quantity,
    cost: {
      totalAmount: {
        amount: totalAmount,
        currencyCode: variant.price.currencyCode,
      },
    },
    merchandise: {
      id: variant.id,
      title: variant.title,
      selectedOptions: variant.selectedOptions,
      product: {
        id: product.id,
        handle: product.handle,
        title: product.title,
        featuredImage: product.featuredImage,
      },
    },
  };
};

const updateCartTotals = (lines: CartItem[]): Pick<Cart, 'totalQuantity' | 'cost'> => {
  const totalQuantity = lines.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = lines.reduce((sum, item) => sum + Number(item.cost.totalAmount.amount), 0);
  const currencyCode = lines[0]?.cost.totalAmount.currencyCode ?? 'USD';

  return {
    totalQuantity,
    cost: {
      subtotalAmount: { amount: totalAmount.toString(), currencyCode },
      totalAmount: { amount: totalAmount.toString(), currencyCode },
    },
  };
};

const createEmptyCart = (): Cart => ({
  id: undefined,
  totalQuantity: 0,
  lines: [],
  currency: 'USD',
  cost: {
    subtotalAmount: { amount: '0', currencyCode: 'USD' },
    totalAmount: { amount: '0', currencyCode: 'USD' },
  },
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart>(() => {
    try {
      const stored = localStorage.getItem('cart');
      const parsed = stored ? JSON.parse(stored) : null;
      return {
        ...createEmptyCart(),
        ...(parsed || {})
      };
    } catch {
      return createEmptyCart();
    }
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    async function ensureCartId() {
      if (!cart.id) {
        try {
          const newCart = await createCart("USD");
          setCart((prev) => ({
            ...prev,
            id: newCart.id,
          }));
        } catch (err) {
          console.error("Failed to create cart:", err);
        }
      }
    }

    ensureCartId();
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const updateCartItem = (merchandiseId: string, updateType: UpdateType) => {
    setCart((prev) => {
      const updatedLines = (Array.isArray(prev.lines) ? prev.lines : [])
        .map((item) =>
          item.merchandise.id === merchandiseId ? updateLineItem(item, updateType) : item
        )
        .filter(Boolean) as CartItem[];
      return { ...prev, lines: updatedLines, ...updateCartTotals(updatedLines) };
    });
  };

  const addCartItem = (variant: ProductVariant, product: Product) => {
    setCart((prev) => {
      const lines = Array.isArray(prev.lines) ? prev.lines : [];
      const existingItem = lines.find((item) => item.merchandise.id === variant.id);
      const updatedItem = createOrUpdateCartItem(existingItem, variant, product);
      const updatedLines = existingItem
        ? lines.map((item) => (item.merchandise.id === variant.id ? updatedItem : item))
        : [...lines, updatedItem];

      if (prev.id) {
        addToCart(prev.id, [
          { merchandiseId: variant.id, quantity: 1 }
        ]).catch((err) => console.error("Failed to sync with Fourthwall:", err));
      }

      return { ...prev, lines: updatedLines, ...updateCartTotals(updatedLines) };
    });
  };

  const value = useMemo(
    () => ({ cart, setCart, updateCartItem, addCartItem, isDrawerOpen, setIsDrawerOpen }),
    [cart, isDrawerOpen]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
}


