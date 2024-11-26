import { SparklesIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-xl p-8 mb-6">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
      <div className="relative">
        <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-1">
          <SparklesIcon className="h-5 w-5 text-indigo-400" />
          <span className="text-sm font-medium text-white">Digital Tipping Platform</span>
        </div>
        <h1 className="mt-4 text-3xl font-bold text-white">Welcome Back!</h1>
        <p className="mt-2 text-gray-300">Manage your tips and transactions seamlessly</p>
      </div>
    </div>
  );
}