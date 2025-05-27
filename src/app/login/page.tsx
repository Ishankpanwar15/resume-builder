'use client';

import { useState ,useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabaseClient';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      router.push('/dashboard'); // redirect to dashboard or homepage after login
    }
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
    <div className="flex items-center justify-center min-h-screen bg-gray-800 px-4">
      <div className=''>
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md p-6 rounded-lg shadow-xl space-y-4 bg-gray-600"
          >
          <h2 className="text-2xl font-bold text-gray-500 text-center">Login</h2>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <input
            className="w-full px-4 py-2 border border-black rounded-2xl bg-violet-600 text-white"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
          <input
            className="w-full px-4 py-2 border bg-violet-600 border-black text-white rounded-2xl"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />

          <div className='flex justify-center mt-2'>
          <button
            type="submit"
            className="w-[6rem] justify-center  bg-violet-900 text-white py-1 rounded-2xl hover:bg-violet-950 texy-sm"
            >
            Login
          </button>
          </div>
          <div className='w-full flex justify-center items-center space-x-4 mt-4'>

            <div className='flex'>
              <p className="text-center text-sm text-gray-300">
            Don&apos;t have an account?{' '}
            <a href="/signup" className="text-violet-400 hover:underline">
              SignUp
            </a>
          </p>

            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
