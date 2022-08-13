import React from "react";
import Checkout_Product from "../checkoutproduct/Checkout_Product";
import Navbar from "../navbar/Navbar";
import {useStateValue} from "../stateprovider/StateProvider";
import "./checkout.css";
import Subtotal from "../subtotal/Subtotal";


function Checkout() {
    const [{basket}] = useStateValue();

  return (
    <div className="checkout">
        <Navbar/>
        <img className="checkout_ad" src="https://www.wordstream.com/wp-content/uploads/2021/07/banner-ads-examples-aws.jpg.webp" alt="" />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Amazon Cart is empty</h2>
          </div> 
          ):(
          <div>
            <h2 className="checkout_title">
              Your shopping basket!!
            </h2>
          {basket?.map((item) =>{
            console.log(item);
            return(

          
            <Checkout_Product
            id = {item.id}
            title ={item.title}
            image ={item.iamge}
            price = {item.price}
            rating = {item.rating} 
            />
          );
        })}
          </div>
          )}
          {
            basket.length > 0 && (
              <div className="checkout_right">
                <Subtotal/>

              </div>
            )
          }
    </div>
  );
}

export default Checkout