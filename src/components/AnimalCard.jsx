import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const AnimalCard = ({ animal }) => {
    return (
        // <Card className='border rounded-xl'>
        <Card className="border rounded-xl animate__animated animate__fadeInUp">
            <div className='relative w-full aspect-square animate__animated animate__zoomIn'>
                <Image src={animal.image} fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' alt={animal.name} className='object-center rounded-xl'/>

                <Chip className='absolute right-2 bottom-2'>{animal.category}</Chip>
            </div>

            <div>
                <h2 className='font-medium'>{animal.name}</h2>
            </div>

            <div className='flex gap-2'>
                <div>
                    <p>৳ {animal.price}</p>
                </div>

                <Separator orientation='vertical' />

                <div>
                    <p>{animal.weight} KG</p>
                </div>
            </div>

            <Link href={`all-animals/${animal.id}`}>
                <Button variant='outline' className={'w-full transition-transform duration-300 hover:scale-105'}>Details</Button>
            </Link>
        </Card>
    );
};

export default AnimalCard;