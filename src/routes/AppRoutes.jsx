import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import FAQPage from '../pages/FAQPage';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Home Route */}
      <Route path="/" element={<HomePage />} />
      
      {/* Products Routes */}
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductDetailsPage />} />
      
      {/* Category Routes */}
      <Route path="/category/:categoryId" element={<CategoryPage />} />
      
      {/* Search Routes */}
      <Route path="/search" element={<SearchResultsPage />} />
      
      {/* Information Pages */}
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/refund" element={<RefundPage />} />
      <Route path="/stars" element={<StarsSystemPage />} />
      
      {/* Shopping Routes */}
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      
      {/* User Account Routes */}
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      
      {/* Game Categories */}
      <Route path="/games" element={<ProductsPage />} />
      <Route path="/games/mobile" element={<CategoryPage />} />
      <Route path="/games/pc" element={<CategoryPage />} />
      <Route path="/games/console" element={<CategoryPage />} />
      
      {/* Gift Cards */}
      <Route path="/gift-cards" element={<CategoryPage />} />
      <Route path="/cards" element={<CategoryPage />} />
      
      {/* Special Pages */}
      <Route path="/offers" element={<OffersPage />} />
      <Route path="/new" element={<NewProductsPage />} />
      <Route path="/bestsellers" element={<BestSellersPage />} />
      
      {/* Support Routes */}
      <Route path="/support" element={<SupportPage />} />
      <Route path="/help" element={<HelpPage />} />
      
      {/* 404 Page */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

// Placeholder components for pages that don't exist yet
const AboutPage = () => <div>About Page - Coming Soon</div>;
const ContactPage = () => <div>Contact Page - Coming Soon</div>;
const PrivacyPage = () => <div>Privacy Page - Coming Soon</div>;
const TermsPage = () => <div>Terms Page - Coming Soon</div>;
const RefundPage = () => <div>Refund Page - Coming Soon</div>;
const StarsSystemPage = () => <div>Stars System Page - Coming Soon</div>;
const CartPage = () => <div>Cart Page - Coming Soon</div>;
const CheckoutPage = () => <div>Checkout Page - Coming Soon</div>;
const ProfilePage = () => <div>Profile Page - Coming Soon</div>;
const OrdersPage = () => <div>Orders Page - Coming Soon</div>;
const FavoritesPage = () => <div>Favorites Page - Coming Soon</div>;
const ProductDetailsPage = () => <div>Product Details Page - Coming Soon</div>;
const CategoryPage = () => <div>Category Page - Coming Soon</div>;
const SearchResultsPage = () => <div>Search Results Page - Coming Soon</div>;
const OffersPage = () => <div>Offers Page - Coming Soon</div>;
const NewProductsPage = () => <div>New Products Page - Coming Soon</div>;
const BestSellersPage = () => <div>Best Sellers Page - Coming Soon</div>;
const SupportPage = () => <div>Support Page - Coming Soon</div>;
const HelpPage = () => <div>Help Page - Coming Soon</div>;
const NotFoundPage = () => <div>404 - Page Not Found</div>;

export default AppRoutes; 