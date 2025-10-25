// import { Check, Crown, Zap } from 'lucide-react';

// export default function Pricing() {
//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section id="pricing" className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Simple Pricing That Fits Every Business
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Choose the plan that works for you. No hidden fees, no surprises.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
//           <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-gray-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-2xl">
//             <div className="flex items-center space-x-3 mb-6">
//               <div className="h-12 w-12 bg-emerald-100 rounded-xl flex items-center justify-center">
//                 <Zap className="h-6 w-6 text-emerald-600" />
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-900">One-Time Fee</h3>
//                 <p className="text-sm text-gray-600">Own It Forever</p>
//               </div>
//             </div>

//             <div className="mb-8">
//               <div className="flex items-baseline space-x-2">
//                 <span className="text-5xl font-bold text-gray-900">$199</span>
//                 <span className="text-gray-600 font-medium">one-time</span>
//               </div>
//               <p className="text-sm text-emerald-600 font-medium mt-2">Pay once, own forever</p>
//             </div>

//             <ul className="space-y-4 mb-8">
//               {[
//                 'Custom UI storefront',
//                 'Product & category setup (up to 50 products)',
//                 'WhatsApp + Paystack checkout',
//                 'Admin dashboard & analytics',
//                 'Training & handover',
//                 'Lifetime ownership',
//               ].map((feature, index) => (
//                 <li key={index} className="flex items-start space-x-3">
//                   <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
//                   <span className="text-gray-700">{feature}</span>
//                 </li>
//               ))}
//             </ul>

//             <button
//               onClick={() => scrollToSection('contact')}
//               className="w-full bg-emerald-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
//             >
//               Get Lifetime Store
//             </button>
//           </div>

//           <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-8 border-2 border-gray-700 relative overflow-hidden">
//             <div className="absolute top-0 right-0 bg-amber-400 text-gray-900 px-4 py-1 rounded-bl-xl font-bold text-sm">
//               MOST POPULAR
//             </div>

//             <div className="flex items-center space-x-3 mb-6">
//               <div className="h-12 w-12 bg-amber-400 rounded-xl flex items-center justify-center">
//                 <Crown className="h-6 w-6 text-gray-900" />
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold text-white">Monthly Plan</h3>
//                 <p className="text-sm text-gray-400">We Host & Manage It</p>
//               </div>
//             </div>

//             <div className="mb-8">
//               <div className="flex items-baseline space-x-2">
//                 <span className="text-5xl font-bold text-white">$15</span>
//                 <span className="text-gray-400 font-medium">/month</span>
//               </div>
//               <p className="text-sm text-amber-400 font-medium mt-2">Cancel anytime, no commitment</p>
//             </div>

//             <ul className="space-y-4 mb-8">
//               {[
//                 'Everything in One-Time package',
//                 'Hosting + maintenance included',
//                 'Continuous updates',
//                 'Product upload support',
//                 'Premium analytics + reports',
//                 'Priority support',
//                 'Free domain setup',
//               ].map((feature, index) => (
//                 <li key={index} className="flex items-start space-x-3">
//                   <Check className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
//                   <span className="text-gray-200">{feature}</span>
//                 </li>
//               ))}
//             </ul>

//             <button
//               onClick={() => scrollToSection('contact')}
//               className="w-full bg-amber-400 text-gray-900 py-4 rounded-xl font-semibold text-lg hover:bg-amber-300 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
//             >
//               Subscribe Now
//             </button>
//           </div>
//         </div>

//         <div className="mt-12 text-center">
//           <p className="text-gray-600 mb-4">Not sure which plan is right for you?</p>
//           <button
//             onClick={() => scrollToSection('contact')}
//             className="text-emerald-600 font-semibold hover:text-emerald-700 underline"
//           >
//             Let's chat and find the perfect fit
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }



// import { useState } from 'react';
// import { Check, Crown, Zap, CheckCircle2, X } from 'lucide-react';

