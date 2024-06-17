import { Link, useParams } from "react-router-dom";

function Emailverify() {
   const{id}= useParams()
   //console.log(id)
    fetch(`/auth/emailverify/${id}`,{
        method:"PUT",
    }).then((respons)=>{return respons.json()}).then((data)=>{
        console.log(data)
    })
    return ( 
        <>
        <h1>Your Email Has been Verified</h1>
        <Link to='/'>please login</Link>
        </>
     );
}

export default Emailverify;