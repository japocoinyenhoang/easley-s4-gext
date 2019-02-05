import React, {Component} from "react";
import ApiPicker from "./ApiPicker";

class Choose extends Component {
  render() {
    const{discoveryDocs, clientId, scopes, apiKey, signIn} = this.props;
    return (
      <div className="choose-page">
        <div className="choose-page__btn select-btn">
          <button type="button" className="btn btn-secondary btn-lg">Select template</button>
        </div>
        <div className="choose-page__btn upload-btn">
          <button type="button" className="btn btn-secondary btn-lg">Upload template</button>
        </div>
        <ApiPicker clientId={clientId} discoveryDocs={discoveryDocs} scopes={scopes} apiKey={apiKey} signIn={signIn}/>
      </div>
    );
  }
}

export default Choose;
