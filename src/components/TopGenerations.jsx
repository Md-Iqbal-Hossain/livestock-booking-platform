import React from 'react';
import AnimalCard from './AnimalCard';

const TopGenerations = async () => {
    const res = await fetch('https://livestock-booking-platform-iqbal.vercel.app/data.json');
    const animals = await res.json();
    const topAnimals = animals.slice(0, 4);
    console.log(topAnimals);
    
    return (
        <div>
            <h1 className='text-2xl font-bold my-5'>Top Generations</h1>

            <div className='grid grid-cols-4 gap-5'>
                {
                    topAnimals.map(animal => <AnimalCard key={animal.id} animal={animal}/>)
                }
            </div>
        </div>
    );
};

export default TopGenerations;