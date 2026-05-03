"use client";

import { useState } from "react";
import BookingForm from "./BookingForm";

const AnimalDetailsClient = ({ animal }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      {/* 🐄 Animal Info */}
      <div className="border p-5 rounded-xl">
        <h1 className="text-2xl font-bold">{animal.name}</h1>
        <p>Breed: {animal.breed}</p>
        <p>Price: ৳ {animal.price}</p>
        <p>Weight: {animal.weight} KG</p>
        <p>Age: {animal.age} years</p>
        <p>Location: {animal.location}</p>
        <p className="mt-2">{animal.description}</p>
      </div>

      {/* 🔘 Button */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="mt-5 bg-green-600 text-white px-4 py-2 rounded"
      >
        {showForm ? "Close Booking" : "Book Now"}
      </button>

      {/* 📄 Form (toggle) */}
      {showForm && <BookingForm />}
    </div>
  );
};

export default AnimalDetailsClient;