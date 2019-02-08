import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import ReactLoading from 'react-loading';

class Fill extends Component {
  constructor(props) {
    super(props);

    this.state={
      loadingForm: true,
    }

    this.loadSlidesApi = this.loadSlidesApi.bind(this);
    this.listSlides = this.listSlides.bind(this);
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.presentationId !== prevProps.presentationId) {
      this.loadSlidesApi();
    }
  }

  loadSlidesApi() {

    if(this.props.presentationId !== '') {

        this.setState({
          loadingForm: false
        });


      //cuando tengamos presentationId loading pasará a false y pintaremos el formulario

      window.gapi.client.load('slides', 'v1').then(this.listSlides);
    } else if (this.props.presentationId === '') {
    }
  }

  listSlides() {
    const presentationId = this.props.presentationId;

    let requests = [];
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

    window.gapi.client.slides.presentations.batchUpdate({
      presentationId: presentationId,
      requests: requests
    }).then((response) => {

      console.log(JSON.stringify(response.result).match(/(?<!{){{\s*[\w\.]+\s*}}(?!})/g));
      console.log("??????");
    });

  /*   window.gapi.client.slides.presentations.batchUpdate({
      presentationId: presentationId,
      requests: requests
    }).then((response) => {
      console.log(response);
      console.log("??????");
    }); */
  }


  render() {
    if (!this.state.loadingForm){
      const { handleInputName, handleInputEmail, handleInputPhone, presentationId } = this.props;
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
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input className="form-control " id="name" type="text" onKeyUp={handleInputName} />
                <label htmlFor="email">Email:</label>
                <input className="form-control" id="email" type="email" onKeyUp={handleInputEmail}></input>
                <label htmlFor="phone">Phone Number:</label>
                <input className="form-control" id="phone" type="number" onKeyUp={handleInputPhone}></input>
              </div>
            </form>
          </div>
          <div className="row d-flex justify-content-around">
            <div className="fill-page__btn back-btn">
            <Link to="/steps/choose"><button type="button" className="btn btn-light">Back</button></Link>
            </div>
            <div className="fill-page__btn next-btn">
            <Link to="/steps/success"><button type="button" className="btn btn-light" onClick={this.loadSlidesApi}>Next</button></Link>
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
  handleInputName: PropTypes.func,
  handleInputEmail: PropTypes.func,
  handleInputPhone: PropTypes.func,
};

export default Fill;
