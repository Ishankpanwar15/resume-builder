'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabaseClient';

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      const user = data?.session?.user;

      if (!user) {
        // No user session: redirect to login
        router.replace('/login');
      } else {
        // User is authenticated
        setLoading(false);
      }
    };

    checkSession();
  }, [router]);

  if (loading) {
    return <p className="text-center p-4">Loading...</p>;
  }

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Logout error:', error.message);
    } else {
      router.replace('/login');
    }
  };


  return (
    <div className='w-full h-screen bg-gray-100 '>
    <div className=" p-4 flex">
      <div className=" w-full ">
        <h2 className="text-2xl font-semibold mb-4 text-black">Dashboard</h2>
        <p className="text-gray-600">Welcome to your dashboard!</p>
      </div>
      <div>
        <button className='bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600' onClick={logout}>
            Logout
        </button>
      </div>
    </div>
    <div className='p-4 '>
        <button 
        onClick={() => router.push('/create-resume')}
        className='bg-violet-800 p-2 rounded-2xl hover:bg-violet-600 active:scale-110 duration-300'>Create Resume</button>
    </div>
    </div>
  );
}
