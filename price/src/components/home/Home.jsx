import React from "react";

function Home() {
  return (
    <div className="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0  ">
      <div className="bg-slate-700 rounded-xl text-white">
        <div className="p-6 mx-3 mt-3 rounded-t-xl bg-slate-800 ">
          <div className="text-center uppercase ">Basic</div>
          <h2 className="mt-10 font-serif text-5xl text-center"> 100 GB</h2>
          <h3 className="mt-2 text-center">$1.9/Month </h3>
          <a
            href="#"
            className="inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg hover:bg-violet-800 hover:border-violet-800 duration-700"
          >
          
            Purchase
          </a>
        </div>
        <div className="border-t border-slate-700"></div>
        <div className="p-8 mx-3 mb-10 rounded-b-xl bg-slate-800">
          <div className="flex flex-col space-y-2">
            <div className="flex justify-center ">+10 GB free</div>
          </div>
        </div>
      </div>
      <div className="bg-violet-700 rounded-xl text-white">
        <div className="p-6 mx-3 mt-3 rounded-t-xl bg-slate-800 ">
          <div className="text-center uppercase ">Standard</div>
          <h2 className="mt-10 font-serif text-5xl text-center"> 200 GB</h2>
          <h3 className="mt-2 text-center">$2.9/Month </h3>
          <a
            href="#"
            className="inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg hover:bg-violet-800 hover:border-violet-800 duration-700"
          >
            {" "}
            Purchase
          </a>
        </div>
        <div className="border-t border-slate-700"></div>
        <div className="p-8 mx-3 mb-10 rounded-b-xl bg-slate-800">
          <div className="flex flex-col space-y-2">
            <div className="flex justify-center ">+100 GB free</div>
          </div>
        </div>
      </div>
      <div className="bg-slate-700 rounded-xl text-white">
        <div className="p-6 mx-3 mt-3 rounded-t-xl bg-slate-800 ">
          <div className="text-center uppercase ">Premium</div>
          <h2 className="mt-10 font-serif text-5xl text-center"> 500 GB</h2>
          <h3 className="mt-2 text-center">$3.9/Month </h3>
          <a
            href="#"
            className="inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg hover:bg-violet-800 hover:border-violet-800 duration-700"
          >
            {" "}
            Purchase
          </a>
        </div>
        <div className="border-t border-slate-700"></div>
        <div className="p-8 mx-3 mb-10 rounded-b-xl bg-slate-800">
          <div className="flex flex-col space-y-2">
            <div className="flex justify-center ">+100 GB free</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

