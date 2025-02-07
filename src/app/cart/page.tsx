"use client"
import Image, { StaticImageData } from "next/image";
import { useCart } from "../components/CartContext";
import { Heart, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "../components/Toast";
import { useRouter } from "next/navigation";




interface CartItem {
  id: number;
  name: string;
  image: string | StaticImageData;
  color: string;
  size: string;
  quantity: number;
  price: number;
}

const CartPage = () => {
  const { cartItems, updateQuantity, removeItem } = useCart();
  const [wishlistItems, setWishlistItems] = useState<CartItem[]>([]);
  const { showToast } = useToast();
  const [showRemoveDialog, setShowRemoveDialog] = useState(false);
  const [itemToRemove, setItemToRemove] = useState<CartItem | null>(null);
  const [isWishlistRemoval, setIsWishlistRemoval] = useState(false);
  const router = useRouter();
  // Load wishlist from localStorage on component mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlistItems');
    if (savedWishlist) {
      setWishlistItems(JSON.parse(savedWishlist));
    }
  }, []);

  const handleAddToWishlist = (item: CartItem) => {
    const updatedWishlist = wishlistItems.some((wishlistItem) => wishlistItem.id === item.id)
      ? wishlistItems
      : [...wishlistItems, item];
    
    setWishlistItems(updatedWishlist);
    localStorage.setItem('wishlistItems', JSON.stringify(updatedWishlist));

    if (updatedWishlist.length > wishlistItems.length) {
      showToast(`${item.name} has been added to your wishlist! 💖`, "success");
    } else {
      showToast("This item is already in your wishlist!", "info");
    }
  };

  const handleRemoveFromCart = (item: CartItem, fromWishlist = false) => {
    setItemToRemove(item);
    setIsWishlistRemoval(fromWishlist);
    setShowRemoveDialog(true);
  };

  const confirmRemoveItem = () => {
    if (itemToRemove) {
      if (isWishlistRemoval) {
        // Remove from wishlist
        const updatedWishlist = wishlistItems.filter((item) => item.id !== itemToRemove.id);
        setWishlistItems(updatedWishlist);
        localStorage.setItem('wishlistItems', JSON.stringify(updatedWishlist));
        showToast(`${itemToRemove.name} has been removed from your wishlist`, "info");
      } else {
        // Remove from cart
        removeItem(itemToRemove.id);
        showToast(`${itemToRemove.name} has been removed from your cart`, "info");
      }
    }
    setShowRemoveDialog(false);
  };

  const cancelRemoveItem = () => {
    setShowRemoveDialog(false);
  };

  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-2 my-16">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 text-center">
      
        {/* Cart Items Section */}
        <div className="flex flex-col gap-6 w-full lg:w-2/3">
          <h2 className="font-inter font-medium text-xl sm:text-2xl text-[#111111] md:text-left">Bag</h2>
        
          {cartItems.length === 0 ? (
            <div className="text-center text-[#757575] font-inter">
              <p className="text-lg sm:text-xl">Your cart is empty! 🛒</p>
              <p className="text-sm sm:text-base mt-2">
                Add items to your cart to see them here.
              </p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-start md:items-center gap-6 border-b pb-8"
              >
                {/* Image */}
                <div className="w-full md:w-auto flex justify-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="object-contain rounded-lg"
                    width={200}
                    height={200}
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
                      className={`cursor-pointer transition-colors ${
                        wishlistItems.some((wishlistItem) => wishlistItem.id === item.id)
                          ? "text-red-500"
                          : "text-gray-400 hover:text-red-500"
                      }`}
                      size={24}
                      onClick={() => handleAddToWishlist(item)}
                    />
                    <Trash2
                      className="cursor-pointer hover:text-gray-600 transition-colors"
                      size={24}
                      onClick={() => handleRemoveFromCart(item)}
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
            ))
          )}
        </div>

        {/* Summary Section */}
        <div className="flex flex-col gap-6 w-full lg:w-1/3 ml-auto">
          <h1 className="font-inter text-center font-medium text-xl sm:text-2xl text-[#111111]">
            Summary
          </h1>
          {cartItems.length === 0 ? (
            <p className="text-center text-sm sm:text-base text-[#757575]">
              No items to summarize yet!
            </p>
          ) : (
            <>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <p className="font-inter text-sm sm:text-base text-[#111111]">
                    Subtotal ({cartItems.length} items)
                  </p>
                  <p className="font-inter font-medium text-sm sm:text-base text-[#111111]">
                    ${cartItems
                      .reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      )
                      .toFixed(2)}
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
                  $
                  {cartItems
                    .reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )
                    .toFixed(2)}
                </p>
              </div>
              <div className="w-full h-[2px] bg-[#E5E5E5]" />
              <button
  className="w-full py-3 bg-[#029FAE] hover:bg-[#15727a] rounded-full text-white font-inter font-medium text-sm sm:text-base"
  onClick={() => router.push("/shipment")} 
>
  Member Checkout
</button>
              
            </>
          )}
        </div>
      </div>
      {/* Divider Line */}
      <div className="w-full h-[2px] bg-[#E5E5E5] my-6" />

      {/* Wishlist Section */}
      <div className="flex flex-col gap-6 w-full mt-8">
        <h2 className="text-xl font-medium">Wishlist</h2>
        {wishlistItems.length === 0 ? (
          <p className="text-center text-sm sm:text-base text-[#757575]">
            Your wishlist is empty! 💖
          </p>
        ) : (
          wishlistItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border-b pb-4"
            >
              <Image
                src={item.image}
                alt={item.name}
                className="object-contain rounded-lg"
                width={50}
                height={50}
              />
              <p className="flex-grow font-inter text-sm sm:text-base text-[#111111]">
                {item.name}
              </p>
              <Trash2
                className="cursor-pointer hover:text-gray-600 transition-colors"
                size={24}
                onClick={() => handleRemoveFromCart(item, true)}
              />
            </div>
          ))
        )}
      </div>

      {/* Confirmation Dialog */}
      {showRemoveDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-5/6 sm:w-1/3">
            <h3 className="text-base font-medium">
              Are you sure you want to remove {itemToRemove?.name} from your {isWishlistRemoval ? 'wishlist' : 'cart'}?
            </h3>
            <div className="flex gap-3 mt-4 justify-center">
              <button
                onClick={confirmRemoveItem}
                className="bg-[#029FAE] text-white py-2 px-3 rounded"
              >
                Yes
              </button>
              <button
                onClick={cancelRemoveItem}
                className="bg-gray-400 text-white py-2 px-3 rounded"
              >
                No
              </button>
              
            </div>
          </div>
        </div>
      )}
      
    </div>
    
  );
};

export default CartPage;