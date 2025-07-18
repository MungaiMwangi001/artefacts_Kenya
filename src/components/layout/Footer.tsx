import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Instagram, MessageCircle, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const location = useLocation();
  const showFullFooter = [
    '/',
    '/about',
    '/contact',
  ].includes(location.pathname);
  const footerLinks = {
    shop: [
      { name: 'Safari Home Decor', href: '/category/safari-home-decor' },
      { name: 'Artisan Furniture', href: '/category/artisan-furniture' },
      { name: 'Textiles & Furnishings', href: '/category/textiles' },
      { name: 'Fashion & Accessories', href: '/category/fashion' },
      { name: 'Gift Sets', href: '/category/gift-sets' },
    ],
    support: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Shipping & Returns', href: '/shipping' },
      { name: 'Size Guide', href: '/size-guide' },
      { name: 'Care Instructions', href: '/care' },
      { name: 'FAQ', href: '/faq' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Story', href: '/story' },
      { name: 'Artisan Partners', href: '/artisans' },
      { name: 'Sustainability', href: '/sustainability' },
      { name: 'Press', href: '/press' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Return Policy', href: '/returns' },
    ],
  };

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/africanstores' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/africanstores' },
    { name: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/1234567890' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/africanstores' },
  ];

  return (
    <footer className="bg-muted py-8 mt-12 border-t border-border">
      <div className="container mx-auto px-4">
        {showFullFooter && (
          <>
            {/* Newsletter Section */}
            <div className="py-12 border-b border-border">
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-4">Stay Connected with African Heritage</h3>
                <p className="text-muted-foreground mb-6">
                  Subscribe to our newsletter for exclusive offers, new arrivals, and stories from our artisan partners.
                </p>
                <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1"
                    required
                  />
                  <Button type="submit" className="btn-safari">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>

            {/* Main Footer Content */}
            <div className="py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                {/* Brand Section */}
                <div className="lg:col-span-2">
                  <Link to="/" className="inline-block mb-4">
                    <h2 className="text-2xl font-bold text-gradient-safari">
                      African Stores
                    </h2>
                    <p className="text-sm text-muted-foreground">Authentic Safari</p>
                  </Link>
                  <p className="text-muted-foreground mb-6 max-w-md">
                    Bringing you authentic handcrafted treasures from Kenya's rich safari heritage. 
                    Each piece tells a story of tradition, craftsmanship, and cultural pride.
                  </p>
                  {/* Contact Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3 text-sm">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Nairobi, Kenya</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">+254 700 000 000</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">hello@africanstores.com</span>
                    </div>
                  </div>
                  {/* Social Links */}
                  <div className="flex space-x-3">
                    {socialLinks.map((social) => (
                      <Button
                        key={social.name}
                        variant="ghost"
                        size="sm"
                        asChild
                        className="hover:text-primary"
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          <social.icon className="h-5 w-5" />
                          <span className="sr-only">{social.name}</span>
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
                {/* Shop Links */}
                <div>
                  <h3 className="font-semibold mb-4">Shop</h3>
                  <ul className="space-y-3">
                    {footerLinks.shop.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Support Links */}
                <div>
                  <h3 className="font-semibold mb-4">Support</h3>
                  <ul className="space-y-3">
                    {footerLinks.support.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Company Links */}
                <div>
                  <h3 className="font-semibold mb-4">Company</h3>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
        <Separator />
        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span>© 2024 African Stores. All rights reserved.</span>
              <Separator orientation="vertical" className="h-4" />
              <div className="flex space-x-4">
                {footerLinks.legal.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              Crafted with ❤️ in Kenya
            </div>
          </div>
        </div>
      </div>
      {/* LiveChatWidget Integration */}
      <script>
        {`
          // TODO: Replace with your real LiveChatWidget script (e.g., Tawk.to, Intercom)
          // Example: Tawk.to
          // var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          // (function(){
          // var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          // s1.async=true;
          // s1.src='https://embed.tawk.to/YOUR_PROPERTY_ID/DEFAULT';
          // s1.charset='UTF-8';
          // s1.setAttribute('crossorigin','*');
          // s0.parentNode.insertBefore(s1,s0);
          // })();
        `}
      </script>
    </footer>
  );
};

export default Footer;