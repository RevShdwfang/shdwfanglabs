'use client';

import Link from "next/link";
import styles from "../modules/product-card.module.css";

interface ProductCardProps {
  product: {
    id: string;
    slug: string;
    name: string;
    title?: string;
    description?: string;
    variants?: {
      unitPrice?: {
        value: number;
        currencyCode?: string;
      };
    }[];
    images?: { url: string }[];
  };
  collection?: {
    slug: string;
  };
}

export default function ProductCard({ product, collection }: ProductCardProps) {
  const variant = product.variants?.[0];
  const price = variant?.unitPrice?.value;
  const currency = variant?.unitPrice?.currencyCode || "USD";

  return (
    <div className={styles.productCard}>
      <img
        src={product.images?.[0]?.url}
        alt={product.title || product.name}
        className={styles.productImage}
      />

      <h3 className={styles.productTitle}>{product.name}</h3>

      {product.description && (
        <p
          className={styles.productDescription}
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
      )}

      <p className={styles.productPrice}>
        {price
          ? `${currency === "USD" ? "$" : currency + " "}${price.toFixed(2)}`
          : "Price not available"}
      </p>

      <Link
        href={`/product/${product.slug}${
          collection?.slug ? `?collection=${collection.slug}` : ""
        }`}
      >
        <button className={styles.btn}>view product</button>
      </Link>
    </div>
  );
}


