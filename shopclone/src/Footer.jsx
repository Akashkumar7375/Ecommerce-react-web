import { Link } from "react-router-dom";

function Footer() {
    return (<>
        <section id="footer">
            <div className="container">
            <img src="/media/ecommerce.png" className="logo1"/>
                <div className="row">
               
                    <div className="col-md-3">
                    <div className="col">
                
           
                <h4>Contact</h4>
                <p><strong>Address:</strong>Jaipur Rajasthan India</p>
                <p><strong>Phone:</strong> +91-********35</p>
                <p><strong>Hours:</strong> 24 Hours</p>
                <div className="follow">
                    <h4>Follow us</h4>
                    <div className="icon">
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-twitter"></i>
                        <i className="bi bi-instagram"></i>
                        <i className="bi bi-pinterest"></i>
                        <i className="bi bi-youtube"></i>
                    </div>
                </div>
            </div>
                    </div>
                    <div className="col-md-3">
                    <div className="col">
                <h4>About</h4>
                <Link to="/about">About us</Link>
                <Link to="/delivery">Delivery Information</Link>
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/trem">Terms & Conditions</Link>
                <Link to="/contact">Contect Us</Link>
            </div>
                    </div>
                    <div className="col-md-3">
                    <div className="col">
                <h4>My Account</h4>
                <Link to="/cart">View Cart</Link>
                <Link to="/myorder/:username">My Order</Link>
                
                <Link to="Help.html">Help</Link>
            </div>
                    </div>
                    <div className="col-md-3">
                    <div className="col install">
              <h4>Install App</h4>
              <p>From App Store or Google Play</p>
              <div className="row">
                    <Link to="https://play.google.com/store" target="0">
                    <img  src="/media/play.webp"  alt=""/>
            </Link>
                <Link to="https://www.apple.com/in/app-store/"   target="0">
                    <img src="/media/appstor.png"  alt=""/>
                </Link>
    
              </div>
            
            </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="footer-1">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <p className="text-center">* 2023, Akash - REACT JS  NODE JS Ecommerce Template</p>
                </div>
            </div>
        </div>
    </section>
    </>
    );
}

export default Footer;