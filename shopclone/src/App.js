import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Login from './Authcomponent/Login';
import Signup from './Authcomponent/Signup';
import Emailverify from './Authcomponent/Emailverify';
import Admindashbord from './Admincomponet/Admindashbord';
import Userdasbord from './Usercomponent/Userdashbord';
import Header from './Header';
import Productmanagement from './Admincomponet/Productmanagement';
import { Contextapi } from './Context/Contextapi';
import { useState } from 'react';
import Addproduct from './Admincomponet/Addproduct';
import Category from './Admincomponet/Category';
import Productupdate from './Admincomponet/Productupdate';
import Forgout from './Authcomponent/Forgout';
import Changpass from './Authcomponent/Changpass';
import Allcategory from './Admincomponet/Allcategory';
import Userproduct from './Usercomponent/Userproduct';
import Moredetails from './Usercomponent/Moredetails';
import Addcart from './Usercomponent/Addcart';

import Myorder from './Usercomponent/Myorder';
import Contect from './Usercomponent/Contect';
import Queryheand from './Admincomponet/Queryheand';
import Queryreplayform from './Admincomponet/Queryreplayform';
import Usercategory from './Usercomponent/Usercategory';
import Product from './Usercomponent/Products';
import Bannermanagement from './Admincomponet/Bannermanagement';
import Bannerupdate from './Admincomponet/Bannerupdate';
import Search from './Usercomponent/Search';
import About from './Usercomponent/About';
import Delivery from './Usercomponent/Delivery';
import Privacy from './Usercomponent/Privacy';
import Term from './Usercomponent/Term';


function App() {
  const[username,setUsername]= useState(localStorage.getItem('username'))
  const[token,setToken]= useState((localStorage.getItem("token")))
  const[cart,setCart]= useState(JSON.parse(localStorage.getItem("cart")))
  
 

  return ( 
   
    <>
    <Contextapi.Provider value={{username,setUsername,cart,setCart,token,setToken}}>
     <Router>
    <Header/>
      <Routes>
     
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/emailverify/:id' element={<Emailverify/>}></Route>
        <Route path='/admindashbord' element={<Admindashbord/>}></Route>
        <Route path='/userdashbord' element={<Userdasbord/>}></Route>
        <Route path='/product' element={<Productmanagement/>}></Route>
        <Route path='/addproduct' element={<Addproduct/>}></Route>
        <Route path='/query' element={<Queryheand/>}></Route>
        <Route path='/queryform/:id' element={<Queryreplayform/>}></Route>
        <Route path='/category' element={<Category />}></Route>
        <Route path='/allcategory' element={<Allcategory/>}></Route>
        <Route path='/productupdate/:id' element={<Productupdate />}></Route>
        <Route path='/forgout' element={<Forgout/>}></Route>
        <Route path='/changepass/:id/:token' element={<Changpass/>}></Route>
        <Route path='/home' element={<Userdasbord/>}></Route>
        <Route path='/userproduct' element={<Userproduct />}></Route>
        <Route path='/moredetails/:id' element={<Moredetails/>}></Route>
        <Route path='/cart' element={<Addcart/>}></Route>
        <Route path='/myorder/:username' element={<Myorder/>}></Route>
        <Route path='/contact' element={<Contect/>}></Route>
        <Route path='/usercategory' element={<Usercategory/>}></Route>
        <Route path='/productpage' element={<Product/>}></Route>
        <Route path='/bannerm' element={<Bannermanagement/>}></Route>
        <Route path='/bannerup/:id' element={<Bannerupdate/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/delivery' element={<Delivery />}></Route>
        <Route path='/privacy' element={<Privacy/>}></Route>
        <Route path='/trem' element={<Term/>}></Route>
      </Routes>
      
     </Router>
     </Contextapi.Provider>
    </>
   );
}

export default App;