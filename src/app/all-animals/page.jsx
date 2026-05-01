import AnimalCard from '@/components/AnimalCard';
import React from 'react';

const AllAnimalsPage = async () => {
    const res = await fetch('https://livestock-booking-platform-iqbal.vercel.app/data.json');
    const animals = await res.json();

    
    return (
        <div>
            <h1 className='text-2xl font-bold m-4'>All Animals</h1>

            <div className='grid grid-cols-4 gap-5'>
                {animals.map(animal => <AnimalCard key={animal.id} animal={animal} />)}
            </div>
        </div>
    );
};

export default AllAnimalsPage;