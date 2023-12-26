import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import DeliveryHeroCards from './DeliveryHeroCards'; // Make sure to import this component

const DeliveryItems = () => {
    const { type } = useParams();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');

    // Define a state variable to store the fetched items
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Create a function to fetch food items
        const fetchFoodItems = async () => {
            try {  
                const response = await axios.get(`http://localhost:4000/food/menu/${type}?category=${category}`);
                setItems(response.data.message); // Update the state with the fetched items
            } catch (err) {
                console.log(err);
            }
        };

        // Invoke the fetchFoodItems function
        fetchFoodItems();
    }, [type, category]); // Make sure to include 'type' and 'category' in the dependency array

    return (
        <div className='py-4 lg:py-16'>
            <h1 className='text-xl text-gray-700 md:text-2xl font-bold capitalize'>{category ? category:type}</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 lg:gap-10'>
                {items.map(item => (
                    <DeliveryHeroCards key={item.Title} {...item} />
                ))}
            </div>
        </div>
    )
}

export default DeliveryItems;
