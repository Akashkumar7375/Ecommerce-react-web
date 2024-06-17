import {  useState } from "react";
import Left from "./Left";
import { useParams } from "react-router-dom";

function Bannerupdate() {
    const[text,setText]=useState('')
    const[img,setImg]=useState('')
    const [mess, setMess] = useState('')
    const [color, setColor] = useState('')
let {id}=useParams()

    function controlform(e){
        e.preventDefault()
        let image=((img.size)/(1024))
       if(image>=500){
        alert("image size  not valid 500k")
       }else{

        let fdata= new FormData()
        fdata.append('text', text)
        fdata.append('img', img)
        // console.log(fdata);

        fetch(`/admin/bannerupdate/${id}`,{
            method:"PUT",
            body:fdata
        }).then((res)=>{return res.json()}).then((data)=>{
            console.log(data);
            if(data.status===200){
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
                    <h2>banner Update</h2>
                    <p style={{ color: color }}>{mess}</p>
                    <form onSubmit={(e)=>{controlform(e)}}>
                        <label>Banner text</label>
                        <input type="text" className="form-control" value={text}
                          onChange={(e)=>{setText(e.target.value)}}
                        />
                        <label>Banner image</label>
                        <input type="file" className="form-control"
                         
                         onChange={(e)=>{setImg(e.target.files[0])}}/>
                        <button className="btn btn-primary mt-3">Update</button>
                    </form>
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}

export default Bannerupdate;