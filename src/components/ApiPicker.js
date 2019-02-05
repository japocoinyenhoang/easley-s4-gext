import React, {Component} from "react";

let oauthToken;

class ApiPicker extends Component {
  constructor(props){
    super(props);
    this.state = {
      pickerApiLoaded: false,
      oauthToken: '',
      click: false,
    }

    this.onApiLoad = this.onApiLoad.bind(this);
    this.onAuthApiLoad = this.onAuthApiLoad.bind(this);
    this.clicked = this.clicked.bind(this);
    this.onPickerApiLoad = this.onPickerApiLoad.bind(this);
    this.handleAuthResult = this.handleAuthResult.bind(this);
    this.createPicker = this.createPicker.bind(this);
    this.pickerCallback = this.pickerCallback.bind(this);

  }

  componentDidMount(){
    console.log('me monté');
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.src = 'https://apis.google.com/js/api.js?onload=onApiLoad';

    const tag = document.getElementsByTagName('script')[0];
    tag.parentNode.insertBefore(script, tag);
  }

  onApiLoad() {
    console.log('onApiLoad');
    window.gapi.load('auth2', this.onAuthApiLoad);
    window.gapi.load('picker', this.onPickerApiLoad);
  }

  onPickerApiLoad() {
    console.log('onPickerApiLoad');
    this.setState({
      pickerApiLoaded: true
    });
    this.createPicker();
  }

  onAuthApiLoad(){
    console.log('voy a autorizarme');
    if(this.state.click === true){
      console.log('me autoricé');
      window.gapi.auth2.authorize({
        client_id: this.state.clientId,
        scope: this.state.scopes
      }, this.handleAuthResult);
    }
  }

  clicked(){
    console.log('me clicaste');
    this.setState({
      click: true,
    })
    this.onApiLoad();
  }

  handleAuthResult(authResult) {
    console.log('handleAuthResult');
    if (authResult && !authResult.error) {
      console.log('tengo authResult por fin');
      this.setState({
        oauthToken: authResult.access_token,
      })
      this.createPicker();
    }
  }

  createPicker() {
    console.log('createPicker');
    console.log('oauthToken es ' + oauthToken)
    let { pickerApiLoaded } = this.state;
    if (pickerApiLoaded && this.state.oauthToken) {
      console.log('if funciona')
      let picker = new window.google.picker.PickerBuilder()
        .addView(window.google.picker.ViewId.PRESENTATIONS)
        .setOAuthToken(this.state.oauthToken)
        .setDeveloperKey(this.props.apiKey)
        .setCallback(this.pickerCallback)
        .build();
      picker.setVisible(true);
    }
  }

  pickerCallback(data) {
    console.log('2');
    let url = 'nothing';
    if (data[window.google.picker.Response.ACTION] === window.google.picker.Action.PICKED) {
      let doc = data[window.google.picker.Response.DOCUMENTS][0];
      url = doc[window.google.picker.Document.URL];
    }
    let message = 'You picked: ' + url;
    document.getElementById('result').innerHTML = message;
  }

  render() {
    return (
      <button type="button" onClick={this.clicked}>Select</button>
    );
  }
}

export default ApiPicker;
