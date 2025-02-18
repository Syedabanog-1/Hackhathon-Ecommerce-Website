'use client';

import { useState } from 'react';
import Shopbottombar from "@/components/shopbottombar";
import { Clock, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
    const [bgColor, setBgColor] = useState('#f9fafb');
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', feedback: '' });
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false); // State for handling Submit button text

    // Lighter color palette
    const colors = ['#DFFFD6', '#D6EAF8', '#F2F3F4', '#EADCF8', '#F8D6E8', '#FFF9C4', '#EEDAC2'];

    const handleMouseMove = () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setBgColor(randomColor);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true); // Set the button text to "Submitted ✅"

        setTimeout(() => {
            setIsSubmitting(false); // Reset button text after 2 seconds
        }, 2000);

        setMessage('Thank you for contacting us. 😊');
        
        // Hide message after 2 seconds
        setTimeout(() => {
            setMessage(''); // Clear the message after 2 seconds
        }, 2000); // 2 seconds

        setFormData({ name: '', email: '', subject: '', feedback: '' });
    };

    return (
        <div className="min-h-screen bg-gray-100" style={{ backgroundColor: bgColor }} onMouseMove={handleMouseMove}>
            {/* Hero */}
            <section className="bg-[url('/blogMainImage.png')] bg-cover bg-center py-12 md:py-16">
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-block w-16 h-16 bg-[url('/logo1.png')] mb-4" />
                    <h1 className="text-3xl md:text-4xl font-bold text-white">Contact</h1>
                    <div className="flex items-center justify-center gap-1 text-sm text-white">
                        <Link href="/" className="hover:underline">Home</Link>
                        <Image src={"/rightA.png"} width={20} height={20} alt="arrow" />
                        <span className="font-bold">Contact</span>
                    </div>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Get In Touch With Us</h2>
                    <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10">
                        For more information about our products & services, please feel free to drop us an email. Our staff will always be there to help you out. Do not hesitate!
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Contact Info */}
                        <div className="space-y-6 bg-white p-6 rounded-lg shadow-md">
                            <div className="flex gap-4 items-center">
                                <MapPin className="w-8 h-8 text-[#B88E2F]" />
                                <div>
                                    <h3 className="font-medium text-lg">Address</h3>
                                    <p className="text-gray-600">225 4th SE Avenue, New York NY10000, United States</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <Phone className="w-8 h-8 text-[#B88E2F]" />
                                <div>
                                    <h3 className="font-medium text-lg">Phone</h3>
                                    <p className="text-gray-600">Mobile: +(84) 546-6789<br />Hotline: +(84) 456-6789</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <Clock className="w-8 h-8 text-[#B88E2F]" />
                                <div>
                                    <h3 className="font-medium text-lg">Working Time</h3>
                                    <p className="text-gray-600">Monday-Friday: 9:00 - 22:00<br />Saturday-Sunday: 9:00 - 21:00</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white shadow-lg rounded-2xl p-6 w-full text-center border-4 border-blue-300">
                            <h2 className="text-xl md:text-2xl font-semibold text-blue-500 mb-4">Contact Us</h2>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your Name"
                                    className="p-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your Email"
                                    className="p-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Enter your Subject"
                                    className="p-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />
                                <textarea
                                    name="feedback"
                                    value={formData.feedback}
                                    onChange={handleChange}
                                    placeholder="Your Feedback"
                                    className="p-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    rows={4}
                                    required
                                />
                                <button 
                                    type="submit" 
                                    className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-700 transition w-full"
                                    disabled={isSubmitting} // Disable button while submitting
                                >
                                    {isSubmitting ? 'Submitted ✅' : 'Submit'} {/* Change button text */}
                                </button>
                            </form>
                            {message && (
                                <input
                                    type="text"
                                    value={message}
                                    readOnly
                                    className="mt-4 p-3 w-full rounded-md border border-green-500 text-green-600 text-center bg-green-50"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </section>
            {/* Bottom Bar */}
            <Shopbottombar />
        </div>
    );
}
