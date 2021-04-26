import React, { useContext, useState } from 'react';
import './LogIn.css'

import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { createWithEmailAndPassword, handleGoggleSignIn, handleSignOut, initalizeLogInFrameWork, resetPass, signInWithEmailAndPassword } from './LoggInManager';

 initalizeLogInFrameWork()
const LogIn = () => {
  const [newUser,setNewUser]=useState(false)
  const [user,setUser]=useState({
    isSigned:false,
    name:'',
    success:false,
    email:'',
    photo:'',
    password:''
  })
  //use-context
  const [loggedInUser,setLoggedInUser]=useContext(userContext)
  //private-route
  const history=useHistory()
  const location=useLocation()
  let { from } = location.state || { from: { pathname: "/" } };
 const GoggleSignIn=()=>{
   handleGoggleSignIn()
   .then(res=>{
    handleResponse(res,true)
   })
 }
  
 const SignOut=()=>{
   handleSignOut()
   .then(res=>{
    handleResponse(res,false)
   })
 }
  

  const handleChange=(e)=>{
   
  
   let fieldValid=true;
    if(e.target.name==="email"){
       fieldValid=/\S+@\S+\.\S+/.test(e.target.value)

      
     
    }
    if(e.target.name==="password"){
      const isPasswordValid=e.target.value.length>6;
      
      const passwordNumber= /\d{1}/.test(e.target.value)
      fieldValid=isPasswordValid && passwordNumber


    }
    if(fieldValid){
      const newUser={...user}
      newUser[e.target.name]=e.target.value
      setUser(newUser)
    }
}
  

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(newUser && user.email && user.password){
   createWithEmailAndPassword(user.name,user.email,user.password)
   
    .then(res=>{
      handleResponse(res,true)
   })
}

  if(!newUser && user.email && user.password){
    signInWithEmailAndPassword(user.email,user.password)
    .then(res=>{
      handleResponse(res,true)
   })

  }

  }

  const handleResponse=(res,redirect)=>{
    setUser(res)
    const {name,email}=res
    const signedInUser={name:name,email:email}
    
     setLoggedInUser(signedInUser)
     if(redirect){
     history.replace(from);
     }
  }
  
 
  return (
    <div style={{textAlign:'center'}}>
      {
        user.isSigned ? <button onClick={SignOut}> Sign Out</button>
        : <button onClick={GoggleSignIn}>  Sign In</button>
      }
      <br/>
    {
       user.isSigned &&
       <div>
         <p>Welcome {user.name} </p>
         <p>Your Mail: {user.email}</p>
         <img src={user.photo} alt=""/>
       </div>
     }
     <br/>
  <h1>Our Authentication</h1>
   <input type="checkbox" onChange={()=>setNewUser(!newUser)} name="userName"/>
   <label htmlFor="newuser">New-user-Sign-up</label>
     
     
     <form onSubmit={handleSubmit}>
       {newUser &&
       <input onChange={handleChange} name="name" type="text" placeholder="name"/>


}
       <br/>
       <input required name="email" onChange={handleChange}  placeholder="Your Email Address" type="email"/>
       <br/>
       <input  name="password" onChange={handleChange} placeholder="Your Password" type="password" required  />
       <br/>
       <input type="submit" value={newUser ? 'Sign-up' :'Sign-in'}/>
     </form>

     <button onClick={()=>resetPass(user.email)}>Forget or reset password</button>
     
     <p style={{color:'red'}}>{user.error}</p>
     
     {
       user.success && <p style={{color:'green'}}>user {newUser? "successfully": "logged in"} created</p>
     }
    </div>
    
  );
};

export default LogIn;