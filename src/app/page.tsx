// src/app/page.tsx

import Image from "next/image";
import Hero from "./components/Hero";
import NewProducts from "./components/NewProducts";
import HeaderTop from "./components/HeaderTop";
import HeaderMin from "./components/HeaderMin";


export default function Home() {
  return 
    <>
    <HeaderTop />
    <HeaderMin />
    
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
    
    </>
  );
}
      
   