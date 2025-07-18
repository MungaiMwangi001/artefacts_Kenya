import React from 'react';

const Returns = () => (
  <div className="min-h-screen bg-background py-16">
    <div className="container mx-auto px-4 max-w-2xl">
      <h1 className="text-4xl font-bold mb-8 text-ochre text-center">Return Policy</h1>
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-2">Our Policy</h2>
          <p className="text-muted-foreground">We want you to love your purchase! If you’re not satisfied, you can return most items within 30 days of delivery for a full refund or exchange.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">How to Return</h2>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>Contact us at <a href="/contact" className="text-primary underline">hello@africanstores.com</a> with your order number and reason for return.</li>
            <li>We’ll provide instructions and a return address.</li>
            <li>Items must be unused and in original packaging.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Refunds</h2>
          <p className="text-muted-foreground">Once we receive your return, we’ll inspect it and process your refund within 5 business days. Refunds are issued to your original payment method.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Exchanges</h2>
          <p className="text-muted-foreground">Want a different item? Let us know and we’ll be happy to arrange an exchange if available.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-muted-foreground">Questions? <a href="/contact" className="text-primary underline">Contact us</a> and we’ll help you with your return or exchange.</p>
        </section>
      </div>
    </div>
  </div>
);

export default Returns; 