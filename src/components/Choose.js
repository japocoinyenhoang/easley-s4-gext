import React, {Component} from "react";

class Choose extends Component {
  render() {
    return (
      <div className="choose-page">
        <div className="choose-page__btn select-btn">
          <button type="button">Select template</button>
        </div>
        <div className="choose-page__btn upload-btn">
          <button type="button">Upload template</button>
        </div>
      </div>
    );
  }
}

export default Choose;
