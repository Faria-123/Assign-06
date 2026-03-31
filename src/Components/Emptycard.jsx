import React from 'react';

const Emptycard = () => {
    return (
        <div>
            <div class="max-w-3xl mx-auto p-6">
                <div class="bg-white rounded-2xl border border-dashed border-blue-400 p-8 shadow-sm">

                    <h2 class="text-2xl font-bold text-gray-900 mb-6">Your Cart</h2>

                    <h1>Products cards are Empty</h1>
                    <div class="flex justify-between items-end mb-8 px-2">
                        <span class="text-gray-400 font-medium">Total:</span>
                        <span class="text-3xl font-bold text-gray-900">0</span>
                    </div>

                    <button class="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold py-4 rounded-full transition-all active:scale-[0.98]">
                        Proceed To Checkout
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Emptycard;