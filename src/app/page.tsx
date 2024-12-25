// src/app/page.tsx
//import Link from 'next/link';
import Image from "next/image";
import Hero from "./components/Hero";
//import Hero_pic from "./components/Hero_Pic";
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
      
      <div className="p-4 w-full">
              <Image
                src="/chair1.jpg"
                alt="pretty"
                width={434}
                height={584}
              />
              </div>
          
  <NewProducts />
    <Footer />
    </>
  );
}
      
   