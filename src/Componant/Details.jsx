import React from "react";
import profile from "../Assest/profile.jpg";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export const Details = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20 mb-12 lg:px-8 sm:px-10">
      <img
        src={profile}
        className="rounded-full lg:w-56 md:w-52 xs:w-36 opacity-60 ring-4 ring-grayGreen mb-6 "
      />
      <div className="lg:text-7xl md:text-6xl xs:text-4xl flex gap-3">
        <h1 className="text-white font-medium">I'm</h1>
        <h1 className="font-black text-green">Mithun Cy</h1>
      </div>
      <p className="text-grayGreen font-large text-md text-center px-10">
        Full stack Web Developer | UI/UX Designer
        {/* <span className="text-green font-semibold"> (The Flutter Way)</span> */}
      </p>

      <div className="lg:flex-row flex md:flex-row xs:flex-col items-center lg:gap-4 xs:gap-2 mt-8">
        <div className="bg-pureBlack w-40 h-10 py-2 px-2 flex gap-2 items-center justify-center 
        rounded-md border border-t-green cursor-pointer">
          <AiFillLinkedin className="text-white text-lg" />
          <p className="text-white text-sm font-bold">Mithuncy</p>
        </div>

        <div className="bg-pureBlack w-40 h-10 py-2 px-2 flex gap-2 items-center justify-center 
        rounded-md border border-t-green cursor-pointer">
          <AiFillGithub className="text-white text-lg" />
          <p className="text-white text-sm font-bold">Mithuncy01</p>
        </div>
      </div>
    </div>
  );
};
