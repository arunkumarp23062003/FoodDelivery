import { useEffect, useState } from 'react';
import { BiSolidUser } from 'react-icons/bi';
import { BsSearch, BsCart } from 'react-icons/bs';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import axios from 'axios';
import { useCartDetail } from '../Context/CartContext';


const MobileNav = () => {

    const { cartItem } = useCartDetail();

    const navigate = useNavigate();

    const { user } = useAuth();

    const NavigateToCart = () => {
        if (user !== null) {
            navigate('/delivery/cart');
        } else {
            navigate('/login');
        }

    }

    // if (user) {
    //     useEffect(() => {
    //         const fetchCartItems = async () => {
    //             const { email } = user;
    //             //console.log(email);
    //             try {
    //                 const response = await axios.get(`http://localhost:4000/auth/cartItem?email=${email}`);
    //                 //console.log(response);
    //                 setCartItem(response.data);
    //             }
    //             catch (err) {
    //                 console.log(err);
    //             }
    //         }
    //         fetchCartItems();
    //     });
    // }
    const toggleUserMenu = () => {
        navigate('/myProfile');
    }


    return (
        <>
            <div className='flex flex-column justify-between px-6 py-4 shadow-md md:hidden'>
                <h1 className='font-bold text-3xl'>zelo</h1>
                <div className='relative'>
                    <div className='flex items-center gap-3'>
                        <span className='w-10 h-10 flex items-center' onClick={NavigateToCart}><BsCart className='w-full h-full text-pink-700' />
                            {user &&
                                <span className='bg-red-600 rounded-full text-xs p-1 absolute text-white left-6 -top-1'>
                                    {cartItem.length}
                                </span>
                            }
                        </span>
                        <button
                            className='w-8 border border-black rounded-full p-1'
                            onClick={toggleUserMenu} // Toggle the user menu on button click
                        >
                            <BiSolidUser className='w-full h-full text-rose-600' />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

const LargeScreenNav = () => {
    const { cartItem } = useCartDetail();

    const [profile, setProfile] = useState(false);

    const handleProfile = () => {
        setProfile(!profile);
    }

    const { user, setUserState } = useAuth();

    const popUpButton = `flex justify-end pe-4 ps-7 `;

    const handleClick = () => {
        setProfile(!profile);
    }

    const navigate = useNavigate();

    //handle the logout button
    const handleLogout = () => {
        // Clear user data in context
        setUserState(null);
        setProfile(!profile);
        navigate('/');
    }

    const handleCartBtn = () => {
        console.log(user);
        console.log(cartItem.length);
    }

    const handleDeleteAccount = () => {
        navigate('/delete/account');
    }

    return (
        <>
            <div className='flex flex-column justify-between px-20 py-4 shadow-md hidden md:flex'>
                <div className='flex flex-column gap-3 w-2/3'>
                    <h1 className='font-bold text-3xl'>zelo</h1>
                    <div className="w-full flex flex-column border-2 border-black-400 p-2">
                        <BsSearch className='mt-1 mr-3' />
                        <input type="text" placeholder="Search for restaurant cuisine or dishes" className='w-full focus:outline-none' />
                    </div>
                </div>
                <div className='grid grid-rows-1 grid-flow-col gap-4 items-center'>
                    {user ? (
                        <Link to="/delivery/cart" className='w-10 h-7'>
                            <span className='w-10 h-10 flex'><BsCart className='w-full h-full text-pink-700 relative' />
                                <span className='bg-red-600 rounded-full text-xs p-1 text-white absolute '>
                                    {cartItem.length}
                                </span>
                            </span>
                        </Link>
                    ) : (
                        <Link to="/login" className='w-10 h-7'>
                            <span className='w-10 h-10 flex'><BsCart className='w-full h-full text-pink-700 relative' /></span>
                        </Link>
                    )}
                    <Link to="/login" className='text-gray-500 hover:text-black'>Login</Link>
                    <Link to="/signup" className='text-gray-500 hover:text-black'>Signup</Link>
                    <button className='text-gray-500 hover:text-black' onClick={handleProfile}>Profile</button>
                    {profile && <div className='absolute right-0 top-0 bg-pink-100 flex flex-col rounded-l-2xl space-y-2 w-1/4 '>
                        <p className='py-2 pe-3 ps-20 sm:ps-40 font-bold font-serif' >My Profile</p>
                        <hr className='bg-black h-0.5' />
                        <button className={popUpButton}>Orders</button>
                        <button className={popUpButton}>Wishlist</button>
                        {user && <div className=''>
                            <hr className='bg-black h-0.5' />
                            <button className='float-right pe-4 ps-7 text-lg' onClick={handleLogout}><b>Logout</b></button>
                        </div>}
                        {user &&
                            <button onClick={handleDeleteAccount} className='w-4/5 bg-pink-500 text-lg text-pink-100 mx-auto rounded-2xl py-2'>Delete the user Account</button>
                        }
                        <button onClick={handleClick} className='w-full bg-pink-600 text-pink-100 text-lg p-2 rounded-l-2xl font-serif'>Close</button>
                    </div>}
                </div>
            </div>
        </>
    )
}

const Navbar = () => {
    return (
        <nav>
            <MobileNav />
            <LargeScreenNav />
        </nav>

    )
}

export default Navbar;