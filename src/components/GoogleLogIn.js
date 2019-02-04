import React, { Component } from 'react';
import {sendApiKey} from './Credentials'

class GoogleLogin extends Component{
   constructor(props) {
      super(props)
      this.getUserGoogleProfile = this.getUserGoogleProfile.bind(this);
      this.googleSignInCallback = this.googleSignInCallback.bind(this);
      this.googleLogin = this.googleLogin.bind(this);
   }

   componentDidMount(){
       (function() {
           var e = document.createElement("script");
           e.type = "text/javascript";
           e.async = true;
           e.src = "https://apis.google.com/js/client:platform.js?onload=gPOnLoad";
           var t = document.getElementsByTagName("script")[0];
           t.parentNode.insertBefore(e, t)
       })();
   }

   //Triggering login for google
   googleLogin = () => {
       window.gapi.auth.signIn({
           callback: function(authResponse) {
               this.googleSignInCallback( authResponse )
           },
           clientid: sendApiKey.google, //Google client Id
           cookiepolicy: "single_host_origin",
           requestvisibleactions: "http://schema.org/AddAction",
           scope: "https://www.googleapis.com/auth/plus.login email"
       });
   }

   googleSignInCallback = (e) => {
       console.log( e )
       if (e["status"]["signed_in"]) {
           window.gapi.client.load("plus", "v1", function() {
               if (e["access_token"]) {
                   this.getUserGoogleProfile( e["access_token"] )
               } else if (e["error"]) {
                   console.log('Import error', 'Error occured while importing data')
               }
           });
       } else {
           console.log('Oops... Error occured while importing data')
       }
   }

   getUserGoogleProfile = accesstoken => {
       var e = window.gapi.client.plus.people.get({
           userId: "me"
       });
       e.execute(function(e) {
           if (e.error) {
               console.log(e.message);
               console.log('Import error - Error occured while importing data')
               return

           } else if (e.id) {
               //Profile data
               alert("Successfull login from google : "+ e.displayName )
               console.log( e );
               return;
           }
       });
   }

   render(){
       return(
           <button title="google login" alt="google" onClick={ () => this.googleLogin() }/>
       )
   }
}

export default GoogleLogin;
