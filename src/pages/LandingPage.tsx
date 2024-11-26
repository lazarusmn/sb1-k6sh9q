import { useNavigate } from 'react-router-dom';
import { CheckIcon, SparklesIcon, BoltIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const plans = [
  {
    name: 'Basic',
    price: 'R49/month',
    icon: SparklesIcon,
    gradient: 'from-blue-500 to-cyan-400',
    features: [
      'Up to R500 in tips per month',
      'Basic QR code generation',
      'Standard support',
      'Transaction history'
    ]
  },
  {
    name: 'Pro',
    price: 'R99/month',
    icon: BoltIcon,
    gradient: 'from-purple-500 to-pink-500',
    popular: true,
    features: [
      'Up to R2000 in tips per month',
      'Custom QR code branding',
      'Priority support',
      'Detailed analytics',
      'Multiple payment methods'
    ]
  },
  {
    name: 'Business',
    price: 'R199/month',
    icon: RocketLaunchIcon,
    gradient: 'from-amber-500 to-orange-500',
    features: [
      'Unlimited tipping',
      'Team management',
      'API access',
      'Premium support',
      'Custom integration',
      'Advanced reporting'
    ]
  }
];

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <div className="inline-flex space-x-6">
                <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
                  Latest Update
                </span>
                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
                  <span>Just shipped v1.0</span>
                </span>
              </div>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Digital Tipping
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400"> Reimagined</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Join the future of tipping. Make seamless transactions and support service providers effortlessly in our cashless world.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <button
                onClick={() => navigate('/register')}
                className="rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition-all duration-200"
              >
                Get started
              </button>
              <button
                onClick={() => navigate('/login')}
                className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors"
              >
                Log in <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
          
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <div className="rounded-xl bg-gradient-to-r p-[2px] from-indigo-500 to-pink-500">
                <div className="rounded-[10px] bg-gray-900 p-8">
                  <div className="grid grid-cols-2 gap-8 text-white">
                    <div className="bg-white/5 rounded-lg p-6 backdrop-blur-lg">
                      <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                        100K+
                      </div>
                      <div className="mt-2 text-sm text-gray-400">Active Users</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-6 backdrop-blur-lg">
                      <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">
                        R5M+
                      </div>
                      <div className="mt-2 text-sm text-gray-400">Tips Processed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Plans */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Choose Your Plan
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Select the perfect plan that suits your tipping needs
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:mt-20 lg:grid-cols-3">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <div
                  key={plan.name}
                  className={`relative flex flex-col rounded-2xl bg-gray-800/50 backdrop-blur-xl ring-1 ring-white/10 hover:ring-white/20 transition-all duration-200`}
                >
                  {plan.popular && (
                    <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 text-sm font-medium text-white text-center">
                      Most Popular
                    </div>
                  )}
                  <div className="p-8">
                    <div className={`inline-flex rounded-lg bg-gradient-to-r ${plan.gradient} p-3`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-white">{plan.name}</h3>
                    <p className="mt-4 text-2xl font-bold text-white">{plan.price}</p>
                    <ul className="mt-8 space-y-3 text-sm text-gray-300">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-x-3">
                          <CheckIcon className="h-5 w-5 flex-none text-indigo-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto p-6">
                    <button
                      onClick={() => navigate('/register')}
                      className={`w-full rounded-xl bg-gradient-to-r ${plan.gradient} px-6 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition-all duration-200`}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}