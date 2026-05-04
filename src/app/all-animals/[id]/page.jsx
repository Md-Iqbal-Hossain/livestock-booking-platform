import Image from 'next/image';
import BookingForm from "@/components/BookingForm";
import BookingSection from "@/components/BookingSection";
import { notFound } from "next/navigation";
import React from 'react';

const AnimalDetailPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch('https://livestock-booking-platform-iqbal.vercel.app/data.json');
    const animals = await res.json();

    const animal = animals.find(a => a.id == id);

    if (!animal) {
        notFound();
    }

    console.log(animals);


    return (
        <div className="max-w-6xl mx-auto p-6">

            <h1 className="text-3xl font-bold mb-6">{animal.name}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


                <div>

                    <Image
                        src={animal.image}
                        alt={animal.name}
                        width={500}
                        height={400}
                        className="rounded-xl"
                    />
                </div>


                <div className="space-y-4">

                    <p className="text-lg text-gray-600">{animal.description}</p>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <p><span className="font-semibold">Type:</span> {animal.type}</p>
                        <p><span className="font-semibold">Breed:</span> {animal.breed}</p>
                        <p><span className="font-semibold">Weight:</span> {animal.weight} kg</p>
                        <p><span className="font-semibold">Age:</span> {animal.age} years</p>
                        <p><span className="font-semibold">Location:</span> {animal.location}</p>
                        <p><span className="font-semibold">Category:</span> {animal.category}</p>
                    </div>


                    <h2 className="text-2xl font-bold text-green-600 mt-4">
                        ৳ {animal.price.toLocaleString()}
                    </h2>


                    {/* <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition">
                        Book Now
                    </button> */}
                    <BookingSection />
                </div>
            </div>

            {/* <BookingForm /> */}

        </div>
    );
};

export default AnimalDetailPage;

