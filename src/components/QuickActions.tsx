import { PaperAirplaneIcon, QrCodeIcon } from '@heroicons/react/24/outline';

export default function QuickActions() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      <button 
        onClick={() => console.log("Send tip")} 
        className="flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition-all duration-200"
      >
        <PaperAirplaneIcon className="h-5 w-5" />
        <span>Send Tip</span>
      </button>
      <button 
        onClick={() => console.log("Receive tip")} 
        className="flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition-all duration-200"
      >
        <QrCodeIcon className="h-5 w-5" />
        <span>Receive Tip</span>
      </button>
    </div>
  );
}