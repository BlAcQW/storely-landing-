// import { FileText, Palette, Rocket } from 'lucide-react';

// export default function HowItWorks() {
//   const steps = [
//     {
//       number: '01',
//       icon: FileText,
//       title: 'Share your business details',
//       description: 'Tell us about your products, brand colors, and what makes your business special. We will guide you through every detail.',
//       color: 'emerald',
//     },
//     {
//       number: '02',
//       icon: Palette,
//       title: 'We design and build your storefront',
//       description: 'Our team creates a custom store that reflects your brand. You will get previews and can request changes until it is perfect.',
//       color: 'blue',
//     },
//     {
//       number: '03',
//       icon: Rocket,
//       title: 'You start selling online instantly',
//       description: 'Launch day! Your store goes live with products, payments, and everything ready. We will train you on managing it all.',
//       color: 'orange',
//     },
//   ];

//   return (
//     <section id="how-it-works" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             From Idea to Online Store in 3 Simple Steps
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             We have streamlined the entire process so you can focus on your business, not technology.
//           </p>
//         </div>

//         <div className="relative">
//           <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-200 via-blue-200 to-orange-200 -translate-y-1/2"></div>

//           <div className="grid lg:grid-cols-3 gap-12 relative z-10">
//             {steps.map((step, index) => (
//               <div key={index} className="relative">
//                 <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-emerald-300">
//                   <div className="flex flex-col items-center text-center space-y-4">
//                     <div className={`relative h-20 w-20 rounded-full bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 flex items-center justify-center shadow-lg`}>
//                       <step.icon className="h-10 w-10 text-white" />
//                       <div className="absolute -top-2 -right-2 h-8 w-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gray-100">
//                         <span className="text-sm font-bold text-gray-900">{step.number}</span>
//                       </div>
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-900">
//                       {step.title}
//                     </h3>
//                     <p className="text-gray-600 leading-relaxed">
//                       {step.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mt-16 text-center">
//           <div className="inline-flex items-center space-x-2 bg-emerald-50 border-2 border-emerald-200 text-emerald-800 px-6 py-3 rounded-full font-semibold">
//             <span className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></span>
//             <span>Most stores go live within 48-72 hours</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




import { FileText, Palette, Rocket, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function HowItWorks() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const steps = [
    {
      number: '01',
      icon: FileText,
      title: 'Share your business details',
      description: 'Tell us about your products, brand colors, and what makes your business special. We will guide you through every detail.',
      color: 'emerald',
      gradient: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      textColor: 'text-emerald-800',
      dotColor: 'bg-emerald-500',
    },
    {
      number: '02',
      icon: Palette,
      title: 'We design and build your storefront',
      description: 'Our team creates a custom store that reflects your brand. You will get previews and can request changes until it is perfect.',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-800',
      dotColor: 'bg-blue-500',
    },
    {
      number: '03',
      icon: Rocket,
      title: 'You start selling online instantly',
      description: 'Launch day! Your store goes live with products, payments, and everything ready. We will train you on managing it all.',
      color: 'orange',
      gradient: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-800',
      dotColor: 'bg-orange-500',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % steps.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            From Idea to Online Store in 3 Simple Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We have streamlined the entire process so you can focus on your business, not technology.
          </p>
        </div>

        {/* Mobile Slider */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-emerald-300">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className={`relative h-20 w-20 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}>
                        <step.icon className="h-10 w-10 text-white" />
                        <div className="absolute -top-2 -right-2 h-8 w-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gray-100">
                          <span className="text-sm font-bold text-gray-900">{step.number}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
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
            aria-label="Previous step"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
            aria-label="Next step"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? `${step.dotColor} w-8` 
                    : 'bg-gray-300 w-2 hover:bg-gray-400'
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:block relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-200 via-blue-200 to-orange-200 -translate-y-1/2"></div>

          <div className="grid lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-emerald-300">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className={`relative h-20 w-20 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}>
                      <step.icon className="h-10 w-10 text-white" />
                      <div className="absolute -top-2 -right-2 h-8 w-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gray-100">
                        <span className="text-sm font-bold text-gray-900">{step.number}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 border-2 border-emerald-200 text-emerald-800 px-6 py-3 rounded-full font-semibold">
            <span className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span>Most stores go live within 48-72 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
}