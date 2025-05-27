'use client';

import { useState } from 'react';
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

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md p-6 rounded-lg shadow-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <input
          className="w-full px-3 py-2 border rounded-md"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full px-3 py-2 border rounded-md"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-300">
          Don&apos;t have an account?{' '}
          <a href="/signup" className="text-blue-600 hover:underline">
            SignUp
          </a>
        </p>
      </form>
    </div>
  );
}
