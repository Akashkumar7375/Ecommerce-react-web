import { useState } from "react";
import { Link } from "react-router-dom";


function Signup() {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[cpassword,setCPassword]=useState('')
    const[message,setMessage]=useState('')
    const[color,setColor]=useState('')

    function heandeform(e){
        e.preventDefault()
     const formvalue={email,password,cpassword}
     fetch('/auth/createAccount',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(formvalue)


}).then((result)=>{ return result.json()}).then((data)=>{
        console.log(data);
        if(data.status===201){
            setMessage(data.message)
           setColor('rgb(66, 242, 8)')
        }else{
            setMessage(data.message)
            setColor('red')
        }
     })
    }
    return ( 
        
        <>
       <section id="login">
            <div className="container">
            <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4" id='maina'>
                <h2>Sign up</h2>
                <span style={{color:color}}>{message}</span>
                <form onSubmit={(e)=>{heandeform(e)}}>
                    <label>Email</label>
                    <input type="text" className="form-control" 
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    />
                    <label>Password</label>
                    <input type="password" className="form-control"
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <label>Confirm Password</label>
                    <input type="password" className="form-control"
                    value={cpassword}
                    onChange={(e)=>{setCPassword(e.target.value)}}
                    />
                    <button type="submit" className="btn btn-success form-control mt-4">Create Account</button>
                </form>
                <hr/>
                <button  id="signupButton" className="btn btn-warning form-control"><Link to='/'> Sign in</Link></button>
            </div>
            <div className="col-md-4"></div>
            </div>
            </div>
        </section>
        </>
     );
}

export default Signup;