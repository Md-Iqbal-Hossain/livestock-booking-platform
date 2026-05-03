"use client";

import { useState } from "react";
import { toast } from "react-toastify";

const BookingForm = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        console.log("Booking Data:", form);


        toast.success("Booking Successful ✅");


        setForm({
            name: "",
            email: "",
            phone: "",
            address: "",
        });
    };

    return (
        <div className="border rounded-xl p-6 mt-6">
            <h2 className="text-xl font-bold mb-4">Book This Animal</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">

                <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="border p-2 rounded"
                />

                <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="border p-2 rounded"
                />

                <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="border p-2 rounded"
                />

                <textarea
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Address"
                    required
                    className="border p-2 rounded"
                />

                <button
                    type="submit"
                    className="bg-green-600 text-white py-2 rounded"
                >
                    Confirm Booking
                </button>

            </form>
        </div>
    );
};

export default BookingForm;