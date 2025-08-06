import { Cart, Collection, Product } from "../types";
import { reshapeCart, reshapeProduct, reshapeProducts } from "./reshape";
import {
  FourthwallCart,
  FourthwallCollection,
  FourthwallProduct,
} from "./types";

const API_URL =
  process.env.NEXT_PUBLIC_FW_API_URL ||
  "https://storefront-api.fourthwall.com/v1";
const STOREFRONT_TOKEN = process.env.NEXT_PUBLIC_FW_STOREFRONT_TOKEN || "";

/**
 * Helper: Fourthwall GET
 */
async function fourthwallGet<T>(
  url: string,
  query: Record<string, string | number | undefined>,
  options: RequestInit = {}
): Promise<{ status: number; body: T }> {
  try {
    const constructedUrl = new URL(url);

    // Append query params
    Object.entries(query).forEach(([key, value]) => {
      if (value !== undefined) {
        constructedUrl.searchParams.append(key, value.toString());
      }
    });

    constructedUrl.searchParams.append("storefront_token", STOREFRONT_TOKEN);

    const response = await fetch(constructedUrl.toString(), {
      method: "GET",
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    const body = await response.json();

    if (!response.ok) {
      console.error("Fourthwall GET Error:", {
        status: response.status,
        url: constructedUrl.toString(),
        body,
      });
      throw new Error(
        `Failed to fetch from Fourthwall: ${response.status} - ${constructedUrl.toString()}`
      );
    }

    return {
      status: response.status,
      body,
    };
  } catch (e) {
  console.error("Fourthwall GET Error:", e);
  throw new Error("Fourthwall GET failed: " + url);
}
}

/**
 * Helper: Fourthwall POST
 */
async function fourthwallPost<T>(
  url: string,
  data: any,
  options: RequestInit = {}
): Promise<{ status: number; body: T }> {
  try {
    const response = await fetch(`${url}?storefront_token=${STOREFRONT_TOKEN}`, {
      method: "POST",
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      body: JSON.stringify(data),
    });

    const rawBody = await response.text();
    const body = JSON.parse(rawBody);

    if (!response.ok) {
      console.error("Fourthwall POST Error:", {
        status: response.status,
        url,
        body,
        requestBody: data,
      });
      throw new Error(
        `Failed to post to Fourthwall: ${response.status} - ${url}`
      );
    }

    return {
      status: response.status,
      body,
    };
  } catch (e: unknown) {
    const message =
      e instanceof Error
        ? e.message
        : typeof e === "string"
        ? e
        : "Unknown error";
    throw new Error(`Fourthwall POST failed: ${url}\n${message}`);
  }
}


/**
 * Collection operations
 */
export async function getCollections(): Promise<Collection[]> {
  const res = await fourthwallGet<{ results: FourthwallCollection[] }>(
  `${API_URL}/collections`,
  {}
);

  return res.body.results.map((collection) => ({
    handle: collection.slug,
    title: collection.name,
    description: collection.description,
    image_url: collection.image?.url || "/assets/images/placeholder.png",
  }));
}

export async function getCollectionProducts({
  collection,
  currency,
  limit,
}: {
  collection: string;
  currency: string;
  limit?: number;
}): Promise<Product[]> {
  const res = await fourthwallGet<{ results: FourthwallProduct[] }>(
    `${API_URL}/collections/${collection}/products`,
    {
      currency,
      limit,
    }
  );

  if (!res.body.results) {
    console.warn(`No collection found for \`${collection}\``);
    return [];
  }

  return reshapeProducts(res.body.results);
}

/**
 * Product operations
 */
export async function getProduct({
  handle,
  currency,
}: {
  handle: string;
  currency: string;
}): Promise<Product | undefined> {
  const res = await fourthwallGet<FourthwallProduct>(
    `${API_URL}/products/${handle}`,
    { currency }
  );

  return reshapeProduct(res.body);
}

/**
 * Cart operations
 */
export async function getCart(
  cartId: string | undefined,
  currency: string
): Promise<Cart | undefined> {
  if (!cartId) {
    return undefined;
  }

  try {
    const res = await fourthwallGet<FourthwallCart>(
      `${API_URL}/carts/${cartId}`,
      {
        currency,
      },
      {
        cache: "no-store",
      }
    );

    return reshapeCart(res.body);
  } catch (e) {
    console.error("CART ERROR", e);
    return undefined;
  }
}

export async function createCart(p0: string): Promise<Cart> {
  try {
    const res = await fourthwallPost<FourthwallCart>(
      `${API_URL}/carts`,
      {
        items: [],
      }
    );

    return reshapeCart(res.body);
  } catch (e) {
    console.error("CART CREATE ERROR", e);
    throw e;
  }
}

export async function addToCart(
  cartId: string,
  lines: { merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  const items = lines.map((line) => ({
    variantId: line.merchandiseId,
    quantity: line.quantity,
  }));

  const res = await fourthwallPost<FourthwallCart>(
    `${API_URL}/carts/${cartId}/add`,
    {
      items,
    },
    {
      cache: "no-store",
    }
  );

  return reshapeCart(res.body);
}

export async function removeFromCart(
  cartId: string,
  lineIds: string[]
): Promise<Cart> {
  const items = lineIds.map((id) => ({
    variantId: id,
  }));

  const res = await fourthwallPost<FourthwallCart>(
    `${API_URL}/carts/${cartId}/remove`,
    {
      items,
    },
    {
      cache: "no-store",
    }
  );

  return reshapeCart(res.body);
}

export async function updateCart(
  cartId: string,
  lines: { id: string; merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  const items = lines.map((line) => ({
    variantId: line.merchandiseId,
    quantity: line.quantity,
  }));

  const res = await fourthwallPost<FourthwallCart>(
    `${API_URL}/carts/${cartId}/change`,
    {
      items,
    },
    {
      cache: "no-store",
    }
  );

  return reshapeCart(res.body);
}

export async function getCollectionBySlug(slug: string) {
  const res = await fourthwallGet<{ results: FourthwallCollection[] }>(
    `${API_URL}/collections`,
    {}
  );
  return res.body.results.find((c) => c.slug === slug);
}


export async function fetchProductsByCollectionSlug(slug: string) {
  const res = await fourthwallGet<{ results: FourthwallProduct[] }>(
    `${API_URL}/collections/${slug}/products`,
    {}
  );
  return res.body;
}

export const createEmptyCart = (): Cart => ({
  id: undefined,
  totalQuantity: 0,
  lines: [],
  currency: 'USD',
  cost: {
    subtotalAmount: { amount: '0', currencyCode: 'USD' },
    totalAmount: { amount: '0', currencyCode: 'USD' }
  }
});

export async function createCheckoutUrl(cartId: string, cartCurrency = "USD"): Promise<string> {
  if (!cartId) throw new Error("Cart ID is required to create checkout URL.");

  const checkoutDomain = process.env.NEXT_PUBLIC_FW_CHECKOUT;
  if (!checkoutDomain) throw new Error("NEXT_PUBLIC_FW_CHECKOUT is not set in .env");

  return `${checkoutDomain}/checkout/?cartCurrency=${cartCurrency}&cartId=${cartId}`;
}
