import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Fill extends Component {
  constructor(props){
    super(props);
    this.loadSlidesApi=this.loadSlidesApi.bind(this);
    this.listSlides=this.listSlides.bind(this);
    // this.appendPre=this.appendPre.bind (this);


  }
        /**
       * Load Slides API client library.
       */
      loadSlidesApi() {
        window.gapi.client.load('slides', 'v1').then(this.listSlides);
      }

      /**
       * Prints the number of slides and elements in a sample presentation:
       * https://docs.google.com/presentation/d/1EAYk18WDjIG-zp_0vLm3CsfQh_i8eXc67Jo2O9C6Vuc/edit
       */
      listSlides() {

        const presentationId = '1C3ThRHIdUdcgMKtsEAhEyOfYFmJcHHFHrXZX3QrxkXY';

              //gapi.client.slides.presentations.batchUpdate({resource, presentationId});

              let requests = [];
              requests.push({
                replaceAllText: {
                  containsText:{
                    text: '{{name}}'
                  },
                  replaceText: this.props.name
                }
              });
              requests.push({
                replaceAllText: {
                  containsText:{
                    text: '{{email}}'
                  },
                  replaceText: this.props.email
                }
              });
              requests.push({
                replaceAllText: {
                  containsText:{
                    text: '{{phoneNumber}}'
                  },
                  replaceText: this.props.phoneNumber
                }
              });

          window.gapi.client.slides.presentations.batchUpdate({
                presentationId: presentationId,
                requests: requests
              }).then((response) => {
              console.log(response);
              console.log("??????");
            });

          // window.gapi.client.slides.presentations.batchUpdate({
          //   presentationId: presentationId,
          //   resource: resource
          // }, (err, res) => {
          //   console.log("reeeee");
          //   if (err) {
          //     console.log(err);
          //   } else {
          //     console.log(res);
          //   }
          // });

      //   window.gapi.client.slides.presentations.get({
      //     presentationId: presentationId
      //   }).then(function(response) {
      //     let presentation = response.result;
      //     let length = presentation.slides.length;
      //     this.appendPre('The presentation contains ' + length + ' slides:');
      //     for (let i = 0; i < length; i++) {
      //       let slide = presentation.slides[i];
      //       this.appendPre('- Slide #' + (i + 1) + ' contains ' +
      //           slide.pageElements.length + ' elements.')
      //     }
      //   }, function(response) {
      //     this.appendPre('Error: ' + response.result.error.message);
      //   });
      // }

      /**
       * Append a pre element to the body containing the given message
       * as its text node.
       *
       * @param {string} message Text to be placed in pre element.
       */
      // appendPre(message) {
      //   let pre = document.getElementById('output');
      //   let textContent = document.createTextNode(message + '\n');
      //   pre.appendChild(textContent);
      // }

        }
  render() {
    const {handleInputName, handleInputEmail, handleInputPhone} = this.props;
    return (
      <div className="fill-page">
        <div className="fill-page__form">
          <form>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" onKeyUp={handleInputName}/>
            <label htmlFor="email">Email </label>
            <input id="email" type="email" onKeyUp={handleInputEmail}></input>
            <label htmlFor="phone">Phone Number: </label>
            <input id="phone" type="number" onKeyUp={handleInputPhone}></input>


          </form>
        </div>
        <div className="row d-flex justify-content-around">
          <div className="fill-page__btn back-btn">
            <button type="button" className="btn btn-light"><Link to="/steps/choose">Back</Link></button>
          </div>
          <div className="fill-page__btn next-btn">
            <button type="button" className="btn btn-light" onClick={this.loadSlidesApi}><Link to="/steps/success">Next</Link></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Fill;
