import React, {Component} from "react";

class Choose extends Component {
  render() {
    return (
      <div className="choose-page d-flex justify-content-around">
        <div className="choose-page__btn select-btn">
          <button type="button" className="btn btn-secondary btn-lg">Select template</button>
        </div>
        <div className="choose-page__btn upload-btn">
          <button type="button" className="btn btn-secondary btn-lg">Upload template</button>
        </div>
      </div>
    );
  }
}

export default Choose;
