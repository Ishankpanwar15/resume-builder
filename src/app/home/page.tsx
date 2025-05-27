import React from "react";

const home = () => {
  return (
    <div className="flex ">
        <div className="flex flex-col w-1/3 justify-center h-screen">
          <img src="/Group 2.png" alt="Decorative"
               className="w-full max-h-full ibject-contain p-4"
          />
        </div>
        <div className="flex flex-col items-center justify-center h-screen w-2/3 bg-[#f3ecf3] rounded-tl-[8rem]
">
        <div className="p-4 ">
          <h1 className="text-[7rem] font-black leading-none tracking-tight">
            Welcome to <br /><span className="text-violet-600">Resume Builder</span>
          </h1>
        </div>
        <div className="w-full flex justify-center">
          <p className="text-gray-600 text-3xl">Where Modern Resume Meet <span className="text-violet-600">Career Wins</span></p>
        </div>

        <div className="flex justify-start space-x-4 mt-6">
          <button className="bg-violet-500 text-white px-6 py-2 rounded hover:bg-violet-600">
            <a href="/create-resume" className="mt-4 px-6 py-2 bg-violet-500 text-white rounded hover:bg-violet-600">
            Create Resume
            </a>
          </button>
          <button className="bg-violet-500 text-white px-6 py-2 rounded hover:bg-violet-600">
          <a href="/login" className="mt-4 px-6 py-2 bg-violet-500 text-white rounded hover:bg-violet-600">
          Login
          </a>  
          </button>
        </div>

      </div>
    </div>
  );
}
export default home;