// import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';

// export default function Hero() {
//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section id="hero" className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-8">
//             <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium">
//               <CheckCircle2 className="h-4 w-4" />
//               <span>Trusted by 100+ small businesses</span>
//             </div>

//             <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
//               Launch Your Own Custom Online Store —{' '}
//               <span className="text-emerald-600">Fast, Simple, Yours.</span>
//             </h1>

//             <p className="text-xl text-gray-600 leading-relaxed">
//               We design and build fully branded storefronts for your business. No coding, no stress — just sales.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <button
//                 onClick={() => scrollToSection('pricing')}
//                 className="group inline-flex items-center justify-center space-x-2 bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
//               >
//                 <span>Get Started</span>
//                 <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
//               </button>
//               <button className="inline-flex items-center justify-center space-x-2 bg-white text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-200 hover:border-emerald-600 hover:text-emerald-600 transition-all duration-200">
//                 <Play className="h-5 w-5" />
//                 <span>See Demo</span>
//               </button>
//             </div>

//             <div className="flex items-center space-x-8 pt-4">
//               <div className="flex -space-x-2">
//                 <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 border-2 border-white"></div>
//                 <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 border-2 border-white"></div>
//                 <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-rose-500 border-2 border-white"></div>
//                 <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 border-2 border-white"></div>
//               </div>
//               <div>
//                 <div className="flex items-center space-x-1">
//                   {[...Array(5)].map((_, i) => (
//                     <svg key={i} className="h-5 w-5 text-amber-400 fill-current" viewBox="0 0 20 20">
//                       <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
//                     </svg>
//                   ))}
//                 </div>
//                 <p className="text-sm text-gray-600 mt-1">4.9/5 from happy customers</p>
//               </div>
//             </div>
//           </div>

//           <div className="relative">
//             <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-8 border border-gray-100">
//               <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl p-8 space-y-6">
//                 <div className="flex items-center space-x-3">
//                   <div className="h-3 w-3 rounded-full bg-red-500"></div>
//                   <div className="h-3 w-3 rounded-full bg-amber-500"></div>
//                   <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
//                 </div>
//                 <div className="bg-white rounded-lg p-6 shadow-sm">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="h-8 w-32 bg-emerald-600 rounded"></div>
//                     <div className="flex space-x-2">
//                       <div className="h-8 w-8 bg-gray-200 rounded"></div>
//                       <div className="h-8 w-8 bg-gray-200 rounded"></div>
//                     </div>
//                   </div>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="bg-gray-100 rounded-lg h-32"></div>
//                     <div className="bg-gray-100 rounded-lg h-32"></div>
//                     <div className="bg-gray-100 rounded-lg h-32"></div>
//                     <div className="bg-gray-100 rounded-lg h-32"></div>
//                   </div>
//                 </div>
//                 <div className="bg-white rounded-lg p-4 shadow-sm">
//                   <div className="flex items-center justify-between">
//                     <div className="space-y-2 flex-1">
//                       <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
//                       <div className="h-3 w-1/2 bg-gray-100 rounded"></div>
//                     </div>
//                     <div className="h-10 w-24 bg-emerald-600 rounded-lg"></div>
//                   </div>
//                 </div>
//               </div>
//               <div className="absolute -top-4 -right-4 bg-emerald-600 text-white px-4 py-2 rounded-lg shadow-lg font-semibold">
//                 Your Store
//               </div>
//             </div>
//             <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100">
//               <div className="flex items-center space-x-3">
//                 <div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center">
//                   <CheckCircle2 className="h-6 w-6 text-emerald-600" />
//                 </div>
//                 <div>
//                   <p className="font-semibold text-gray-900">Store Live!</p>
//                   <p className="text-sm text-gray-600">Ready in 72 hours</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { ArrowRight, Play, CheckCircle2, Sparkles, TrendingUp } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-20 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
              <Sparkles className="h-4 w-4" />
              <span>Trusted by 100+ small businesses</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
              Launch Your Own Custom Online Store —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Fast, Simple, Yours.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We design and build fully branded storefronts for your business. No coding, no stress — just sales.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('pricing')}
                className="group inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-2xl hover:scale-105"
              >
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center justify-center space-x-2 bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-emerald-600 hover:text-emerald-600 hover:shadow-lg transition-all duration-200">
                <Play className="h-5 w-5" />
                <span>See Demo</span>
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
              {/* Avatar Stack */}
              <div className="flex -space-x-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 border-3 border-white shadow-md flex items-center justify-center text-white font-bold text-sm">
                  SJ
                </div>
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 border-3 border-white shadow-md flex items-center justify-center text-white font-bold text-sm">
                  MC
                </div>
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-orange-400 to-rose-500 border-3 border-white shadow-md flex items-center justify-center text-white font-bold text-sm">
                  AO
                </div>
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 border-3 border-white shadow-md flex items-center justify-center text-white font-bold text-sm">
                  DR
                </div>
              </div>
              
              {/* Rating */}
              <div>
                <div className="flex items-center justify-center lg:justify-start space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-1 font-medium">4.9/5 from happy customers</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative mt-8 lg:mt-0">
            {/* Main Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-6 sm:p-8 border border-gray-100 hover:shadow-3xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100 rounded-xl p-6 sm:p-8 space-y-6">
                {/* Browser Controls */}
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500 shadow-sm"></div>
                  <div className="h-3 w-3 rounded-full bg-amber-500 shadow-sm"></div>
                  <div className="h-3 w-3 rounded-full bg-emerald-500 shadow-sm"></div>
                  <div className="flex-1 ml-4 h-6 bg-white/50 rounded-lg backdrop-blur-sm"></div>
                </div>

                {/* Store Header */}
                <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-8 w-24 sm:w-32 bg-gradient-to-r from-emerald-600 to-teal-600 rounded shadow-sm"></div>
                    <div className="flex space-x-2">
                      <div className="h-8 w-8 bg-gray-200 rounded-lg"></div>
                      <div className="h-8 w-8 bg-gray-200 rounded-lg"></div>
                    </div>
                  </div>

                  {/* Product Grid */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-28 sm:h-32 animate-pulse"></div>
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-28 sm:h-32 animate-pulse animation-delay-200"></div>
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-28 sm:h-32 animate-pulse animation-delay-400"></div>
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-28 sm:h-32 animate-pulse animation-delay-600"></div>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="flex items-center justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <div className="h-4 w-3/4 bg-gradient-to-r from-gray-200 to-gray-300 rounded"></div>
                      <div className="h-3 w-1/2 bg-gradient-to-r from-gray-100 to-gray-200 rounded"></div>
                    </div>
                    <div className="h-10 w-20 sm:w-24 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg shadow-sm"></div>
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-xl shadow-lg font-semibold text-sm sm:text-base">
                Your Store
              </div>
            </div>

            {/* Floating Success Card */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-4 rounded-xl shadow-2xl border border-gray-100 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Store Live!</p>
                  <p className="text-sm text-gray-600">Ready in 72 hours</p>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="hidden sm:block absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-xl border border-gray-100 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Sales</p>
                  <p className="font-bold text-gray-900">+150%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  );
}