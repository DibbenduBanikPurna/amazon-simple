import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Config/Config';

export const initalizeLogInFrameWork=()=>{
    if(firebase.apps.length===0){
    firebase.initializeApp(firebaseConfig);
    }
}
export const handleGoggleSignIn=()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
   return firebase.auth().signInWithPopup(provider)
  .then(res=>{
    const {displayName,email,photoURL}=res.user
    let signed={
      isSigned:true,
      name:displayName,
      email:email,
      photo:photoURL,
      success:true
    }
   setUserToken()
    return signed
    
  })
  .catch(err=>console.log(err))
  }
  const setUserToken=()=>{
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
     sessionStorage.setItem('token',idToken)
    }).catch(function(error) {
     console.log(error)
    });
    
  }

 export const handleSignOut=()=>{
   return firebase.auth().signOut()
    .then(() => {
     let isSignedOut={
       isSigned:false,
  
       name:'',
       email:'',
       photo:'',
       error:'',
       
     }
     return isSignedOut
    })
    .catch((error) => {
      console.log(error)
    });
  }

  export const createWithEmailAndPassword=(name,email,password)=>{
   return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res=>{
     let userInfo=res.user
      userInfo.error=''
      userInfo.success=true
      
      updateUserName(name)
      verifyEmail()
      return userInfo
     

    })
 
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    let userInfo={}
    userInfo.error=errorMessage
    userInfo.success=false
    return userInfo
   
    
  });
  }

  export const signInWithEmailAndPassword=(email,password)=>{
  return  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((res) => {
      let userInfo=res.user
        userInfo.error=''
        userInfo.success=true
        return userInfo
        
      
     
    })
    .catch((error) => {
     
      var errorMessage = error.message;
      let userInfo={}
      userInfo.error=errorMessage
      userInfo.success=false
       return userInfo
     
     
    });
  }
  const updateUserName=(name)=>{
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name,
     
    }).then(function() {
      console.log('updated success')
    }).catch(function(error) {
     console.log(error.message)
    });
  }

  const verifyEmail=()=>{
    var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
}).catch(function(error) {
  
});

  }
 export const resetPass=(email)=>{
    var auth = firebase.auth();


auth.sendPasswordResetEmail(email).then(function() {
  
}).catch(function(error) {
  
});

  }