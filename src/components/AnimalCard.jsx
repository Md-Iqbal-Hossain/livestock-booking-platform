import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';


const AnimalCard = ({animal}) => {
    return (
        <Card>
            <div>
                <Image src={animal.image} height={200} width={200} alt={animal.name} />
                

            </div>
        </Card>
    );
};

export default AnimalCard;