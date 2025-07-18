import React from 'react';

const Privacy = () => (
  <div className="min-h-screen bg-background py-16">
    <div className="container mx-auto px-4 max-w-2xl">
      <h1 className="text-4xl font-bold mb-8 text-ochre text-center">Privacy Policy</h1>
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-2">Introduction</h2>
          <p className="text-muted-foreground">We value your privacy and are committed to protecting your personal information. This policy explains how African Stores collects, uses, and safeguards your data.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">What We Collect</h2>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>Contact details (name, email, phone)</li>
            <li>Shipping and billing addresses</li>
            <li>Order and payment information</li>
            <li>Browsing and usage data (via cookies)</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">How We Use Your Information</h2>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>To process and deliver your orders</li>
            <li>To communicate with you about your order or our products</li>
            <li>To improve our website and services</li>
            <li>For legal and security purposes</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Cookies</h2>
          <p className="text-muted-foreground">We use cookies to enhance your browsing experience, remember your preferences, and analyze site traffic. You can manage cookies in your browser settings.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Third-Party Services</h2>
          <p className="text-muted-foreground">We may use trusted third-party services (like payment processors and analytics) that have their own privacy policies. We never sell your data.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>Access, update, or delete your personal information</li>
            <li>Opt out of marketing communications</li>
            <li>Request a copy of your data</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-muted-foreground">If you have any questions about this policy or your data, please <a href="/contact" className="text-primary underline">contact us</a>.</p>
        </section>
      </div>
    </div>
  </div>
);

export default Privacy; 