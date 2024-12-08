import Image from "next/image";
import React from "react";

interface propsType {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
}

const ProductCard: React.FC<propsType> = ({
  title,
  desc,
  rating,
  price,
}) => {
  return (
    <div className="border p-4 rounded-lg">
      <div className="flex justify-center">
        {/* Image component for product */}
        <Image className="w-full h-auto" src="/Logo.png" width={200} height={200} alt="Look" />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-500">{desc}</p>
        <p className="text-yellow-500">Rating: {rating} ⭐</p>
        <p className="text-blue-600 font-semibold">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;