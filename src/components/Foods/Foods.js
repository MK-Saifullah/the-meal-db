import React, { useState } from 'react';
import FoodDetail from '../FoodDetail/FoodDetail';
import FoodHistory from '../FoodHistory/FoodHistory';
import './Foods.css'

const Foods = () => {
    const [cart, setCart] = useState([]);
    const handleAddToCart = (food) => {
        // console.log('added',food)
        const newCart = [...cart, food];
        setCart(newCart);
        // console.log(newCart)
    }
    return (
        <div className='foods-container'>
            <div className='food-history'>
                <FoodHistory handleAddToCart={handleAddToCart}></FoodHistory>
            </div>
            <div className='food-info'>
                {/* <h2>Order: {cart.length}</h2> */}
                <FoodDetail cart = {cart}></FoodDetail>
            </div>
        </div>
    );
};

export default Foods;