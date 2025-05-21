"use client";

import Text3D from "@/components/Text3D";

const Loader = () => {
  return (
    <div className="loader-screen fixed top-0 left-0 w-full h-full bg-black z-50 flex items-center justify-center">
      {/* <Text3D/> */}
      <h1 className="text-white text-4xl font-bold overflow-hidden">
        <span className="loader-text inline-block whitespace-nowrap"></span>
      </h1>
    </div>
  );
};

export default Loader;
