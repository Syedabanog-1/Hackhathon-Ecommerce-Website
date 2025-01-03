"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import { Heart, Trash2 } from "lucide-react";


interface CartItem {
  id: number;
  image: string; 
  name: string;
  color: string;
  size: string;
  quantity: number;
  price: number;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      image: "/desk chair.png", 
      name: "Library Stool Chair",
      color: "Ashen Slate/Cobalt Bliss",
      size: "L",
      quantity: 1,
      price: 99,
    },
    {
      id: 2,
      image: "/stool chair.png",
      name: "Library Stool Chair",
      color: "Ashen Slate/Cobalt Bliss",
      size: "L",
      quantity: 1,
      price: 99,
    },
  ]);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("cartCount", totalItems.toString());
    window.dispatchEvent(
      new CustomEvent("cartUpdated", { detail: totalItems })
    );
  }, [totalItems]);

  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Cart Items Section */}
        <div className="flex flex-col gap-6 w-full lg:w-2/3">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 border-b pb-4"
            >
              {/* Image */}
              <div className="w-full md:w-auto flex justify-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="object-contain rounded-lg"
                  width={150}
                  height={150}
                />
              </div>

              {/* Text Section */}
              <div className="flex flex-col gap-4 w-full text-center md:text-left">
                <h2 className="font-inter text-base sm:text-lg md:text-xl text-[#272343]">
                  {item.name}
                </h2>
                <p className="font-inter text-sm sm:text-base text-[#757575]">
                  {item.color}
                </p>
                <div className="flex justify-center md:justify-start gap-6 font-inter text-sm text-[#757575]">
                  <p>Size {item.size}</p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 border rounded"
                    >
                      -
                    </button>
                    <p>Quantity {item.quantity}</p>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 border rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex justify-center md:justify-start gap-4">
                  <Heart
                    className="cursor-pointer hover:text-red-500 transition-colors"
                    size={24}
                  />
                  <Trash2
                    className="cursor-pointer hover:text-gray-600 transition-colors"
                    size={24}
                    onClick={() => removeItem(item.id)}
                  />
                </div>
              </div>

              {/* Price Section */}
              <div className="w-full md:w-auto flex justify-center md:justify-end">
                <p className="font-inter text-sm sm:text-base text-[#111111]">
                  MRP:{" "}
                  <span className="font-medium">
                    ${item.price * item.quantity}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="flex flex-col gap-6 w-full lg:w-1/3">
          <h1 className="font-inter font-medium text-xl sm:text-2xl text-[#111111]">
            Summary
          </h1>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <p className="font-inter text-sm sm:text-base text-[#111111]">
                Subtotal ({totalItems} items)
              </p>
              <p className="font-inter font-medium text-sm sm:text-base text-[#111111]">
                ${subtotal.toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="font-inter text-sm sm:text-base text-[#111111]">
                Estimated Delivery & Handling
              </p>
              <p className="font-inter font-medium text-sm sm:text-base text-[#111111]">
                Free
              </p>
            </div>
          </div>
          <div className="w-full h-[2px] bg-[#E5E5E5]" />
          <div className="flex justify-between">
            <p className="font-inter text-sm sm:text-base text-[#111111]">
              Total
            </p>
            <p className="font-inter font-medium text-sm sm:text-base text-[#111111]">
                ${subtotal.toFixed(2)}
              </p>
          </div>
          <div className="w-full h-[2px] bg-[#E5E5E5]" />
          <button className="w-full py-3 bg-[#029FAE] hover:bg-[#15727a] rounded-full text-white font-inter font-medium text-sm sm:text-base">
            Member Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
