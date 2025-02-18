'use client';

import React, { useState } from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [buttonText, setButtonText] = useState<string>("Subscribe");
  const [buttonColor, setButtonColor] = useState<string>("bg-red-500 hover:bg-red-600");

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim() === "") return; // Prevent empty submission

    setButtonText("Subscribed ✔"); // Change button text
    setButtonColor("bg-green-500 hover:bg-green-600"); // Change button color to green
    setEmail(""); // Clear input field

    // Reset button text & color after 2 seconds
    setTimeout(() => {
      setButtonText("Subscribe");
      setButtonColor("bg-red-500 hover:bg-red-600"); // Revert button color to red
    }, 2000);
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are a leading eCommerce store providing high-quality furniture products
              at affordable prices. Our mission is to offer the best experience to our 
              customers.
            </p>
          </div>

          {/* Customer Service Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shipment" className="text-gray-400 hover:text-white">
                  Track Shipping
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-gray-400 hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/shipping-returns" className="text-gray-400 hover:text-white">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100090843034764"
                  className="text-gray-400 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  className="text-gray-400 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Syedabanog-1"
                  className="text-gray-400 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/gulzar-bano-syeda-b3b7b1230"
                  className="text-gray-400 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form onSubmit={handleSubscribe}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 mb-4 rounded bg-gray-700 text-gray-200 focus:outline-none"
                placeholder="Enter your email"
                required
              />
              <button
                type="submit"
                className={`w-full p-2 rounded text-white transition-all ${buttonColor}`}
              >
                {buttonText}
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Your Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
