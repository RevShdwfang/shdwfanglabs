'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { getCollections } from "../../lib/fourthwall";
import type { Collection } from "../../lib/types";
import { decodeHtml } from "../../lib/decodeHtml";

export default function FourthwallStorefront() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
  async function loadCollections() {
    try {
      const data = await getCollections();
      setCollections(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Error loading collections:", err.message);
        setError("Failed to load collections: " + err.message);
      } else {
        console.error("Unknown error:", err);
        setError("An unknown error occurred while loading collections.");
      }
    } finally {
      setLoading(false);
    }
  }

  loadCollections();
}, []);

  // ✅ This must be inside the return context of a function
  if (loading) return <p>Loading collections...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="collections-grid">
      {collections.map((collection) => (
        <div key={collection.handle} className="collection-card">
          <h3 className="collection-title">{decodeHtml(collection.title)}</h3>

          <div className="collection-image-wrapper">
            <img
              src={collection.image_url || "/assets/images/placeholder.png"}
              alt={collection.title}
              className="collection-image"
            />
          </div>

          <Link href={`/collections/${collection.handle}`}>
            <button className="btn">View Collection</button>
          </Link>
        </div>
      ))}
    </div>
  );
}


