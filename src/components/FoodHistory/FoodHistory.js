import React, { useEffect, useState } from 'react';
import SingleFood from '../SingleFood/SingleFood';
import './FoodHistory.css'

const FoodHistory = (props) => {
    // console.log(props)
   const {handleAddToCart} = props;
    const [foods, setFoods] = useState([]);
    useEffect( ()=> {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setFoods(data.categories)})
    },[]);

    return (
        <div className='food-history'>
            {
                foods.map(food => <SingleFood handleAddToCart={handleAddToCart} food ={food}></SingleFood>)
            }
        </div>
    );
};

export default FoodHistory;