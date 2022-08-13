import React from 'react'
import "./checkout_product.css";
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from '../stateprovider/StateProvider';

function Checkout_Product({id,title,image,price,rating}) {
  const [{basket},dispatch] = useStateValue();
  const removeFromBasket = () =>{
    dispatch({
      type:"REMOVE_FROM_BASKET",
      id : id,
    });
  }
  return (
    <div className='checkoutproduct'>
        <div className='checkproduct'>
            <img  className='checkout_img' src={image} alt="" />
            <div className="checkout_info">
                <p className='checkoutproduct_title' >{title}</p>
                <p className="_price">
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
                
                <button className='button' onClick={removeFromBasket} >remove from basket</button>
            

            </div>
        </div>

    </div>
  )
}

export default Checkout_Product