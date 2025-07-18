import React from 'react';
import { HelpCircle, Truck, RefreshCw, CreditCard, Info } from 'lucide-react';

const faqs = [
  {
    q: 'How do I place an order?',
    a: 'Browse our collections, add your favorite items to the cart, and proceed to checkout. For now, checkout is via WhatsApp for a personalized experience.'
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept M-Pesa, credit/debit cards, and PayPal for secure and convenient payments.'
  },
  {
    q: 'How long does shipping take?',
    a: 'Shipping within Kenya takes 2-5 business days. International shipping may take 7-14 business days depending on your location.'
  },
  {
    q: 'Can I return or exchange an item?',
    a: 'Yes! We offer a 30-day return policy. Please see our Returns page for details.'
  },
  {
    q: 'Are your products authentic?',
    a: 'Absolutely. Every item is handcrafted by Kenyan artisans using traditional techniques and sustainable materials.'
  }
];

const FAQ = () => (
  <div className="min-h-screen bg-background py-16">
    <div className="container mx-auto px-4 max-w-2xl">
      <h1 className="text-4xl font-bold mb-8 text-ochre text-center flex items-center justify-center gap-2">
        <HelpCircle className="h-8 w-8 text-ochre" /> Frequently Asked Questions
      </h1>
      <div className="space-y-8">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-muted rounded-xl p-6 shadow">
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" /> {faq.q}
            </h2>
            <p className="text-muted-foreground">{faq.a}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center text-muted-foreground">
        Still have questions? <a href="/contact" className="text-primary underline">Contact us</a> and we’ll be happy to help!
      </div>
    </div>
  </div>
);

export default FAQ; 