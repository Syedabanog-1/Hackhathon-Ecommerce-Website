import React from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block bg-gray-50"> {/* Added light background */}
      <div className="container py-3">
        <div className="flex justify-between items-center">
          
          {/* Icons section */}
          <div className="hidden lg:flex space-x-4 ms-6 mx-4">
            <div className="header_top_icon_wrapper p-2 rounded-full text-gray-600 transition-transform hover:scale-110 hover:bg-blue-100 hover:text-blue-600"> {/* Updated hover effects */}
              <BsFacebook />
            </div>
            <div className="header_top_icon_wrapper p-2 rounded-full text-gray-600 transition-transform hover:scale-110 hover:bg-blue-100 hover:text-blue-600">
              <BsLinkedin />
            </div>
            <div className="header_top_icon_wrapper p-2 rounded-full text-gray-600 transition-transform hover:scale-110 hover:bg-blue-100 hover:text-blue-600">
              <BsGithub />
            </div>
          </div>
          
          {/* Promo Text */}
          <div className="text-gray-500 text-[12px] mx-auto">
            <b className="text-gray-700">Free SHIPPING</b> THIS WEEK ON ORDERS OVER <span className="text-blue-500">$50</span>

          </div>
          
          {/* Currency and Language Selectors */}
          <div className="flex gap-4 items-center">
            <select className="border border-gray-300 text-gray-600 text-[12px] rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" name="currency" id="currency">
              <option value="USA $">USA $</option>
              <option value="EUR $">EUR $</option>
              <option value="INR">INR</option>
            </select>
            <select className="border border-gray-300 text-gray-700 text-[12px] rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" name="language" id="language">
              <option value="English">English</option>
              <option value="China">China</option>
              <option value="Koria">Koria</option>
              <option value="Japan">Japan</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;