import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

// Define product type
type Product = {
  src: string;
  name: string;
  description: string;
  price: number;
  badge?: "New" | "Sale";
  originalPrice?: number;
};

const AllProductpage = () => {
  const products: Product[] = [
    {
      src: "/whiteChair.jpg",
      name: "Vintage Library Chair",
      description: "A classic white chair with a vintage design, perfect for libraries or cozy corners.",
      price: 40,
      badge: "New"
    },
    {
      src: "/PinkUpholsteredChair.jpg",
      name: "Blush Velvet Chair",
      description: "A soft pink upholstered chair with tufted design, perfect for adding a chic touch.",
      price: 75,
      originalPrice: 90,
      badge: "Sale"
    },
    {
      src: "/orangeChair.jpg",
      name: "Bold Accent Chair",
      description: "A vibrant orange chair with a unique design, great for adding a pop of color.",
      price: 50
    },
    {
      src: "/CreamTuftedChair.jpg",
      name: "Ivory Elegance Chair",
      description: "A cream tufted chair with a luxurious and elegant design, ideal for living spaces.",
      price: 85
    },
    {
      src: "/TASS.png",
      name: "Industrial Dining Set",
      description: "A compact dining set featuring a table and stools, with a modern industrial vibe.",
      price: 120,
      badge: "New"
    },
    {
      src: "/upholsteredChair.jpg",
      name: "Elegant Dining Chair",
      description: "A sophisticated upholstered chair, ideal for dining or meeting spaces.",
      price: 60,
      originalPrice: 75,
      badge: "Sale"
    },
    {
      src: "/BlackChairWithCushion.jpg",
      name: "Modern Comfort Chair",
      description: "A black chair with a cozy cushion, combining style and comfort for any room.",
      price: 70
    },
    {
      src: "/RoundShortLegStoolChair.jpg",
      name: "Round ShortLeg StoolChair",
      description: "A compact and versatile stool chair with short legs, perfect for casual seating areas.",
      price: 45
    },
    {
      src: "/RoundedBeigeChair.jpg",
      name: "Scandinavian Lounge Chair",
      description: "A rounded beige chair with a cozy, modern Scandinavian design.",
      price: 90,
      badge: "New"
    },
    {
      src: "/WoodenRockingChair.jpg",
      name: "Wooden Rocking Chair",
      description: "A classic wooden rocking chair combining traditional craftsmanship with comfort.",
      price: 95,
      originalPrice: 110,
      badge: "Sale"
    },
    {
      src: "/FancySingleChair.jpg",
      name: "Fancy Single Chair",
      description: "An elegant single chair with refined details and premium upholstery.",
      price: 80
    },
    {
      src: "/POC.jpg",
      name: "Dual-Toned Office Chairs",
      description: "Stylish office chairs available in pink and black, adding a chic look to workspaces.",
      price: 50
    }
  ];

  const featuredProducts = [
    { src: "/upholsteredChair.jpg" },
    { src: "/RoundedBeigeChair.jpg" },
    { src: "/PinkUpholsteredChair.jpg" },
    { src: "/whiteChair.jpg" },
    { src: "/orangeChair.jpg" },
    { src: "/POC.jpg" },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
        <h1 className="font-inter text-2xl sm:text-3xl md:text-4xl leading-tight font-semibold mt-8 text-[#272343] text-center lg:text-left lg:pl-4">
          All Products
        </h1>

        {/* Updated grid layout with consistent sizing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="w-full">
              <div className="product-card bg-white rounded-lg p-4 h-full flex flex-col">
                <div className="relative aspect-square w-full">
                  {product.badge && (
                    <div
                      className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-md text-sm ${
                        product.badge === "New"
                          ? "bg-[#01AD5A] text-white"
                          : "bg-[#FF6F61] text-white"
                      }`}
                    >
                      {product.badge}
                    </div>
                  )}
                  <Link href={`/product/${index}`} className="block w-full h-full">
                    <div className="relative w-full h-full">
                      <Image
                        src={product.src}
                        alt={product.name}
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </div>
                  </Link>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <p className="text-[#007580] text-sm md:text-base">
                      {product.name}
                    </p>
                    <div className="flex gap-2 items-center">
                      <p className="text-[#272343] font-medium text-lg">
                        ${product.price}
                      </p>
                      {product.originalPrice && (
                        <p className="text-[#9A9CAA] line-through text-sm">
                          ${product.originalPrice}
                        </p>
                      )}
                    </div>
                  </div>
                  <button className="p-2 md:p-3 bg-[#029FAE] hover:bg-[#076068] rounded-lg">
                    <ShoppingCart className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-full bg-[#F7F7F7] overflow-hidden mt-14">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-10 px-4 sm:px-6 lg:px-8">
          <h1 className="font-roboto font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight text-[#000000] pt-6 sm:pt-10 text-center">
            Or Subscribe To The Newsletter
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 justify-between items-center w-full max-w-[643px]">
            <div className="flex flex-col w-full sm:w-[80%]">
              <p className="font-roboto font-semibold text-sm text-[#1E283280]">
                Email address...
              </p>
              <div className="w-full h-[2px] bg-[#000000]" />
            </div>
            <button className="font-sans font-normal text-sm text-[#1E2832] border-b-2 border-[#000000] cursor-pointer whitespace-nowrap">
              SUBMIT
            </button>
          </div>
          <div className="flex flex-col items-center w-full">
            <h1 className="font-roboto font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight text-[#000000] pt-6 sm:pt-10 text-center">
              Follow products and discounts on Instagram
            </h1>
            <div className="my-6 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
                {featuredProducts.map((product, index) => (
                  <div key={index} className="relative aspect-square w-full">
                    <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                      <div className="relative w-full h-full">
                        <Image
                          src={product.src}
                          alt={`instagram-product-${index}`}
                          fill
                          className="object-cover rounded-lg"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 16.666vw"
                        />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProductpage;
