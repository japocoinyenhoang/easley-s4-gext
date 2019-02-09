import React, { Component } from "react";
import ApiPicker from "./ApiPicker";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


class Choose extends Component {
  render() {
    const { clientId, scopes, handleTemplate, } = this.props;
    return (
      <div className="choose-page d-flex justify-content-around">
        <div className="choose-page__btn select-btn">
          <ApiPicker
            clientId={clientId}
            scopes={scopes}
            handleTemplate={handleTemplate}
          />
        </div>
        <div className="choose-page__btn upload-btn">
          <Button variant="contained" size="large" color="secondary">Upload template</Button>
          <Button variant="outlined" size="large" color="primary">
          Large
        </Button>
        </div>
      </div>
    );
  }
}

export default Choose;
