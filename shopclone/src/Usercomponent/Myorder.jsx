import { useContext, useEffect, useState } from "react";
import { Contextapi } from "../Context/Contextapi";
import Footer from "../Footer";


function Myorder() {
 const[myorder,setMyorder]=useState([])
    const{username}=useContext(Contextapi)
    let token=localStorage.getItem('token')
    useEffect(()=>{
       
        fetch(`/user/myorder/${username}`,{
            headers:{'Authorization':`Bearer ${token}`}
        }).then((respons)=>{ return respons.json()}).then((data)=>{
            // console.log(data);
            if(data.status===200){
               setMyorder(data.apiData)
               
            }else{
                console.log(data.message);
            }
        })
    },[])
    
    function myorderdelete(e,id){
        
        fetch(`/user/orderdelete/${id}`,{
            method:"Delete",
            headers:{'Authorization':`Bearer ${token}`}
        }).then((respons)=>{return respons.json()}).then((data)=>{
            //   console.log(data);
            if(data.status===200){
                alert(data.message)
                let x=myorder.filter((value)=>{
                    return value._id!==id
                   })
                   setMyorder(x)
            }    else{
                console.log(data.message);
            }
        })

    }
    return ( 
        <>
    <section id="myorder">
        <div className="container">
        <div className="row">
            <h2>My Oreder</h2>
        <div className="col-md-12">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Order ID</th>
                        <th>Items</th>
                        <th>Image</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Order Cancel</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myorder.map((value,key)=>(
                       <tr key={value._id}>
                        <td>{key+1}</td>
                        <td>{value._id}</td>
                        <td>{value.name}</td>
                        <td><img style={{width:'100px'}} src={`/uploads/${value.img}`}/></td>
                        <td>{value.pdate}</td>
                        <td>{value.price}</td>
                        <td>{value.qty}</td>
                        <td><button onClick={(e)=>{myorderdelete(e,value._id)}}>Cancel</button></td>
                      </tr>
                        ))
                    }
                      
                </tbody>
            </table>
        </div>
       
        </div>
        </div>
    </section>
    <Footer/>
    </>
     );
}

export default Myorder;