"use client"
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Badge } from "../../components/ui/Badge";
import { useCart } from "../../app/components/CartContext";
import { useToast } from "../../app/components/Toast";

interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
}

export default function OurProducts({ products }: { products: Product[] }) {
  const { addItem } = useCart();
  const { showToast } = useToast();

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      image: product.image,
      name: product.title,
      color: "Default",
      size: "Default",
      quantity: 1,
      price: product.price,
    });

    // Show success toast
    showToast(`${product.title} added to cart!`, "success");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="group relative rounded-lg bg-white shadow hover:shadow-lg transition-shadow"
        >
          <div className="relative aspect-square overflow-hidden rounded-lg">
            {product.isNew && (
              <Badge className="absolute left-3 top-3 bg-emerald-500 text-white">
                New
              </Badge>
            )}
            {product.isSale && (
              <Badge className="absolute left-3 top-3 bg-orange-500 text-white">
                Sale
              </Badge>
            )}
            <Link href="/product">
              <Image
                src={product.image}
                alt={product.title}
                height={400}
                width={400}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>
          <div className="mt-4 flex items-center justify-between px-3">
            <div>
              <h3 className="text-sm sm:text-base font-medium text-[#1C1B1F]">
                {product.title}
              </h3>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-base font-medium text-[#1C1B1F]">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </div>
            <button 
              onClick={() => handleAddToCart(product)}
              className="rounded-full bg-[#00B5A5] p-2 hover:bg-[#00998F] transition-colors"
            >
              <ShoppingCart className="h-5 w-5 text-white" />
              <span className="sr-only">Add to cart</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}