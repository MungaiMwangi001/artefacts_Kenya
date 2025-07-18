import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Heart, Menu, X, User, Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useCurrency } from '@/contexts/CurrencyContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { useCart } from '@/contexts/CartContext';
import { categories } from '@/data/mockProducts';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { currency, setCurrency, symbols } = useCurrency();
  const { wishlistCount } = useWishlist();
  const { cartCount } = useCart();

  // Remove 'Categories' from navigationItems
  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleCategorySelect = (slug, name) => {
    navigate(`/shop?category=${encodeURIComponent(name)}`);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-end py-2 text-sm text-muted-foreground border-b border-border/30">
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-auto p-1">
                  <Globe className="h-4 w-4 mr-1" />
                  EN
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Swahili</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* Currency Switcher */}
            <select
              className="border rounded px-2 py-1 text-sm bg-background"
              value={currency}
              onChange={e => setCurrency(e.target.value)}
            >
              <option value="KES">KES</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
            {/* Account Dropdown (last in row) */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-auto p-1">
                  <User className="h-5 w-5 mr-1" />
                  <span className="hidden sm:inline">Account</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/account">My Account</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/orders">Order History</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/auth/login">Sign In</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="w-full">
          {/* Top row: logo, categories, search toggle, cart, hamburger */}
          <div className="flex items-center justify-between gap-2 w-full py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold text-gradient-safari">African Stores</h1>
            </Link>
            {/* Categories Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  Categories
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {categories.map((cat) => (
                  <DropdownMenuItem key={cat.slug} onClick={() => handleCategorySelect(cat.slug, cat.name)}>
                    {cat.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {/* Search Toggle */}
            <Button variant="ghost" size="sm" className="flex items-center gap-1" onClick={() => setIsSearchOpen((v) => !v)} aria-label="Toggle search bar">
              <Search className="h-5 w-5" />
              <span className="hidden sm:inline">Search</span>
            </Button>
            {/* Cart Button */}
            <Button
              variant="ghost"
              size="sm"
              className="relative"
              onClick={() => {
                if (location.pathname === '/cart') {
                  navigate('/shop');
                } else {
                  navigate('/cart');
                }
              }}
              aria-label="Cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
            {/* Hamburger Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {/* Other navigation links */}
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                  {/* Wishlist */}
                  <Button variant="ghost" size="sm" asChild className="w-full text-left">
                    <Link to="/wishlist">
                      <Heart className="h-5 w-5 mr-2" /> Wishlist
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          {/* Search bar below the nav row, toggled by Search button */}
          {isSearchOpen && (
            <form onSubmit={handleSearch} className="flex items-center w-full mt-2 px-1">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="rounded-full text-sm pl-10 pr-2 py-2 w-full"
                  autoFocus
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Search className="h-4 w-4" />
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;