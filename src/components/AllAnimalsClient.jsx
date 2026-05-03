"use client";

import React, { useState } from "react";
import AnimalCard from "./AnimalCard";

const AllAnimalsClient = ({ animals }) => {
  const [sortedAnimals, setSortedAnimals] = useState(animals);

  const handleSort = (type) => {
    let sorted = [...animals];

    if (type === "low") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (type === "high") {
      sorted.sort((a, b) => b.price - a.price);
    }

    setSortedAnimals(sorted);
  };

  return (
    <div>

      <div className="flex gap-4 mb-4">
        <button
          onClick={() => handleSort("low")}
          className="px-4 py-2 border rounded-md"
        >
          Price: Low → High
        </button>

        <button
          onClick={() => handleSort("high")}
          className="px-4 py-2 border rounded-md"
        >
          Price: High → Low
        </button>
      </div>


      <div className="grid grid-cols-4 gap-5">
        {sortedAnimals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AllAnimalsClient;