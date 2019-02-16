import React, { Component } from "react";
import ApiPicker from "./ApiPicker";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


class Choose extends Component {
  render() {
    const { clientId, scopes, handleTemplate, handlePresentationId, handleNext } = this.props;
    return (
      <div className="choose-page d-flex justify-content-around">
        <div className="choose-page__btn select-btn">
          <ApiPicker
            clientId={clientId}
            scopes={scopes}
            handleTemplate={handleTemplate}
            handlePresentationId={handlePresentationId}
            handleNext={handleNext}
          />
        </div>
        <div className="choose-page__btn upload-btn">
          <Button variant="contained" size="large" color="primary">Upload template</Button>
        </div>
      </div>
    );
  }
}

export default Choose;
