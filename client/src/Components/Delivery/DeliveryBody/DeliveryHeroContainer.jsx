import React, { useEffect, useState } from 'react';
import DeliveryHeroCards from './DeliveryHeroCards';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DeliveryHeroContainer = () => {
    const { type } = useParams();
    const [items, setItems] = useState([]);
    useEffect(() => {
        const fetchFoodList = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/food/menu/${type}`);
                setItems(response.data.message);
                //console.log(response.data.message);
            } catch (err) {
                console.log(e.message);
            }
        }
        fetchFoodList();
    }, [type])
    return (
        <div className='py-4 lg:py-16'>
            <h1 className='text-xl text-gray-700 md:text-2xl font-bold capitalize'>{type}</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 lg:gap-10'>
                {items.map(item => (
                    <DeliveryHeroCards key={item.Title} {...item} />
                ))}
            </div>
        </div>
    )
}

export default DeliveryHeroContainer;