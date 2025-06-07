import { Link } from 'react-router-dom';
import SignupForm from '@components/auth/SignupForm';
import FilmIcon from '@assets/icons/film.svg?react';

function SignupPage() {
  return (
    <main  className="min-h-screen pt-24 pb-12 flex items-center justify-center bg-[#111827]">
        <section  className="w-full max-w-md mx-auto p-6 bg-gray-800 rounded-lg shadow-xl text-white">
            <header className="text-center mb-8">
                {/*Logo*/}
                <div className="inline-flex items-center justify-center mt-4">
                    <FilmIcon className="h-8 w-8 text-red-500 mr-2" aria-hidden="true" />
                    <span className="text-2xl font-bold">EfrexzMovies</span>
                </div>
                <h1 className="text-2xl font-bold mt-4">Create an Account</h1>
                <p className="text-gray-400 mt-2">
                Join EfrexzMovies to track your favorite movies
                </p>
            </header>
            
            <SignupForm />
            
            <footer className="mt-6 text-center">
                <p className="text-gray-400">
                    Already have an account?{' '}
                    <Link to="/login" className="text-red-500 hover:text-red-600">
                        Sign In
                    </Link>
                </p>
            </footer>
        </section>
    </main>
  );
};

export default SignupPage;