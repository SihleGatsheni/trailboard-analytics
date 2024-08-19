import * as AWSCognito from 'amazon-cognito-identity-js';
import React, { useState } from 'react';
import APP_CONFIG from '../configurations/AppConfig'

const Register = () => {
const [email,setEmail]= useState('')
const [password,setPassword]= useState('')



const signUp = ()=>{
    setEmail("ndlovu.code@outlook.com")
    setPassword("Password@123")
    return new Promise((resolved, reject) => {
        const userPool = new AWSCognito.CognitoUserPool(APP_CONFIG);
        console.log(userPool);
        let userAttribute = [];
        userAttribute.push(
          new AWSCognito.CognitoUserAttribute({ Name: "email", Value: "ndlovu.code@outlook.com" })
        );
  
        userPool.signUp(email, "Password@123", userAttribute, null as any, function(err, result) {
          if (err) {
            reject(err);
          } else {
            resolved(result);
            alert("Sign up successful!");
          }
        });
      }); 
}
    return (
        <div>
            <button onClick={signUp}>Sign Up</button>
        </div>
    )
}

export default Register;