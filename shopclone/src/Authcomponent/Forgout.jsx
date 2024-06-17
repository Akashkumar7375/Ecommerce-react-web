import { useState } from "react";

function Forgout() {

    const[email,setEmail]=useState('')
    const[mess,setMess]=useState('')

    let control=(e)=>{
e.preventDefault()
const fdata={email}
fetch('/auth/forgoutemail',{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(fdata)
}).then((respons)=>{return respons.json()}).then((data)=>{
    console.log(data);
    if(data.status===200){
        setMess(data.message)
    }else{
        setMess(data.message)
    }
})

    }

    let formreset=()=>{
        setEmail('')
    }
    return (
        <>
            <section id="forgut">
                <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3"></div>
                        <div className="col-md-6" id="emailsend">
                            <h2 >Find Your Account</h2>
                            <p>{mess}</p>
                           <form onSubmit={(e)=>{control(e)}}>
                            <label>email</label>
                            <input type="text" className="form-control" value={email} 
                            onChange={(e)=>{setEmail(e.target.value)}}
                            />
                            <button type="button" onClick={(e)=>{formreset()}} className="btn btn-outline-danger mt-2 me-2">cancel</button>
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

export default Forgout;