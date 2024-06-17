import { useEffect, useState } from "react";


function Usercategory() {
    const [ usercategory, setUsercategory ] =useState([])

    useEffect(()=>{
        fetch('/admin/allcategory').then((respose) => { return respose.json() }).then((data) => {
            // console.log(data);
            if (data.status === 200) {
                setUsercategory(data.apiData)

            } else {
                console.log(data.message);
                
            }
        })
    },[])
   
    return (
        <>
            <section id="category">
                <div className="container" >
                    <div className="row">
                      {
                        usercategory.map((value)=>(
                            
                            <div className="col-md-3">
                               
                                <img src={`/uploads/${value.image}`} />
                                
                            </div>
                        ))
                      }
                    </div>
                </div>
            </section>
        </>
    );
}

export default Usercategory;