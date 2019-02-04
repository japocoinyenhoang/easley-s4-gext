import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import '../index.scss';

class ApiLogin extends Component {
    constructor(props) {
        super(props);

        this.handleClientLoad = this.handleClientLoad.bind(this);
        this.initClient = this.initClient.bind(this);
        this.updateSigninStatus = this.updateSigninStatus.bind(this);
        this.handleAuthClick = this.handleAuthClick.bind(this);
        this.handleSignoutClick = this.handleSignoutClick.bind(this);
    }

    // Created the script apis google
    componentDidMount() {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        script.src = 'https://apis.google.com/js/api.js';
        script.onload = this.handleClientLoad;
        script.onreadystatechange = this.handleClientLoad;

        const tag = document.getElementsByTagName('script')[0];
        tag.parentNode.insertBefore(script, tag);
    }

    /**
     *  On load, called to load the auth2 library and API client library.
     */
    handleClientLoad() {
        window.gapi.load('client:auth2', this.initClient);
    }

    /**
     *  Initializes the API client library and sets up sign-in state
     *  listeners.
     */
    initClient() {
        window.gapi.client
            .init({
                discoveryDocs: this.props.discoveryDocs,
                clientId: this.props.clientId,
                scope: this.props.scopes
            })
            .then(() => {
                // Listen for sign-in state changes.
                window.gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);

                // Handle the initial sign-in state.
                this.updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
            });
    }

    /**
     *  Called when the signed in status changes, to update the UI
     *  appropriately. After a sign-in, the API is called.
     */
    updateSigninStatus(isSignedIn) {
      this.props.updateStateLogin(isSignedIn);
    }

    /**
     *  Sign in the user upon button click.
     */
    handleAuthClick(event) {
        window.gapi.auth2.getAuthInstance().signIn();
    }

    /**
     *  Sign out the user upon button click.
     */
    handleSignoutClick(event) {
        window.gapi.auth2.getAuthInstance().signOut();
    }

    render() {
        if (this.props.signIn) {
          return <Redirect to='/steps/choose' />
        }else{
          return <button onClick={this.handleAuthClick}>Log in</button>
        }
    }
}

export default ApiLogin;
