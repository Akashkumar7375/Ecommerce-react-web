import { useContext, useEffect, useState, useLayoutEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Contextapi } from "../Context/Contextapi";


function Login( clientId) {
    const { username, setUsername } = useContext(Contextapi)
    var navigate = useNavigate()
    useEffect(() => {
        if (username === 'admin@gmail.com') {
            navigate('/admindashbord')
        } else if (username) {
            navigate('/userdashbord')
        }
    }, [])



    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [mess, setMess] = useState('')
    const [color, setColor] = useState('')




    function controllform(e) {
        e.preventDefault()
        const Formdata = { email, password };
        fetch('/auth/login', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Formdata)
        }).then((respons) => { return respons.json() }).then((data) => {
            // console.log(data);
            if (data.status === 200) {
                localStorage.setItem('username', data.username)
                localStorage.setItem('token', data.token)
                setUsername(localStorage.getItem('username'))
                if (data.role === 'admin') {
                    navigate('/admindashbord')
                } else {
                    navigate('/userdashbord')
                }

            } else {
                setMess(data.message)
                setColor('red')
            }
        })
    }
    let location = useLocation()
    let { message } = location.state || {}


   
    // const onSuccess = (credentialResponse) => {
    //     console.log('Logged in as:', credentialResponse.profileObj);
    // };
    // const onError = (error) => {
    //     console.log('An error occurred:', error);
    // };
    return (

        <>
            <section id="login" className="Img-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4" id='box'>
                            <h2>Sign in</h2>

                            <span style={{ color: color }}>{mess} {message}</span>
                            <form onSubmit={(e) => { controllform(e) }}>
                                <label>Email</label>
                                <input type="text" className="form-control" value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />
                                <label>Password</label>
                                <input type="text" className="form-control" value={password}
                                    onChange={(e) => { setPassword(e.target.value) }} />
                                <button type="submit" id="loginbutton" className="btn btn-success form-control mt-4">Sign in</button>
                            </form>
                            
                            <p><Link to='/forgout'> forgout password</Link></p>
                            <hr />
                            <button id="signupButton" className="btn btn-warning form-control"><Link to='/signup'> Sign up</Link></button>
                            
                          {/* <div className='gogle'>
                            <GoogleOAuthProvider clientId="524151574746-6bvvombfmrsjblduokol1hunlj96vef5.apps.googleusercontent.com">
                                <GoogleLogin 
                                    onSuccess={onSuccess}
                                    onError={onError}
                                    cookiePolicy={'single_host_origin'}
                                >
                                    <button>Sign in with Google</button>
                                </GoogleLogin>
                            </GoogleOAuthProvider>
                            </div> */}
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </section>
        </>
    );
}



export default Login;