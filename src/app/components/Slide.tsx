
import React from "react";
//import Image from "next/image";
import Hero_pic from  './Hero_Pic';



interface propsTypes {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}

const Slide: React.FC<propsTypes> = ({ title, mainTitle, price }) => {
  return (
    <div className="relative outline-none border-none flex flex-col items-center md:flex-row">
      {/* Text Section */}
      <div className="absolute left-[20px] md:left-[50px] max-w-[300px] sm:max-w-[350px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#ffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none z-10">
        <h3 className="text-red text-[20px] lg:text-[28px] font-semibold">{title}</h3>
        <h2 className="text-black text-[24px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]">
          {mainTitle}
        </h2>
        <h3 className="text-[20px] text-gray-500">
          Starting at <b className="text-[22px] md:text-[26px] lg:text-[30px]">{price}</b>.00
        </h3>
        
      </div>
       
      {/* Image Section 
      <Image className="rounded-xl object-cover w-1/2 max-h-[700px] sm:max-h-[500px] md:max-h-[400px] lg:max-h-[500px] object-center transition-transform duration-300 ease-in-out"

        src="/white chair.png" // Use the img prop passed down
        alt="banner"
        layout="responsive" 
        width={2000} 
        height={1000} 
        priority /> */}
        <div className="w-[1150px] lg:w[1321px] h-[800px]">
        <Hero_pic />
        </div>
    </div>
      
       
  );
};
export default Slide;
