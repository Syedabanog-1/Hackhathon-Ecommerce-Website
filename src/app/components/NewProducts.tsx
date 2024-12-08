import React from "react";


// Static Product Data - 12 Products
const productData = [

  {
    key: 1,
    img: "/chair-longgreen.png",
    title: "Long Sofa",
    desc: "Long Green Comfortable Sofa",
    rating: 4.5,
    price: "$50",
  },
  
  {
    key: 2,
    img: "/desk chair.png",
    title: "Desk Chair",
    desc: "Very Nice Look",
    rating: 4.7,
    price: "$120",
  },
  {
    key: 3,
    img: "/grey-chair.png",
    title: "Grey Cover Chair",
    desc: "It looks graceful gives very comfort",
    rating: 4.6,
    price: "$80",
  },
  {
    key: 4,
    img: "/image-chair.png",
    title: "Stylish Chair",
    desc: "New style in market",
    rating: 4.4,
    price: "$30",
  },
  {
    key: 5,
    img: "/Orange chair.png",
    title: "Chair Bright Orange",
    desc: "Chair color looks very pretty",
    rating: 4.9,
    price: "$150",
  },
  {
    key: 6,
    img: "/pinkchair.png",
    title: "Pink Chair",
    desc: "Very perfect and pretty in reasonable price",
    rating: 4.3,
    price: "$95",
  },
  {
    key: 7,
    img: "/plain bl-chair.png",
    title: "Plain Black Chair",
    desc: "prewtty and comfortable in appropriate rate",
    rating: 4.8,
    price: "$600",
  },
  {
    key: 8,
    img: "/simple chair.png",
    title: "Simple Chair",
    desc: "Spacious and sturdy, ideal ",
    rating: 4.2,
    price: "$45",
  },
  {
    key: 9,
    img: "/stool chair.png",
    title: "Stool Chair",
    desc: "New Stylish Chair in reasonable price",
    rating: 4.7,
    price: "$350",
  },
  {
    key: 10,
    img: "/stool.png",
    title: "Stool",
    desc: "nice and amazing with light color",
    rating: 4.5,
    price: "$80",
  },
  {
    key: 11,
    img: "/table chair.png",
    title: "Table Chair",
    desc: "Perfect Furniture Product",
    rating: 4.6,
    price: "$300",
  },
  {
    key: 12,
    img: "/black-chair.png",
    title: "Black Chair",
    desc: "Amazing product Very Pretty",
    rating: 4.6,
    price: "$300",
  },

];

const NewProducts = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {productData.map((product) => (
          <div
            key={product.key}
            className="flex flex-col justify-between items-center border rounded-lg p-4 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
            style={{ height: "100%" }} // Ensures equal height
          >
            <img
              src={product.img}
              alt={product.title}
              width={300} // Set the width
              height={300} // Set the height
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
        ))}
      </div>
    </div>
  );
};

export default NewProducts;