import Image from "next/image"
import Link from "next/link"
import { TbTruckDelivery } from "react-icons/tb"
import { IoIosCheckmarkCircleOutline } from "react-icons/io"
import { CreditCard } from 'lucide-react'
import { LuSprout } from "react-icons/lu"

export default function AboutPage() {
  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 my-8">
      {/* Intro Section */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="flex flex-col w-full lg:w-1/2 gap-6 bg-[#007580] p-6 sm:p-8 lg:p-12">
          <h1 className="font-inter font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
            About Us - Comforty
          </h1>
          <p className="font-inter text-sm sm:text-base md:text-lg lg:text-xl text-white">
            At Comforty, we believe that the right chair can transform your
            space and elevate your comfort. Specializing in ergonomic design,
            premium materials, and modern aesthetics, we craft chairs that
            seamlessly blend style with functionality.
          </p>
          <Link
            href="/product"
            className="inline-block bg-[#0a96a3] hover:bg-[#388e96] px-4 py-3 rounded text-white font-inter text-sm sm:text-base lg:text-lg"
          >
            View Collection
          </Link>
        </div>
        <Image
          src="/whiteChair.jpg"
          alt="Old Chair"
          width={720}
          height={480}
          className="w-full lg:w-1/2 h-auto object-cover rounded"
        />
      </div>

      {/* Features Section */}
      <div className="my-16 flex flex-col items-center gap-8">
        <h2 className="font-inter font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#272343] text-center">
          What Makes Our Brand Different
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {[ 
            { icon: <TbTruckDelivery className="text-[#007580] text-3xl" />, title: "Next day as standard", description: "Order before 3pm and get your order the next day as standard" },
            { icon: <IoIosCheckmarkCircleOutline className="text-[#007580] text-3xl" />, title: "Made by true artisans", description: "Handmade crafted goods made with real passion and craftsmanship" },
            { icon: <CreditCard className="text-[#007580] text-3xl" />, title: "Unbeatable prices", description: "For our materials and quality you won't find better prices anywhere" },
            { icon: <LuSprout className="text-[#007580] text-3xl" />, title: "Recycled packaging", description: "We use 100% recycled to ensure our footprint is more manageable" },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-[#F9F9F9] p-4 sm:p-6 lg:p-8 rounded-lg flex flex-col items-start gap-4 hover:scale-105 transition-transform"
            >
              {feature.icon}
              <h3 className="font-inter font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-[#007580]">
                {feature.title}
              </h3>
              <p className="font-inter text-sm sm:text-base md:text-lg text-[#007580]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Products Section */}
      <div className="max-w-[1440px] mx-auto px-4 my-16">
        <h1 className="text-[32px] text-[#272343] mb-8">
          Our Popular Products
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-6">
          {/* First Image - Larger Width */}
          <div className="md:col-span-2 lg:col-span-4">
            <Image
              src="/GreenSofa.jpg"
              alt="The Poplar Suede Sofa"
              width={960}
              height={540}
              className="w-full h-auto object-cover mb-4"
            />
            <h2 className="text-2xl text-[#2A254B] mb-2">
              The Poplar Suede Sofa
            </h2>
            <p className="text-[#2A254B]">$99.00</p>
          </div>

          {/* Remaining Two Images - Side by Side */}
          <div className="md:col-span-2 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            {["/ModernBlackChair.jpg", "/BlackAndWhiteMinimalistChair.jpg"].map((image, index) => (
              <div key={index}>
                <Image
                  src={image}
                  alt={`The Dandy Chair ${index + 1}`}
                  width={720}
                  height={480}
                  className="w-full h-auto object-cover mb-4"
                />
                <h2 className="text-2xl text-[#2A254B] mb-2">
                  The Dandy Chair
                </h2>
                <p className="text-[#2A254B]">$99.00</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
