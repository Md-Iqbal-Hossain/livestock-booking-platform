
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


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {sortedAnimals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AllAnimalsPage;