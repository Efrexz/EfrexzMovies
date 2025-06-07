import { useState } from 'react';
import EyeIcon from '@assets/icons/eye.svg?react';
import EyeOffIcon from '@assets/icons/eye-slash.svg?react';

const inputStyles = "w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-none";

const fields = [
  { id: "username", label: "Username*", type: "text" },
  { id: "email", label: "Email*", type: "email" },
  { id: "name", label: "Name (optional)", type: "text" },
  { id: "password", label: "Password*", type: "password", hasPasswordToggle: true },
  { id: "confirmPassword", label: "Confirm Password*", type: "password" },
];

function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="space-y-6">
      {fields.map(field => {
        // determinamos el tipo del input para el campo de contraseña 
        const inputType = field.type === 'password'
          ? (showPassword ? 'text' : 'password')
          : field.type;

        return (
          <div key={field.id}>
            <label htmlFor={field.id} className="block text-sm font-medium text-gray-300 mb-1">
              {field.label}
            </label>
            {/* confirmamos si el campo está configurado para tener un toggle de contraseña */}
            {field.hasPasswordToggle ? (
              <div className="relative">
                <input
                  id={field.id}
                  type={inputType}
                  className={`${inputStyles} pr-10`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOffIcon className="w-5 h-5 text-white" />
                  ) : (
                    <EyeIcon className="w-5 h-5 text-white" />
                  )}
                </button>
              </div>
            ) : (
              <input
                id={field.id}
                type={inputType} // 'confirmPassword' también cambiará su tipo visible
                className={inputStyles}
              />
            )}
          </div>
        );
      })}

      <button
        type="submit"
        className="w-full py-3 rounded-md font-medium bg-red-600 hover:bg-red-700 text-white transition-colors"
      >
        Sign Up
      </button>
    </form>
  );
}

export default SignupForm;