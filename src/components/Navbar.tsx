import { Store, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Store className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-gray-900">Storely</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-emerald-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-emerald-600 transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-emerald-600 transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-emerald-600 transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-emerald-600 transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-emerald-600 transition-colors">
              FAQ
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-emerald-600 transition-colors">
              Contact
            </button>
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('pricing')}
              className="bg-emerald-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Get Your Store
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-gray-100">
            <button onClick={() => scrollToSection('hero')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-md transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-md transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection('features')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-md transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-md transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-md transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('faq')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-md transition-colors">
              FAQ
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-md transition-colors">
              Contact
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full bg-emerald-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Get Your Store
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
