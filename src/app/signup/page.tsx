
'use client';
import { useState , useEffect } from 'react';
import { supabase } from '../../../lib/supabaseClient';
import { useRouter } from 'next/navigation';
export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const router = useRouter();
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { username }, 
      },
    });

    if (error) setError(error.message);
    else setSuccess('Signup successful! Please check your email to verify.');
  };
useEffect(() => {
  const checkSession = async () => {
    const { data } = await supabase.auth.getSession();
    if (data.session?.user) {
      router.replace('/dashboard');
    }
  };
  checkSession();
}, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 px-4">
      <div className="max-w-md w-full p-6 rounded-lg shadow-xl bg-gray-600">
        <h2 className="text-2xl text-gray-400 font-semibold mb-4">Create an Account</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            
            <input
              type="text"
              required
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full bg-violet-600 text-white px-4 py-2 border-black rounded-3xl shadow-sm"
            />
          </div>
          <div>            
            <input
              type="email"
              required
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full text-white px-3 py-2 border-black bg-violet-600 rounded-3xl shadow-sm"
            />
          </div>
          <div>
            <input
              type="password"
              required
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 text-white border-black bg-violet-600 rounded-3xl shadow-sm"
            />
          </div>
          <div className='w-full flex justify-center items-center space-x-4 mt-4'>
            <button type="submit" className="w-[6rem] bg-violet-800 text-white py-2 rounded-3xl hover:bg-violet-900">
              Sign Up
            </button>
          </div>
          <div className='w-full flex justify-center items-center space-x-4 mt-4'>
             <p className="text-center text-sm text-gray-300">
                Don&apos;t have an account?{' '}
                <a href="/login" className="text-violet-400 hover:underline">
                  login
                </a>
             </p>
          </div>
        </form>

        {error && <p className="text-red-600 mt-4">{error}</p>}
        {success && <p className="text-green-600 mt-4">{success}</p>}
      </div>
    </div>
  );
}
// This code defines a signup page using React and Supabase for user authentication.