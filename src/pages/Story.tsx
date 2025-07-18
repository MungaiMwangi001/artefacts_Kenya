import React from 'react';
import { Users, Globe, Heart, Leaf } from 'lucide-react';

const Story = () => (
  <div className="min-h-screen bg-background py-16">
    <div className="container mx-auto px-4 max-w-2xl">
      <h1 className="text-4xl font-bold mb-8 text-ochre text-center flex items-center justify-center gap-2">
        <Globe className="h-8 w-8 text-ochre" /> Our Story
      </h1>
      <p className="text-lg text-muted-foreground mb-8 text-center">
        African Stores was born from a passion for sharing the beauty, heritage, and craftsmanship of Kenya with the world. Our journey began in the bustling markets of Nairobi, where we met artisans whose stories and skills inspired us to build a bridge between tradition and modern design.
      </p>
      <div className="space-y-8">
        <div className="bg-muted rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" /> Our Mission
          </h2>
          <p className="text-muted-foreground">
            To empower artisan communities, preserve cultural heritage, and bring the beauty of African craftsmanship to the world. We believe in fair trade, sustainability, and the power of storytelling through art.
          </p>
        </div>
        <div className="bg-muted rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <Heart className="h-5 w-5 text-ochre" /> Our Values
          </h2>
          <ul className="list-disc list-inside text-muted-foreground mb-2">
            <li>Authenticity & Heritage</li>
            <li>Empowerment & Fair Trade</li>
            <li>Sustainability & Community</li>
            <li>Quality & Craftsmanship</li>
          </ul>
        </div>
        <div className="bg-muted rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <Leaf className="h-5 w-5 text-green-600" /> Our Promise
          </h2>
          <p className="text-muted-foreground">
            Every purchase supports real families and helps keep ancient skills alive. We are committed to ethical sourcing, eco-friendly packaging, and sharing the stories behind every piece.
          </p>
        </div>
      </div>
      <div className="mt-12 text-center">
        <span className="text-muted-foreground">Thank you for being part of our story.</span>
      </div>
    </div>
  </div>
);

export default Story; 