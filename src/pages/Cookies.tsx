import React from 'react';

const Cookies = () => (
  <div className="min-h-screen bg-background py-16">
    <div className="container mx-auto px-4 max-w-2xl">
      <h1 className="text-4xl font-bold mb-8 text-ochre text-center">Cookie Policy</h1>
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-2">What Are Cookies?</h2>
          <p className="text-muted-foreground">Cookies are small text files stored on your device to help websites remember your preferences and activity.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">How We Use Cookies</h2>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>To keep you logged in and remember your cart</li>
            <li>To analyze site traffic and usage</li>
            <li>To personalize your experience</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Managing Cookies</h2>
          <p className="text-muted-foreground">You can control and delete cookies in your browser settings. Disabling cookies may affect your experience on our site.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Third-Party Cookies</h2>
          <p className="text-muted-foreground">We may use third-party services (like analytics or payment providers) that set their own cookies. Please review their policies for more info.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">More Info</h2>
          <p className="text-muted-foreground">If you have questions about our cookie policy, <a href="/contact" className="text-primary underline">contact us</a>.</p>
        </section>
      </div>
    </div>
  </div>
);

export default Cookies; 