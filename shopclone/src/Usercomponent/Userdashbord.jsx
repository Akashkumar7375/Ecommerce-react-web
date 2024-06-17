import { useContext, useEffect, useState } from "react";
import Userproduct from "./Userproduct";
import { Contextapi } from "../Context/Contextapi";
import { useNavigate } from "react-router-dom";
import axios from "axios"

function Userdasbord() {

    
    const{username}=useContext(Contextapi)
    let navigator=useNavigate()
  
    
    const [bannerd, setBannerd] = useState([])
   
    async function fecht(){
        const res =await axios.get('/admin/banner')
           console.log(res.data);
           if(res.data.status===200){
               setBannerd(res.data.apiData)
           }else{
               console.log(res.data.message)
               
           }
      
   }
    useEffect(()=>{
      fecht()
    },[])




   
    if(!username){
        navigator('/')
    }else{
    return ( 
        <>
          <section id="banner">
            <div className="container-fluid">
                <div className="row">
                   <div className="col-md-12 p-0">
                    {bannerd.map((value)=>(
                        <div key={value._id}>
                        <img src={`/uploads/${value.image}`} className="img-fluid" alt="error" />
                        </div>
                        
                         ))
                   }
                   
                   </div>
                </div>
            </div>
        </section>
       
        <section id="description">
        <div className="container-fluid">
            <div className="row">
            <div className="col-md-2">
        <img src="media/d2.avif"  alt="error"/>
        <h6>Free Shipping</h6>
    </div>
    <div className="col-md-2">
        <img src="media/d3.avif" alt="error"/>
        <h6>Online Order</h6>
    </div>
    <div className="col-md-2 ">
        <img src="media/d1.avif" alt="error"/>
        <h6>Save Money</h6>
    </div>
    <div className="col-md-2">
        <img src="media/d4.avif" alt="error"/>
        <h6>Promotions</h6>
    </div>
    <div className="col-md-2">
        <img src="media/d5.avif" alt="error"/>
        <h6>Happy Sell</h6>
    </div>
    <div className="col-md-2">
        <img src="media/d6.avif" alt="error"/>
        <h6>F24/7 Support</h6>
    </div>
            </div>
        </div>
    </section>
        <Userproduct  alt="error"/>
        </>
     );
    }
}

export default Userdasbord;