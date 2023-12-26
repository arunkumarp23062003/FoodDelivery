import React from 'react'
import backgroundImage from '../../assets/Homepage-Background.avif';
import { FiSearch } from 'react-icons/fi'
import HomeNavbar from './HomeNavbar';

const HomeHeader = () => {
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', // You can adjust background properties as needed
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        width: '100%',
        height: '100%', // Adjust the height as needed
    };

    return (
        <div className='w-full h-full' style={{ height: "500px" }}>
            <div style={backgroundStyle}>
                <HomeNavbar />
                <div className=' h-4/5 w-full flex flex-col items-center justify-center gap-3 px-10'>
                    <div className='bg-pink-600 px-9 py-5 rounded-3xl'>
                        <h1 className='text-2xl text-pink-100 font-bold sm:animate-pulse'>Zelo</h1>
                    </div>
                    <p className='text-2xl text-pink-100 font-bold text-center'>Discover the best food and drinks</p>
                    <div className='flex items-center w-full justify-center'>
                        <FiSearch className=' text-pink-600 w-10 bg-gray-300 p-2 h-10 rounded-md rounded-r-none' />
                        <input type="text" className='w-full max-w-xl bg-gray-300 text-xl p-2 ps-4 h-10 rounded-xl rounded-l-none outline-none' placeholder='Search the best Dish' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader