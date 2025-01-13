import React from 'react';
import { FaHeart, FaLightbulb, FaCode } from 'react-icons/fa';

export function About() {
  return (
    <div className="min-h-screen md:h-[100vh]  flex justify-center items-center bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 py-16 px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-[#C30E59] mb-8">
          About Us
        </h1>
        <p className="text-gray-700 text-lg mb-12">
          Welcome to our amazing platform! We're here to help you stay organized, productive, and inspired. 
          Our mission is to make your tasks easier and your life brighter. 🌟
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-3xl p-8 hover:shadow-2xl transition">
            <div className="flex justify-center mb-4 text-[#C30E59]">
              <FaHeart size={50} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Passion</h3>
            <p className="text-gray-600">
              We love creating beautiful and functional apps that bring joy to your day!
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-3xl p-8 hover:shadow-2xl transition">
            <div className="flex justify-center mb-4 text-[#C30E59]">
              <FaLightbulb size={50} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To inspire creativity and innovation, empowering you to achieve more.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-3xl p-8 hover:shadow-2xl transition">
            <div className="flex justify-center mb-4 text-[#C30E59]">
              <FaCode size={50} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Skills</h3>
            <p className="text-gray-600">
              From design to development, we bring ideas to life with clean and efficient code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


