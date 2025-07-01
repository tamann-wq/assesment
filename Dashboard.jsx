import { useNavigate } from 'react-router-dom';
import { removeAuthData, getAuthData } from './Auth/Authentication';

export default function Dashboard() {
  const navigate = useNavigate();
  const authData = getAuthData();

  const handleLogout = () => {
    removeAuthData();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <button 
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>
        
        {authData?.user && (
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">User Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Username:</p>
                <p className="font-medium">{authData.user.username}</p>
              </div>
              <div>
                <p className="text-gray-600">Name:</p>
                <p className="font-medium">{authData.user.firstName} {authData.user.lastName}</p>
              </div>
            </div>
          </div>
        )}
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Welcome to your dashboard</h2>
          <p className="text-gray-600">You're successfully authenticated and can access protected routes.</p>
        </div>
      </div>
    </div>
  );
}