import React from 'react';
import { Instagram, Facebook, MessageCircle, Twitter, Mail } from 'lucide-react';

const socials = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/africanstores' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/africanstores' },
  { name: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/1234567890' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/africanstores' },
  { name: 'Email', icon: Mail, href: 'mailto:info@africanstores.com' },
];

const Contact = () => (
  <div className="min-h-screen bg-background py-16">
    <div className="container mx-auto px-4 max-w-2xl">
      <h1 className="text-4xl font-bold mb-8 text-ochre text-center">Contact Us</h1>
      <form className="bg-white dark:bg-charcoal rounded-xl shadow-lg p-8 mb-12">
        <div className="mb-4">
          <label className="block mb-2 font-semibold" htmlFor="name">Name</label>
          <input id="name" name="name" type="text" className="w-full border rounded px-3 py-2" required />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className="w-full border rounded px-3 py-2" required />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold" htmlFor="message">Message</label>
          <textarea id="message" name="message" className="w-full border rounded px-3 py-2" rows={5} required />
        </div>
        <button type="submit" className="w-full py-3 bg-ochre text-white font-bold rounded shadow hover:bg-olive transition">Send Message</button>
      </form>
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold mb-2 text-brown">Connect with us</h2>
        <div className="flex gap-6 mb-2">
          {socials.map(({ name, icon: Icon, href }) => (
            <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name} className="text-ochre hover:text-brown text-3xl transition">
              <Icon />
            </a>
          ))}
        </div>
        <div className="text-muted-foreground text-lg">info@africanstores.com</div>
      </div>
    </div>
  </div>
);

export default Contact;