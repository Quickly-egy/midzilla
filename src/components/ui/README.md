# UI Components

This directory contains reusable UI components for the Modzilla Gaming E-commerce website.

## Components

### ProductCard
A card component for displaying product information.

**Props:**
- `product` (object): Product data with the following structure:
  - `id` (number): Product ID
  - `name` (string): Product name
  - `price` (number): Product price
  - `image` (string): Product image URL
  - `category` (string): Product category
  - `rating` (number): Product rating (1-5)

**Usage:**
```jsx
import ProductCard from '@/components/ui/ProductCard';

<ProductCard product={productData} />
```

### CategorySidebar
A sidebar component for filtering products by category and other criteria.

**Props:**
- `categories` (array): Array of category objects with `id`, `name`, and `count`
- `selectedCategory` (string|null): Currently selected category ID
- `onCategorySelect` (function): Callback function when category is selected

**Usage:**
```jsx
import CategorySidebar from '@/components/ui/CategorySidebar';

<CategorySidebar
  categories={categories}
  selectedCategory={selectedCategory}
  onCategorySelect={handleCategorySelect}
/>
```

### ProductsGrid
A grid component for displaying multiple product cards.

**Props:**
- `products` (array): Array of product objects
- `loading` (boolean): Loading state

**Usage:**
```jsx
import ProductsGrid from '@/components/ui/ProductsGrid';

<ProductsGrid products={products} loading={loading} />
```

## Features

- **Responsive Design**: All components are fully responsive and work on mobile, tablet, and desktop
- **Theme Support**: Components automatically adapt to light/dark theme
- **Accessibility**: Components include proper ARIA labels and keyboard navigation
- **Performance**: Optimized with CSS modules and efficient rendering

## Styling

All components use CSS modules for scoped styling and follow the design system defined in `src/index.css`. The components use CSS custom properties (variables) for consistent theming across light and dark modes. 