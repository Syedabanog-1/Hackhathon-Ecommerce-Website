"use client";
import { RxEnvelopeClosed } from "react-icons/rx";
import { PiPhoneCallBold } from "react-icons/pi";
import { FiUser, FiShoppingCart } from "react-icons/fi";
import {CiHeart, CiSearch } from "react-icons/ci";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
  
            <div className="h-[50px] w-full bg-[#7E33E0] flex items-center justify-between px-5 sm:px-8">
       
                <div className="flex items-center space-x-4 ml-4">
                    <div className="flex items-center space-x-2">
                        <RxEnvelopeClosed className="w-4 h-4 text-white" />
                        <span className="hidden md:inline text-white font-[Josefin Sans] text-sm">
                            comforty@gmail.com
                        </span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <PiPhoneCallBold className="w-4 h-4 text-white" />
                        <span className="hidden md:inline text-white font-[Josefin Sans] text-sm">
                            (12345)67890
                        </span>
                    </div>
                </div>

             <div className="flex items-center space-x-4">
                    <FiUser className="w-5 h-5 text-white" />
                    <CiHeart className="w-5 h-5 text-white" />
                    <FiShoppingCart className="w-5 h-5 text-white" />
                    
                </div>
            </div>

            <div className="w-full bg-white flex items-center justify-between px-4 sm:px-8 relative">
      
                <div className="text-[#0D0E43] font-[Josefin Sans] font-bold text-xl ml-4">
                    
                </div>

          
                <button
                    className="sm:hidden text-[#7E33E0] text-3xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>

     
                <div
                    className={`${
                        menuOpen ? "flex" : "hidden"
                    } sm:flex flex-col sm:flex-row absolute sm:static top-[100%] left-0 w-full sm:w-auto bg-white sm:bg-transparent z-10 sm:space-x-6`}
                >
                    <Link
                        href="/"
                        className="text-[#FB2E86] font-[Lato] text-sm px-4 py-2 sm:px-0"
                    >
                        Home
                    </Link>
                    
                    <Link
                        href="/shop"
                        className="text-[#0D0E43] font-[Lato] text-sm px-4 py-2 sm:px-0"
                    >
                        Shop
                    </Link>
                    <Link
                        href="/product"
                        className="text-[#0D0E43] font-[Lato] text-sm px-4 py-2 sm:px-0"
                    >
                        Product
                    </Link>
                                      
                                       <Link
                        href="/about"
                        className="text-[#0D0E43] font-[Lato] text-sm px-4 py-2 sm:px-0"
                    >
                        About Us
                    </Link>
                                       
                    <Link
                        href="/blog"
                        className="text-[#0D0E43] font-[Lato] text-sm px-4 py-2 sm:px-0"
                    >
                        Blog
                    </Link>
                    <Link
                        href="/faq"
                        className="text-[#0D0E43] font-[Lato] text-sm px-4 py-2 sm:px-0"
                    >
                        FAQ
                    </Link>
                    <Link
                        href="/contact"
                        className="text-[#0D0E43] font-[Lato] text-sm px-4 py-2 sm:px-0"
                    >
                        Contact
                    </Link>
                    <Link
                        href="/user"
                        className="text-[#0D0E43] font-[Lato] text-sm px-4 py-2 sm:px-0"
                    >
                        Login/Register...
                    </Link>
                    <Link
                        href="/cart"
                        className="text-[#0D0E43] font-[Lato] text-sm px-4 py-2 sm:px-0"
                    >
                        Cart
                    </Link>
                </div>

         
                <div className="hidden md:flex items-center mr-4">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-[200px] h-[35px] border border-[#ddd] px-4 text-sm rounded-l"
                    />
                    <div className="w-[35px] h-[35px] bg-[#FB2E86] flex items-center justify-center rounded-r">
                        <CiSearch className="w-5 h-5 text-white" />
                    </div> 
                </div>
            </div>
        </div>
    );
}

