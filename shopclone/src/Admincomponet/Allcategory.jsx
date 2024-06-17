import { useEffect, useState } from "react";

import Left from "./Left";
import { Link } from "react-router-dom";


function Allcategory() {
    const [allcategory, setAllcategory] = useState([])    
    const [mess, setMess] = useState('')
    const [color, setColor] = useState('')
    useEffect(() => {
        fetch('/admin/allcategory').then((respose) => { return respose.json() }).then((data) => {
            // console.log(data);
            if (data.status === 200) {
                setAllcategory(data.apiData)

            } else {
                setMess(data.message)
                setColor('red')
            }
        })
    }, [])


    function handeldelete(e,id){
        console.log(id);
        fetch(`/admin/categorydelete/${id}`,{
            method:"DELETE"
        }).then((respose) => { return respose.json() }).then((data) => {
            // console.log(data);
            if(data.status===200){
                setMess(data.message)
                setColor('green')
               let x= allcategory.filter((value)=>{
                    return value._id!==id
                })
                setAllcategory(x)
            }else{
                setMess(data.message)
               
            }
        })
    }
    return (
        <>
            <section id="mid">
                <div className="container-fluid">
                    <div className="row">
                        <Left />
                        <div className="col-md-9" id='main'>
                            <h2 className="text-center">Product Panagement</h2>
                            <p style={{ color: color }}>{mess}</p>
                            <Link to='/category'><button className="btn  add"> <i className="bi bi-cart-check"></i>Add new Category</button></Link>
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Category id</th>
                                        <th>Category Name</th>
                                        <th>Category Image</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allcategory.map((value, key) => (
                                     <tr key={value._id}>
                                        <td>{key+1}</td>
                                        <td>{value._id}</td>
                                        <td>{value.category}</td>
                                        <td><img style={{width:'100px'}} src={`/uploads/${value.image}`}/></td>
                                        <td><i onClick={(e)=>handeldelete(e,value._id)} className="bi bi-trash-fill"></i></td>
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

export default Allcategory;