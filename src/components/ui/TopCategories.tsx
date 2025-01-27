import Image from "next/image";
import Link from "next/link";
type Category = {
  name: string;
  products: string;
  image: string;
};

type CategoriesProps = {
  title: string;
  categories: Category[];
};

const Categories = ({ title, categories }: CategoriesProps) => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 mb-20">
      <h2 className="text-2xl sm:text-[28px] lg:text-[32px] font-inter text-[#272343] mb-8 text-left">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden rounded-lg bg-[#f9f9f9] shadow-sm ${
              index === categories.length - 1
                ? "h-[450px] lg:h-[600px] w-full" // Custom size for the last image
                : "h-[450px] lg:h-[600px]" // Default size for others
            }`}
          >
            <div className="relative w-full h-full">
              <Link href="product">
                <Image
                  src={category.image}
                  alt={category.name}
                  className={`transition-transform duration-300 ${
                    index === categories.length - 1
                      ? "object-cover[100%] object-right group-hover:scale-105" // Adjust to show only one chair
                      : "object-cover group-hover:scale-105"
                  }`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </Link>
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-75 p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-semibold text-white">
                {category.name}
              </h3>
              <p className="text-sm text-gray-200">{category.products}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;