"use client"

import { useCart } from "../../components/CartContext"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import { notFound } from "next/navigation"
import { useState } from "react"
import Toast from "../../components/Toast"

type Product = {
  id: number
  src: string
  name: string
  description: string
  price: number
  badge?: "New" | "Sale"
  originalPrice?: number
  features: string[]
  specifications: {
    Material: string
    "Weight Capacity": string
    Dimensions: string
    "Assembly Required": string
  }
  color?: string
  size?: string
}

type Props = {
  params: { id: string }
}

export default function ProductPage({ params }: Props) {
  const { id } = params 
  const productId = Number(id)
  const { addItem } = useCart()
  const [showToast, setShowToast] = useState(false)
const products: Product[] = [
    {
      id: 0,
      src: "/whiteChair.jpg",
      name: "Vintage Library Chair",
      description: "A classic white chair with a vintage design, perfect for libraries or cozy corners.",
      price: 40,
      badge: "New",
      features: ["High-quality wood", "Comfortable design", "Perfect for reading"],
      specifications: {
        Material: "Solid wood",
        "Weight Capacity": "300 lbs",
        Dimensions: "32 x 20 x 18 inches",
        "Assembly Required": "No",
      },
    },
    {
      id: 1,
      src: "/PinkUpholsteredChair.jpg",
      name: "Blush Velvet Chair",
      description: "A soft pink upholstered chair with tufted design, perfect for adding a chic touch.",
      price: 75,
      originalPrice: 90,
      badge: "Sale",
      features: ["Luxurious velvet", "Tufted backrest", "Stylish and modern"],
      specifications: {
        Material: "Velvet and metal",
        "Weight Capacity": "250 lbs",
        Dimensions: "30 x 25 x 22 inches",
        "Assembly Required": "No",
      },
    },
    {
      id: 2,
      src: "/orangeChair.jpg",
      name: "Bold Accent Chair",
      description: "A vibrant orange chair with a unique design, great for adding a pop of color.",
      price: 50,
      features: ["Eye-catching color", "Durable frame", "Comfortable padding"],
      specifications: {
        Material: "Fabric and wood",
        "Weight Capacity": "275 lbs",
        Dimensions: "34 x 22 x 20 inches",
        "Assembly Required": "No",
      },
    },
    {
      id: 3,
      src: "/CreamTuftedChair.jpg",
      name: "Ivory Elegance Chair",
      description: "A cream tufted chair with a luxurious and elegant design, ideal for living spaces.",
      price: 85,
      features: ["Elegant cream finish", "Soft cushioning", "Versatile for any decor"],
      specifications: {
        Material: "Leather and steel",
        "Weight Capacity": "300 lbs",
        Dimensions: "35 x 23 x 21 inches",
        "Assembly Required": "No",
      },
    },
    {
      id: 4,
      src: "/TASS.png",
      name: "Industrial Dining Set",
      description: "A compact dining set featuring a table and stools, with a modern industrial vibe.",
      price: 120,
      badge: "New",
      features: ["Space-saving design", "Durable steel frame", "Modern industrial look"],
      specifications: {
        Material: "Wood and steel",
        "Weight Capacity": "500 lbs",
        Dimensions: "Table: 40 x 30 x 28 inches, Stools: 18 x 18 x 16 inches",
        "Assembly Required": "No",
      },
    },
    {
      id: 5,
      src: "/upholsteredChair.jpg",
      name: "Elegant Dining Chair",
      description: "A sophisticated upholstered chair, ideal for dining or meeting spaces.",
      price: 60,
      originalPrice: 75,
      badge: "Sale",
      features: ["Soft fabric upholstery", "Sturdy frame", "Ideal for gatherings"],
      specifications: {
        Material: "Fabric and wood",
        "Weight Capacity": "260 lbs",
        Dimensions: "33 x 20 x 18 inches",
        "Assembly Required": "No",
      },
    },
    {
      id: 6,
      src: "/BlackChairWithCushion.jpg",
      name: "Modern Comfort Chair",
      description: "A black chair with a cozy cushion, combining style and comfort for any room.",
      price: 70,
      features: ["Plush cushion", "Ergonomic design", "Timeless black finish"],
      specifications: {
        Material: "Metal and fabric",
        "Weight Capacity": "280 lbs",
        Dimensions: "31 x 21 x 20 inches",
        "Assembly Required": "No",
      },
    },
    {
      id: 7,
      src: "/RoundShortLegStoolChair.jpg",
      name: "Round Short-Leg Stool",
      description: "A compact and versatile stool chair with short legs, perfect for casual seating areas.",
      price: 45,
      features: ["Lightweight", "Minimalist design", "Portable"],
      specifications: {
        Material: "Wood",
        "Weight Capacity": "220 lbs",
        Dimensions: "16 x 14 x 14 inches",
        "Assembly Required": "No",
      },
    },
    {
      id: 8,
      src: "/RoundedBeigeChair.jpg",
      name: "Scandinavian Lounge Chair",
      description: "A rounded beige chair with a cozy, modern Scandinavian design.",
      price: 90,
      badge: "New",
      features: ["Soft fabric", "Curved backrest", "Inspired by Scandinavian design"],
      specifications: {
        Material: "Fabric and wood",
        "Weight Capacity": "270 lbs",
        Dimensions: "32 x 22 x 20 inches",
        "Assembly Required": "No",
      },
    },
    {
      id: 9,
      src: "/WoodenRockingChair.jpg",
      name: "Wooden Rocking Chair",
      description: "A classic wooden rocking chair combining traditional craftsmanship with comfort.",
      price: 95,
      originalPrice: 110,
      badge: "Sale",
      features: ["Smooth rocking motion", "High-quality wood", "Traditional craftsmanship"],
      specifications: {
        Material: "Solid wood",
        "Weight Capacity": "350 lbs",
        Dimensions: "40 x 26 x 22 inches",
        "Assembly Required": "No",
      },
    },
    {
      id: 10,
      src: "/FancySingleChair.jpg",
      name: "Fancy Single Chair",
      description: "An elegant single chair with refined details and premium upholstery.",
      price: 80,
      features: ["Elegant details", "Premium upholstery", "Durable frame"],
      specifications: {
        Material: "Leather and wood",
        "Weight Capacity": "300 lbs",
        Dimensions: "34 x 22 x 21 inches",
        "Assembly Required": "No",
      },
    },
    {
      id: 11,
      src: "/PairOfChairs.png",
      name: "Dual-Toned Office Chairs",
      description: "Stylish office chairs available in pink and black, adding a chic look to workspaces.",
      price: 50,
      features: ["Dual-tone colors", "Comfortable seating", "Durable for daily use"],
      specifications: {
        Material: "Metal and fabric",
        "Weight Capacity": "250 lbs",
        Dimensions: "30 x 20 x 20 inches",
        "Assembly Required": "No",
      },
    
    },
    
    {
      id: 12,
      src: "/GreenSofa.jpg",
      name: "Comfort Green Sofa",
      description: "Big Comfort Green Sofa",
      price: 280,
      features: ["Green color", "Comfortable seating", "Durable for daily use"],
      specifications: {
        Material: "Metal and Leather and Wood",
        "Weight Capacity": "600 lbs",
        Dimensions: "80 x 70 x 70 inches",
        "Assembly Required": "No",  
    },
  },
  {
    id: 13,
    src: "/red.jpeg",
    name: "Comfort Chair",
    description: "Stylish Chair",
    price: 140,
    features: ["Red color", "Comfortable with Arms", "Durable for daily use"],
    specifications: {
      Material: "Thick Plastic",
      "Weight Capacity": "200 lbs",
      Dimensions: "30 x 20 x 20 inches",
      "Assembly Required": "No"

  },
},
{
  id: 14,
  src: "/sofa.jpeg",
  name: "Comfort Seated  sofa",
  description: "Stylish sofa",
  price: 200,
  features: ["DrakGreen color", "Comfortable seating", "Durable for daily use"],
  specifications: {
    Material: "Leather And Wood",
    "Weight Capacity": "450 lbs",
    Dimensions: "35 x 25 x 25 inches",
    "Assembly Required": "No"

},
},
  ];
  
  // Find the product with the matching id
  const product = products.find((p) => p.id === productId)

  // Check if the product exists
  if (!product) {
    notFound() // If invalid, show the 404 page
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      image: product.src,
      name: product.name,
      color: product.color || "Default",
      size: product.size || "Standard",
      quantity: 1,
      price: product.price,
    })
    setShowToast(true)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Toast
        message={`${product.name} Added to Cart`}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
        toastType="success"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative aspect-square w-full">
          {product.badge && (
            <div
              className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-md text-sm ${
                product.badge === "New" ? "bg-[#01AD5A] text-white" : "bg-[#FF6F61] text-white"
              }`}
            >
              {product.badge}
            </div>
          )}
          <div className="relative w-full h-full">
            <Image
              src={product.src || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
        
              sizes="(max-width: 768px) 100vw, 50vw" 
              priority
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-semibold text-[#272343] mb-2">{product.name}</h1>
            <p className="text-[#9A9CAA] text-lg mb-4">{product.description}</p>
            <div className="flex gap-3 items-center">
              <p className="text-2xl font-medium text-[#272343]">${product.price}</p>
              {product.originalPrice && <p className="text-[#9A9CAA] line-through text-lg">${product.originalPrice}</p>}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center gap-2 bg-[#029FAE] hover:bg-[#076068] text-white py-3 px-6 rounded-lg w-full md:w-auto"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Add to Cart</span>
          </button>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-[#272343] mb-4">Product Features</h2>
            <ul className="list-disc pl-5 space-y-2 text-[#9A9CAA]">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold text-[#272343] mb-4">Specifications</h2>
            <div className="grid grid-cols-2 gap-4 text-[#9A9CAA]">
              <div>
                <p className="font-medium">Material</p>
                <p>{product.specifications.Material}</p>
              </div>
              <div>
                <p className="font-medium">Weight Capacity</p>
                <p>{product.specifications["Weight Capacity"]}</p>
              </div>
              <div>
                <p className="font-medium">Dimensions</p>
                <p>{product.specifications.Dimensions}</p>
              </div>
              <div>
                <p className="font-medium">Assembly Required</p>
                <p>{product.specifications["Assembly Required"]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

