import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const Shop = () => {
  return (
    <div className="container mx-auto px-4 max-w-7xl flex flex-col gap-4 mt-8 lg:mt-12">
      {/* Product Detail Section */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-4 lg:mb-28">
        <div className="w-full lg:w-1/2">
          <Image
            src="/PinkUpholsteredChair.jpg"
            alt="Pink Sofa"
            width={675}
            height={607}
            layout="intrinsic"
            className="w-full h-auto object-contain"
            quality={100}
          />
        </div>
        <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-1/2">
          <h1 className="font-inter font-bold text-3xl md:text-14xl lg:text-[60px] leading-tight text-[#272343]">
            Blush Velvet Chair
          </h1>
          <div className="w-36 h-12 rounded-[100px] flex items-center justify-center bg-[#029FAE] hover:bg-[#01656e] transition-colors">
            <button className="text-[#FFFFFF] font-inter font-semibold text-xl leading-[22px]">
              $75.00 USD
            </button>
          </div>
          <div className="w-full h-[2px] bg-[#D9D9D9]" />
          <p className="font-inter font-normal text-lg md:text-[22px] leading-relaxed text-[#272343] max-w-[521px]">
            A soft pink upholstered chair with tufted design, perfect for adding a chic touch.
          </p>
          <div className="w-full sm:w-[212px] h-[63px] rounded-[8px] px-2 py-[14px] bg-[#029FAE] flex items-center justify-center hover:scale-105 hover:bg-[#0e5f66] transition-transform">
            <Link
              href="/cart"
              className="flex text-[#FFFFFF] font-inter font-semibold text-xl leading-[22px] items-center justify-center"
            >
              <ShoppingCart className="w-6 h-6 mr-2" />
              <span>Add To Cart</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="flex flex-col gap-8 mb-16 sm:mb-20 lg:mb-28">
        <div className="flex justify-between items-center">
          <h1 className="font-inter font-bold text-2xl md:text-[28px] leading-tight tracking-[20%] text-[#000000]">
            Featured Products
          </h1>
          <Link
            href="/product"
            className="font-inter font-bold text-[18px] leading-[21.78px] text-[#000000] underline hover:scale-110 transition-transform"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {[
            {
              src: "/BlackChairWithCushion.jpg",
              name: "Modern Comfort Chair",
              price: "$70",
            },
            {
              src: "/whiteChair.jpg",
              name: "Vintage Library Chair",
              price: "$45",
            },
            {
              src: "/POC.jpg",
              name: "Dual-Toned Office Chairs",
              price: "$50",
            },
            {
              src: "/OrangeChair.jpg",
              name: "Bold Accent Chair",
              price: "$50",
            },
            {
              src: "/RoundedBeigeChair.jpg",
              name: "Scandinavian Lounge Chair",
              price: "$90",
            },
          ].map((product, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="relative w-full pb-[100%] hover:scale-105 transition-transform">
                {/* Enforce square aspect ratio */}
                <Image
                  src={product.src}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  className="rounded-lg"
                />
              </div>
              <div className="flex justify-between items-center">
                <p className="font-inter font-normal text-base leading-[20.8px] text-[#272343]">
                  {product.name}
                </p>
                <p className="font-inter font-bold text-sm leading-[16.94px] text-[#000000]">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
