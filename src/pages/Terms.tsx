import React from 'react';

const Terms = () => (
  <div className="min-h-screen bg-background py-16">
    <div className="container mx-auto px-4 max-w-2xl">
      <h1 className="text-4xl font-bold mb-8 text-ochre text-center">Terms of Service</h1>
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-2">Acceptance of Terms</h2>
          <p className="text-muted-foreground">By using African Stores, you agree to these terms and our privacy policy. Please read them carefully before making a purchase.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Orders & Payment</h2>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>All orders are subject to acceptance and availability.</li>
            <li>We reserve the right to refuse or cancel any order at our discretion.</li>
            <li>Payment must be made in full before your order is shipped.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Pricing & Product Info</h2>
          <p className="text-muted-foreground">We strive for accuracy, but errors in pricing or product details may occur. We reserve the right to correct any errors and update information at any time.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Intellectual Property</h2>
          <p className="text-muted-foreground">All content, images, and designs on this site are the property of African Stores or our partners. Please do not use or reproduce them without permission.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Limitation of Liability</h2>
          <p className="text-muted-foreground">We are not liable for any indirect, incidental, or consequential damages arising from your use of our site or products.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Changes to Terms</h2>
          <p className="text-muted-foreground">We may update these terms from time to time. Continued use of the site means you accept the new terms.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-muted-foreground">If you have any questions about these terms, please <a href="/contact" className="text-primary underline">contact us</a>.</p>
        </section>
      </div>
    </div>
  </div>
);

export default Terms; 