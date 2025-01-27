"use client";

import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../app/components/CartContext";
import { useToast } from "../../app/components/Toast"; 

interface ImageProps {
  src: string;
  width?: number;
  height?: number;
  alt: string;
}

interface ICard {
  id?: number;
  className?: string;
  heading?: string;
  classNameDiv?: string;
  divText?: string;
  paragraph: string;
  classNamepara?: string;
  amount: number;
  cutamount?: number;
  classNameCart?: string;
  isDiv?: boolean;
  Image1: ImageProps;
  link?: string;
}

interface FeaturedProductsProps {
  heading: string;
  cards: ICard[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  heading,
  cards,
}) => {
  const { addItem } = useCart(); // Access Cart context
  const { showToast } = useToast(); // Access Toast context

  const handleAddToCart = (card: ICard) => {
    if (!card.id) return;

    // Add item to cart
    addItem({
      id: card.id,
      image: card.Image1.src,
      name: card.paragraph,
      color: "Default", // Modify as per your requirements
      size: "Default", // Modify as per your requirements
      quantity: 1,
      price: card.amount,
    });

    // Show success toast
    showToast(`${card.paragraph} added to cart!`, "success");
  };

  return (
    <div className="container mx-auto">
      {/* Heading */}
      <h1 className="font-inter text-2xl sm:text-[28px] lg:text-[32px] leading-tight text-[#272343] mb-8">
        {heading}
      </h1>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div key={card.id} className="relative group bg-white rounded-lg">
            {/* Badge */}
            {card.isDiv && (
              <div
                className={`absolute top-3 left-3 z-10 py-1 px-2.5 rounded ${card.classNameDiv}`}
              >
                <p className="font-inter font-medium text-xs leading-tight text-white">
                  {card.divText}
                </p>
              </div>
            )}

            {/* Product Image Container */}
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Link href={card.link || "/product"} className="block w-full h-full">
                <Image
                  src={card.Image1.src}
                  alt={card.Image1.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </Link>
            </div>

            {/* Product Details */}
            <div className="p-4">
              <p className="font-inter font-normal text-sm sm:text-base leading-snug mb-2">
                {card.paragraph}
              </p>
              <div className="flex items-center gap-2">
                <p className="font-inter text-base sm:text-lg lg:text-[18px] leading-tight text-[#272343]">
                  ${card.amount}
                </p>
                {card.cutamount && (
                  <p className="font-inter text-xs sm:text-sm line-through text-[#9A9CAA]">
                    ${card.cutamount}
                  </p>
                )}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => handleAddToCart(card)}
              className={`absolute bottom-3 right-3 w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center transition-colors duration-300 hover:bg-[#076068] ${card.classNameCart}`}
            >
              <ShoppingCart className="w-4 h-4 sm:w-[18.5px] sm:h-[18.4px] text-white" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;