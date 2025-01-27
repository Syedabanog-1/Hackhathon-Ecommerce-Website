import Image from "next/image";
import Link from "next/link";

const PopularStyles = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 mb-20">
      {/* Text for Mobile View */}
      <div className="block lg:hidden mb-4 text-center">
        <h2 className="text-xl sm:text-2xl font-inter text-[#272343]">
          Explore New and Popular Styles
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Text Section for Large Screens */}
        <div className="hidden lg:flex lg:col-span-1 items-center justify-center">
          <div
            className="text-2xl sm:text-[28px] lg:text-[32px] font-inter text-[#272343] whitespace-nowrap"
            style={{
              writingMode: "vertical-lr",
              transform: "rotate(180deg)",
            }}
          >
            Explore New and Popular Styles
          </div>
        </div>

        {/* Large Feature Image */}
        <div className="relative h-[300px] sm:h-[400px] lg:h-[700px] lg:col-span-5">
        <Link href="/product">
          <Image
            src="/OrangeChair.jpg"
            alt="Chair"
            className="object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
          />
          </Link>
        </div>

        {/* Grid of Four Smaller Images */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          {[
            "/CreamTuftedChair.jpg",
            "/whiteChair.jpg",
            "/upholsteredChair.jpg",
            "/TASS.png",
          ].map((imageSrc, index) => (
            <div
              key={index}
              className="relative h-[120px] sm:h-[150px] lg:h-[340px]"
            >
              <Link href="/product">
                <Image
                  src={imageSrc}
                  alt={`Popular Style ${index + 1}`}
                  className="object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularStyles;