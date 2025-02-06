"use client";

import { RxEnvelopeClosed } from "react-icons/rx";
import { PiPhoneCallBold } from "react-icons/pi";
import { FiUser, FiShoppingCart } from "react-icons/fi";
import { CiHeart, CiSearch } from "react-icons/ci";
import { useState } from "react";
import Link from "next/link";



export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [value, setValue] = useState("");

    return (
        <div>
            {/* Top Contact Bar */}
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
                <Link href={"/user"}>
           <button aria-label="Wishlist" className="p-2 hover:bg-black/5 rounded-full transition-colors">

                    <FiUser className="w-5 h-5 text-white" />
                    </button>
                    </Link>
                    <Link href={"/wishlist"}>
           <button aria-label="Wishlist" className="p-2 hover:bg-black/5 rounded-full transition-colors">
           <CiHeart className="w-6 h-6" />
           </button>
        
           </Link>

                <Link href={"/cart"}>
                    <button aria-label="Cart" className="p-2 hover:bg-black/5 rounded-full transition-colors">
                        <FiShoppingCart className="w-6 h-6" />
                    </button>
                </Link>
                    
                </div>
            </div>

            {/* Navigation Bar */}
            <div className="w-full bg-white flex items-center justify-between px-4 sm:px-8 relative">
                <div className="text-[#0D0E43] font-[Josefin Sans] font-bold text-xl ml-4">
                    {/* Add your logo or brand name here */}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="sm:hidden text-[#7E33E0] text-3xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>

                {/* Navigation Links */}
                <div
                    className={`${
                        menuOpen ? "flex" : "hidden"
                    } sm:flex flex-col sm:flex-row absolute sm:static top-[100%] left-0 w-full sm:w-auto bg-white sm:bg-transparent z-10 sm:space-x-6`}
                >
                    {[
                        { href: "/", label: "Home" },
                        { href: "/shop", label: "Shop" },
                        { href: "/product", label: "Product" },
                        { href: "/about", label: "About Us" },
                        { href: "/blog", label: "Blog" },
                        { href: "/faq", label: "FAQ" },
                        { href: "/contact", label: "Contact" },
                        
                        
                    ].map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-[#0D0E43] font-[Lato] text-sm px-4 py-2 sm:px-0"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Search Bar */}
                <div className="hidden sm:flex md:items-center gap-2 sm:pr-10">
                    <input
                        type="search"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Search..."
                        className="p-2 border border-pink-600 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <button
                        aria-label="Search"
                        className="p-2 hover:bg-pink-500 rounded-full transition-colors"
                    >
                        <CiSearch className="w-6 h-6" />
                    </button>
                    
                                    </div>
            </div>
                    </div>
    );
}
