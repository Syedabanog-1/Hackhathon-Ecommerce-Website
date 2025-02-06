import React from "react";
import Image from "next/image"; // Correct import for next/image
import Navbar from '../components/Navbar';


const HeaderMin = () => {
  return (<>
    <Navbar />
    <div className="border-b border-gray-300 py-6">
      <div className="container sm:flex justify-between items-center">
        {/* Logo Section */}
        
  <div className="flex items-center gap-2">
            <Image
              src="/comforty.png"
              alt="Logo"
              width={40}
              height={40}
              className="w-8 sm:w-10 h-auto"
            />
    <span className="text-2xl font-semibold text-gray-700">Comforty</span>
    

</div>

                </div>
      </div>
      </>
    
  );
};

export default HeaderMin;