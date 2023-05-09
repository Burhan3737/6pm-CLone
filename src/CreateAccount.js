import React,{useState} from "react";
import Footer from "./Footer";
import AccountCreated from "./AccountCreated";
import { Link } from "react-router-dom"
export default function CreateAccout() {

    const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordValidator = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
    
  


  const[validation,setValidation] = useState({
     name:"",
     nameMessage:"",
     isName:false,
     email:"",
     emailMessage:"",
     isEmail:false,
     pass:"",
     passMessage:"",
     isPass:false,
     repass:"",
     repassMessage:"",
     isrePass:false,
     isSubmitted:false
  });

  
 function valueChange(e,property ){
  setValidation((old)=>{
    return ( {...old,[property]:e.target.value})
  })

 }



  function handleClick(){

///name check
    if(validation.name===""){
        setValidation((old)=>{
           return ( {...old,isName:true,nameMessage:"Please enter your name"})
         })
    }

    else setValidation((old)=>{
       return ( {...old,isName:false,nameMessage:""})
     })


///email check
    if(!emailValidator.test(validation.email) && validation.email!==""  ){
        setValidation((old)=>{
            return ( {...old,isEmail:true,emailMessage:"Please enter a correct email"})
          })
    }

    else if(validation.email==="" ){
        setValidation((old)=>{
            return ( {...old,isEmail:true,emailMessage:"Please enter your email"})
          })
          console.log(validation.emailMessage)
        }

    else setValidation((old)=>{
        return ( {...old,isEmail:false,emailMessage:""})
      })

    
///password check
      if(!passwordValidator.test(validation.pass) &&validation.pass!==""  ){
        setValidation((old)=>{
            return ( {...old,isPass:true,passMessage:"Password must have atleast 6 characters, 1 number, 1 special character, 1 uppercase and 1 lowercase character!"})
          })
    }

    else if(validation.pass==="" ){
        setValidation((old)=>{
            return ( {...old,isPass:true,passMessage:"Please enter your password"})
          })
    }

    else setValidation((old)=>{
        return ( {...old,isPass:false,passMessage:""})
      })

      ///repassword check

      if(validation.pass!==validation.repass ){
        setValidation((old)=>{
            return ( {...old,isrePass:true,repassMessage:"Passwords must match"})
          })
    }

    else setValidation((old)=>{
        return ( {...old,isrePass:false,repassMessage:""})
      })
     
   


  }

function handleSubmit(e){
    e.preventDefault();
if(!validation.isName && !validation.isEmail && !validation.isPass && !validation.isrePass){
    setValidation((old)=>{
        return ( {...old,isSubmitted:true})
      })    
    }
}



    return (
        
         validation.isSubmitted? 
        
        <AccountCreated
        email={validation.email}
        password={validation.pass}
        name={validation.name}

        
        />
        
        :
        
        <>
        
            <img className="main-img" src="https://images-na.ssl-images-amazon.com/images/G/01/6pm/logos/6pm-Logo-1x._CB485946284_.png" alt="6pm"></img>

        
            <form onSubmit={handleSubmit}>  
            <div className="crmain-div">

                <h1>Create account</h1>
                <div className="fir-div">
                    <h4>Your name</h4>
                    
                    <input value={validation.name} onChange={e=>valueChange(e,"name")}  className="in-"></input>
                  {validation.isName ? <p className="alert"><img className="alert_icon"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxD3nC3A_RW0gzdcBVOZeOdVPS_qGVq3AUpA&usqp=CAU"></img> {validation.nameMessage}</p> :<></>}
                    </div>


                <div className="sec-div">
                    
                        <h4>Email</h4>
                    
                    <input value={validation.email} className="in-" onChange={e=>valueChange(e,"email")}></input>
                    {validation.isEmail ? <p className="alert"><img className="alert_icon"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxD3nC3A_RW0gzdcBVOZeOdVPS_qGVq3AUpA&usqp=CAU"></img> {validation.emailMessage}</p> :<></>}

                </div>


                <div className="sec-div">

                    <h4>Password</h4>

                    <input value={validation.pass} onChange={e=>valueChange(e,"pass")} className="in-" type="password" placeholder="At least 6 characters"></input>
                    <div className="icon-div">
                        <img className="icon-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp0FfjBnypchS_Wl-rtaJHBcM6emgXMRPouw&usqp=CAU">
                        </img>
                        <small>
                            Passwords must be at least 6 characters
                        </small>

                        {validation.isPass ? <p className="alert p"><img className="alert_icon"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxD3nC3A_RW0gzdcBVOZeOdVPS_qGVq3AUpA&usqp=CAU"></img> {validation.passMessage}</p> :<></>}


                    </div>
                </div>


                <div className="fir-div">
                    <h4>Re-enter password</h4>
                    <input value={validation.repass} onChange={e=>valueChange(e,"repass")} type="password" className="in-" ></input>
                    {validation.isrePass ? <p className="alert"><img className="alert_icon"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxD3nC3A_RW0gzdcBVOZeOdVPS_qGVq3AUpA&usqp=CAU"></img> {validation.repassMessage}</p> :<></>}
                </div>

                <button onClick={handleClick}  className="but1-crt">Create your 6pm account</button>


                <p className="note">Don't Have An Email Address or need additional help?
                    Don't Worry!<span className="note2">Give Us A Call At </span>1.888.676.2660
                </p>

                <div className="line-div">
                    <h5 className="other-reg">Other register options</h5>
                    <hr className="line-1"></hr>

                    <input className="input-but" type="image" src="https://images-na.ssl-images-amazon.com/images/G/01/lwa/btnLWA_gry_156x32._CB485934639_.png" alt="Login with Amazon" id="auth-lwa-button"></input>

                </div>

                <div className="box-s2">

                </div>

                <p className="note3">Already have an account? <Link to='/'>SignIn</Link>  <img className="right-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr55zpDyOTPzYc_haHL_TkQbV3n7zjlcJl0A&usqp=CAU"></img></p>
            </div>
            </form>

            <Footer />

        </>
    )
}