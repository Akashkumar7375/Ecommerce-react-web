import { useContext, useState, } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Contextapi } from "./Context/Contextapi";


function Header() {
  const [search, setSearch] = useState([])

  const { username, setUsername, product, setProduct, cart, setCart } = useContext(Contextapi)
  const navigate = useNavigate()
  function logout() {
    localStorage.removeItem('username')
    localStorage.removeItem('token')
    setUsername(localStorage.getItem('username'))
    navigate('/')
  }




  function controlform(e) {
    e.preventDefault()
    let fdata = { search }
    let x = product.filter((value) => {
      return value.name === search
    })
    setSearch(x)

    // navigate('/search')

  }


  if (!username) {
    return (
      <></>
    );
  } else if (username === 'admin@gmail.com') {
    return (
      <>
        <section id="header">

          <div className="container">
            <div className="row">
              <div className="col-md-4" ><h5>welcome {username}</h5></div>
              <div className="col-md-8">

                <button id="logout" className="btn d-flex ms-auto" onClick={(e) => { logout() }}><i className="bi bi-box-arrow-right"></i></button>

              </div>
            </div>
          </div>

        </section>
      </>

    );
  } else {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <img src="/media/ecommerce.png" className="img-fluid" />
            <div className="search">
                  <form onSubmit={(e) => { controlform(e) }}>
                    <div class="wrap-input-18">
                      <div class="search">
                        <div>
                          <input type="text" placeholder="Search . . ." value={search}
                           onChange={(e)=>{
                            setSearch(e.target.value)
                           }}

                          />
                           <i class="bi bi-search "></i>
                        </div>
                      </div>
                    </div>

                   
                  </form>
                </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">

              <ul className="navbar-nav mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <Link to='/home' className="nav-link active" aria-current="page" >Home</Link>
                </li>
                <li className="nav-item">
                  <Link to='/productpage' className="nav-link active" aria-current="page" >Product</Link>
                </li>
                <li className="nav-item ">
                  <Link to='/usercategory' className="nav-link active" aria-current="page" >Category</Link>

                </li>
                <li className="nav-item">
                  <Link to='/contact' className="nav-link active" aria-current="page" >Contect</Link>
                </li>
               

              </ul>
              
              <div className="logout ">
                <Link to='/cart'><i className="bi bi-bag-check">
                  <span className="position-absolute width- translate-middle badge rounded-pill bg-danger">
                    {!cart ? '' :
                      <>
                        {!cart.totalitems ? '' : cart.totalitems}
                      </>
                    }
                  </span></i></Link>


                <button className="btn ms-3" onClick={(e) => { logout() }}><i className="bi bi-box-arrow-right"></i></button>



              </div>

            </div>
          </div>
        </nav>

      </>
    );
  }
}

export default Header;