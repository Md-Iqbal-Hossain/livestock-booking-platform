// import AnimalCard from '@/components/AnimalCard';
// import AllAnimalsClient from "@/components/AllAnimalsClient";
// import React from 'react';

// const AllAnimalsPage = async () => {
//     const res = await fetch('https://livestock-booking-platform-iqbal.vercel.app/data.json');
//     const animals = await res.json();

    
//     return (
//         <div>
//             <h1 className='text-2xl font-bold m-4'>All Animals</h1>

//             {/* <div className='grid grid-cols-4 gap-5'>
//                 {animals.map(animal => <AnimalCard key={animal.id} animal={animal} />)}
//             </div> */}

//             <AllAnimalsClient animals={animals} />
//         </div>
//     );
// };

// export default AllAnimalsPage;




// ------------------------------------------------------------------------------




"use client";

import AnimalCard from "@/components/AnimalCard";
import { useEffect, useState } from "react";

const AllAnimalsPage = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();

      setAnimals(data);
      setLoading(false);
    };

    fetchData();
  }, []);


  const sortedAnimals = [...animals].sort((a, b) => {
    if (sortOrder === "low") return a.price - b.price;
    if (sortOrder === "high") return b.price - a.price;
    return 0;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-60">
        <p className="text-lg font-semibold">Loading animals... 🐄</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold m-4">All Animals</h1>


      <div className="m-4">
        <select
          onChange={(e) => setSortOrder(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Sort by Price</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>


      <div className="grid grid-cols-4 gap-5">
        {sortedAnimals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AllAnimalsPage;