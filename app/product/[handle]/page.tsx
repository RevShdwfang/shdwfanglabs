"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { startTransition } from "react";
import { getCollectionBySlug, getProduct } from "../../../lib/fourthwall"; // Adjust path if needed
import { useCart } from "../../../components/cart/cart-context";
import CartDrawer from "@/components/cart/CartDrawer";
import { setupAccordionAnimation } from "../../../lib/utils";
import styles from "@/styles/modules/product-page.module.css";
import { option, span } from "framer-motion/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";


export default function ProductPage() {
  const { handle } = useParams();
  const searchParams = useSearchParams();
  const collection = searchParams.get("collection");

  const [product, setProduct] = useState<any>(null);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState("");

  const { addCartItem, isDrawerOpen, setIsDrawerOpen } = useCart();

  useEffect(() => {
    if (handle) {
      getProduct({ handle: String(handle), currency: "USD" })
        .then((res) => {
          setProduct(res);
          setSelectedVariant(res?.variants[0]?.id || null);
          setActiveImage(res?.images?.[0]?.url || "");
        })
        .catch((err) => console.error("Error loading product:", err));
    }
  }, [handle]);

  const [collectionTitle, setCollectionTitle] = useState<string>("");

useEffect(() => {
  if (collection && !collectionTitle) {
    getCollectionBySlug(collection)
      .then((res) => {
        if (res?.title) setCollectionTitle(res.title);
      })
      .catch((err) => {
        console.error("Failed to fetch collection title:", err);
      });
  }
}, [collection, collectionTitle]);


  useEffect(() => {
    setupAccordionAnimation();
  }, []);

  const handleAddToCart = () => {
    if (!selectedVariant || !product) return;

    const variant = product.variants.find((v: any) => v.id === selectedVariant);
    if (!variant) return;

    startTransition(() => {
      addCartItem(variant, product);
      console.log("Adding to cart:", { variant, product });

      setIsDrawerOpen(true);
    });
  };

  if (!product) return <p>Loading...</p>;

  return (
    <section className="product-page section" id="productpage">
      <div className="container">
        {collection && (
  <div className="back-button-wrapper">
    <Link
      href={`/collections/${collection}`}
      aria-label={`Go back to ${collectionTitle || "Collection"}`}
    >
      <div className="backbtn">← Back to {collectionTitle || "Collection"}</div>
    </Link>

          </div>
        )}

        <div className={styles.productRowWrapper}>
        <div className={styles.productRow}>
          <div className={styles.productImageColumn}>
            {activeImage && (
              <img
                src={activeImage}
                alt={product.name}
                className={styles.productMainImage}
              />
            )}

            {product.images?.length > 1 && (
              <div className={styles.thumbnailScroll}>
                {product.images.map((img: any) => (
                  <img
                    key={img.url}
                    src={img.url}
                    alt="Thumbnail"
                    className={`${styles.thumbnailImg} ${activeImage === img.url ? styles.active : ""}`}
                    onClick={() => setActiveImage(img.url)}
                  />
                ))}
              </div>
            )}
          </div>

          <div className={styles.productInfoColumn}>
            <h2 className={styles.productTitle}>{product.name}</h2>
            <p className={styles.productPriceLarge}>
              {selectedVariant
                ? `${product.variants.find((v: any) => v.id === selectedVariant)?.price.amount} ${product.variants[0]?.price.currencyCode || "USD"}`
                : "Price not available"}
            </p>

            <div className={styles.variantSection}>
              <p className={styles.variantLabel}>
                Select Size <span className={styles.sizeGuide}>Size guide</span>
              </p>
              <div className={styles.variantOptions}>
                {product.variants.map((variant: any) => (
                  <div key={variant.id} className={styles.variantValue}>
                    <div className={styles.radioButtonNarrow}>
                      <input
                        type="radio"
                        id={variant.id}
                        name="variant"
                        value={variant.id}
                        checked={selectedVariant === variant.id}
                        onChange={() => setSelectedVariant(variant.id)}
                        className={styles.radioInput}
                      />
                      <label className={styles.radioLabel} htmlFor={variant.id}>
                        {variant.selectedOptions.find(
                          (opt: any) => opt.name === "Size"
                        )?.value || "N/A"}
                        {selectedVariant === variant.id && (
                          <span className={styles.variantCheck}></span>
                        )}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.drawerButtons}>
              <div className={styles.quantityWrapper}>
                <div className={styles.selectWrapper}>
                  <select className={styles.customSelect}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                  <span className={styles.dropdownIcon}>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                </div>
              </div>

              <button
  onClick={handleAddToCart}
  className={`${styles.button} ${styles.buttonPrimary} ${styles.buttonExpand}`}
>
  Add to Cart
</button>
            </div>

            <div className={styles.productDetailsSection}>
              <details>
                <summary>More details</summary>
                <p>{product.description || "No further details available."}</p>
              </details>
              <details>
                <summary>Size & Fit</summary>
                <p>Standard fit. Refer to size guide for best results.</p>
              </details>
              <details>
                <summary>Quality Guarantee & Returns</summary>
                <p>30-day return policy. Your satisfaction matters.</p>
              </details>
            </div>
          </div>
        </div>
        </div>
      </div>

      <CartDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </section>
  );
}


