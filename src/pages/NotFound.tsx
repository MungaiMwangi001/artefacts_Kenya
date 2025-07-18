import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-ochre/10 via-brown/10 to-olive/10 dark:from-charcoal/80 dark:to-olive/40">
      <div className="text-center p-8 bg-white/80 dark:bg-charcoal/80 rounded-xl shadow-lg max-w-md mx-auto">
        {/* Safari-themed illustration (placeholder SVG) */}
        <div className="mb-6 flex justify-center">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="40" cy="70" rx="30" ry="8" fill="#BFA76A" fillOpacity="0.3" />
            <circle cx="40" cy="40" r="28" fill="#BFA76A" fillOpacity="0.15" />
            <path d="M30 60 Q40 50 50 60" stroke="#BFA76A" strokeWidth="3" fill="none" />
            <circle cx="32" cy="38" r="3" fill="#6B4F1D" />
            <circle cx="48" cy="38" r="3" fill="#6B4F1D" />
            <ellipse cx="40" cy="48" rx="6" ry="3" fill="#6B4F1D" fillOpacity="0.5" />
          </svg>
        </div>
        <h1 className="text-5xl font-extrabold text-ochre mb-2">404</h1>
        <p className="text-lg text-brown mb-6 font-medium">Oops! This page could not be found.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="px-6 py-2 rounded bg-ochre text-white font-bold shadow hover:bg-olive transition">Go to Home</Link>
          <Link to="/shop" className="px-6 py-2 rounded bg-brown text-white font-bold shadow hover:bg-charcoal transition">Go to Shop</Link>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">If you believe this is an error, please contact us.</p>
      </div>
    </div>
  );
};

export default NotFound;
