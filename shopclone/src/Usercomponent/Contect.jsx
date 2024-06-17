import { useState } from "react";
import Footer from "../Footer";

function Contect() {

    const[mess,setMess]=useState('')
    const[color,setColor]=useState('')
    const[fullname,setFullname]=useState('')
    const[email,setEmail]=useState('')
    const[subject,setSubject]=useState('')
    const[qury,setQury]=useState('')



    function formcontrol(e){
        e.preventDefault()
        let fdata={fullname,email,subject,qury}
        let token=localStorage.getItem('token')
       fetch('/user/contact',{
        method:"POST",
        headers:{"Content-Type":"application/json",
        'Authorization':`Bearer ${token}`},
        body:JSON.stringify(fdata)
       }).then((response)=>{return response.json()}).then((data)=>{
        // console.log(data);
        if(data.status===201){
              setMess(data.message)
              setColor('green')
        }else{
            setMess(data.message)
            setColor('red')
        }
       })
    }
    return ( 
        <>
         <section id="contact">
        <div className="container">
            <div className="row">
                <div className="col-md-4 d-flex">
                    
                <div className="right">
                <h2>Contact us</h2>
              <p>We're open for any suggestion or just to have a chat</p>
                <table>
                    <tbody>
                    <tr>
                        <td ><i className="bi bi-geo-alt-fill"></i></td>
                        <td className="headline">Address:</td>
                        <td>Jaipur Rajasthan India</td>
                    </tr>
                   
                    <tr>
                        <td><i className="bi bi-phone"></i></td>
                        <td className="headline"> Phone:</td>
                        <td>+91-7375822135</td>
                    </tr>
                    <tr>
                    <td><i className="bi bi-send"></i></td>
                        <td className="headline">Email:</td>
                        <td>info@yoursite.com</td>
                    </tr>
                    <tr>
                    <td><i className="bi bi-globe-americas"></i></td>
                        <td className="headline">Website:</td>
                        <td> yoursite.com</td>
                    </tr>
                    </tbody>
                </table>
               
               
                </div>
                </div>
                <div className="col-md-8">
                    <form onSubmit={(e)=>{formcontrol(e)}}>
                    <h2>Get in touch</h2>
                    <p style={{color:color}}>{mess}</p>
                    <div className="d-flex">
                    <div className="input">
                    <label>FULL NAME</label>
                    <input type="text" className="form-control" value={fullname}
                    onChange={(e)=>{setFullname(e.target.value)}}
                    />
                    </div>
                    <div className="input">
                    <label>EMAIL ADDRESS</label>
                    <input type="text" className="form-control" value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    </div>
                    <label>SUBJECT</label>
                    <input type="text" className="form-control" value={subject}
                    onChange={(e)=>{setSubject(e.target.value)}}/>
                    <label>MESSAGE</label>
                    <textarea className="form-control" value={qury}
                    onChange={(e)=>{setQury(e.target.value)}}></textarea>
                    <button type="submit" className="btn btn-success mt-5">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
        </>
     );
}

export default Contect;