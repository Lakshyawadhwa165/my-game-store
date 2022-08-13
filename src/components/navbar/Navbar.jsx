import React from 'react'
import "./navbar.css" ;
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from '../stateprovider/StateProvider';
function Navbar() {
     const [{ basket }] = useStateValue();
     console.log(basket);

  return (
    <nav className='Navbar'>
    
            <img className='navbar_logo'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSofLYnEivGMw94KGfM6jk5WAjglaKDwxii6x7o6IDtY1yOTAwH5OaxN_VjSjwV1SV-R74&usqp=CAU" alt="" />
            <div className='navbar_search'>
                <input className='navbar_input' type="text"  />
                <SearchIcon className="navbar_searchIcon" />
            </div>
            <div className="navbar_nav">
                <a className='nabvar_link' href="">
                    <div className='nav_opt'>
                        
                            <h4> Hello</h4>
                            <h2>Sign In</h2>
                        
                    </div>
                </a>
                <a className='navbar_link' href="">
                    <div className='nav_opt'>
                        
                            <h4 >return</h4>
                            <h2> & Order</h2>
                        
                    </div>
                </a>
                <a className='navbar_link' href="">
                    <div className='nav_opt'>
                        
                            <h4>Your</h4>
                            <h2>Prime</h2>
                    
                    </div>
                </a>
            <div className='navbar_checkoutIcon'>
                <a href="">
                    <div className='nav_checkout_Icon'>
                    <ShoppingBasketIcon />
                    </div>
                </a>
                    <div className="nav_checkout_value">
                        <h2 className='checkout_value'> { basket?.length } </h2>
                    </div>
                

                
                
            </div>



            </div>
        

        
    </nav>
  )
}

export default Navbar;