
import React from 'react';
import './App.css';
// import {BrowserRouter,  Routes,Route , Link } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Checkout from './components/checkout/Checkout';

function App() {
  return (
        <div className='App'>
          <>
            <Navbar/>
            <Home/>
            <Checkout/>
          </>
           


        </div>
    

        // <BrowserRouter>
        //   <Routes>
        //     <div className="App">

              
        //         <Route path  = "/checkout" element = {<Navbar/>} />
                 
               
        //         <Route path = "/login">
        //           <h1>login page</h1>
        //         </Route>
        //         <Route path = "/">
        //           <h1>Home page</h1>

        //         </Route>
              
              
              
              
        //     </div>
        //   </Routes>
        // </BrowserRouter>
    
    
  );
}

export default App;
