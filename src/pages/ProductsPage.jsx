import React, { useState, useEffect, useMemo } from "react";
import { useParams, useSearchParams, Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import ProductsHeader from "../components/ProductsPage/ProductsHeader/ProductsHeader";
import FiltersSidebar from "../components/ProductsPage/FiltersSidebar/FiltersSidebar";
import ProductsGrid from "../components/ProductsPage/ProductsGrid/ProductsGrid";
import Pagination from "../components/ProductsPage/Pagination/Pagination";
import LoadingSkeleton from "../components/LoadingSkeleton/LoadingSkeleton";
import "./ProductsPage.css";

const ProductsPage = () => {
  const { language, t } = useLanguage();
  const { categoryId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // State Management
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter & Sort State
  const [filters, setFilters] = useState({
    category: categoryId || searchParams.get('category') || '',
    search: searchParams.get('search') || '',
    priceRange: [
      parseFloat(searchParams.get('minPrice')) || 0,
      parseFloat(searchParams.get('maxPrice')) || 1000
    ],
    platform: searchParams.get('platform') || '',
    rating: parseFloat(searchParams.get('rating')) || 0,
    discount: searchParams.get('discount') === 'true',
    sortBy: searchParams.get('sort') || 'featured'
  });

  // Pagination State
  const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get('page')) || 1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const productsPerPage = parseInt(searchParams.get('limit')) || 12;

  // Enhanced Mock Data
  const allProducts = useMemo(() => [
    {
      id: 1,
      title: { ar: "شحن فري فاير 100 ماسة", en: "Free Fire 100 Diamonds" },
      description: { ar: "احصل على 100 ماسة فري فاير فوراً", en: "Get 100 Free Fire diamonds instantly" },
      price: 12.99,
      originalPrice: 14.99,
      category: "mobile-games",
      platform: "mobile",
      image: "/api/placeholder/400/300",
      gallery: ["/api/placeholder/400/300", "/api/placeholder/400/301"],
      rating: 4.8,
      reviewsCount: 2541,
      discount: 13,
      tags: ["popular", "instant"],
      isNew: false,
      isHot: true,
      inStock: true,
      features: ["instant_delivery", "24_7_support", "secure_payment"]
    },
    {
      id: 2,
      title: { ar: "بطاقة بلاي ستيشن 20 دولار", en: "PlayStation Gift Card $20" },
      description: { ar: "بطاقة هدايا بلاي ستيشن بقيمة 20 دولار", en: "PlayStation gift card worth $20" },
      price: 20.00,
      originalPrice: 20.00,
      category: "console-games",
      platform: "playstation",
      image: "/api/placeholder/400/300",
      gallery: ["/api/placeholder/400/300"],
      rating: 4.9,
      reviewsCount: 1892,
      discount: 0,
      tags: ["gift_card", "official"],
      isNew: false,
      isHot: false,
      inStock: true,
      features: ["instant_delivery", "official_retailer"]
    },
    {
      id: 3,
      title: { ar: "شحن بابجي موبايل 660 UC", en: "PUBG Mobile 660 UC" },
      description: { ar: "شحن 660 UC لبابجي موبايل مع بونص", en: "660 UC for PUBG Mobile with bonus" },
      price: 15.50,
      originalPrice: 18.00,
      category: "mobile-games",
      platform: "mobile",
      image: "/api/placeholder/400/300",
      gallery: ["/api/placeholder/400/300", "/api/placeholder/400/301"],
      rating: 4.7,
      reviewsCount: 3245,
      discount: 14,
      tags: ["bonus", "popular"],
      isNew: true,
      isHot: true,
      inStock: true,
      features: ["instant_delivery", "bonus_included"]
    },
    {
      id: 4,
      title: { ar: "بطاقة ستيم 50 دولار", en: "Steam Gift Card $50" },
      description: { ar: "بطاقة ستيم الرسمية بقيمة 50 دولار", en: "Official Steam gift card worth $50" },
      price: 50.00,
      originalPrice: 52.00,
      category: "pc-games",
      platform: "pc",
      image: "/api/placeholder/400/300",
      gallery: ["/api/placeholder/400/300"],
      rating: 5.0,
      reviewsCount: 892,
      discount: 4,
      tags: ["official", "steam"],
      isNew: false,
      isHot: false,
      inStock: true,
      features: ["instant_delivery", "official_retailer", "global_use"]
    },
    {
      id: 5,
      title: { ar: "شحن فالورانت 1000 VP", en: "Valorant 1000 VP" },
      description: { ar: "نقاط فالورانت 1000 VP للحصول على أفضل الاسلحة", en: "1000 Valorant Points to get the best weapons" },
      price: 25.99,
      originalPrice: 25.99,
      category: "pc-games",
      platform: "pc",
      image: "/api/placeholder/400/300",
      gallery: ["/api/placeholder/400/300", "/api/placeholder/400/301"],
      rating: 4.6,
      reviewsCount: 1567,
      discount: 0,
      tags: ["competitive", "fps"],
      isNew: false,
      isHot: false,
      inStock: true,
      features: ["instant_delivery", "competitive_ready"]
    },
    {
      id: 6,
      title: { ar: "بطاقة اكس بوكس 25 دولار", en: "Xbox Gift Card $25" },
      description: { ar: "بطاقة هدايا اكس بوكس بقيمة 25 دولار", en: "Xbox gift card worth $25" },
      price: 25.00,
      originalPrice: 28.00,
      category: "console-games",
      platform: "xbox",
      image: "/api/placeholder/400/300",
      gallery: ["/api/placeholder/400/300"],
      rating: 4.8,
      reviewsCount: 1234,
      discount: 11,
      tags: ["xbox", "gift_card"],
      isNew: false,
      isHot: false,
      inStock: true,
      features: ["instant_delivery", "xbox_compatible"]
    },
    // More products...
    {
      id: 7,
      title: { ar: "شحن كول أوف ديوتي موبايل CP", en: "Call of Duty Mobile CP" },
      description: { ar: "نقاط كول أوف ديوتي موبايل", en: "Call of Duty Mobile CP Points" },
      price: 19.99,
      originalPrice: 22.99,
      category: "mobile-games",
      platform: "mobile",
      image: "/api/placeholder/400/300",
      gallery: ["/api/placeholder/400/300"],
      rating: 4.5,
      reviewsCount: 2156,
      discount: 13,
      tags: ["shooter", "popular"],
      isNew: false,
      isHot: true,
      inStock: true,
      features: ["instant_delivery", "battle_pass_ready"]
    },
    {
      id: 8,
      title: { ar: "شحن جينشن امباكت", en: "Genshin Impact Genesis Crystals" },
      description: { ar: "بلورات جينشن امباكت للحصول على الشخصيات", en: "Genshin Impact crystals for characters" },
      price: 29.99,
      originalPrice: 29.99,
      category: "mobile-games",
      platform: "mobile",
      image: "/api/placeholder/400/300",
      gallery: ["/api/placeholder/400/300", "/api/placeholder/400/301"],
      rating: 4.9,
      reviewsCount: 3892,
      discount: 0,
      tags: ["anime", "gacha"],
      isNew: true,
      isHot: true,
      inStock: true,
      features: ["instant_delivery", "wishes_ready"]
    }
  ], []);

  // Category Names
  const categoryNames = {
    "mobile-games": { ar: "ألعاب الجوال", en: "Mobile Games" },
    "console-games": { ar: "ألعاب الكونسول", en: "Console Games" },
    "pc-games": { ar: "ألعاب الكمبيوتر", en: "PC Games" },
    "gift-cards": { ar: "بطاقات الهدايا", en: "Gift Cards" }
  };

  // Filter Products Function
  const filterProducts = useMemo(() => {
    return (products, filters) => {
      return products.filter(product => {
        // Category filter
        if (filters.category && product.category !== filters.category) return false;
        
        // Search filter
        if (filters.search) {
          const searchTerm = filters.search.toLowerCase();
          const title = (product.title[language] || product.title.en).toLowerCase();
          const description = (product.description[language] || product.description.en).toLowerCase();
          if (!title.includes(searchTerm) && !description.includes(searchTerm)) return false;
        }
        
        // Price range filter
        if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) return false;
        
        // Platform filter
        if (filters.platform && product.platform !== filters.platform) return false;
        
        // Rating filter
        if (filters.rating > 0 && product.rating < filters.rating) return false;
        
        // Discount filter
        if (filters.discount && product.discount === 0) return false;
        
        return true;
      });
    };
  }, [language]);

  // Sort Products Function
  const sortProducts = useMemo(() => {
    return (products, sortBy) => {
      const sorted = [...products];
      switch (sortBy) {
        case "price-low":
          return sorted.sort((a, b) => a.price - b.price);
        case "price-high":
          return sorted.sort((a, b) => b.price - a.price);
        case "rating":
          return sorted.sort((a, b) => b.rating - a.rating);
        case "newest":
          return sorted.sort((a, b) => b.isNew - a.isNew || b.id - a.id);
        case "popular":
          return sorted.sort((a, b) => b.reviewsCount - a.reviewsCount);
        case "discount":
          return sorted.sort((a, b) => b.discount - a.discount);
        case "featured":
        default:
          return sorted.sort((a, b) => b.isHot - a.isHot || b.rating - a.rating);
      }
    };
  }, []);

  // This memoized computation is now handled directly in useEffect to prevent loops

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (filters.category) params.set('category', filters.category);
    if (filters.search) params.set('search', filters.search);
    if (filters.priceRange[0] > 0) params.set('minPrice', filters.priceRange[0].toString());
    if (filters.priceRange[1] < 1000) params.set('maxPrice', filters.priceRange[1].toString());
    if (filters.platform) params.set('platform', filters.platform);
    if (filters.rating > 0) params.set('rating', filters.rating.toString());
    if (filters.discount) params.set('discount', 'true');
    if (filters.sortBy !== 'featured') params.set('sort', filters.sortBy);
    if (currentPage > 1) params.set('page', currentPage.toString());
    if (productsPerPage !== 12) params.set('limit', productsPerPage.toString());
    
    setSearchParams(params, { replace: true });
  }, [filters, currentPage, productsPerPage, setSearchParams]);

  // Load Products Effect
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 300));
        
        // Process products directly without causing infinite loop
        let filtered = filterProducts(allProducts, filters);
        let sorted = sortProducts(filtered, filters.sortBy);
        
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const paginated = sorted.slice(startIndex, endIndex);
        
        setProducts(paginated);
        setTotalProducts(filtered.length);
        setTotalPages(Math.ceil(filtered.length / productsPerPage));
        
      } catch (err) {
        setError(t("errorLoadingProducts") || "Error loading products");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [allProducts, filters, currentPage, productsPerPage, filterProducts, sortProducts, t]);

  // Event Handlers
  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
    setCurrentPage(1);
  };

  const handleSortChange = (sortBy) => {
    setFilters(prev => ({ ...prev, sortBy }));
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  const handleRetry = () => {
    setError(null);
    setCurrentPage(1);
    setFilters(prev => ({ ...prev }));
  };

  const getCategoryName = (catId) => {
    return categoryNames[catId] ? categoryNames[catId][language] : "";
  };

  // Error State
  if (error) {
    return (
      <div className={`products-page error-state ${language === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="products-error">
          <div className="error-icon">⚠️</div>
          <h2 className="error-title">
            {t("errorTitle") || "Something went wrong"}
          </h2>
          <p className="error-message">{error}</p>
          <button className="error-retry-btn" onClick={handleRetry}>
            {t("retryButton") || "Try Again"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`products-page ${language === 'ar' ? 'rtl' : 'ltr'} ${loading ? 'loading' : ''}`}>
      {/* Breadcrumb Navigation */}
      <div className="products-breadcrumb">
        <div className="breadcrumb-container">
          <nav className="breadcrumb-nav" aria-label="breadcrumb">
            <Link to="/" className="breadcrumb-link">
              <span className="breadcrumb-icon">🏠</span>
              {t("home") || "Home"}
            </Link>
            <span className="breadcrumb-separator">›</span>
            <Link to="/products" className="breadcrumb-link">
              {t("allProducts") || "All Products"}
            </Link>
            {categoryId && (
              <>
                <span className="breadcrumb-separator">›</span>
                <span className="breadcrumb-current">
                  {getCategoryName(categoryId)}
                </span>
              </>
            )}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="products-content">
        {/* Mobile Filter Toggle */}
        <button 
          className="mobile-filter-toggle"
          onClick={() => setShowFilters(!showFilters)}
          aria-label="Toggle filters"
        >
          <span className="filter-icon">🔧</span>
          {t("filters") || "Filters"}
          <span className="filter-count">
            {Object.values(filters).filter(Boolean).length}
          </span>
        </button>

        {/* Filters Sidebar */}
        <FiltersSidebar
          filters={filters}
          onFilterChange={handleFilterChange}
          totalProducts={totalProducts}
          showFilters={showFilters}
          onClose={() => setShowFilters(false)}
        />

        {/* Main Products Area */}
        <main className="products-main">
          {/* Products Header */}
          <ProductsHeader
            totalProducts={totalProducts}
            currentSort={filters.sortBy}
            onSortChange={handleSortChange}
            categoryName={categoryId ? getCategoryName(categoryId) : ""}
            viewMode={viewMode}
            onViewModeChange={handleViewModeChange}
            loading={loading}
          />

          {/* Products Grid/List */}
          <ProductsGrid
            products={products}
            loading={loading}
            viewMode={viewMode}
            error={error}
            onRetry={handleRetry}
          />

          {/* Pagination */}
          {!loading && totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              totalItems={totalProducts}
              itemsPerPage={productsPerPage}
            />
          )}
        </main>
      </div>

      {/* Loading Overlay */}
      {loading && (
        <div className="loading-overlay">
          <div className="loading-content">
            <div className="loading-spinner"></div>
            <p className="loading-text">
              {t("loadingProducts") || "Loading products..."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage; 