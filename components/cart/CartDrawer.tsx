'use client';

import React from 'react';
import { useCart } from './cart-context';
import Image from 'next/image';
import styles from '@/modules/cartdrawer.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { addToCart, createCart, createCheckoutUrl } from "@/lib/fourthwall";
import { removeFromCart } from "@/lib/fourthwall";

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, updateCartItem } = useCart();

  const handleQuantityChange = (id: string, type: 'plus' | 'minus') => {
    updateCartItem(id, type);
  };

  const handleRemove = (id: string) => {
    updateCartItem(id, 'delete');
  };

  const handleCheckout = async () => {
  try {
    // Step 1: Create a brand new cart
    const newCart = await createCart("USD");

    if (!newCart.id) {
      throw new Error("Failed to create a valid cart ID.");
    }

    // Step 2: Add current items
    const lineItems = cart.lines.map((item) => ({
      merchandiseId: item.merchandise.id,
      quantity: item.quantity,
    }));

    if (lineItems.length > 0) {
      await addToCart(newCart.id, lineItems);
    }

    // Step 3: Redirect
    const url = await createCheckoutUrl(newCart.id, cart.currency);
    window.location.href = url;
  } catch (err) {
    console.error("Checkout failed:", err);
    alert("Could not proceed to checkout. Please try again.");
  }
};


  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className={`${styles.cartDrawer} ${isOpen ? styles.open : ''}`}
        >
          <div className={styles.cartHeader}>
            <h2>Your Cart</h2>
            <button onClick={onClose} className={styles.closeButton}>
              ×
            </button>
          </div>

          <div className={styles.cartContent}>
            {cart && cart.lines.length > 0 ? (
              cart.lines.map((item) => (
                <div key={item.merchandise.id} className={styles.cartItem}>
                  <div className={styles.itemImage}>
                    {item.merchandise.product.featuredImage?.url && (
                      <Image
                        src={item.merchandise.product.featuredImage.url}
                        alt={item.merchandise.product.title}
                        width={60}
                        height={60}
                      />
                    )}
                  </div>
                  <div className={styles.itemInfo}>
                    <p className={styles.itemTitle}>{item.merchandise.product.title}</p>
                    <p className={styles.itemVariant}>{item.merchandise.title}</p>
                    <div className={styles.itemActions}>
                      <div className={styles.quantityControls}>
                        <button onClick={() => handleQuantityChange(item.merchandise.id, 'minus')}>−</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => handleQuantityChange(item.merchandise.id, 'plus')}>+</button>
                      </div>
                      <button
                        onClick={() => handleRemove(item.merchandise.id)}
                        className={styles.removeButton}
                      >
                        Remove
                      </button>
                    </div>
                    <p className={styles.itemPrice}>
                      {item.cost.totalAmount.amount} {item.cost.totalAmount.currencyCode}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className={styles.emptyCart}>Your cart is empty.</p>
            )}
          </div>

          {cart && cart.totalQuantity > 0 && (
            <div className={styles.cartFooter}>
              <div className={styles.subtotal}>
                <span>Subtotal : </span>
                <strong>
                  {cart.cost.totalAmount.amount} {cart.cost.totalAmount.currencyCode}
                </strong>
              </div>
              <button className={styles.checkoutButton} onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          )}
          
        </motion.div>
      )}
    </AnimatePresence>
  );

}


