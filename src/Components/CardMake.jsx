import React, { useState } from 'react';
import { toast } from 'react-toastify';
// import { FileText, Star, Crown, TrendingUp, Briefcase, GraduationCap } from "lucide-react";
const CardMake = ({ product, carts, setCart }) => {
    // console.log(product);
    console.log(carts.length);
    const [add, setAdd] = useState(false);
    const handl = () => {

        const isAlreadyInCart = carts.find(item => item.id === product.id);
        setAdd(true);
        toast.success("Added To Cart!");
        if (!isAlreadyInCart) {

            setCart([...carts, product]);

        } else {
            alert("This item is already in your cart.");
        }
    };


    return (
        <div className="w-[380px] mb-[10px] rounded-2xl border border-gray-200 p-6 shadow-sm bg-white relative">


            <span className="absolute top-4 right-4 bg-yellow-100 text-yellow-600 text-sm px-3 py-1 rounded-full font-medium">
                {product.tag}
            </span>


            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 mb-4">
                <img src={product.icon} alt="" className='w-[30px] h-[30px]' />
            </div>


            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {product.name}
            </h2>


            <p className="text-gray-500 text-sm mb-4">
                {product.description}
            </p>


            <div className="mb-4">
                <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                <span className="text-gray-500 text-sm">/mo</span>
            </div>


            <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✔</span> {product.features[0]}
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✔</span> {product.features[1]}
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✔</span> {product.features[2]}
                </li>
            </ul>


            <button onClick={() => handl()}
                className="w-full py-3 rounded-full text-white font-medium 
      bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 transition">
                {add ? 'Added to Cart' : 'Buy Now'}
            </button>

        </div>
    );
};

export default CardMake;