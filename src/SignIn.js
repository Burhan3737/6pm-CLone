import React from "react"
import Footer from "./Footer"
import { useNavigate } from "react-router-dom"
export default function SignIn() {

    const navigate = useNavigate();
    return (

        <>
            <img className="main-img" src="https://images-na.ssl-images-amazon.com/images/G/01/6pm/logos/6pm-Logo-1x._CB485946284_.png" alt="6pm"></img>
            <div className="main-div">
                <h1>Sign-In</h1>

                <div className="fir-div">
                    <h4>Email</h4>
                    <input className="in-" ></input>
                </div>


                <div className="sec-div">
                    <div className="pass-div">
                        <h4>Password</h4> <a rel="noopener" href="https://www.google.com/" target="_blank">Forgot your password?</a>

                    </div>
                    <input className="in-" type="password"></input>

                </div>


                <button className="but1">
                    Sign-In
                </button>

                <div className="line-cbox">
                    <input className="in-check" type="checkbox" ></input>
                    <p>Keep me signed in. Details </p>
                    <img className="arrow" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPiX3fLALdCHIKu09Cglx0aR4qRl2LKw4rIA&usqp=CAU" />
                </div>
                <div className="line-div">
                    <h5>More sign in options</h5>
                    <hr className="line-1"></hr>

                    <input className="input-but" type="image" src="https://images-na.ssl-images-amazon.com/images/G/01/lwa/btnLWA_gry_156x32._CB485934639_.png" alt="Login with Amazon" id="auth-lwa-button"></input>

                </div>


                <div className="line-div2">
                    <h5 className="h5-2">New to 6pm?</h5>
                    <hr className="line-1"></hr>
                </div>
                <button onClick={() => navigate('createaccount')} className="but2">
                    Create your 6pm account
                </button>



            </div>


            <Footer />



        </>

    )

}