import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Trash2, ArrowLeft, Package, Minus, Plus, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { useCurrency } from '@/contexts/CurrencyContext';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
  const { formatPrice } = useCurrency();

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    updateQuantity(productId, newQuantity);
  };

  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId);
  };

  const handleCheckout = () => {
    // WhatsApp checkout functionality
    const message = `Hello! I'd like to place an order for the following items:\n\n${cart.map(item => 
      `• ${item.product.name} - Qty: ${item.quantity} - ${formatPrice(item.product.price * item.quantity)}`
    ).join('\n')}\n\nTotal: ${formatPrice(cartTotal)}`;
    
    const whatsappUrl = `https://wa.me/254700000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          {/* Empty State */}
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center">
                  <ShoppingCart className="h-12 w-12 text-muted-foreground" />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
              <p className="text-muted-foreground mb-8">
                Start adding some beautiful African treasures to your cart and experience authentic craftsmanship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="btn-safari">
                  <Link to="/shop">
                    <Package className="mr-2 h-4 w-4" />
                    Start Shopping
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Shopping Cart</h1>
            <p className="text-muted-foreground">
              {cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
          <div className="flex gap-2 mt-4 sm:mt-0">
            <Button
              variant="outline"
              onClick={clearCart}
              className="text-destructive hover:text-destructive"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Clear Cart
            </Button>
            <Button asChild>
              <Link to="/shop">
                Continue Shopping
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {cart.map((item) => (
                <Card key={item.product.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row">
                      {/* Product Image */}
                      <div className="flex items-center justify-center bg-white dark:bg-gray-800 lg:w-40 lg:h-40 w-full h-40 min-w-[120px] max-w-[180px] min-h-[120px] max-h-[180px] p-2 rounded-lg overflow-hidden relative">
                        <Link to={`/product/${item.product.id}`} className="block w-full h-full">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-contain rounded-lg hover:scale-105 transition-transform duration-300"
                          />
                        </Link>
                        <Badge className="absolute top-2 left-2">
                          {item.product.category}
                        </Badge>
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 p-6">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between h-full">
                          <div className="flex-1">
                            {/* Product Name - Clickable */}
                            <Link to={`/product/${item.product.id}`} className="block">
                              <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                                {item.product.name}
                              </h3>
                            </Link>

                            {/* Price */}
                            <div className="flex items-center gap-2 mb-3">
                              <span className="text-2xl font-bold text-primary">
                                {formatPrice(item.product.price)}
                              </span>
                              {item.product.originalPrice && item.product.originalPrice > item.product.price && (
                                <span className="text-lg text-muted-foreground line-through">
                                  {formatPrice(item.product.originalPrice)}
                                </span>
                              )}
                            </div>

                            {/* Product Details */}
                            <div className="space-y-2 mb-4">
                              <p className="text-muted-foreground line-clamp-2">
                                {item.product.description}
                              </p>
                              {item.product.material && (
                                <p className="text-sm">
                                  <span className="font-medium">Material:</span> {item.product.material}
                                </p>
                              )}
                              {item.product.dimensions && (
                                <p className="text-sm">
                                  <span className="font-medium">Size:</span> {item.product.dimensions}
                                </p>
                              )}
                              <p className="text-sm">
                                <span className="font-medium">Stock:</span> {item.product.stock} available
                              </p>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-2 mb-4">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <svg
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < Math.floor(item.product.rating)
                                        ? 'text-yellow-400 fill-current'
                                        : 'text-gray-300'
                                    }`}
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                              <span className="text-sm text-muted-foreground">
                                ({item.product.rating})
                              </span>
                            </div>
                          </div>

                          {/* Quantity Controls and Actions */}
                          <div className="flex flex-col gap-4 lg:ml-6">
                            {/* Quantity Controls */}
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                                className="w-8 h-8 p-0"
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-12 text-center font-medium">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                                disabled={item.quantity >= item.product.stock}
                                className="w-8 h-8 p-0"
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>

                            {/* Item Total */}
                            <div className="text-right">
                              <p className="text-sm text-muted-foreground">Item Total</p>
                              <p className="text-lg font-bold text-primary">
                                {formatPrice(item.product.price * item.quantity)}
                              </p>
                            </div>

                            {/* Remove Button */}
                            <Button
                              variant="outline"
                              onClick={() => handleRemoveItem(item.product.id)}
                              className="w-full lg:w-auto text-destructive hover:text-destructive"
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal ({cart.length} items)</span>
                    <span className="font-medium">{formatPrice(cartTotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>{formatPrice(cartTotal)}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    onClick={handleCheckout}
                    className="w-full btn-safari"
                    size="lg"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Checkout via WhatsApp
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full"
                  >
                    <Link to="/shop">
                      Continue Shopping
                    </Link>
                  </Button>
                </div>

                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">What's included:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Free worldwide shipping</li>
                    <li>• Authentic Kenyan craftsmanship</li>
                    <li>• 30-day return policy</li>
                    <li>• Direct artisan support</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-muted-foreground">
              Total: {cart.length} {cart.length === 1 ? 'item' : 'items'} • {formatPrice(cartTotal)}
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={clearCart}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Clear Cart
              </Button>
              <Button onClick={handleCheckout} className="btn-safari">
                <MessageCircle className="mr-2 h-4 w-4" />
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 