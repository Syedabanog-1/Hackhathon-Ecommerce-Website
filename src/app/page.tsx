
import Image from "next/image";
import Hero from "./components/Hero";
import NewProducts from "./components/NewProducts";
import PopularStyles from "../components/ui/PopularStyles";


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
              
            {/* Add your featured products here */}
          
          <PopularStyles/>
  <NewProducts />
    
    </>
  );
}
