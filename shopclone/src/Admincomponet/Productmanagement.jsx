import { Link, useLocation,} from "react-router-dom";
import Left from "./Left";
import { useEffect, useState } from "react";


function Productmanagement() {
    const [allproduct, setAllproduct] = useState([])
    const [mess, setMess] = useState('')
    const [color, setColor] = useState('')
   
    useEffect(() => {
        fetch('/admin/allproduct').then((respose) => { return respose.json() }).then((data) => {
            // console.log(data);
            if (data.status === 200) {
                setAllproduct(data.apiData)
               
            } else {
                setMess(data.message)
                setColor('red')
            }
        })
    }, [])


 
    function handeldelete(e,id){
        // alert(id)
        fetch(`/admin/productdelete/${id}`,{
            method:"Delete"
        }).then((response)=>{return response.json()}).then((data)=>{
            //console.log(data);
            if(data.status===200){
                setMess(data.message)
              let x=  allproduct.filter((value)=>{
                    return value._id!==id
                })
                setAllproduct(x)
                setColor('red')
            }else{
                setMess(data.message)
            }
        })
    }

    const location=useLocation()
   const {message}=location.state ||{}

   useEffect(()=>{
console.log(message);
   },[message])

    return (
        <>
            <section id="mid">
                <div className="container-fluid">
                    <div className="row">
                        <Left />
                        <div className="col-md-9" id='main'>
                        
                            <h2 className="text-center">Product Panagement</h2>
                            <p style={{ color: "green" }}>{message}</p>
                            <p style={{ color: color }}>{mess}</p>
            <Link to='/addproduct'><button className="btn  add"> <i className="bi bi-cart-check"></i>Add new products</button></Link>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Img1</th>
                        <th>Img2</th>
                        <th>Img3</th>
                        <th>price</th>
                        <th>catgory</th>
                        <th>Quantity</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    
                    
                    { allproduct&&allproduct.length>0?
                    <>
                   { allproduct.map((value,key)=>(
                     <tr key={value._id}>
                        <td>{key+1}</td>
                        <td>{value.name}</td>
                        <td>{value.desc}</td>
                        <td><img style={{width:'80px'}} src={`/uploads/${value.image1}`} alt="error"></img></td>
                        <td><img style={{width:'80px'}} src={`/uploads/${value.image2}`} alt="error"></img></td>
                        <td><img style={{width:'80px'}} src={`/uploads/${value.image3}`} alt="error"></img></td>
                        <td>{value.price}</td>
                        <td>{value.category}</td>
                        <td>{value.qty}</td>
                        <td><Link to={`/productupdate/${value._id}`}><i className="bi bi-pencil-square"></i></Link></td>
                        <td><i onClick={(e)=>handeldelete(e,value._id)} className="bi bi-trash-fill"></i></td>
                    </tr>
                      ))
                      }
                      </>:
                    <tr>
                        <td colSpan='8' className="text-center" style={{fontWeight:900}}>NOT FOUND</td>
                    </tr>
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

export default Productmanagement;