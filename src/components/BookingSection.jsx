"use client";

import { useState } from "react";
import BookingForm from "./BookingForm";

const BookingSection = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="mt-26">
      {/* Button */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        {showForm ? "Close Booking" : "Book Now"}
      </button>

      {/* Form */}
      {showForm && <BookingForm />}
    </div>
  );
};

export default BookingSection;