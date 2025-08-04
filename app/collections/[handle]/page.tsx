'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchProductsByCollectionSlug, getCollectionBySlug } from "../../../lib/fourthwall";
import { reshapeProducts, reshapeCollection } from "../../../lib/fourthwall/reshape";
import ProductCard from '../../../components/productcards/ProductCard';
import styles from '../../../components/modules/product-card.module.css';
import { Collection, Product } from "../../../lib/types";
import { FourthwallCollection } from "../../../lib/fourthwall/types";
import PageHeader from '@/components/modules/PageHeader/PageHeader';

export default function CollectionPage() {
  const { handle } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [collection, setCollection] = useState<Collection | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!handle) return;

    const loadData = async () => {
      try {
        const fwCollection = await getCollectionBySlug(handle as string);
        const fwProducts = await fetchProductsByCollectionSlug(handle as string);

        if (fwCollection) {
          setCollection(reshapeCollection(fwCollection as FourthwallCollection));
        }

        setProducts(reshapeProducts(fwProducts?.results || []));
        setLoading(false);
      } catch (err) {
        console.error("Failed to load collection data:", err);
      }
    };

    loadData();
  }, [handle]);

  if (loading) return <p>Loading collection...</p>;
  if (!products.length) return <p>No products found.</p>;

  return (
    <section className="collectionproducts active section" id="collectionproducts">
      <div className="container">
        <PageHeader title={collection?.title || "Collection"} />
        
        <div className={styles.productGrid}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={{
                id: product.id,
                slug: product.handle,
                name: product.title,
                title: product.title,
                description: product.description,
                variants: product.variants.map((v) => ({
                  unitPrice: {
                    value: Number(v.price.amount),
                    currencyCode: v.price.currencyCode,
                  },
                })),
                images: product.images.map((img) => ({ url: img.url })),
              }}
              collection={{ slug: collection?.handle || "" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
