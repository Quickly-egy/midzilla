import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ZoomImg from '../../../utlis/Zoom/ZoomImg';
import { products } from '@/data/products';
import styles from './SingleProduct.module.css';

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setLoading(true);
    const timer = setTimeout(() => {
      const foundProduct = products.find(p => p.id === parseInt(id));
      if (foundProduct) {
        setProduct(foundProduct);
        setLoading(false);
      } else {
        // Product not found, redirect to products page
        navigate('/products');
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [id, navigate]);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 99) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    // Add to cart functionality would go here
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };

  const handleBuyNow = () => {
    // Buy now functionality would go here
    console.log(`Buying ${quantity} of ${product.name}`);
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
        <p>Loading product details...</p>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  // Create image gallery with main image and variations
  const imageGallery = [
    product.image,
    product.image.replace('w=400&h=300', 'w=400&h=300&fit=crop&crop=center'),
    product.image.replace('w=400&h=300', 'w=400&h=300&fit=crop&crop=top'),
    product.image.replace('w=400&h=300', 'w=400&h=300&fit=crop&crop=bottom')
  ];

  return (
    <div className={styles.productPage}>
      <div className={styles.breadcrumb}>
        <button onClick={() => navigate('/products')} className={styles.backButton}>
          ← Back to Products
        </button>
      </div>

      <div className={styles.productContainer}>
        {/* Product Images Section */}
        <div className={styles.imageSection}>
          <div className={styles.mainImage}>
            <ZoomImg 
              src={imageGallery[selectedImage]} 
              alt={product.name}
              zoomLevel={3}
            />
          </div>
          
          <div className={styles.imageGallery}>
            {imageGallery.map((image, index) => (
              <button
                key={index}
                className={`${styles.thumbnail} ${selectedImage === index ? styles.active : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={image} alt={`${product.name} view ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className={styles.detailsSection}>
          <div className={styles.productInfo}>
            <span className={styles.category}>{product.category}</span>
            <h1 className={styles.productName}>{product.name}</h1>
            
            <div className={styles.rating}>
              {[...Array(5)].map((_, index) => (
                <span key={index} className={index < product.rating ? styles.star : styles.starEmpty}>
                  ★
                </span>
              ))}
              <span className={styles.ratingText}>({product.rating} out of 5)</span>
            </div>

            <div className={styles.price}>
              <span className={styles.currentPrice}>${product.price}</span>
              {product.originalPrice && (
                <span className={styles.originalPrice}>${product.originalPrice}</span>
              )}
              {product.discount && (
                <span className={styles.discount}>{product.discount}% OFF</span>
              )}
            </div>

            <div className={styles.description}>
              <h3>Description</h3>
              <p>{product.description || `Experience the ultimate gaming performance with our premium ${product.name}. Designed for professional gamers and enthusiasts, this product delivers exceptional quality and reliability.`}</p>
            </div>

            {product.features && (
              <div className={styles.features}>
                <h3>Key Features</h3>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className={styles.specifications}>
              <h3>Specifications</h3>
              <div className={styles.specGrid}>
                {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className={styles.specItem}>
                    <span className={styles.specLabel}>{key}:</span>
                    <span className={styles.specValue}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Purchase Section */}
          <div className={styles.purchaseSection}>
            <div className={styles.quantitySelector}>
              <label htmlFor="quantity">Quantity:</label>
              <div className={styles.quantityControls}>
                <button 
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                  className={styles.quantityBtn}
                >
                  -
                </button>
                <input
                  id="quantity"
                  type="number"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                  min="1"
                  max="99"
                  className={styles.quantityInput}
                />
                <button 
                  onClick={() => handleQuantityChange(quantity + 1)}
                  disabled={quantity >= 99}
                  className={styles.quantityBtn}
                >
                  +
                </button>
              </div>
            </div>

            <div className={styles.stockInfo}>
              <span className={styles.inStock}>✓ In Stock</span>
              <span className={styles.shipping}>Free shipping on orders over $50</span>
            </div>

            <div className={styles.actionButtons}>
              <button 
                onClick={handleAddToCart}
                className={styles.addToCartBtn}
              >
                Add to Cart
              </button>
              <button 
                onClick={handleBuyNow}
                className={styles.buyNowBtn}
              >
                Buy Now
              </button>
            </div>

            <div className={styles.additionalInfo}>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>🛡️</span>
                <span>2 Year Warranty</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>🔄</span>
                <span>30 Day Returns</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>🚚</span>
                <span>Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct; 