import React from 'react';
import './product.css';
import StarIcon from '@mui/icons-material/Star';
import {useStateValue} from "../stateprovider/StateProvider";


function Product({id,title,image,price,rating}) {
  const [{},dispatch] = useStateValue();
  const addToBasket = () =>{
    // add item to basket
    dispatch({
      type: 'ADD_TO_BASKET',
      item : {
        id : id,
        title:title,
        image: image,
        price: price,
        rating: rating,

      },
    });


  };
  return (
    <div className='product'>
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div>
          {
            Array(rating).fill().map((_)=>(
              <span><StarIcon/></span>
            ))
          }
        </div>
        <img className='img' src={image} alt="" />
        <button className='button' onClick={addToBasket}>Add to Basket</button>
      </div>
    </div>
  )
}

export default Product