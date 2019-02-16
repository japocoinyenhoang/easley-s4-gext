import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import ReactLoading from 'react-loading';

let keywords = [];
let eraseMoustache;
let presentation;
let eraseTripleMoustache;
let fileId;

class Fill extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingForm: true,
      moustachesArray: [],
      newName: '',
      presentationIdCopy: '',
      tripleMoustachesArray: []
    }

    this.loadSlidesApi = this.loadSlidesApi.bind(this);
    this.listSlides = this.listSlides.bind(this);
    this.execute = this.execute.bind(this);
    this.loadSlidesReplace = this.loadSlidesReplace.bind(this);
    this.handleNewDocument = this.handleNewDocument.bind(this);
    this.getId = this.getId.bind(this);
  }

  componentDidMount() {
    this.getId();
  }

  getId(){
    if (this.props.presentationId !== ''){
      fileId = this.props.presentationId
      console.log(this.props.presentationId);
    } else if(this.props.uploadedFileId !== '') {
      fileId = this.props.uploadedFileId
    } else {
      console.log('file not found');
    }
    this.loadSlidesApi();
  }

  loadSlidesApi() {
      presentation = fileId;
      window.gapi.client.load('slides', 'v1').then(this.listSlides);
  }

  listSlides() {
    window.gapi.client.slides.presentations.get({
      presentationId: fileId
    }).then(response => {
      let presentation = response.result;
      let moustaches = JSON.stringify(presentation).match(/(?<!{){{\s*[\w]+\s*}}(?!})/g);
      let tripleMoustaches = JSON.stringify(presentation).match(/(?<!{){{{\s*[\w.]+\s*}}}(?!})/g);
      if (moustaches.length > 0) {
        eraseMoustache = moustaches.map(item => item.replace('{{', '').replace('}}', ''));
        this.setState({ moustachesArray: [...keywords, ...eraseMoustache] });
      }
      this.props.handleInitInputs(this.state.moustachesArray);
      if (tripleMoustaches.length > 0) {
        eraseTripleMoustache = tripleMoustaches.map(item => item.replace('{{{', '').replace('}}}', ''));
        this.setState({ tripleMoustachesArray: [...keywords, ...eraseTripleMoustache] });
      }
      this.props.handleImagesInputs(this.state.tripleMoustachesArray);
    });
  }

  loadSlidesReplace() {
    if (this.props.presentationId || this.props.uploadedFileId !== '') {
      window.gapi.client.load('slides', 'v1').then(f => {
        window.gapi.client.load('drive', 'v2').then(execute => {
          this.execute()
        })
      }).catch(error => { console.log(error) });
    }
  }

  execute() {
    return window.gapi.client.drive.files.copy({
      "title": this.state.newName,
      "fileId": presentation,
      "resource": {}
    })
      .then((response) => {
        let newId = response.result.id;
        this.props.handleCopyId(newId);
      },
        function (err) { console.error("Execute error", err); })
      .catch(err => { console.log(err); })
  }

  paintForm() {
    const { handleInputs, handleChangeFile, fileInput } = this.props;
    if (this.state.moustachesArray.length === 0 && this.state.tripleMoustachesArray.length === 0) {
      return (<div className="errorMessage">Sorry but your template has not any keyword to create a form. Please review our 'How to use' section</div>)
    } else {
      return (
        <form>
          {this.state.moustachesArray.map(item => {
            return (
              <div key={item} className="form-group">
                <label htmlFor={item}>{item.toUpperCase()}:</label>
                <input className="form-control " id={item} type="text" onKeyUp={handleInputs} />
              </div>
            );
          })
          }

          {this.state.tripleMoustachesArray.map(item=>{
            return (
              <div key={item} className="form-group">
                    <label htmlFor={item}>{item.toUpperCase()}:</label>
                    <input className="form-control " id={item} type="file" ref={fileInput} onChange={handleChangeFile} />
                  </div>
            );
          })
          }
        </form>
      )
    }
  }

  handleNewDocument(e){
    let query = e.currentTarget.value;
    this.setState({
      newName: query
    })
  }

  render() {
    const { selectedTemplate } = this.props;

    if (this.state.moustachesArray.length>0 || this.state.tripleMoustachesArray.length>0 ) {
      return (
        <div className="fill-page">
          <div className="fill-template__result">
            <div id="result">{selectedTemplate}</div>
            <div className="fill-page__btn back-btn">
              <button type="button" className="btn btn-light"><Link to="/steps/choose">Choose another template</Link></button>
            </div>
          </div>
          <div className="input-name">
                <label htmlFor="copyName">New document name: </label>
                <input className="input-name" id= "copyName" type="text" onKeyUp={this.handleNewDocument} />
              </div>
          <div className="fill-page__form">
          {this.paintForm()}
          </div>
          <div className="row d-flex justify-content-around">
            <div className="fill-page__btn back-btn">
              <Link to="/steps/choose"><button type="button" className="btn btn-light">Back</button></Link>
              <div className="fill-page__btn next-btn">
                <Link to="/steps/success"><button type="button" className="btn btn-light" onClick={this.loadSlidesReplace}>Next</button></Link>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <ReactLoading type={'spinningBubbles'} color={'#990099'} height={100} width={100} />
      )
    }
  }
}

Fill.propTypes = {
  handleInitInputs: PropTypes.func,
  handleImagesInputs: PropTypes.func,
  handleInputs: PropTypes.func,
  handleTripleMoustaches: PropTypes.func,
  inputs: PropTypes.array,
  selectedTemplate: PropTypes.string
};

export default Fill;

