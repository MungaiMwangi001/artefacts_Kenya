import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockProducts } from '../data/mockProducts';
import { useCurrency } from '../components/ui/CurrencyContext';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../components/ui/breadcrumb';
import { Link } from 'react-router-dom';
import { categories } from '../data/mockProducts';
import { Button } from '../components/ui/button';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = mockProducts.find(p => p.id === id);
  const { currency, rates, symbols } = useCurrency();

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-8">Sorry, we couldn't find that product.</p>
        <button
          className="px-4 py-2 bg-ochre text-white rounded hover:bg-olive transition"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  const category = categories.find(c => c.name === product.category);

  const convertedPrice = Math.round(product.price * rates[currency]);

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/shop">Shop</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            {category ? (
              <BreadcrumbLink asChild>
                <Link to={`/shop?category=${category.slug}`}>{category.name}</Link>
              </BreadcrumbLink>
            ) : (
              <BreadcrumbPage>{product.category}</BreadcrumbPage>
            )}
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <button
        className="mb-6 px-4 py-2 bg-ochre text-white rounded hover:bg-olive transition"
        onClick={() => navigate(-1)}
      >
        ← Back to Shop
      </button>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-lg shadow-lg w-full object-cover aspect-square"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-ochre mb-2">{product.name}</h1>
          <p className="text-brown text-2xl font-bold mb-2">{symbols[currency]} {convertedPrice.toLocaleString()}</p>
          <p className="text-muted-foreground mb-4">{product.description}</p>
          <div className="flex gap-4 mt-4">
            <Button className="px-6 py-3 bg-ochre text-white font-bold rounded shadow hover:bg-olive transition-all duration-200 animate-bounce">
              Add to Wishlist
            </Button>
            <Button className="px-6 py-3 bg-brown text-white font-bold rounded shadow hover:bg-charcoal transition-all duration-200">
              Checkout via WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;