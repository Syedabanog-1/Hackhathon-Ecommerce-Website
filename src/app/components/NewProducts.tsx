import React from "react";
import Link from "next/link";

// Static Product Data - 12 Products
const productData = [

  {
    key: 1,
    img: "/CreamTuftedChair.jpg",
    title: "Fancy Chair",
    desc: "Large Fancy and Comfort Chair",
    rating: 4.5,
    price: "$300",
  },
  
  
  {
    key: 2,
    img: "/BlackChairWithCushion.jpg",
    title: "Chair with Cusion",
    desc: "Comfort Chair with Cusion",
    rating: 4.6,
    price: "$160",
  },
  {
    key: 3,
    img: "/blackSofaChair.png",
    title: "Comfort Seated  Chair",
    desc: "Stylish Chair",
    rating: 4.4,
    price: "$280",
  },
  {
    key: 4,
    img: "/FancySingleChair.jpg",
    title: "PlainnewLookChair",
    desc: "Black Fancy and Plain  Chair",
    rating: 4.9,
    price: "$150",
  },
  {
    key: 5,
    img: "/GreenSofa.jpg",
    title: "Comfort Green Sofa",
    desc: "Big Comfort Green Sofa",
    rating: 4.3,
    price: "$320",
  },
  {
    key: 6,
    img: "/ModernBlackChair.jpg",
    title: "Simple and plain Chair",
    desc: "Simple and plain Black Chair in new look",
    rating: 4.8,
    price: "$110",
  },
  {
    key: 7,
    img: "/OrangeChair.jpg",
    title: "Bright Orange Chair",
    desc: "Very Stable Orange Chair",
    rating: 4.2,
    price: "$130",
  },
  {
    key: 8,
    img: "/PairOfChairs.png",
    title: "Desk Chair",
    desc: "Stylish Chairs at reasonable price",
    rating: 4.7,
    price: "$270",
  },
  {
    key: 9,
    img: "/PinkUpholsteredChair.jpg",
    title: "Pink Chair",
    desc: "Large Comfort Chair",
    rating: 4.5,
    price: "$280",
  },
   {
    key: 10,
    img: "/RoundedBeigeChair.jpg",
    title: "Comfort Chair",
    desc: " Chair with Comfort and Moveable seat",
    rating: 4.6,
    price: "$170",
  },
  {
    key: 11,
    img: "/RoundShortLegStoolChair.jpg",
    title: "Fancy Stool",
    desc: "Amazing product Very Fancy",
    rating: 4.4,
    price: "$150",
  },
  
  
  {
    key: 12,
    img: "/TASS.png",
    title: "Stool chair",
    desc: "Bestseller  product keeps less space area",
    rating: 4.4,
    price: "$180",
  },
  {
    key: 13,
    img: "/upholsteredChair.jpg",
    title: "Grey Chair",
    desc: "Big Comfort Chair",
    rating: 4.4,
    price: "$140",
  },
  {
    key: 14,
    img: "/whiteChair.jpg",
    title: "SimpleChair",
    desc: "Medium Chair keeps less space area",
    rating: 4.4,
    price: "$70",
  },
  {
    key: 15,
    img: "/WoodenRockingChair.jpg",
    title: "Swing Chair",
    desc: "Big Rester Chair",
    rating: 4.4,
    price: "$290",
  },

];

const NewProducts = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {productData.map((product) => (
          <Link href="/product" key={product.key}>
            <div
              className="flex flex-col justify-between items-center border rounded-lg p-4 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
              style={{ height: "100%" }}
            >
              <img
                src={product.img}
                alt={product.title}
                width={300}
                height={300}
                className="rounded-lg"
              />
              <div className="flex flex-col items-center text-center mt-4">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-gray-600 mt-2">{product.desc}</p>
                <p className="text-yellow-500 mt-2">Rating: {product.rating} ⭐</p>
                <p className="text-gray-900 mt-2 font-bold">{product.price}</p>
              </div>
              <button className="bg-blue-600 text-white mt-4 py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200">
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewProducts;