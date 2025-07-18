import React, { useState, useEffect } from 'react';
import { mockProducts, categories } from '../data/mockProducts';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCurrency } from '../contexts/CurrencyContext';
import { ProductCard } from '../components/ui/ProductCard';

const PRODUCTS_PER_PAGE = 12;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Shop = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { formatPrice } = useCurrency();
  const query = useQuery();
  const selectedCategory = query.get('category');

  // Group products by category
  const productsByCategory = categories.map(cat => ({
    ...cat,
    products: mockProducts.filter(p => p.category.toLowerCase() === cat.name.toLowerCase())
  }));

  // If a category is selected, only show that section
  const visibleCategories = selectedCategory
    ? productsByCategory.filter(cat => cat.name.toLowerCase() === selectedCategory.toLowerCase())
    : productsByCategory;

  return (
    <div className="container mx-auto px-4 py-8">
      {visibleCategories.map(cat => (
        <div key={cat.name} className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-ochre">{cat.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {cat.products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
            {cat.products.length === 0 && (
              <div className="col-span-full text-muted-foreground">No products in this category.</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;