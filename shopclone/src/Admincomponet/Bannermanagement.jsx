import { useEffect, useState } from "react";
import Left from "./Left";
import { Link } from "react-router-dom";

function Bannermanagement(){
    
   

    const [bannerd, setBannerd] = useState([])
    useEffect(()=>{
        fetch('/admin/banner').then((res)=>{return res.json()}).then((data)=>{
            console.log(data);
            if(data.status===200){
                setBannerd(data.apiData)
            }else{
                console.log(data.message);
                
            }
        })
    },[])
    return (
        <>
            <section id="mid">
                <div className="container-fluid">
                    <div className="row">
                        <Left />
                        <div className="col-md-9" id='main'>
                            <h2 className="text-center">Banner Panagement</h2>
                            
            
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>banner text</th>
                        <th>Img2</th>
                        <th>Update</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {bannerd.map((value,key)=>(
                        <tr key={value._id}>
                        <td>{key+1}</td>
                        <td>{value.text}</td>
                        <td><img style={{width:"150px"}} src={`/uploads/${value.image}`} alt="error"/></td>
                      
                        <td><Link to={`/bannerup/${value._id}`}><i className="bi bi-pencil-square"></i></Link></td>
                       
                    </tr>
                    ))}
                     
                     
                 
                    
                  
                    
                </tbody>
            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Bannermanagement
