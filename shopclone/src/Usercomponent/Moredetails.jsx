import { useContext, useEffect, useRef, useState } from "react";
import { Contextapi } from "../Context/Contextapi";
import { useParams } from "react-router-dom";
import Footer from "../Footer";

function Moredetails() {

    const{cart,setCart}=useContext(Contextapi)
    const[moredetails,setMoredetails]=useState({})
    const{id}=useParams()
    const[fullimg,setFullimg]=useState('')
useEffect(()=>{
  let token=localStorage.getItem('token')
    fetch(`/user/more/${id}`,{
      headers:{'Authorization':`Bearer ${token}`}
    }).then((result)=>{ return result.json()}).then((data)=>{
        // console.log(data);
        if(data.status===200){
           setMoredetails(data.apiData)
           setFullimg(data.apiData.image1)
          
        }else{
           console.log(data.message);
        }
       
        })
},[])
   
function addcart(e,id,qty){
  let _cart={...cart}
  if(!_cart.items){
    _cart.items={}
  }if(_cart.items[id]>=qty){
    alert("Out Of stock")
    return
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

  setCart(_cart)
}
const imgr=useRef(fullimg)
console.log(imgr.current);

   
function clickimg(e,img){
  setFullimg(img)
}
    return ( 
        <>
        <section id="moredetails">
            <div className="container" id="prodetails">
                <div className="row">
                    <div className="col-md-6" id="single-pro-image">
                    <img   src={`/uploads/${fullimg}` }  id="MainImg" alt="" className="img"/>

<div className="smallimggroup">
<div className="small-img-col">
    <img src={`/uploads/${moredetails.image1}`}  onClick={(e)=>{clickimg(e,moredetails.image1)}} className="small-img " alt=""/>
</div> 
<div className="small-img-col"> 
    <img src={`/uploads/${moredetails.image2}`}  onClick={(e)=>{clickimg(e,moredetails.image2)}} className="small-img " alt="" />
</div> 
<div className="small-img-col"> 
    <img src={`/uploads/${moredetails.image3}`}  onClick={(e)=>{clickimg(e,moredetails.image3)}} className="small-img " alt="" />
</div>

</div>
                    </div>

                    <div className="col-md-6" id="single-pro-delails">
                    <h6>{moredetails.name}</h6>
        <h4>{moredetails.status}</h4>
        <h2>₹{moredetails.price}</h2>
      
     
        <button className=" btn btn-success" onClick={(e)=>{addcart(e ,moredetails._id ,moredetails.qty)}}>Add To Cart</button>
        <h4>Product Details</h4>
        <span>{moredetails.desc}</span>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
     );
}

export default Moredetails;

