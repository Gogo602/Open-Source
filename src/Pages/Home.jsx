import { Date } from "@/components/Home/Date";
import React from "react";

const Home = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='flex gap-30 px-40'>
        <div>
          <Date />
        </div>
        <div>
          <Date />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
