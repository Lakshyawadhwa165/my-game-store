import React from 'react'
import "./navbar.css" ;
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from '../stateprovider/StateProvider';
import { Link } from 'react-router-dom';
// import {auth} from "../../firebase";
function Navbar() {
     const [{ basket,user }] = useStateValue();
    //  const login = () => {
    //     auth.signOut();

    //  }
     

  return (
    <nav className='Navbar'>
            <Link to = "/">
                <img className='navbar_logo'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSofLYnEivGMw94KGfM6jk5WAjglaKDwxii6x7o6IDtY1yOTAwH5OaxN_VjSjwV1SV-R74&usqp=CAU" alt="" />
            </Link>
            <div className='navbar_search'>
                <input className='navbar_input' type="text"  />
                <SearchIcon className="navbar_searchIcon" />
            </div>
            <div className="navbar_nav">
                <Link to={"/Login"}>
                    <div className='nav_opt'>
                            
                            <h4>Hello {user?.email}</h4>
                            <h2> & sign in </h2>
                        
                    </div>
                </Link>
                
                
                
                <a className='navbar_link' href="">
                    <div className='nav_opt'>
                        
                            <h4 >return</h4>
                            <h2> & Order</h2>
                        
                    </div>
                </a>
                
              
                    <div className='nav_opt'>
                        
                            <h4>Your</h4>
                            <h2>Prime</h2>
                    
                    </div>
                
            <Link to="/Checkout">
                <div className='navbar_checkoutIcon'>
                    <div className='nav_checkout_Icon'>
                        <ShoppingBasketIcon />
                    </div>
                    <div className="nav_checkout_value">
                        <h2 className='checkout_value'> { basket?.length } </h2>
                    </div>
                

                
                
                </div>
            </Link>



            </div>
        

        
    </nav>
  )
}

export default Navbar;