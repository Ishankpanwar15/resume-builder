'use client';

import React, { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabaseClient";

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session?.user) {
        setIsAuthenticated(true);
      }
    };
    checkSession();
  }, []);

  return (
    <div className="flex bg-white">
      <div className="flex flex-col w-1/3 justify-center h-screen">
        <img
          src="https://i.postimg.cc/PfSjTH6G/Group-2.png"
          alt="Decorative"
          className="w-full max-h-full object-contain p-4"
        />
      </div>

      <div className="flex flex-col items-center justify-center h-screen w-2/3 bg-[#f3ecf3] rounded-tl-[8rem]">
        <div className="p-4">
          <h1 className="text-black text-[7rem] font-black leading-none tracking-tight">
            Welcome to <br /><span className="text-violet-600">Resume Builder</span>
          </h1>
        </div>

        <p className="text-gray-600 text-3xl">
          Where Modern Resumes Meet <span className="text-violet-600">Career Wins</span>
        </p>

        <div className="flex justify-start space-x-4 mt-6">
          <a href="/create-resume">
            <button className="bg-violet-500 text-white px-6 py-2 rounded hover:bg-violet-600">
              Create Resume
            </button>
          </a>

          {!isAuthenticated && (
            <a href="/login">
              <button className="bg-violet-500 text-white px-6 py-2 rounded hover:bg-violet-600">
                Login
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
