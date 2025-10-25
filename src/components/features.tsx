// import { 
//   ShoppingBag, 
//   Layout, 
//   CreditCard, 
//   Store, 
//   User, 
//   Package, 
//   Megaphone, 
//   BarChart3, 
//   MessageCircle,
//   Plus,
//   Search,
//   ShoppingCart,
//   Smartphone,
//   Bell,
//   TrendingUp,
//   Tag,
//   Mail,
//   Zap,
//   Shield,
//   Clock,
//   CheckCircle2
// } from 'lucide-react';

// export default function Features() {
//   const features = [
//     {
//       icon: ShoppingBag,
//       title: 'Product Management',
//       color: 'from-emerald-500 to-teal-500',
//       bgColor: 'bg-emerald-50',
//       iconColor: 'text-emerald-600',
//       items: [
//         { icon: Plus, text: 'Add, edit, and delete products easily' },
//         { icon: Layout, text: 'Upload images and set categories' },
//         { icon: Tag, text: 'Manage pricing and inventory' }
//       ]
//     },
//     {
//       icon: Layout,
//       title: 'Shopping Experience',
//       color: 'from-blue-500 to-indigo-500',
//       bgColor: 'bg-blue-50',
//       iconColor: 'text-blue-600',
//       items: [
//         { icon: Smartphone, text: 'Modern, responsive UI' },
//         { icon: Search, text: 'Quick product search and filters' },
//         { icon: ShoppingCart, text: 'Add to cart and checkout system' }
//       ]
//     },
//     {
//       icon: CreditCard,
//       title: 'Payment Integration',
//       color: 'from-purple-500 to-pink-500',
//       bgColor: 'bg-purple-50',
//       iconColor: 'text-purple-600',
//       items: [
//         { icon: Shield, text: 'Secure online payments (paystack)' },
//         { icon: MessageCircle, text: 'Option for WhatsApp order checkout' },
//         { icon: Zap, text: 'Real-time payment status updates' }
//       ]
//     },
//     {
//       icon: Store,
//       title: 'Vendor Dashboard',
//       color: 'from-orange-500 to-red-500',
//       bgColor: 'bg-orange-50',
//       iconColor: 'text-orange-600',
//       items: [
//         { icon: Package, text: 'Vendors can manage their own products and orders' },
//         { icon: TrendingUp, text: 'Track sales and earnings' },
//         { icon: Bell, text: 'Get order notifications instantly' }
//       ]
//     },
//     {
//       icon: User,
//       title: 'Customer Benefits',
//       color: 'from-cyan-500 to-blue-500',
//       bgColor: 'bg-cyan-50',
//       iconColor: 'text-cyan-600',
//       items: [
//         { icon: Clock, text: 'No sign up or login required' },
//         { icon: Package, text: 'Track Orders' },
//         { icon: User, text: 'Options of checkout and payment methods' }
//       ]
//     },
//     {
//       icon: Package,
//       title: 'Order Management',
//       color: 'from-green-500 to-emerald-500',
//       bgColor: 'bg-green-50',
//       iconColor: 'text-green-600',
//       items: [
//         { icon: Layout, text: 'Centralized admin view of all orders' },
//         { icon: CheckCircle2, text: 'Automatic status updates' },
//         { icon: Shield, text: 'Refund and cancellation support' }
//       ]
//     },
 
//   ];

//   return (
//     <section id="features" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl mb-6">
//             <ShoppingBag className="w-8 h-8 text-white" />
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Full suits of Features to Power Your Online Store
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             A complete e-commerce solution packed with powerful features to help you sell more, manage better, and grow faster.
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols gap-8">
//           {features.map((feature, index) => {
//             const IconComponent = feature.icon;
//             return (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
//               >
//                 {/* Card Header with Gradient */}
//                 <div className={`bg-gradient-to-br ${feature.color} p-6 relative overflow-hidden`}>
//                   <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
//                   <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                  
//                   <div className="relative">
//                     <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 shadow-lg">
//                       <IconComponent className="w-7 h-7 text-gray-900" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-white">
//                       {feature.title}
//                     </h3>
//                   </div>
//                 </div>

//                 {/* Card Content */}
//                 <div className="p-6">
//                   <ul className="space-y-4">
//                     {feature.items.map((item, itemIndex) => {
//                       const ItemIcon = item.icon;
//                       return (
//                         <li key={itemIndex} className="flex items-start space-x-3 group/item">
//                           <div className={`${feature.bgColor} rounded-lg p-2 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200`}>
//                             <ItemIcon className={`w-4 h-4 ${feature.iconColor}`} />
//                           </div>
//                           <span className="text-gray-700 text-sm leading-relaxed">
//                             {item.text}
//                           </span>
//                         </li>
//                       );
//                     })}
//                   </ul>
//                 </div>

