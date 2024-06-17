import { useContext, useEffect, useState } from "react";
import { Contextapi } from "../Context/Contextapi";
import { Link, useNavigate } from "react-router-dom";

function Addcart() {
    const{cart, setCart ,username}=useContext(Contextapi)
    const[userdata,setUserdata]=useState([])
    const[mess,setMess]=useState('')
   let navigat=useNavigate()

   
    useEffect(()=>{
        if(!cart.items){
            return
            }
            let token=localStorage.getItem('token')
        fetch('/user/cartproduct',{
            method:"POST",
            headers:
            {"Content-Type":"application/json",
            'Authorization':`Bearer ${token}`
             },
            body:JSON.stringify({ids:Object.keys(cart.items)})
        }).then((result)=>{ return result.json()}).then((data)=>{
            // console.log(data);
            if(data.status===200){
              setUserdata(data.apiData)
             
            }else{
               setMess(data.message)
            }
        })
    },[])
  
     let totalAmount=0
let heandlqty=(id)=>{
    let qty=cart.items[id]
    return qty
}
  let headlprice=(id,price)=>{
    let pprice=heandlqty(id)*price
    totalAmount+=pprice
    return pprice
  }
  
  function incres(e,id,qty,){
   let currentqty= heandlqty(id)
   if(currentqty===qty){
    alert("you have reached to max qty")
        return
   }
   let _cart={...cart}
   _cart.items[id]=currentqty+1
   _cart.totalitems+=1
   setCart(_cart)
  }
  function desrics(e,id,qty){
    let currentqty=heandlqty(id)
 
    if(currentqty===1){
        alert("you have atleast one product in the cart")
        return
    }
    let _cart={...cart}
     _cart.items[id]=currentqty-1
     _cart.totalitems-=1
     setCart(_cart)
 }
function removecart(e,id ,qty){
      var currentqty=heandlqty(id)
    let _cart={...cart}
   delete _cart.items[id]
   _cart.totalitems -=currentqty
   setCart(_cart)

   let newuserdata=userdata.filter((value)=>{
    return value._id!==id
   })
  setCart(newuserdata)
   setUserdata(newuserdata)
   localStorage.setItem("cart",JSON.stringify(newuserdata))
  
}
function heandlcheak(e){
   
    let object={cart,username,}
    let token=localStorage.getItem('token')
    fetch('/user/cheakout',{
        method:"POST",
        headers:
        {"Content-Type":"application/json",
        'Authorization':`Bearer ${token}`
          },
        body:JSON.stringify(object)
    }).then((respones)=>{ return respones.json()}).then((data)=>{
        console.log(data);
        if(data.status===201){
            setCart('')
            localStorage.setItem('cart',JSON.stringify(''))
            alert(data.message)     
           }else{   
            console.log(data.message);
           }
    })
}

  if(!cart.items){
    return (
        <section id="blank-cart">
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                    <img src={`/media/cart.webp`}  className="img-fluid"/>
            <h3 >Hey, it feels so light!</h3>
            <h4>There is nothing in your bag. Let's add some items.</h4>
            <Link to='/home'>
            <div className="emptyCart"><div data-testid="button" className="button-base-button emptyCart-base-wishlistButton ">ADD ITEMS FROM WISHLIST</div></div></Link>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </section>
    );
  }
    return ( 
        <section id="cart">
        <div className="container-fluid" >
           
           <div className="row">
            <h2>My Cart</h2>
           <div className="col-md-3"></div>
           <div className="col-md-6">
            <div className="col-md-6-firstchild">
           {
            userdata.map((value, k)=>(
            <div className="first-main" key={value._id}>
           <div id='main-div'>
        <div>
            <h3>Product-{value.name}</h3>
            <p>Price-{headlprice(value._id ,value.price)}</p>
            <p>Quantity-{heandlqty(value._id)}</p>
        </div>
        
        <div>
            <img  src={`uploads/${value.image1}`} className='img-fluid'/>
        </div>
        </div>
        <div id='second-div'>
          <div id='div-1'>
          <button onClick={(e)=>{desrics(e,value._id ,value.qty)}}>-</button>
          <span>{heandlqty(value._id)}</span>
          <button onClick={(e)=>{incres(e,value._id ,value.qty)}}>+</button>
          </div>
          <div id='div-2'>
          <button className='btn btn-danger' onClick={(e)=>{removecart(e ,value._id)}}>Remove</button>
          </div>
        </div>
           </div>
            ))
           }
           </div>
           <h4>Total Amount pay: <span> {totalAmount}</span></h4>
           
           <button onClick={(e)=>{heandlcheak(e)}} className="btn btn-success d-flex ms-auto">Check Out</button>
            </div>
           
           <div className="col-md-3"></div>
            </div>
        </div>
        </section>
     );
}

export default Addcart;