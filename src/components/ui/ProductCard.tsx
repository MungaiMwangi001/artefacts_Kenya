import React from 'react';
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react';
import { Button } from './button';
import { Badge } from './badge';
import { useCurrency } from '../../contexts/CurrencyContext';
import { useWishlist } from '../../contexts/WishlistContext';
import { useCart } from '../../contexts/CartContext';
import { Product } from '../../data/mockProducts';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  showQuickView?: boolean;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  showQuickView = true,
  onQuickView
}) => {
  const { formatPrice } = useCurrency();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onQuickView) {
      onQuickView(product);
    }
  };

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-700 min-h-[120px] min-w-[120px]">
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        
        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="sm"
            variant="secondary"
            className="w-8 h-8 p-0 rounded-full bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800"
            onClick={handleWishlistToggle}
          >
            <Heart
              size={16}
              className={isInWishlist(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600 dark:text-gray-300'}
            />
          </Button>
          
          {showQuickView && onQuickView && (
            <Button
              size="sm"
              variant="secondary"
              className="w-8 h-8 p-0 rounded-full bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800"
              onClick={handleQuickView}
            >
              <Eye size={16} className="text-gray-600 dark:text-gray-300" />
            </Button>
          )}
        </div>

        {/* Stock Badge */}
        {product.stock === 0 && (
          <div className="absolute top-3 left-3">
            <Badge variant="destructive">Out of Stock</Badge>
          </div>
        )}
        
        {product.stock > 0 && product.stock <= 5 && (
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
              Low Stock
            </Badge>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Category */}
        <div className="mb-2">
          <Badge variant="outline" className="text-xs">
            {product.category}
          </Badge>
        </div>

        {/* Product Name - Clickable */}
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={`${
                  i < Math.floor(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300 dark:text-gray-600'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            ({product.rating})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through ml-2">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          
          {product.originalPrice && product.originalPrice > product.price && (
            <Badge variant="destructive" className="text-xs">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </Badge>
          )}
        </div>

        {/* Product Details */}
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-3 space-y-1">
          <p className="line-clamp-2">{product.description}</p>
          {product.material && (
            <p className="text-xs">
              <span className="font-medium">Material:</span> {product.material}
            </p>
          )}
          {product.dimensions && (
            <p className="text-xs">
              <span className="font-medium">Size:</span> {product.dimensions}
            </p>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className="w-full bg-amber-600 hover:bg-amber-700 text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <ShoppingCart size={16} className="mr-2" />
          {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
        </Button>
      </div>
    </div>
  );
};