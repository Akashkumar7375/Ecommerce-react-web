import { useEffect, useState } from "react";
import Left from "./Left";
import { Link } from "react-router-dom";

function Queryheand() {
    const[allquery,setAllquery]=useState([])

    useEffect(()=>{
        fetch('/admin/allquery').then((response)=>{return response.json()}).then((data)=>{
            console.log(data);
            if(data.status===200){
                setAllquery(data.apiData)

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
                    <Left/>
                    <div className="col-md-9" id='main'>
                        <h2 className="text-center">Query Management</h2>
                       
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>User fullname</th>
                                    <th>User Email</th>
                                    <th>User Subject</th>
                                    <th>User Message</th>
                                    <th>Active</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allquery.map((value, key) => (
                                    <tr key={value._id}>
                                    <td>{key+1}</td>
                                    <td>{value.fullname}</td>
                                    <td>{value.email}</td>
                                    <td>{value.subject}</td>
                                    <td>{value.message}</td>
                                    {value.status==='Reply'?
                                    <td><Link to={`/queryform/${value._id}`}><button className="btn btn-primary">Reply</button></Link></td>

                                    :<td><Link to={`/queryform/${value._id}`}><button id="Replied" disabled >Replied</button></Link></td>
                                }
                                    </tr>

                                     
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </>
     );
}

export default Queryheand;