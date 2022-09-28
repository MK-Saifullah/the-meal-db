import React from 'react';
import './SingleFood.css';

const SingleFood = (props) => {
    const {handleAddToCart, food} = props
    const {idCategory, strCategory, strCategoryThumb} = food;
    return (
        <div className='single-food'>
            <p>id: {idCategory}</p>
            <img src={strCategoryThumb} alt=""/>
            <h2>name: {strCategory}</h2>
            <button onClick={()=> handleAddToCart(food)} className='btn-info' type="">Select Item</button>
        </div>
    );
};

export default SingleFood;