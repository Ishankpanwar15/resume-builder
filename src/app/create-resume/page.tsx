import React from "react";

export default function createresume() {
  return (
    <div className="h-screen bg-gray-100 p-4 flex">
        <div className=" bg-emerald-600 w-1/3 h-full flex flex-col items-center justify-center rounded-lg shadow-lg space-y-4">
            <div>
            <button className="text-black text-4xl">Personal Info.</button>
            </div>
            <div>
            <button className="text-black text-4xl">Education</button>
            </div>
            <div>
            <button className="text-black text-4xl">Experience</button>
            </div>
            <div>
            <button className="text-black text-4xl">Skills</button>
            </div>
            <div>
            <button className="text-black text-4xl">Projects</button>
            </div>
            <div>
            <button className="text-black text-4xl">Extra</button>
            </div>
        </div>
        <div className="bg-red-800 w-full">
            <input className="bg-yellow-200" type="text" name="" id="" />
        </div>
    </div>
  );
}