import React from "react";
import { useLanguage } from "../../../contexts/LanguageContext";
import "./FeaturedProducts.css";

const FeaturedProducts = () => {
  const { language, isRTL } = useLanguage();

  const products = [
    {
      id: 1,
      name: {
        ar: "بطاقة PlayStation Store",
        en: "PlayStation Store Card"
      },
      price: {
        original: 50,
        discounted: 45
      },
      rating: 4.8,
      reviewCount: 234,
      category: {
        ar: "بطاقات الألعاب",
        en: "Gaming Cards"
      }
    },
    {
      id: 2,
      name: {
        ar: "كود Xbox Live Gold",
        en: "Xbox Live Gold Code"
      },
      price: {
        original: 60,
        discounted: null
      },
      rating: 4.9,
      reviewCount: 189,
      category: {
        ar: "اشتراكات الألعاب",
        en: "Gaming Subscriptions"
      }
    },
    {
      id: 3,
      name: {
        ar: "بطاقة Steam Wallet",
        en: "Steam Wallet Card"
      },
      price: {
        original: 25,
        discounted: 20
      },
      rating: 4.7,
      reviewCount: 567,
      category: {
        ar: "بطاقات رقمية",
        en: "Digital Cards"
      }
    },
    {
      id: 4,
      name: {
        ar: "اشتراك Netflix Premium",
        en: "Netflix Premium Subscription"
      },
      price: {
        original: 15,
        discounted: null
      },
      rating: 4.6,
      reviewCount: 892,
      category: {
        ar: "اشتراكات الترفيه",
        en: "Entertainment Subscriptions"
      }
    },
    {
      id: 5,
      name: {
        ar: "بطاقة Google Play",
        en: "Google Play Card"
      },
      price: {
        original: 30,
        discounted: 25
      },
      rating: 4.8,
      reviewCount: 445,
      category: {
        ar: "بطاقات التطبيقات",
        en: "App Store Cards"
      }
    },
    {
      id: 6,
      name: {
        ar: "كود Spotify Premium",
        en: "Spotify Premium Code"
      },
      price: {
        original: 12,
        discounted: null
      },
      rating: 4.5,
      reviewCount: 321,
      category: {
        ar: "اشتراكات الموسيقى",
        en: "Music Subscriptions"
      }
    },
    {
      id: 7,
      name: {
        ar: "بطاقة iTunes",
        en: "iTunes Card"
      },
      price: {
        original: 40,
        discounted: 35
      },
      rating: 4.7,
      reviewCount: 678,
      category: {
        ar: "بطاقات Apple",
        en: "Apple Cards"
      }
    },
    {
      id: 8,
      name: {
        ar: "اشتراك Adobe Creative",
        en: "Adobe Creative Subscription"
      },
      price: {
        original: 55,
        discounted: 50
      },
      rating: 4.9,
      reviewCount: 156,
      category: {
        ar: "برامج التصميم",
        en: "Design Software"
      }
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star full">★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
    }

    return stars;
  };

  return (
    <section className={`featured-products ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="products-container">
        {/* Header */}
        <div className="products-header">
          <h2 className="products-main-title">
            {isRTL ? 'المنتجات المميزة' : 'Featured Products'}
          </h2>
          <p className="products-subtitle">
            {isRTL 
              ? 'مجموعة من المنتجات التي نرغب في تسليط الضوء عليها سواء لعروض حالية أو منتجات عليها طلب مرتفع'
              : 'A collection of products we want to highlight, whether for current offers or high-demand products'
            }
          </p>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              {/* Product Image */}
              <div className="product-image">
                <div className="product-placeholder">
                  <div className="image-placeholder-icon">🖼️</div>
                  <div className="image-placeholder-text">
                    <span className="placeholder-title">
                      {isRTL ? 'صورة المنتج' : 'Product Image'}
                    </span>
                    <span className="placeholder-dimensions">
                      300 × 200 px
                    </span>
                  </div>
                </div>
                
                {/* Discount Badge */}
                {product.price.discounted && (
                  <div className="discount-badge">
                    {Math.round(((product.price.original - product.price.discounted) / product.price.original) * 100)}%
                  </div>
                )}
              </div>

              {/* Product Content */}
              <div className="product-content">
                {/* Category */}
                <div className="product-category">
                  {isRTL ? product.category.ar : product.category.en}
                </div>

                {/* Product Name */}
                <h3 className="product-name">
                  {isRTL ? product.name.ar : product.name.en}
                </h3>

                {/* Rating */}
                <div className="product-rating">
                  <div className="stars">
                    {renderStars(product.rating)}
                  </div>
                  <span className="rating-text">
                    {product.rating} ({product.reviewCount} {isRTL ? 'تقييم' : 'reviews'})
                  </span>
                </div>

                {/* Price */}
                <div className="product-price">
                  {product.price.discounted ? (
                    <>
                      <span className="current-price">${product.price.discounted}</span>
                      <span className="original-price">${product.price.original}</span>
                    </>
                  ) : (
                    <span className="current-price">${product.price.original}</span>
                  )}
                </div>

                {/* CTA Button */}
                <button className="product-cta">
                  {isRTL ? 'اشتري الآن' : 'Buy Now'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="products-footer">
          <button className="view-more-btn">
            {isRTL ? 'اعرض المزيد' : 'View More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts; 