// export default function Pricing() {
//   const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     whatsapp: '',
//     businessType: '',
//     location: ''
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const handlePlanSelect = (plan: string) => {
//     setSelectedPlan(plan);
//     setShowForm(true);
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = () => {
//     if (formData.name && formData.email && formData.phone && formData.whatsapp && formData.businessType && formData.location) {
//       setSubmitted(true);
//       // Here you would typically send the data to your backend
//       console.log('Order submitted:', { ...formData, plan: selectedPlan });
//     } else {
//       alert('Please fill in all required fields');
//     }
//   };

//   const handleReset = () => {
//     setSelectedPlan(null);
//     setShowForm(false);
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       whatsapp: '',
//       businessType: '',
//       location: ''
//     });
//     setSubmitted(false);
//   };

//   const closeForm = () => {
//     setShowForm(false);
//     setSelectedPlan(null);
//   };

//   if (submitted) {
//     return (
//       <section id="pricing" className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
//         <div className="max-w-2xl mx-auto px-4">
//           <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
//             <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
//               <CheckCircle2 className="w-12 h-12 text-green-600" />
//             </div>
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Order Confirmed!</h2>
//             <p className="text-gray-600 mb-6">
//               Thank you, {formData.name}! We've received your order for the{' '}
//               <span className="font-semibold text-gray-900">
//                 {selectedPlan === 'onetime' ? 'One-Time Fee' : 'Monthly Plan'}
//               </span>
//               .
//             </p>
//             <div className="bg-emerald-50 rounded-xl p-6 mb-6 text-left">
//               <p className="text-sm text-gray-700 mb-2"><span className="font-semibold">Email:</span> {formData.email}</p>
//               <p className="text-sm text-gray-700 mb-2"><span className="font-semibold">Phone:</span> {formData.phone}</p>
//               <p className="text-sm text-gray-700 mb-2"><span className="font-semibold">WhatsApp:</span> {formData.whatsapp}</p>
//               <p className="text-sm text-gray-700 mb-2"><span className="font-semibold">Business:</span> {formData.businessType}</p>
//               <p className="text-sm text-gray-700"><span className="font-semibold">Location:</span> {formData.location}</p>
//             </div>
//             <p className="text-sm text-gray-600 mb-6">
//               Our team will contact you shortly to complete the setup process.
//             </p>
//             <button
//               onClick={handleReset}
//               className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-all duration-200"
//             >
//               Back to Pricing
//             </button>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section id="pricing" className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Simple Pricing That Fits Every Business
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Choose the plan that works for you. No hidden fees, no surprises.
//           </p>
//         </div>

//         {!showForm ? (
//           <>
//             <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
//               <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-gray-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-2xl">
//                 <div className="flex items-center space-x-3 mb-6">
//                   <div className="h-12 w-12 bg-emerald-100 rounded-xl flex items-center justify-center">
//                     <Zap className="h-6 w-6 text-emerald-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-900">One-Time Fee</h3>
//                     <p className="text-sm text-gray-600">Own It Forever</p>
//                   </div>
//                 </div>

//                 <div className="mb-8">
//                   <div className="flex items-baseline space-x-2">
//                     <span className="text-5xl font-bold text-gray-900">$199</span>
//                     <span className="text-gray-600 font-medium">one-time</span>
//                   </div>
//                   <p className="text-sm text-emerald-600 font-medium mt-2">Pay once, own forever</p>
//                 </div>

//                 <ul className="space-y-4 mb-8">
//                   {[
//                     'Custom UI storefront',
//                     'Product & category setup (up to 50 products)',
//                     'WhatsApp + Paystack checkout',
//                     'Admin dashboard & analytics',
//                     'Training & handover',
//                     'Lifetime ownership',
//                   ].map((feature, index) => (
//                     <li key={index} className="flex items-start space-x-3">
//                       <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
//                       <span className="text-gray-700">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <button
//                   onClick={() => handlePlanSelect('onetime')}
//                   className="w-full bg-emerald-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
//                 >
//                   Get Lifetime Store
//                 </button>
//               </div>

//               <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-8 border-2 border-gray-700 relative overflow-hidden">
//                 <div className="absolute top-0 right-0 bg-amber-400 text-gray-900 px-4 py-1 rounded-bl-xl font-bold text-sm">
//                   MOST POPULAR
//                 </div>

//                 <div className="flex items-center space-x-3 mb-6">
//                   <div className="h-12 w-12 bg-amber-400 rounded-xl flex items-center justify-center">
//                     <Crown className="h-6 w-6 text-gray-900" />
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-white">Monthly Plan</h3>
//                     <p className="text-sm text-gray-400">We Host & Manage It</p>
//                   </div>
//                 </div>

//                 <div className="mb-8">
//                   <div className="flex items-baseline space-x-2">
//                     <span className="text-5xl font-bold text-white">$15</span>
//                     <span className="text-gray-400 font-medium">/month</span>
//                   </div>
//                   <p className="text-sm text-amber-400 font-medium mt-2">Cancel anytime, no commitment</p>
//                 </div>

//                 <ul className="space-y-4 mb-8">
//                   {[
//                     'Everything in One-Time package',
//                     'Hosting + maintenance included',
//                     'Continuous updates',
//                     'Product upload support',
//                     'Premium analytics + reports',
//                     'Priority support',
//                     'Free domain setup',
//                   ].map((feature, index) => (
//                     <li key={index} className="flex items-start space-x-3">
//                       <Check className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
//                       <span className="text-gray-200">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <button
//                   onClick={() => handlePlanSelect('monthly')}
//                   className="w-full bg-amber-400 text-gray-900 py-4 rounded-xl font-semibold text-lg hover:bg-amber-300 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
//                 >
//                   Subscribe Now
//                 </button>
//               </div>
//             </div>

//             <div className="mt-12 text-center">
//               <p className="text-gray-600 mb-4">Not sure which plan is right for you?</p>
//               <button
//                 onClick={() => scrollToSection('contact')}
//                 className="text-emerald-600 font-semibold hover:text-emerald-700 underline"
//               >
//                 Let's chat and find the perfect fit
//               </button>
//             </div>
//           </>
//         ) : (
//           <div className="max-w-2xl mx-auto">
//             <div className="bg-white rounded-3xl shadow-2xl p-8">
//               <div className="flex items-center justify-between mb-8">
//                 <div>
//                   <h3 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Order</h3>
//                   <p className="text-gray-600">
//                     Selected Plan:{' '}
//                     <span className="font-semibold text-gray-900">
//                       {selectedPlan === 'onetime' ? 'One-Time Fee ($199)' : 'Monthly Plan ($15/month)'}
//                     </span>
//                   </p>
//                 </div>
//                 <button
//                   onClick={closeForm}
//                   className="text-gray-400 hover:text-gray-600 transition"
//                 >
//                   <X className="w-6 h-6" />
//                 </button>
//               </div>

//               <div className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
//                     placeholder="John Doe"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Email Address *
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
//                     placeholder="john@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Phone Number *
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
//                     placeholder="+233 XX XXX XXXX"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     WhatsApp Number *
//                   </label>
//                   <input
//                     type="tel"
//                     name="whatsapp"
//                     value={formData.whatsapp}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
//                     placeholder="+233 XX XXX XXXX"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Type of Business *
//                   </label>
//                   <input
//                     type="text"
//                     name="businessType"
//                     value={formData.businessType}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
//                     placeholder="e.g., Fashion Boutique, Electronics Store, etc."
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Location *
//                   </label>
//                   <input
//                     type="text"
//                     name="location"
//                     value={formData.location}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
//                     placeholder="City, Country"
//                   />
//                 </div>

//                 <div className="flex gap-4 pt-4">
//                   <button
//                     onClick={closeForm}
//                     className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-200"
//                   >
//                     Back to Plans
//                   </button>
//                   <button
//                     onClick={handleSubmit}
//                     className="flex-1 bg-emerald-600 text-white py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg"
//                   >
//                     Complete Order
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

import { useState } from 'react';
import { Check, Crown, Zap, CheckCircle2, X } from 'lucide-react';

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    businessType: '',
    location: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan);
    setShowForm(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    const { name, email, phone, whatsapp, businessType, location } = formData;

    if (name && email && phone && whatsapp && businessType && location) {
      setSubmitted(true);

      const planName = selectedPlan === 'onetime' ? 'One-Time Fee ($199)' : 'Monthly Plan ($15/month)';
      
      const message = `🎉 *New Order Request*

📋 *Order Details:*
━━━━━━━━━━━━━━━
👤 *Name:* ${name}
📧 *Email:* ${email}
📱 *Phone:* ${phone}
💬 *WhatsApp:* ${whatsapp}
🏢 *Business:* ${businessType}
📍 *Location:* ${location}
━━━━━━━━━━━━━━━

💎 *Selected Plan:* ${planName}

🕐 *Order Time:* ${new Date().toLocaleString()}

Thank you for choosing our service! I'm interested in getting started.`;

      const encodedMessage = encodeURIComponent(message);
      // Replace with your actual WhatsApp number (include country code without + or spaces)
      // Example: 233123456789 for Ghana
      const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER ;
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');
    } else {
      alert('Please fill in all required fields');
    }
  };

  const handleReset = () => {
    setSelectedPlan(null);
    setShowForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      whatsapp: '',
      businessType: '',
      location: ''
    });
    setSubmitted(false);
  };

  const closeForm = () => {
    setShowForm(false);
    setSelectedPlan(null);
  };

  if (submitted) {
    return (
      <section id="pricing" className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Order Submitted!</h2>
            <p className="text-gray-600 mb-6">
              Thank you, {formData.name}! Your order details have been sent via WhatsApp for the{' '}
              <span className="font-semibold text-gray-900">
                {selectedPlan === 'onetime' ? 'One-Time Fee' : 'Monthly Plan'}
              </span>
              .
            </p>
            <div className="bg-emerald-50 rounded-xl p-6 mb-6 text-left">
              <p className="text-sm text-gray-700 mb-2"><span className="font-semibold">Email:</span> {formData.email}</p>
              <p className="text-sm text-gray-700 mb-2"><span className="font-semibold">Phone:</span> {formData.phone}</p>
              <p className="text-sm text-gray-700 mb-2"><span className="font-semibold">WhatsApp:</span> {formData.whatsapp}</p>
              <p className="text-sm text-gray-700 mb-2"><span className="font-semibold">Business:</span> {formData.businessType}</p>
              <p className="text-sm text-gray-700"><span className="font-semibold">Location:</span> {formData.location}</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
              <p className="text-sm text-amber-800">
                💬 <strong>WhatsApp opened in a new tab.</strong> If it didn't open automatically, please check your popup blocker.
              </p>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Our team will respond to you on WhatsApp shortly to complete the setup process.
            </p>
            <button
              onClick={handleReset}
              className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-all duration-200"
            >
              Back to Pricing
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple Pricing That Fits Every Business
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works for you. No hidden fees, no surprises.
          </p>
        </div>

        {!showForm ? (
          <>
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-gray-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="h-12 w-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <Zap className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">One-Time Fee</h3>
                    <p className="text-sm text-gray-600">Own It Forever</p>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-5xl font-bold text-gray-900">$199</span>
                    <span className="text-gray-600 font-medium">one-time</span>
                  </div>
                  <p className="text-sm text-emerald-600 font-medium mt-2">Pay once, own forever</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    'Custom UI storefront',
                    'Product & category setup (up to 50 products)',
                    'WhatsApp + Paystack checkout',
                    'Admin dashboard & analytics',
                    'Training & handover',
                    'Lifetime ownership',
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handlePlanSelect('onetime')}
                  className="w-full bg-emerald-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
                >
                  Get Lifetime Store
                </button>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-8 border-2 border-gray-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-amber-400 text-gray-900 px-4 py-1 rounded-bl-xl font-bold text-sm">
                  MOST POPULAR
                </div>

                <div className="flex items-center space-x-3 mb-6">
                  <div className="h-12 w-12 bg-amber-400 rounded-xl flex items-center justify-center">
                    <Crown className="h-6 w-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Monthly Plan</h3>
                    <p className="text-sm text-gray-400">We Host & Manage It</p>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-5xl font-bold text-white">$15</span>
                    <span className="text-gray-400 font-medium">/month</span>
                  </div>
                  <p className="text-sm text-amber-400 font-medium mt-2">Cancel anytime, no commitment</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    'Everything in One-Time package',
                    'Hosting + maintenance included',
                    'Continuous updates',
                    'Product upload support',
                    'Premium analytics + reports',
                    'Priority support',
                    'Free domain setup',
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handlePlanSelect('monthly')}
                  className="w-full bg-amber-400 text-gray-900 py-4 rounded-xl font-semibold text-lg hover:bg-amber-300 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
                >
                  Subscribe Now
                </button>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Not sure which plan is right for you?</p>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-emerald-600 font-semibold hover:text-emerald-700 underline"
              >
                Let's chat and find the perfect fit
              </button>
            </div>
          </>
        ) : (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Order</h3>
                  <p className="text-gray-600">
                    Selected Plan:{' '}
                    <span className="font-semibold text-gray-900">
                      {selectedPlan === 'onetime' ? 'One-Time Fee ($199)' : 'Monthly Plan ($15/month)'}
                    </span>
                  </p>
                </div>
                <button
                  onClick={closeForm}
                  className="text-gray-400 hover:text-gray-600 transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                    placeholder="+233 XX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                    placeholder="+233 XX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Type of Business *
                  </label>
                  <input
                    type="text"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                    placeholder="e.g., Fashion Boutique, Electronics Store, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                    placeholder="City, Country"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={closeForm}
                    className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-200"
                  >
                    Back to Plans
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="flex-1 bg-emerald-600 text-white py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Send via WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}