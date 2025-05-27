import React from "react";

const home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
      <p className="text-lg">This is a simple home page built with React and Tailwind CSS.</p>
      <div className="mt-6 flex space-x-4">
        <button>
          <a href="/create-resume" className="mt-4 px-6 py-2 bg-violet-500 text-white rounded hover:bg-violet-600">
          Create Resume
          </a>
        </button>
         <button>
          <a href="/login" className="mt-4 px-6 py-2 bg-violet-500 text-white rounded hover:bg-violet-600">
          Login
          </a>
        </button>
      </div>
    </div>
  );
}
export default home;