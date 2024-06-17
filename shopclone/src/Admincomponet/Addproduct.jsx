import { useContext, useEffect, useState } from "react";
import Left from "./Left";
import { useNavigate } from "react-router-dom";
import { Contextapi } from "../Context/Contextapi";


function Addproduct() {
  const{username,token}=useContext(Contextapi)
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [price, setPrice] = useState('')
  const [img1, setImg1] = useState('')
  const [img2, setImg2] = useState('')
  const [img3, setImg3] = useState('')
  const [allcategory, setAllcategory] = useState([])
  const [category, setCategory] = useState('')
  const [mess, setMess] = useState('')
  const [color, setColor] = useState('')
  const [qty, setQty] = useState('')
let navigate=useNavigate()
  useEffect(() => {
    fetch('/admin/allcategory').then((result) => { return result.json() }).then((data) => {
      // console.log(data)
      if (data.status === 200) {
        setAllcategory(data.apiData)
      } else {
        setMess(data.message)
      }
    })
  }, [])

  function controlform(e) {
    e.preventDefault()
    // console.log(img1);
    // console.log(img2);
    // console.log(img3);
    let image1=((img1.size)/(1024))
    let image2=((img2.size)/(1024))
    let image3=((img3.size)/(1024))
     if(image1>=50 ||image2>=50 || image3>=50){
      alert('image size  not valid 50k')
     }
else{
    let fdata = new FormData();
  
    
    fdata.append('name', name)
    fdata.append('desc', desc)
    fdata.append('price', price)
    fdata.append('category', category)
    fdata.append('img1', img1)
    fdata.append('img2', img2)
    fdata.append('img3', img3)
    fdata.append('qty',qty)

    fetch('/admin/addproduct', {
      method: "POST",
      body: fdata
    }).then((respose) => { return respose.json() }).then((data) => {
      // console.log(data)
      if (data.status === 201) {
        setMess(data.message)
        setColor('green')
        navigate('/product',{state:{ message: data.message }})
        
      } else {
        setMess(data.message)
        setColor('red')
      }
    })
    setName('')
    setDesc('')
    setPrice('')
    setCategory('')
    setQty('')
    setImg1('')
    setImg2('')
    setImg3('')
  }
  }
  
  return (
    <>
      <section id="mid">
        <div className="container-fluid">
          <div className="row">
            <Left />
            <div className="col-md-9" id='main'>
              <h2 className="text-center">Add Products Form</h2>
              <p style={{ color: color }}>{mess}</p>
              <form onSubmit={(e) => { controlform(e) }}  >
                <label >Product Name</label>
                <input type="text" className="form-control"
                  value={name}
                  onChange={(e) => { setName(e.target.value) }}
                />
              
                <label >Product Description</label>
                <textarea className="form-control"
                  value={desc}
                  onChange={(e) => { setDesc(e.target.value) }}
                ></textarea>
                <label >Product Price</label>
                <input type="number" className="form-control"
                  value={price}
                  onChange={(e) => { setPrice(e.target.value) }}
                />
                <label >Product Img 1</label>
                <input type="file" className="form-control" 
                  onChange={(e) => { setImg1(e.target.files[0]) }}
                />
                 <label >Product Img 2</label>
                <input type="file" className="form-control"
                  onChange={(e) => { setImg2(e.target.files[0]) }}
                />
                 <label >Product Img 3</label>
                <input type="file" className="form-control"
                  onChange={(e) => { setImg3(e.target.files[0]) }}
                />
               <label>Quantity</label>
               <input type="number" className="form-control" value={qty}
               onChange={(e)=>{setQty(e.target.value)}}
               />
                <label>Product Category</label>
                <select className="form-select"
                  value={category}
                  onChange={(e) => { setCategory(e.target.value) }}>
                    <option>select</option>
                  {
                    allcategory.map((item, key) => (
                      <option key={item._id} value={item.category
                      }>{item.category}</option>
                    ))
                  }
                </select>
                <button type="submit" className="btn btn-success form-control newadd mt-3 mb-5">Add Product</button>
              </form>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Addproduct;