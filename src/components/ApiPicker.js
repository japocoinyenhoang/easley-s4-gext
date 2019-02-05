import React, {Component} from "react";

let oauthToken;

class ApiPicker extends Component {
  constructor(props){
    super(props);
    this.state = {
      pickerApiLoaded: false
    }

    this.onPickerApiLoad = this.onPickerApiLoad.bind(this);
    this.handleAuthResult = this.handleAuthResult.bind(this);
    this.createPicker = this.createPicker.bind(this);
    this.pickerCallback = this.pickerCallback.bind(this);
    this.onAuthApiLoad = this.onAuthApiLoad.bind(this);
  }

  componentDidMount(){
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.src = 'https://apis.google.com/js/api.js';

    const tag = document.getElementsByTagName('script')[0];
    tag.parentNode.insertBefore(script, tag);
  }

  onApiLoad() {
    window.gapi.load('auth2', this.onAuthApiLoad);
    window.gapi.load('picker', this.onPickerApiLoad);
  }

  onPickerApiLoad() {
    this.setState({
      pickerApiLoaded: true
    })
    this.createPicker();
  }

  onAuthApiLoad(){
    window.gapi.auth2.authorize({
      client_id: this.props.clientId,
      scope: this.props.scopes
    }, this.handleAuthResult());
  }

  handleAuthResult(authResult) {
    if (authResult && !authResult.error) {
      oauthToken = authResult.access_token;
      this.createPicker();
    }
  }

  createPicker() {
    let { pickerApiLoaded } = this.state;
    if (pickerApiLoaded && oauthToken) {
      let picker = new window.google.picker.PickerBuilder()
        .addView(window.google.picker.ViewId.PRESENTATIONS)
        .setOAuthToken(oauthToken)
        .setDeveloperKey(this.props.apiKey)
        .setCallback(this.pickerCallback)
        .build();
      picker.setVisible(true);
    }
  }

  pickerCallback(data) {
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
      <button type="button" onClick={this.onAuthApiLoad}>Select</button>
    );
  }
}

export default ApiPicker;
