import React from 'react';
import '.././App.css'
import CardMake from './CardMake';
import { use } from 'react';
const Card = ({ Promise, carts, setCart }) => {
    const products = use(Promise);
    // console.log(products);

    return (
        <div className='container mx-auto my-[30px]'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <CardMake product={product} carts={carts} setCart={setCart}></CardMake>)
                }
            </div>
        </div>
    );
};

export default Card;