//                 {/* Hover Effect Border */}
//                 <div className={`h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Bottom CTA */}
//         <div className="mt-16 text-center">
//           <div className="inline-block bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
//             <div className="flex items-center justify-center space-x-2 mb-4">
//               <Zap className="w-6 h-6 text-emerald-600" />
//               <h3 className="text-2xl font-bold text-gray-900">
//                 Ready to Launch Your Store?
//               </h3>
//             </div>
//             <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
//               Get started with all these features and more. Choose a plan that fits your business needs.
//             </p>
//             <button
//               onClick={() => {
//                 const element = document.getElementById('pricing');
//                 if (element) {
//                   element.scrollIntoView({ behavior: 'smooth' });
//                 }
//               }}
//               className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center space-x-2"
//             >
//               <span>View Pricing Plans</span>
//               <Zap className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { 
  ShoppingBag, 
  Layout, 
  CreditCard, 
  Store, 
  User, 
  Package, 
  Megaphone, 
  BarChart3, 
  MessageCircle,
  Plus,
  Search,
  ShoppingCart,
  Smartphone,
  Bell,
  TrendingUp,
  Tag,
  Mail,
  Zap,
  Shield,
  Clock,
  CheckCircle2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';

export default function Features() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const features = [
    {
      icon: ShoppingBag,
      title: 'Product Management',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      items: [
        { icon: Plus, text: 'Add, edit, and delete products easily' },
        { icon: Layout, text: 'Upload images and set categories' },
        { icon: Tag, text: 'Manage pricing and inventory' }
      ]
    },
    {
      icon: Layout,
      title: 'Shopping Experience',
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      items: [
        { icon: Smartphone, text: 'Modern, responsive UI' },
        { icon: Search, text: 'Quick product search and filters' },
        { icon: ShoppingCart, text: 'Add to cart and checkout system' }
      ]
    },
    {
      icon: CreditCard,
      title: 'Payment Integration',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      items: [
        { icon: Shield, text: 'Secure online payments (paystack)' },
        { icon: MessageCircle, text: 'Option for WhatsApp order checkout' },
        { icon: Zap, text: 'Real-time payment status updates' }
      ]
    },
    {
      icon: Store,
      title: 'Vendor Dashboard',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      items: [
        { icon: Package, text: 'Vendors can manage their own products and orders' },
        { icon: TrendingUp, text: 'Track sales and earnings' },
        { icon: Bell, text: 'Get order notifications instantly' }
      ]
    },
    {
      icon: User,
      title: 'Customer Benefits',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-50',
      iconColor: 'text-cyan-600',
      items: [
        { icon: Clock, text: 'No sign up or login required' },
        { icon: Package, text: 'Track Orders' },
        { icon: User, text: 'Options of checkout and payment methods' }
      ]
    },
    {
      icon: Package,
      title: 'Order Management',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      items: [
        { icon: Layout, text: 'Centralized admin view of all orders' },
        { icon: CheckCircle2, text: 'Automatic status updates' },
        { icon: Shield, text: 'Refund and cancellation support' }
      ]
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl mb-6">
            <ShoppingBag className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Full suits of Features to Power Your Online Store
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A complete e-commerce solution packed with powerful features to help you sell more, manage better, and grow faster.
          </p>
        </div>

        {/* Mobile Slider (visible on mobile) */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-2"
                  >
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                      {/* Card Header with Gradient */}
                      <div className={`bg-gradient-to-br ${feature.color} p-6 relative overflow-hidden`}>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                        
                        <div className="relative">
                          <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 shadow-lg">
                            <IconComponent className="w-7 h-7 text-gray-900" />
                          </div>
                          <h3 className="text-2xl font-bold text-white">
                            {feature.title}
                          </h3>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-6">
                        <ul className="space-y-4">
                          {feature.items.map((item, itemIndex) => {
                            const ItemIcon = item.icon;
                            return (
                              <li key={itemIndex} className="flex items-start space-x-3">
                                <div className={`${feature.bgColor} rounded-lg p-2 flex-shrink-0`}>
                                  <ItemIcon className={`w-4 h-4 ${feature.iconColor}`} />
                                </div>
                                <span className="text-gray-700 text-sm leading-relaxed">
                                  {item.text}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      {/* Border */}
                      <div className={`h-1 bg-gradient-to-r ${feature.color}`}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-emerald-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid (hidden on mobile) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
              >
                {/* Card Header with Gradient */}
                <div className={`bg-gradient-to-br ${feature.color} p-6 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                  
                  <div className="relative">
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 shadow-lg">
                      <IconComponent className="w-7 h-7 text-gray-900" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {feature.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <ul className="space-y-4">
                    {feature.items.map((item, itemIndex) => {
                      const ItemIcon = item.icon;
                      return (
                        <li key={itemIndex} className="flex items-start space-x-3 group/item">
                          <div className={`${feature.bgColor} rounded-lg p-2 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200`}>
                            <ItemIcon className={`w-4 h-4 ${feature.iconColor}`} />
                          </div>
                          <span className="text-gray-700 text-sm leading-relaxed">
                            {item.text}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Hover Effect Border */}
                <div className={`h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Zap className="w-6 h-6 text-emerald-600" />
              <h3 className="text-2xl font-bold text-gray-900">
                Ready to Launch Your Store?
              </h3>
            </div>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get started with all these features and more. Choose a plan that fits your business needs.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('pricing');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>View Pricing Plans</span>
              <Zap className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}