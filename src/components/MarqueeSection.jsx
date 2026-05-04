"use client";

import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  return (
    <div className="bg-green-600 text-white py-2 mt-6">
      <Marquee speed={50} pauseOnHover={true} gradient={false}>
        🐄 Fresh & Healthy Cows Available | 🐐 Premium Goats Ready for Qurbani | 🚚 Fast Delivery Across Bangladesh | 💰 Best Price Guaranteed
      </Marquee>
    </div>
  );
};

export default MarqueeSection;