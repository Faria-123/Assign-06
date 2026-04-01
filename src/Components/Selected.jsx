import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Selected = ({ cart, total, carts, setCart }) => {
    // Calculate the sum of all item prices in the array
    const onRemove = () => {
        toast.success("Deleted Cart!")
        const newCart = carts.filter(c => c.id !== cart.id);

        setCart(newCart);

    }
    return (
        <div className="max-w-3xl mx-auto p-6">

            <div className="bg-white rounded-2xl border border-dashed border-blue-400 p-8 shadow-sm">

                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-sans">Your Cart</h2>


                <div className="space-y-4 mb-8">

                    <div key={cart.id} className="flex items-center justify-between p-4 bg-gray-50/50 rounded-xl border border-gray-100">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm overflow-hidden p-2">

                                <img src={cart.icon} alt="" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 text-base">{cart.name}</h3>
                                <p className="text-gray-400 text-sm">${cart.price}</p>
                            </div>
                        </div>


                        <button
                            onClick={onRemove}
                            className="text-pink-500 hover:text-pink-600 font-medium text-sm transition-colors px-2"
                        >
                            Remove
                        </button>
                    </div>

                </div>



            </div>
        </div>
    );
};

export default Selected;
// export default Selected;