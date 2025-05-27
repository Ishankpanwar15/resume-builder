import React from "react";

const home = () => {
  return (
    <div className="flex bg-white">
        <div className="flex flex-col w-1/3 justify-center h-screen">
          <img src="https://i.postimg.cc/PfSjTH6G/Group-2.png" alt="Decorative"
               className="w-full max-h-full ibject-contain p-4"
          />
        </div>
        <div className="flex flex-col items-center justify-center h-screen w-2/3 bg-[#f6eaff] rounded-tl-[8rem]">
          <div className="w-full pl-8">
            <div className="p-2 w-full">
              <h1 className="text-black text-[6rem] font-[1000] font-poppins leading-none tracking-tight">
                Welcome to <br/><span className="text-violet-600 ">Resume <br/>Builder</span>
              </h1>
            </div>
            <div className="p-2 flex justify-start w-full">
              <p className="text-gray-600 text-3xl">Where Modern Resume Meet <span className="text-violet-600">Career Wins</span></p>
            </div>
          
        <div className="flex flex-col justify-start space-x-4 mt-6 w-full pl-6 gap-4 ">
          <div>
            <button className="bg-[#8b14fb] text-white px-6 py-2 text-sm rounded-3xl hover:bg-violet-600">
            <a href="/create-resume"></a>
            Create Resume
          </button>
          </div>
         <div>
           <button className="bg-[#8b14fb] text-white text-sm px-6 py-2 rounded-3xl hover:bg-violet-600">
            <a href="/login">
            Login</a>
          </button>
         </div>
        </div>
      </div>
      </div>
    </div>
  );
}
export default home;
