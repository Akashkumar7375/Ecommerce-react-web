import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Changpass() {


    const[newpass,setNewpass]=useState('')
    const[cpass,setCpass]=useState('')
 let navigate=  useNavigate()
    
let formreset=(e)=>{
e.preventDefault()
setCpass('')
setNewpass('')
}

let{id,token}=useParams()
console.log(token);


 let controlform=(e)=>{
    e.preventDefault()
    
    let fdata={newpass,cpass}
     fetch(`/auth/resetpassword/${id}`,{
       method:"POST",
       headers:{"Content-Type":"application/json"},
       body:JSON.stringify(fdata)
    }).then((response)=>{return response.json()}).then((data)=>{
        console.log(data);
        if(data.status===200){
            navigate('/',{state:{message:data.message}})
        }
    })
    

}
// useEffect(()=>{
//     fetch('/auth/tokenverify').then((response)=>{return response.json()})
//     .then((data)=>{
//         console.log(data);
//     })
// },[])
if(!token){
    return(
        <>dshgsdjs</>
    );
   
    }else{
        return ( 
            <>
             <section id="forgut">
                <div className="container">
                <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6" id="emailsend">
                    <h2 className="text-center">Reset your password</h2>
                    <form onSubmit={(e)=>{controlform(e)}}>
                        <label>New Password</label>
                        <input type="text" className="form-control" value={newpass}
                        onChange={(e)=>{setNewpass(e.target.value)}}
                        />
                        <label>Confirm Password</label>
                        <input type="text" className="form-control" value={cpass}
                         onChange={(e)=>{setCpass(e.target.value)}}
                        />
                        <button type="button" onClick={(e)=>{formreset(e)}} className="btn btn-outline-danger mt-2 me-2">cancel</button>
                                <button type="submit" className="btn btn-primary mt-2">Search</button>
                    </form>
                </div>
                <div className="col-md-3"></div>
                </div>
                </div>
             </section>
            </>
         );
    }

    }
export default Changpass

