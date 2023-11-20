import React from 'react'
import logo from '../assets/images/visalogo.svg'
import forgotpassword from '../assets/images/reCAPTCHA.png'
const Login = () => {
  return (
    <div className="global-container">
                  
                  <div className="container signing-bax1">
                    <div className="imgcontainer">
                        <img src={logo} alt="VISAPP" className="visalogo" /> 
                        <div className="signin-txt-box">
                           <h3 className="sign-head">Sign In </h3> 
                            <div className="sub-contnu">to continue to your visa application</div>
                        </div>
                    </div>
                    <form action=" ">
                      <div  className='container'>
                        <div className="floating-label-group login-inputs">
                            <input type="text" id="username" className="form-control" required />
                            <label className="floating-label">Username / Email</label>
                        </div>
                        <div className="floating-label-group login-inputs">
                          <input type="password" id="username" className="form-control"  required />
                          <label className="floating-label">Password</label>
                      </div>
                      </div>
                       
                      <div className="forgetpass-box login-inputs">
                        <a>Forget Password?</a>
                      </div>
                      <div className="login-inputs"> 
                          <img className="captcha-img capta-img" src={forgotpassword} />
                          
                      </div>
                      <div className="form-group m-b-5">
                        <button type="submit" className="btn btn-primary-blue">SIGN IN</button>
                      </div>
                      <div className="form-group m-b-5">
                        <div className="border-line"></div>
                      </div>
                      <div className="form-group m-b-5">
                        <button type="submit" className="btn btn-sign-white">New user? <span className="signup-newuser">SIGN UP</span>  </button>
                      </div>
                    </form>
                  </div>
               
        </div>
       
  )
}

export default  Login 
