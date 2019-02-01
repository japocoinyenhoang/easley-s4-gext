import React, {Component} from "react";

class Wizard extends Component {
  render() {
    return (
      <div className="wizard">
        <div className="wizard__item step1">Choose your template</div>
        <div className="wizard__item step2">Fill the fields</div>
        <div className="wizard__item step3">Review and download</div>
      </div>
    );
  }
}

export default Wizard;
