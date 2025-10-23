import { FileText, Palette, Rocket } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: FileText,
      title: 'Share your business details',
      description: 'Tell us about your products, brand colors, and what makes your business special. We will guide you through every detail.',
      color: 'emerald',
    },
    {
      number: '02',
      icon: Palette,
      title: 'We design and build your storefront',
      description: 'Our team creates a custom store that reflects your brand. You will get previews and can request changes until it is perfect.',
      color: 'blue',
    },
    {
      number: '03',
      icon: Rocket,
      title: 'You start selling online instantly',
      description: 'Launch day! Your store goes live with products, payments, and everything ready. We will train you on managing it all.',
      color: 'orange',
    },
  ];

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

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-200 via-blue-200 to-orange-200 -translate-y-1/2"></div>

          <div className="grid lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-emerald-300">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className={`relative h-20 w-20 rounded-full bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 flex items-center justify-center shadow-lg`}>
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
