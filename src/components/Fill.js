import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import ReactLoading from 'react-loading';
import { request } from "http";

let keywords = [];
let eraseMoustache;
let moustachesArray;

class Fill extends Component {
  constructor(props) {
    super(props);

    this.state={
      loadingForm: true,
    }

    this.loadSlidesApi = this.loadSlidesApi.bind(this);
    this.listSlides = this.listSlides.bind(this);
    this.getForm = this.getForm.bind(this);
  }

  componentDidMount() {
    const data = keywords;
    this.props.handleInitInputs(data);
  }

  componentWillReceiveProps(){
    this.loadSlidesApi();
  }

  loadSlidesApi() {
    if(this.props.presentationId !== '') {
      window.gapi.client.load('slides', 'v1').then(this.listSlides);
    }
  }

  listSlides() {
    let requests = [];
    this.props.inputs.map(item => {
      requests.push({
        replaceAllText: {
          containsText: {
            text: `{{${item[0]}}}`
          },
          replaceText: item[1]
        }
      });
      console.log(requests);
      return requests;
    });

    window.gapi.client.slides.presentations.get({
      presentationId : this.props.presentationId,
      requests: requests
    }).then(response => {
      let presentation = response.result;
      console.log(presentation);
      let moustaches = JSON.stringify(presentation).match(/(?<!{){{\s*[\w]+\s*}}(?!})/g);

      moustachesArray = [...keywords, ...moustaches];
        if(moustachesArray.length > 0) {
          this.setState({
            loadingForm: false
        })
      }
    });
  }

  getForm(){
    const { handleInputs } = this.props;
    console.log(moustachesArray);
    if(moustachesArray.length > 0) {
      moustachesArray.map(item => {
        return (
          <div key={item} className="form-group">
            <label htmlFor={item}>{item.toUpperCase()}:</label>
            <input className="form-control " id={item} type="text" onKeyUp={handleInputs} />
          </div>
        );
      })
    }
  }

  render() {
    if (!this.state.loadingForm){
      const { selectedTemplate } = this.props;
      return (
      <div className="fill-page">
        <div className="fill-template__result">
          <div id="result">{selectedTemplate}</div>
          <div className="fill-page__btn back-btn">
              <button type="button" className="btn btn-light"><Link to="/steps/choose">Choose another template</Link></button>
          </div>
        </div>
        <div className="fill-page__form">
          <form>
            {this.getForm()}
          </form>
        </div>
        <div className="row d-flex justify-content-around">
          <div className="fill-page__btn back-btn">
          <Link to="/steps/choose"><button type="button" className="btn btn-light">Back</button></Link>
          <div className="fill-page__btn next-btn">
            <Link to="/steps/success"><button type="button" className="btn btn-light" onClick={this.loadSlidesApi}>Next</button></Link>
            </div>
          </div>
        </div>
      </div>
      );
    } else {
        return(
          <ReactLoading type={'spinningBubbles'} color={'#990099'} height={100} width={100} />
        )
      }
  }
}

Fill.propTypes = {
  handleInitInputs: PropTypes.func,
  handleInputs: PropTypes.func,
  inputs: PropTypes.array,
  selectedTemplate: PropTypes.string
};

export default Fill;

