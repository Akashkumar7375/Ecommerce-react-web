import { useContext } from "react";
import Footer from "../Footer";
import { Contextapi } from "../Context/Contextapi";
import { useNavigate } from "react-router-dom";


function About() {
    const{username,token}=useContext(Contextapi)
    let navigate=useNavigate()
    
    if(!username){
        navigate('/')
    }else{
    return (
        <>
          <section id="hero">
                <div className="container" >
                    <div className="row">
                <div className="col-md-12">
                <h1>About us</h1>
        <p>In 2004, two usability consultants set out to create a quick and easy way of running a remote card sort. This led to an innovative online card sorting tool called OptimalSort, where they discovered the benefits of remote user testing, setting them on a path to develop an entire suite of powerful UX tools.</p>

            <p>In 2007 Optimal Workshop was born. We’ve taken years of experience in user research and user experience consulting and created usability testing tools designed to help researchers, designers and information architects improve the user experience of their products.</p>

            <img src="/media/istockphoto-1322854789-612x612.jpg" alt="Team picture"/>
                </div>
                    </div>
                </div>
            </section>
           <section id="hero-1">
                <div className="container-fluid" >
                    <div className="row">
                    <h2>A global community</h2>
                        <div className="col-md-4">
                        <img src="https://www.optimalworkshop.com/wp-content/uploads/2022/01/Contact_us-700x357.png" alt=""/>
                        </div>
                     <div className="col-md-8">
                     
            <p> We’ve built upon proven user research methods to make global usability research easy and affordable. In doing so, we are helping user experience designers, information architects and usability researchers, in 106 countries, and from some of the biggest organizations around the world, design ways to make the world a little easier to navigate and enjoy. Our tools continue to grow worldwide with users able to create studies in over 80 different languages.</p>
        
                     </div>
                    </div>
                </div>
            </section>
             <section id="hero-2">
                <div className="container-fluid" >
                    <div className="row">
                    <h2>Saving time and money</h2>
                <div className="col-md-8">
            <p> Our customers are putting people first by studying behavior and designing ways to make life a little easier and more delightful, in the process saving thousands of people from a lot of confusion, frustration and wasted time.

                An improved user experience provides measurable benefits for a business or organization, including lower development costs, higher rates of customer acquisition and loyalty, increased team productivity and stronger brand equity.</p>
                </div>
                <div className="col-md-4">
                <img src="/media/Save_Time_Money.png" alt="Saving-img"/>
                </div>
                    </div>
                </div>
            </section>
            <section id="hero-3">
                <div className="container-fluid" >
                    <div className="row">
                    <h2>We’re a B Corp</h2>
                <div className="col-md-5">
                <img src="/media/B-Corp-Logo-Black-RGB.svg" alt="Were-Corp-img"/>
                </div>
                <div className="col-md-7">
                <p> 
                Optimal Workshop is a Certified B Corporation. This means we’re part of a global community of businesses which operate to benefit people, communities, and the planet. We’ve undergone a stringent audit process to ensure we meet the high standards of social and environmental performance, transparency and accountability required of a B Corp.</p>
                
                <p>We’re proud to be a B Corp and we hope it’s also meaningful to our customers. We know you have a choice in which companies you do business with, and our B Corp certification openly signals our commitment to make a positive social and environmental impact. We’re in good company too: the global B Corp movement has 5000+ members. You can find out who else is a B Corp in this handy directory.</p>
                
                
                <p>Learn more about our B Corp journey on our blog.</p>
                </div>
                    </div>
                </div>
            </section>
            <section id="hero-4">
                <div className="container-fluid" >
                    <div className="row">
                    
                <div className="col-md-4">
                <img src="/media/product-screenshot_os-700x438.png" alt=""/>
            <h3>Learn more about our products</h3>
            <p>Head over to our product overview page to learn all about our five powerful UX tools.</p>
                </div>

                <div className="col-md-4">
                <img src="/media/Public-website_careers_thumbnail_FA.jpg" alt=""/>
            <h3>Work at Optimal Workshop</h3>
            <p>Want to help us build the best suite of UX tools of the future? Check out our careers page.</p>
                </div>

                <div className="col-md-4">
                <img src="/media/OW_screenshot_blog_home_FA.jpg" alt="" height="35%"/>
            <h3>Optimal Workshop Blog</h3>
            <p>Get UX and user research tips, learn what’s going on with our products and read interviews with UX experts over at our blog.</p>

                </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
     );
    }
}

export default About;