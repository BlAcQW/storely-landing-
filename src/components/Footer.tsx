// import { Store, Facebook, Instagram, MessageCircle, Mail, Phone } from 'lucide-react';

// export default function Footer() {
//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <footer id="contact" className="bg-gray-900 text-gray-300">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid md:grid-cols-4 gap-12 mb-12">
//           <div className="md:col-span-2">
//             <div className="flex items-center space-x-2 mb-4">
//               <Store className="h-8 w-8 text-emerald-500" />
//               <span className="text-2xl font-bold text-white">Storely</span>
//             </div>
//             <p className="text-gray-400 mb-6 leading-relaxed">
//               Building custom online storefronts for businesses on demand. Fast, simple, and completely yours.
//             </p>
//             <div className="flex space-x-4">
//               <a
//                 href="#"
//                 className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200"
//               >
//                 <Facebook className="h-5 w-5" />
//               </a>
//               <a
//                 href="#"
//                 className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200"
//               >
//                 <Instagram className="h-5 w-5" />
//               </a>
//               <a
//                 href="#"
//                 className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200"
//               >
//                 <MessageCircle className="h-5 w-5" />
//               </a>
//             </div>
//           </div>

//           <div>
//             <h3 className="text-white font-bold mb-4">Quick Links</h3>
//             <ul className="space-y-3">
//               <li>
//                 <button onClick={() => scrollToSection('hero')} className="hover:text-emerald-500 transition-colors">
//                   Home
//                 </button>
//               </li>
//               <li>
//                 <button onClick={() => scrollToSection('how-it-works')} className="hover:text-emerald-500 transition-colors">
//                   How It Works
//                 </button>
//               </li>
//               <li>
//                 <button onClick={() => scrollToSection('features')} className="hover:text-emerald-500 transition-colors">
//                   Features
//                 </button>
//               </li>
//               <li>
//                 <button onClick={() => scrollToSection('pricing')} className="hover:text-emerald-500 transition-colors">
//                   Pricing
//                 </button>
//               </li>
//               <li>
//                 <button onClick={() => scrollToSection('faq')} className="hover:text-emerald-500 transition-colors">
//                   FAQ
//                 </button>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-white font-bold mb-4">Contact Us</h3>
//             <ul className="space-y-3">
//               <li className="flex items-center space-x-2">
//                 <Mail className="h-4 w-4 text-emerald-500" />
//                 <a href="mailto:hello@storely.com" className="hover:text-emerald-500 transition-colors">
//                   hello@storely.com
//                 </a>
//               </li>
//               <li className="flex items-center space-x-2">
//                 <Phone className="h-4 w-4 text-emerald-500" />
//                 <a href="tel:+1234567890" className="hover:text-emerald-500 transition-colors">
//                   +1 (234) 567-890
//                 </a>
//               </li>
//               <li className="flex items-center space-x-2">
//                 <MessageCircle className="h-4 w-4 text-emerald-500" />
//                 <a href="#" className="hover:text-emerald-500 transition-colors">
//                   WhatsApp Support
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             <p className="text-gray-500 text-sm">
//               © 2025 Storely. All rights reserved.
//             </p>
//             <div className="flex space-x-6 text-sm">
//               <a href="#" className="text-gray-500 hover:text-emerald-500 transition-colors">
//                 Privacy Policy
//               </a>
//               <a href="#" className="text-gray-500 hover:text-emerald-500 transition-colors">
//                 Terms of Service
//               </a>
//               <a href="#" className="text-gray-500 hover:text-emerald-500 transition-colors">
//                 Contact
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }



import { Store, Facebook, Instagram, MessageCircle, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand Section - Full width on mobile */}
          <div className="sm:col-span-2 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Store className="h-8 w-8 text-emerald-500" />
              <span className="text-2xl font-bold text-white">Storely</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Building custom online storefronts for businesses on demand. Fast, simple, and completely yours.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')} 
                  className="hover:text-emerald-500 transition-colors text-left w-full"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('how-it-works')} 
                  className="hover:text-emerald-500 transition-colors text-left w-full"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('features')} 
                  className="hover:text-emerald-500 transition-colors text-left w-full"
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing')} 
                  className="hover:text-emerald-500 transition-colors text-left w-full"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')} 
                  className="hover:text-emerald-500 transition-colors text-left w-full"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-emerald-500 mt-1 flex-shrink-0" />
                <a 
                  href="mailto:hello@storely.com" 
                  className="hover:text-emerald-500 transition-colors break-all"
                >
                  hello@storely.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 text-emerald-500 mt-1 flex-shrink-0" />
                <a 
                  href="tel:+1234567890" 
                  className="hover:text-emerald-500 transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MessageCircle className="h-4 w-4 text-emerald-500 mt-1 flex-shrink-0" />
                <a 
                  href="#" 
                  className="hover:text-emerald-500 transition-colors"
                >
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2025 Storely. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-sm">
              <a 
                href="#" 
                className="text-gray-500 hover:text-emerald-500 transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-emerald-500 transition-colors"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-emerald-500 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}