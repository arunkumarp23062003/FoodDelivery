import React from 'react'
import DeliveryFoodCategory from '../Components/Delivery/DeliveryHeader/DeliveryFoodCategory';
import DeliveryItems from '../Components/Delivery/DeliveryBody/DeliveryItems';

const DeliveryCategory = () => {
    return (
        <div className='p-3'>
            <>
                <div className='md:pl-10 lg:px-20'>
                    <DeliveryFoodCategory />
                    <DeliveryItems />
                </div>
            </>
        </div>
    )
}

export default DeliveryCategory;