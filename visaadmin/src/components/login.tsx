import React, { useState } from 'react'
import logo from '../assets/images/visalogo.svg'
import forgotpassword from '../assets/images/reCAPTCHA.png'
import validation from './commen/validation'
const Login = () => {
  
  const [values,setValues]= useState({
    name:'',
    password:''
  })
  const [errors,setErrors]= useState({
    name:"",
    password:''
  })
const handleChange = (e:any) =>{

  setValues({...values,[e.target.name] : e.target.value})

} 
const handleSubmit =(e:any) =>{
  e.preventDefault();
  setErrors(validation(values))
}
 

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
                    <form onSubmit={handleSubmit}>
                      <div  className='container'>
                        <div className="floating-label-group login-inputs">
                            <input type="text" name='name' id="username" value={values.name} className="form-control"  onChange={handleChange} />
                            <label className="floating-label">Username / Email</label>
                            {errors.name && <p style={{color:"red",fontSize:'13px'}} >{errors.name}</p> }
                        </div>
                        <div className="floating-label-group login-inputs">
                          <input type="password"  name='password' id="password" value={values.password} className="form-control" onChange={handleChange}  />
                          {errors.password && <p style={{color:"red",fontSize:'13px'}} >{errors.password}</p> }
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
