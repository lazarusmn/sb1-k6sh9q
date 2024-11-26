import { useLocation, useNavigate } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2">
      <div className="container mx-auto grid grid-cols-3 gap-4">
        <button 
          onClick={() => navigate('/')}
          className={`text-center ${location.pathname === '/' ? 'text-blue-500' : 'text-gray-500'}`}
        >
          Home
        </button>
        <button 
          onClick={() => console.log('Scan QR')}
          className="text-center text-gray-500"
        >
          Scan QR
        </button>
        <button 
          onClick={() => console.log('Profile')}
          className="text-center text-gray-500"
        >
          Profile
        </button>
      </div>
    </nav>
  );
}