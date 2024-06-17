import { useContext } from "react";
import Left from "./Left";
import { Contextapi } from "../Context/Contextapi";
import { useNavigate } from "react-router-dom";

function Admindashbord() {
    const{username}=useContext(Contextapi)
    let navigator=useNavigate()

   if(!username){
    navigator("/")
   }else{
    return (
        <>
            <section id="mid">
                <div className="container-fluid">
                    <div className="row">
                        <Left />
                        <div className="col-md-9" id='main'>
                            <h2>An ecommerce admin assistant is responsible for a variety of tasks, including:</h2>
                            <ul>
                                <li>Order processing</li>

                                <li>Inventory management</li>
                                <li>Reporting</li>
                                <li>Website maintenance</li>
                                <li>Answering phone calls</li>
                                <li>Receiving mail</li>
                                <li>Keeping finances</li>
                                <li>Running errands</li>
                                <li>Paying bills</li>
                                <li>Maintaining personal calendar</li>
                                <li>Organizing personal files</li>
                                <li>Ensuring accuracy in data entry</li>
                                <li>Responding to incoming customer emails</li>
                                <li>Managing customer returns</li>
                                <li>Maintaining and updating content on the website</li>
                                <li>Supporting the Senior Associate – Digital (E-commerce Operations) with order fulfillment</li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
}

export default Admindashbord;