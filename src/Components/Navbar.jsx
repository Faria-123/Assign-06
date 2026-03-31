import React from 'react';

const Navbar = ({ carts }) => {
    return (
        <div>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="flex items-center gap-1 font-bold text-xl">
                        <h1 className='text-[1.5rem] bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text'>DigiTools</h1>
                    </div>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal gap-10 px-1 text-lg">
                        <li>
                            <a>Products</a>
                        </li>
                        <li>
                            <a>Features</a>
                        </li>
                        <li>
                            <a>Pricing</a>
                        </li>
                        <li>
                            <a>Testimonials</a>
                        </li>
                        <li>
                            <a>FAQ</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end gap-5">

                    <img src="./shopping-cart.png" alt="" className='relative' />
                    <p className='absolute top-3.5 right-[11.7rem] text-red-600 font-bold text-[1rem]'>{carts.length}</p>
                    <p>Login</p>
                    <a className="btn rounded-full text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;