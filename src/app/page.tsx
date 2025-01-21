// src/app/page.tsx

import Image from "next/image";
import Hero from "./components/Hero";
import NewProducts from "./components/NewProducts";



export default function Home() {
  return (
    <>
      <Hero />
      <div className="p-4 w-full">
              <Image
                src="/chair1.png"
                alt="pretty"
                width={434}
                height={584}
              />
              </div>
          
  <NewProducts />
    
    </>
  );
}