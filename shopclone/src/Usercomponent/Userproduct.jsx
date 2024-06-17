import { useContext, useEffect, useState,  } from "react";
import { Link } from "react-router-dom";
import { Contextapi } from "../Context/Contextapi";
import Footer from "../Footer";
import React from 'react'



function Userproduct() {
 
//   console.log("heloo ji");
    const{cart,setCart}=useContext(Contextapi)
    const[product,setProduct]=useState([])
    useEffect(()=>{
        let token=localStorage.getItem('token')
        fetch('/user/showproduct',{
            headers:{'Authorization':`Bearer ${token}`}
        }).then((result)=>{return result.json()}).then((data)=>{
            // console.log(data);
            if(data.status===200){
                setProduct(data.apiData)
              
            }else{
                console.log(data.message)
            }
        })
    },[])

    

function addcart(e ,id,qty){
// console.log(id);
let _cart={...cart}
if(!_cart.items){
    _cart.items={}
}

if(!_cart.items[id]){
    _cart.items[id]=1
}else{
    _cart.items[id]+=1
}
if(!_cart.totalitems){
    _cart.totalitems=1
}else{
    _cart.totalitems+=1
}

if(_cart.items[id]>=qty){
    alert("Out Of stock")
    return
}

setCart(_cart)
localStorage.setItem("cart",JSON.stringify(_cart))

}
    return ( 
        <>
     <section id="product1">
     <div className="container-fluid" >
        <div className="row">
        <h2>Featured Products</h2>
       
            {
               product.map((value)=>(
                
              
                 <div className="col-md-3" key={value._id}>
                     
                        <Link to={`/moredetails/${value._id}`}>
                <img src={`uploads/${value.image1}`} alt="" className="img-fluid"/>
                </Link>
                <div className="des">
                    <span>{value.category}</span>
                    <h6>{value.name}</h6>
                    <h5>{value.desc}</h5>
                    <div className="star">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                    </div>
                   
                    <h4>₹{value.price}</h4>
                </div>
                <Link to={`/moredetails/${value._id}`} className="link-1">
                <i className="bi bi-arrow-right"></i>
                </Link>
                <Link className="link"><i onClick={(e)=>{addcart(e,value._id, value.qty)}} className="bi bi-bag"></i></Link>
               
               
                </div>
                
             
               
               )) 
              
            }
        </div>
     </div>
 </section>
 <Footer/>
 </>
    );
}

export default  React.memo(Userproduct);