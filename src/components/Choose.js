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
        <ApiPicker
          clientId={clientId}
          discoveryDocs={discoveryDocs}
          scopes={scopes}
          apiKey={apiKey}
          signIn={signIn}
          developerKey={apiKey}
          onChange={data => console.log('on change:', data)}
          onAuthFailed={data => console.log('on auth failed:', data)}
          multiselect={true}
          navHidden={true}
          authImmediate={false}
          viewId={'FOLDERS'}
          createPicker={ (google, oauthToken) => {
            const googleViewId = google.picker.ViewId.FOLDERS;
            const docsView = new google.picker.DocsView(googleViewId)
              .setIncludeFolders(true)
              .setMimeTypes('application/vnd.google-apps.folder')
              .setSelectFolderEnabled(true);

            const picker = new window.google.picker.PickerBuilder()
              .addView(docsView)
              .setOAuthToken(oauthToken)
              .setDeveloperKey(apiKey)
              .setCallback(()=>{
                console.log('Custom picker is ready!');
            });

            picker.build().setVisible(true);
          }}
        />
      </div>
    );
  }
}

export default Choose;
