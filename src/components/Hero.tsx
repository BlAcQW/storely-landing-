import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium">
              <CheckCircle2 className="h-4 w-4" />
              <span>Trusted by 100+ small businesses</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Launch Your Own Custom Online Store —{' '}
              <span className="text-emerald-600">Fast, Simple, Yours.</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              We design and build fully branded storefronts for your business. No coding, no stress — just sales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('pricing')}
                className="group inline-flex items-center justify-center space-x-2 bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center justify-center space-x-2 bg-white text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-200 hover:border-emerald-600 hover:text-emerald-600 transition-all duration-200">
                <Play className="h-5 w-5" />
                <span>See Demo</span>
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="flex -space-x-2">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 border-2 border-white"></div>
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 border-2 border-white"></div>
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-rose-500 border-2 border-white"></div>
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 border-2 border-white"></div>
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-1">4.9/5 from happy customers</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-8 border border-gray-100">
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl p-8 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                  <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-8 w-32 bg-emerald-600 rounded"></div>
                    <div className="flex space-x-2">
                      <div className="h-8 w-8 bg-gray-200 rounded"></div>
                      <div className="h-8 w-8 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-100 rounded-lg h-32"></div>
                    <div className="bg-gray-100 rounded-lg h-32"></div>
                    <div className="bg-gray-100 rounded-lg h-32"></div>
                    <div className="bg-gray-100 rounded-lg h-32"></div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2 flex-1">
                      <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                      <div className="h-3 w-1/2 bg-gray-100 rounded"></div>
                    </div>
                    <div className="h-10 w-24 bg-emerald-600 rounded-lg"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-emerald-600 text-white px-4 py-2 rounded-lg shadow-lg font-semibold">
                Your Store
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Store Live!</p>
                  <p className="text-sm text-gray-600">Ready in 72 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
