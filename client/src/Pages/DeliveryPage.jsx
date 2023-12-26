import React from 'react'
import DeliveryFoodCategory from '../Components/Delivery/DeliveryHeader/DeliveryFoodCategory'
import DeliveryHeroContainer from '../Components/Delivery/DeliveryBody/DeliveryHeroContainer'

const DeliveryPage = () => {
  return (
    <>
      <div className='md:pl-10 lg:px-20'>
        <DeliveryFoodCategory />
        <DeliveryHeroContainer />
      </div>
    </>
  )
}

export default DeliveryPage