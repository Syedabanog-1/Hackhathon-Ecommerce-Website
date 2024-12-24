// src/app/page.tsx
import Link from 'next/link';
import Image from "next/image";
import Hero from "./components/Hero";
//import HeeroPic from "./components/HeeroPic";
import NewProducts from "./components/NewProducts";
import Footer from "./components/Footer";
import HeaderTop from "./components/HeaderTop";
import HeaderMin from "./components/HeaderMin";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <>
     <HeaderTop />
      <HeaderMin />
      <Navbar />
      
      <Hero />
      <Image className="rounded-xl object-cover w-1/2 max-h-[700px] sm:max-h-[500px] md:max-h-[400px] lg:max-h-[500px] object-center transition-transform duration-300 ease-in-out"

        src="/chair1.png" // Use the img prop passed down
        alt="banner"
        layout="responsive" 
        width={2000} 
        height={1000} 
        priority />
    
  <NewProducts />
    <Footer />
    </>
  );
}
      
   