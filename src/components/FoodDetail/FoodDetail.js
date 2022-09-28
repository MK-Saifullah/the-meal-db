import React from 'react';
import './FoodDetail.css'

const FoodDetail = (props) => {
    const cart = props.cart;
    // const {cart} = props;
    console.log(cart)
    // const {strCategoryThumb} = cart;

    // let name = '';
    // for(const food of cart){
    //     name = name + ' ' + food.strCategory + ','
    // }

    // let photo = '';
    // for(const food of cart){
    //     photo = photo + ' ' + food.strCategoryThumb;
    // }
    // console.log(props)
    // const {idCategory, strCategory} = cart;
    return (
        <div className='food-detail'>
            <h4>Food detail: {cart.length}</h4>
            {
                cart.map(ct => <><img style={{width:'100px'}} src={ct.strCategoryThumb} alt=""/> Name:{ct.strCategory}</>)
            }
        </div>
    );
};

export default FoodDetail;