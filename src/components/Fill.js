import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import ReactLoading from 'react-loading';

const mockData = ['name', 'email', 'phone'];

class Fill extends Component {
  constructor(props) {
    super(props);

    this.state={
      loadingForm: true,
    }

    this.loadSlidesApi = this.loadSlidesApi.bind(this);
    this.listSlides = this.listSlides.bind(this);
  }

  componentDidMount(prevProps) {
    const data = mockData;
    this.props.handleInitInputs(data);

  }

  componentWillReceiveProps(){
    this.loadSlidesApi();
  }

  loadSlidesApi() {
    if(this.props.presentationId !== '') {

      //cuando tengamos presentationId loading pasará a false y pintaremos el formulario
        this.setState({
          loadingForm: false
        });

      window.gapi.client.load('slides', 'v1').then(this.listSlides);
    } else if (this.props.presentationId === '') {
    }
  }

  listSlides() {

    window.gapi.client.slides.presentations.get({
      presentationId : this.props.presentationId,
    }).then(function(response){
      let presentation = response.result
      console.log(JSON.stringify(presentation).match(/(?<!{){{\s*[\w]+\s*}}(?!})/g));
    })
    //let requests = [];
    /* requests.push({
      replaceAllText: {
        containsText: {
          text: '{{name}}'
        },
        replaceText: this.props.name
      }
    });
    requests.push({
      replaceAllText: {
        containsText: {
          text: '{{email}}'
        },
        replaceText: this.props.email
      }
    });
    requests.push({
      replaceAllText: {
        containsText: {
          text: '{{phoneNumber}}'
        },
        replaceText: this.props.phoneNumber
      }
    }); */

  }

  render() {
    if (!this.state.loadingForm){
      const { handleInputs } = this.props;
      return (
      <div className="fill-page">
        <div className="fill-template__result">
          <div id="result">{this.props.selectedTemplate}</div>
          <div className="fill-page__btn back-btn">
              <button type="button" className="btn btn-light"><Link to="/steps/choose">Choose another template</Link></button>
          </div>
        </div>
        <div className="fill-page__form">
          <form>
            {mockData.map(item => {
              return (
                <div key={item} className="form-group">
                  <label htmlFor={item}>{item.toUpperCase()}:</label>
                  <input className="form-control " id={item} type="text" onKeyUp={handleInputs} />
                </div>
              );
            })}
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
    }  else {
        return(
          <ReactLoading type={'spinningBubbles'} color={'#990099'} height={100} width={100} />
        )
       }

  }

}

Fill.propTypes = {
  handleInputName: PropTypes.func,
  handleInputEmail: PropTypes.func,
  handleInputPhone: PropTypes.func,
};

export default Fill;
