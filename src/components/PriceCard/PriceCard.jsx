import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-4 p-4 rounded-md flex flex-col'>
            <h2 className='text-center'>
                <span className='text-purple-700 text-5xl font-bold'>{price.price}</span>
                <span className='text-2xl font-bold'>/mon</span>
            </h2>
            <h5 className='text-2xl text-center font-bold my-6'>{price.name}</h5>
            <p className='underline text-2xl text-bold text-purple-950'>Features:</p>
            {
                price.features.map((feature, idx) => <Feature
                    key={idx}
                    feature={feature}
                ></Feature>)
            }
            <button className='hover:bg-green-950 w-full mt-auto bg-pink-700 py-2 rounded-md font-bold'>Buy Now</button>
        </div>
    );
};

export default PriceCard;