import { useState } from 'react';
import EyeIcon from '@assets/icons/eye.svg?react';
import EyeOffIcon from '@assets/icons/eye-slash.svg?react';

function LoginForm () {

  const [showPassword, setShowPassword] = useState(false);
  
  
  return (
    <form className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
          Email or Username
        </label>
        <input
          id="email"
          name='email'
          type="email"
          className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-none"
        />
      </div>
      
      <div>
        <div className="flex justify-between mb-1">
          <label htmlFor="password" className="block text-sm font-medium text-gray-300">
            Password
          </label>
          <a href="#" className="text-sm text-red-500 hover:text-red-600">
            Forgot Password?
          </a>
        </div>

        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-none pr-10"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "hide password" : "show password"}
          >
            {showPassword ?
                <EyeOffIcon className='w-5 h-5 text-white' /> :
                <EyeIcon className='w-5 h-5 text-white' />
            }
          </button>
        </div>
      </div>
      
      <button
        type="button"
        className="w-full py-3 rounded-md font-medium transition-colors cursor-pointer bg-red-600 hover:bg-red-700 "
      >
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;