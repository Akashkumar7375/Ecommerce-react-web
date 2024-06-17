import { useState } from "react";
import Left from "./Left";

function Category() {
    const[category,setCategory]=useState('')
    const[img,setImg]=useState('')
    const[message,setMess]=useState('')
    const[color,setColor]=useState('')
let controlform=(e)=>{
 e.preventDefault()


 if(!img){
    ///}
 }
 let image=((img.size)/(1024))
 if(image>=50){
    alert('image size  not valid 50k')
 }else{

 let formdata= new FormData();
 formdata.append('category',category)
 formdata.append('img',img)


 fetch('/admin/addcategory',{
    method:"POST",
    body:formdata
 }).then((respons)=>{return respons.json()}).then((data)=>{
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
}

    return (
        <>
            <section id="mid">
                <div className="container-fluid">
                    <div className="row">
                        <Left />
                        <div className="col-md-9" id='main'>
                            <h2>Category Form</h2>
                            <p style={{color:color}}>{message}</p>
                            <form onSubmit={(e)=>(controlform(e))}>
                                <label>Category</label>
                               <input type="text" className="form-control mt-1"
                               value={category}
                               onChange={(e)=>{setCategory(e.target.value)}}
                               />
                                <label>Category Image</label>
                               <input type="file" className="form-control mt-1"
                               onChange={(e)=>{setImg(e.target.files[0])}}
                               />
                               <button type="submit" className="btn btn-success form-control mt-3">Add new Category</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Category;