import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Globe, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => (
  <div className="min-h-screen bg-background py-16">
    <div className="container mx-auto px-4 max-w-3xl">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-ochre">Our Story</h1>
        <p className="text-lg text-muted-foreground mb-6">
          African Stores is a celebration of Kenya’s rich heritage, artisan craftsmanship, and the vibrant spirit of Africa. Every piece we offer is a bridge between tradition and modern design, crafted with love by local artisans.
        </p>
        <div className="flex justify-center gap-6 mb-6">
          <Users className="h-10 w-10 text-brown" />
          <Globe className="h-10 w-10 text-olive" />
          <Heart className="h-10 w-10 text-ochre" />
        </div>
        <Button asChild className="btn-safari mr-2">
          <Link to="/shop">Explore Shop</Link>
        </Button>
        <Button asChild variant="outline" className="btn-earth">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
      <div className="bg-white dark:bg-charcoal rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-brown">Our Mission</h2>
        <p className="mb-4 text-muted-foreground">
          To empower artisan communities, preserve cultural heritage, and bring the beauty of African craftsmanship to the world. We believe in fair trade, sustainability, and the power of storytelling through art.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-brown">Meet the Artisans</h2>
        <p className="mb-4 text-muted-foreground">
          Our network of over 100 artisan families spans Kenya’s diverse regions. Each artisan brings unique skills, stories, and passion to their craft, ensuring every product is truly one-of-a-kind.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-brown">Our Values</h2>
        <ul className="list-disc list-inside text-muted-foreground mb-4">
          <li>Authenticity & Heritage</li>
          <li>Empowerment & Fair Trade</li>
          <li>Sustainability & Community</li>
          <li>Quality & Craftsmanship</li>
        </ul>
      </div>
    </div>
  </div>
);

export default About;