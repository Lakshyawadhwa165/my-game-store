import React from 'react';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Checkout from './components/checkout/Checkout';
import Login from './components/authen/Login';
import Register from './components/authen/Register';
import Dashboard from './components/authen/Dashboard';
// import {useStateValue} from './components/stateprovider/StateProvider';
// import {auth} from "./firebase";

function App() {
  // const [{user},dispatch] = useStateValue();
  // piece of code that runs in a given cond.
  // useEffect(() => {
  //     const unsubscribe = auth.onAuthStateChanged((authUser) =>{
  //       if (authUser){
  //         dispatch ({
  //           type: "SET_USER",
  //           user: authUser
  //         });

  //       } else {
  //           dispatch({
  //             type: "SET_USER",
  //             user: null
  //           });
  //       }

  //     });
  //     return () =>{
  //       unsubscribe();
  //     }

  //    }, []);
  //    console.log(user);
  


  return (
        <div className='App'>
          <Routes>
            
             <Route path='/checkout' element = {
                <>
                  <Navbar/>
                  <Checkout/>
                </>
            }/> 
             <Route path='/' element = {
                <>
                  <Navbar/>
                  <Home/>
                </>

            
            }/> 
             <Route path='/Login' element = {
                <>
                  <Login/>
                </>
             }/> 
             <Route path='/Register' element = {
                
                  <Register/>
                
             }/> 
             <Route path='/Dashboard' element = {
                <>
                  <Dashboard/>
                </>
             }/>  
            
            </Routes>
             
            
          
           


        </div>
    

  );
}

export default App;
