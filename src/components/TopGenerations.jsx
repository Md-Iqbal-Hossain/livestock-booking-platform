"use client";

import { useEffect, useState } from "react";
import AnimalCard from "./AnimalCard";

const TopGenerations = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const res = await fetch("/data.json");
      const data = await res.json();

      setAnimals(data.slice(0, 4));
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-lg font-semibold">
          Loading featured animals... 🐄
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold my-5">Featured Animals</h1>

      <div className="grid grid-cols-4 gap-5">
        {animals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default TopGenerations;