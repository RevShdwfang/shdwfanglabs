import { getCollections } from "../../lib/fourthwall";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStore} from "@fortawesome/free-solid-svg-icons";
import styles from "@/components/modules/collections.module.css";
import { decodeHtml } from "@/lib/decodeHtml";

<FontAwesomeIcon icon={faStore} />

export default async function ShopPage() {
  const collections = await getCollections();

  return (
    <section className="shop-page section">
      <div className="container">
        <div className="titlerow">
          <div className="section-title padd-15">
            <h2>Shop Collections</h2>
          </div>
        </div>
        <div className={styles.collectionsGrid}>
  {collections.map((collection) => (
    <div key={collection.handle} className={styles.collectionCard}>
      <h3 className={styles.collectionTitle}>{decodeHtml(collection.title)}</h3>

      <div className={styles.collectionImageWrapper}>
        <img
  src={`/assets/images/Collections/${collection.handle}.png`}
  alt={collection.title}
  className={styles.collectionImage}
/>
      </div>

      <Link href={`/collections/${collection.handle}`}>
        <button className={styles.btn}>view collection</button>
      </Link>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}
