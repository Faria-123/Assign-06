import React from 'react';
import Emptycard from './Emptycard';
import Selected from './Selected';

const Empty = ({ carts, setCart }) => {
    console.log(carts);
    const total = carts.reduce((sum, item) => sum + Number(item.price), 0);
    const dele = () => {
        const necarts = [];
        setCart(necarts);
    }
    return (
        <div>


            <div>
                {
                    (carts.length !== 0 && carts.map(cart => <Selected cart={cart} carts={carts} total={total} setCart={setCart}></Selected>))


                }

            </div>
            {
                (carts.length === 0 ? <Emptycard ></Emptycard> : (<div className='w-[400px] mx-auto'>
                    <div className="flex justify-between items-baseline mb-8 px-2">
                        <span className="text-gray-400 font-medium text-sm">Total:</span>
                        <span className="text-3xl font-bold text-gray-900 leading-none">
                            {total}
                        </span>
                    </div>

                    {/* Action Button - Matches the purple rounded button */}
                    <button onClick={dele} className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold py-4 rounded-full transition-all active:scale-[0.98] shadow-lg shadow-purple-100">
                        Proceed To Checkout
                    </button>
                </div>))
            }



        </div>
    );
};

export default Empty;