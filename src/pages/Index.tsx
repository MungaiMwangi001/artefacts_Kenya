import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingBag, Users, Globe, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProductCard } from '@/components/ui/ProductCard';
import { mockProducts, categories, testimonials } from '@/data/mockProducts';
import heroImage from '@/assets/hero-safari.jpg';
import featuredProducts from '@/assets/featured-products.jpg';
import culturalStory from '@/assets/cultural-story.png';
import bracelet1 from '@/assets/products/bracelet/bracelet 1.jpg';
import elephant from '@/assets/products/carvings/elephant.jpg';
import sandal2 from '@/assets/products/sandals/sandal 2.jpg';
import lion from '@/assets/products/carvings/lion.jpg';
import bow1 from '@/assets/products/bows/bow and arrow.jpg';
import choker1 from '@/assets/products/choker/chokar 1.jpg';
import earing1 from '@/assets/products/earings/earings 2.jpg';
import kiondo1 from '@/assets/products/kiondos/kiondo 1.jpg';
import mask1 from '@/assets/products/masks/mask 1.jpg';
import necklace1 from '@/assets/products/necklace/necklace 1.jpg';
import shuka1 from '@/assets/products/shukas/shuka 1.jpg';
import soapstone1 from '@/assets/products/soaptones/bowls.jpg';
import weddingnecklace1 from '@/assets/products/weddingnecklace/wedding necklace.jpg';

const categoryImages: Record<string, string> = {
  bracelet: bracelet1,
  carvings: elephant,
  sandals: sandal2,
  wildlife: lion,
  bows: bow1,
  choker: choker1,
  earings: earing1,
  kiondos: kiondo1,
  masks: mask1,
  necklace: necklace1,
  shukas: shuka1,
  soaptones: soapstone1,
  weddingnecklace: weddingnecklace1,
};

const Index = () => {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="African Safari Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-6 bg-primary/20 text-white border-white/20">
            Authentic Kenyan Crafts
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover the
            <span className="block text-gradient-safari">Soul of Africa</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Handcrafted treasures from Kenya's rich safari heritage. 
            Each piece tells a story of tradition, craftsmanship, and cultural pride.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-safari text-lg px-8 py-6">
              <Link to="/shop">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10">
              <Link to="/about">
                Our Story
              </Link>
            </Button>
          </div>
          
          {/* Hero Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm text-white/80">Authentic Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-sm text-white/80">Artisan Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-sm text-white/80">Countries Served</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Explore Collections</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Curated by
              <span className="text-gradient-safari"> Passion</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each category represents generations of craftsmanship and cultural heritage
            </p>
          </div>

          {/* Explore Collection Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Link to={`/shop?category=Bracelet`}>
              <div className="relative group rounded-xl overflow-hidden shadow-lg">
                <img src={bracelet1} alt="Bracelets" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
                <span className="absolute bottom-3 left-3 bg-ochre text-white px-3 py-1 rounded font-bold text-sm shadow">Bracelets</span>
              </div>
            </Link>
            <Link to={`/shop?category=Carvings`}>
              <div className="relative group rounded-xl overflow-hidden shadow-lg">
                <img src={elephant} alt="Carvings" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
                <span className="absolute bottom-3 left-3 bg-brown text-white px-3 py-1 rounded font-bold text-sm shadow">Carvings</span>
              </div>
            </Link>
            <Link to={`/shop?category=Sandals`}>
              <div className="relative group rounded-xl overflow-hidden shadow-lg">
                <img src={sandal2} alt="Sandals" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
                <span className="absolute bottom-3 left-3 bg-olive text-white px-3 py-1 rounded font-bold text-sm shadow">Sandals</span>
              </div>
            </Link>
            <Link to={`/shop?category=Bows`}>
              <div className="relative group rounded-xl overflow-hidden shadow-lg">
                <img src={lion} alt="Bows" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
                <span className="absolute bottom-3 left-3 bg-charcoal text-white px-3 py-1 rounded font-bold text-sm shadow">Bows</span>
              </div>
            </Link>
          </div>



          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Card key={category.id} className="group card-safari overflow-hidden h-80">
                <CardContent className="p-0 h-full">
                  <Link to={`/shop?category=${category.name.toLowerCase()}`}>
                    <div className="relative h-full">
                      <img
                        src={categoryImages[category.slug] || `https://via.placeholder.com/300x200?text=${category.name.replace(/\s/g, '+')}`}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                        <p className="text-white/90 mb-3">Explore our {category.name.toLowerCase()} collection</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">0 items</span>
                          <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Storytelling Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="mb-4">Our Heritage</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Stories Woven in
                <span className="text-gradient-safari"> Every Thread</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  For generations, Kenyan artisans have passed down their craft through stories, 
                  songs, and steady hands. Each piece in our collection carries the wisdom of 
                  ancient traditions and the vibrant spirit of modern Africa.
                </p>
                <p>
                  From the highlands of Mount Kenya to the savannas of Maasai Mara, 
                  we work directly with artisan communities to bring you authentic treasures 
                  that honor both heritage and hope for the future.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild className="btn-safari">
                  <Link to="/about">
                    Learn Our Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="btn-earth">
                  <Link to="/artisans">
                    Meet the Artisans
                  </Link>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src={culturalStory}
                  alt="Kenyan artisan at work"
                  className="w-full rounded-2xl shadow-warm"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-glass">
                  <div className="flex items-center space-x-3">
                    <Users className="h-8 w-8" />
                    <div>
                      <div className="text-2xl font-bold">100+</div>
                      <div className="text-sm opacity-90">Artisan Families</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* Customer Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Customer Love</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our
              <span className="text-gradient-safari"> Family Says</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of happy customers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="card-safari">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.comment}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-muted-foreground">
                    Purchased: {testimonial.productPurchased}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold">10k+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold">4.9</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-safari text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Safari Journey Today
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Discover authentic African treasures crafted with love and tradition. 
            Every purchase supports artisan communities across Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link to="/shop">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shop Collection
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10">
              <Link to="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
