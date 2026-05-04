import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    // <div className="bg-[url('https://i.pinimg.com/1200x/8a/fe/83/8afe83b98f339de4c1dd34fde26a86d0.jpg')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
    <div className="h-[60vh] w-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 flex items-center rounded-lg shadow-2xl">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-white">

          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-2xl animate__animated animate__fadeInDown">
            Your Trusted Livestock Marketplace
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
            Explore healthy livestock and secure your booking in minutes.
          </p>

          <div className="flex gap-4">
            <Link href="/all-animals">
              <Button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white animate__animated animate__fadeInUp
  transition-all duration-300
  hover:scale-105 hover:shadow-lg hover:shadow-green-500/30">
                Browse Animals
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;