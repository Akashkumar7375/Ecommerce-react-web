import { useEffect, useState } from "react";
import Left from "./Left";
import { useParams } from "react-router-dom";

function Queryreplayform(){
    const [color, setColor] = useState('')
    const[mess,setMess]=useState('')
    const[to,setTo]=useState('')
    const[from,setFrom]=useState('')
    const[subject,setSubject]=useState('')
    const[message1,setMessage1]=useState('')
   const[body,setbody]=useState('')



   useEffect(()=>{
    fetch(`/admin/singlequerydata/${id}`).then((response)=>{return response.json()}).then((data)=>{
        // console.log(data);
        if(data.status===200){
          setFrom('rohitkumawatt304@gmail.com')
            setTo(data.apiData.email)
            setSubject(data.apiData.subject)
            setMessage1(data.apiData.message)
        }
    })
   
   },[])
   let {id}=useParams()
   function formcontrol(e){
    e.preventDefault()
let fdata={to,from,subject,body}

    fetch(`/admin/sendreply/${id}`,{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(fdata)
    }).then((response)=>{return response.json()}).then((data)=>{
        // console.log(data);
        if(data.status===200){
            setMess(data.message)
            setColor('green')
          
        }
        else{
            setMess(data.message)
            setColor('green')
        }

    })
   
   }
    return(
        <>
        <section id="mid">
            <div className="container-fluid">
                <div className="row">
                    <Left/>
                    <div className="col-md-9" id='main'>
                        <h2 className="text-center">Query Form</h2>
                        <p style={{ color: color ,fontWeight:700}}>{mess}</p>
                       <form onSubmit={(e)=>{formcontrol(e)}}>
                        <label>To</label>
                        <input type="email" className="form-control" value={to}/>
                        <label>From</label>
                        <input type="email" className="form-control"
                        value={from}
                        />
                        <label>Subject</label>
                        <input type="text" className="form-control"
                          value={subject}
                        />
                        <label>message</label>
                        <input type="text" className="form-control"
                          value={message1}
                        />
                        <label>body</label>
                        <input type="text" className="form-control"
                        value={body}
                        onChange={(e)=>{setbody(e.target.value)}}
                       
                        />
                         <button type="submit" className="btn btn-success form-control mt-3">Reply</button>
                       </form>
                    </div>
                </div>
            </div>
        </section>
        </>

    );

}

export default Queryreplayform