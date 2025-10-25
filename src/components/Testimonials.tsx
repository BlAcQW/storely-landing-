// import { Star } from 'lucide-react';

// export default function Testimonials() {
//   const testimonials = [
//     {
//       name: 'Sarah Johnson',
//       role: 'Boutique Owner',
//       image: 'from-emerald-400 to-teal-500',
//       text: 'Storely transformed my business! I went from zero online presence to processing orders within 3 days. The WhatsApp integration is a game-changer for my customers.',
//       rating: 5,
//     },
//     {
//       name: 'Michael Chen',
//       role: 'Electronics Retailer',
//       image: 'from-blue-400 to-cyan-500',
//       text: 'I was skeptical about online selling, but the team made it so easy. My store looks professional and my sales have tripled since launch. Best investment I have made.',
//       rating: 5,
//     },
//     {
//       name: 'Amara Okafor',
//       role: 'Fashion Designer',
//       image: 'from-rose-400 to-pink-500',
//       text: 'The custom design perfectly captures my brand aesthetic. Customers love how easy it is to shop, and I love how simple it is to manage orders. Absolutely worth it!',
//       rating: 5,
//     },
//     {
//       name: 'David Rodriguez',
//       role: 'Food Products Seller',
//       image: 'from-orange-400 to-amber-500',
//       text: 'Within 48 hours of launching, I got my first 10 orders! The mobile experience is flawless and the admin dashboard makes everything manageable. Highly recommend!',
//       rating: 5,
//     },
//   ];

//   return (
//     <section id="testimonials" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Loved by Business Owners Worldwide
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Join hundreds of entrepreneurs who have transformed their businesses with Storely.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
//             >
//               <div className="flex space-x-1 mb-4">
//                 {[...Array(testimonial.rating)].map((_, i) => (
//                   <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
//                 ))}
//               </div>

//               <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
//                 "{testimonial.text}"
//               </p>

//               <div className="flex items-center space-x-4">
//                 <div className={`h-14 w-14 rounded-full bg-gradient-to-br ${testimonial.image} flex items-center justify-center text-white font-bold text-xl shadow-md`}>
//                   {testimonial.name.split(' ').map(n => n[0]).join('')}
//                 </div>
//                 <div>
//                   <p className="font-bold text-gray-900">{testimonial.name}</p>
//                   <p className="text-sm text-gray-600">{testimonial.role}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-12 text-center">
//           <div className="inline-flex flex-col items-center space-y-2 bg-emerald-50 border border-emerald-200 px-8 py-6 rounded-2xl">
//             <div className="flex space-x-1">
//               {[...Array(5)].map((_, i) => (
//                 <Star key={i} className="h-6 w-6 text-amber-400 fill-amber-400" />
//               ))}
//             </div>
//             <p className="text-2xl font-bold text-gray-900">4.9/5 Average Rating</p>
//             <p className="text-gray-600">Based on 100+ verified reviews</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Boutique Owner',
      image: 'from-emerald-400 to-teal-500',
      text: 'Storely transformed my business! I went from zero online presence to processing orders within 3 days. The WhatsApp integration is a game-changer for my customers.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Electronics Retailer',
      image: 'from-blue-400 to-cyan-500',
      text: 'I was skeptical about online selling, but the team made it so easy. My store looks professional and my sales have tripled since launch. Best investment I have made.',
      rating: 5,
    },
    {
      name: 'Amara Okafor',
      role: 'Fashion Designer',
      image: 'from-rose-400 to-pink-500',
      text: 'The custom design perfectly captures my brand aesthetic. Customers love how easy it is to shop, and I love how simple it is to manage orders. Absolutely worth it!',
      rating: 5,
    },
    {
      name: 'David Rodriguez',
      role: 'Food Products Seller',
      image: 'from-orange-400 to-amber-500',
      text: 'Within 48 hours of launching, I got my first 10 orders! The mobile experience is flawless and the admin dashboard makes everything manageable. Highly recommend!',
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Loved by Business Owners Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join hundreds of entrepreneurs who have transformed their businesses with Storely.
          </p>
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <div className="flex space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                      ))}
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                      "{testimonial.text}"
                    </p>

                    <div className="flex items-center space-x-4">
                      <div className={`h-14 w-14 rounded-full bg-gradient-to-br ${testimonial.image} flex items-center justify-center text-white font-bold text-xl shadow-md`}>
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-emerald-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center space-x-4">
                <div className={`h-14 w-14 rounded-full bg-gradient-to-br ${testimonial.image} flex items-center justify-center text-white font-bold text-xl shadow-md`}>
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-col items-center space-y-2 bg-emerald-50 border border-emerald-200 px-8 py-6 rounded-2xl">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="text-2xl font-bold text-gray-900">4.9/5 Average Rating</p>
            <p className="text-gray-600">Based on 100+ verified reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}