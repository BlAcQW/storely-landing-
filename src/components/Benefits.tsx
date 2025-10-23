import { Palette, MessageCircle, Smartphone, Award, Clock, DollarSign } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Palette,
      title: 'Custom Design for Every Business',
      description: 'Your brand, your colors, your identity. We create unique storefronts that match your vision perfectly.',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp & Online Payments Ready',
      description: 'Accept payments instantly via Paystack and let customers reach you on WhatsApp with one tap.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First, Lightning-Fast Stores',
      description: 'Optimized for mobile shopping. Your customers get a smooth, fast experience on any device.',
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      icon: Award,
      title: 'Own Your Brand Identity',
      description: 'No generic templates. Every store is built from scratch to showcase your unique brand personality.',
      gradient: 'from-rose-500 to-pink-500',
    },
    {
      icon: Clock,
      title: 'Built & Delivered in Days',
      description: 'From concept to launch in as little as 48 hours. Start selling while your competitors are still planning.',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: DollarSign,
      title: 'Affordable, Transparent Pricing',
      description: 'No hidden fees, no surprises. Choose between one-time payment or flexible monthly plans.',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to Succeed Online
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We handle the technical complexity so you can focus on what matters—growing your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${benefit.gradient} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
