import React from 'react';
import '.././App.css'
const Star = () => {
    return (
        <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-center py-7'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                <div>
                    <h1 className='letter'>50K+</h1>
                    <p className='min'>Active Users</p>
                </div>
                <div>
                    <h1 className='letter'>200+</h1>
                    <p className='min'>Premium Tools</p>
                </div>
                <div>
                    <h1 className='letter'>4.9</h1>
                    <p className='min'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Star;