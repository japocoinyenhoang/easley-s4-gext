import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import ReactLoading from 'react-loading';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  message: {
    padding: `${theme.spacing.unit * 2}px`,
    margin:  `0 ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    backgroundColor: "#2196f3",
    color: theme.palette.primary.contrastText,
  },
  widthStyle: {
    margin:  `0 ${theme.spacing.unit * 3}px`,
  },
  paperFill: {
    color: theme.palette.primary.contrastText,
  },
  links: {
    textDecoration:"none",
    color: "unset"
  },
  btn:{
    color: theme.palette.primary.contrastText,
  },
  form: {
    padding: `${theme.spacing.unit * 2}px`,
    margin:  `0 ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  marginIcon: {
    marginRight: theme.spacing.unit,
  },
  btnSend: {
    margin: `${theme.spacing.unit * 2}px`,
  },
  itemBtn:{
    textAlign: "center",
  },
  loading: {
    padding: `${theme.spacing.unit * 3}px`,
  },
  marginAuto: {
    margin:"auto",
    padding: `${theme.spacing.unit * 2}px`,
  },
  text: {
    textAlign:"center"
  }
});

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
      tripleMoustachesArray: [],
      noMoustaches: false
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
    const {presentationId, uploadedFileId} =this.props;
    if (presentationId !== ''){
      fileId = presentationId
    } else if(uploadedFileId !== '') {
      fileId = uploadedFileId
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
    const {handleInitInputs, handleImagesInputs} = this.props;
    window.gapi.client.slides.presentations.get({
      presentationId: fileId
    }).then(response => {
      let presentation = response.result;

      const regexDouble = /(?={){{\s*[\w]+\s*}}(?!})/g;
      const regexTriple = /(?={){{{\s*[\w.]+\s*}}}(?!})/g;

      let moustaches = JSON.stringify(presentation).match(regexDouble);
      if(moustaches === null ) {
        this.setState({ noMoustaches: true, loadingForm: false });
      }

      let tripleMoustaches = JSON.stringify(presentation).match(regexTriple);
      if (moustaches.length > 0) {
        eraseMoustache = moustaches.map(item => item.replace('{{', '').replace('}}', ''));
        let moustachesNoDup = [...new Set([...keywords, ...eraseMoustache])];
        this.setState({ moustachesArray: moustachesNoDup, loadingForm: false });
      }

      handleInitInputs(this.state.moustachesArray);
      if (tripleMoustaches.length > 0) {
        eraseTripleMoustache = tripleMoustaches.map(item => item.replace('{{{', '').replace('}}}', ''));
        let tripleMoustachesNoDup = [...new Set([...keywords, ...eraseTripleMoustache])];
        this.setState({ tripleMoustachesArray: tripleMoustachesNoDup, loadingForm: false });
      }
      handleImagesInputs(this.state.tripleMoustachesArray);
    });
  }

  loadSlidesReplace() {
    const {presentationId, uploadedFileId, handleNext} =this.props;
    if (presentationId || uploadedFileId !== '') {
      window.gapi.client.load('slides', 'v1').then(f => {
        window.gapi.client.load('drive', 'v2').then(execute => {
          this.execute()
        })
        handleNext();
      }).catch(error => { console.log(error) });
    }
  }

  execute() {
    const {handleCopyId} = this.props;
    return window.gapi.client.drive.files.copy({
      "title": this.state.newName,
      "fileId": presentation,
      "resource": {}
    })
      .then((response) => {
        let newId = response.result.id;
        handleCopyId(newId);
      },
        function (err) { console.error("Execute error", err); })
      .catch(err => { console.log(err); })
  }

  paintForm() {
    const { handleInputs, handleChangeFile, fileInput, classes, handleBack } = this.props;
      return (
        <form>
          <Paper className={classes.form} elevation={1}>
            <Typography variant="h5" component="h2">Fill the form</Typography>
            <Grid container justify="center" alignItems="flex-start">
              <Grid item xs={12}>
                <TextField
                  required
                  id="copyName"
                  label="New document name"
                  style={{ margin: 8 }}
                  placeholder="New document name"
                  fullWidth
                  margin="normal"
                  onChange={this.handleNewDocument}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
              {this.state.moustachesArray.map(item => {
                return (
                  <TextField
                    required
                    key={item}
                    id= {item}
                    label={item.toUpperCase()}
                    style={{ margin: 8 }}
                    placeholder={item}
                    fullWidth
                    margin="normal"
                    onChange={handleInputs}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                );
              })
              }
              </Grid>
              <Grid item xs={12}>
              {this.state.tripleMoustachesArray.map(item=>{
                return (
                  <TextField
                    required
                    id={item}
                    key={item}
                    name={item}
                    label={item.toUpperCase()}
                    type='file'
                    onChange={handleChangeFile}
                    fullWidth
                    margin='normal'
                    ref={fileInput}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                );
              })
              }
              </Grid>
              <Grid item xs={6} className={classes.itemBtn}>
                <Link to="/steps/choose" className={classes.links}>
                    <Fab
                      variant="extended"
                      size="large"
                      color="secondary"
                      className={classes.btnSend}
                      onClick={handleBack}>
                      <span>Choose another template</span>
                    </Fab>
                  </Link>
              </Grid>
              <Grid item xs={6} className={classes.itemBtn}>
                <Link to="/steps/success" className={classes.links}>
                  <Fab
                    variant="extended"
                    size="large"
                    color="primary"
                    className={classes.btnSend}
                    onClick={this.loadSlidesReplace}>
                    <i className={`fas fa-share-square ${classes.marginIcon}`}></i>
                    <span>Send Form</span>
                  </Fab>
                </Link>
              </Grid>
            </Grid>
          </Paper>
        </form>
      )
  }

  handleNewDocument(e){
    let query = e.currentTarget.value;
    this.setState({
      newName: query
    })
  }

  render() {
    const { selectedTemplate, classes } = this.props;
    if (this.state.moustachesArray.length>0 || this.state.tripleMoustachesArray.length>0 ) {
      return (
        <div>
          <Paper className={classes.message} elevation={1}>
            <Grid container justify="center" alignItems="center" spacing={16}>
              <Grid item>
                <i className="far fa-check-circle fa-3x"></i>
              </Grid>
              <Grid item>
              <Typography component="p" className={classes.paperFill}>
                {selectedTemplate}
              </Typography>
              </Grid>
            </Grid>
          </Paper>
          {this.paintForm()}
        </div>
          );
    } else if (this.state.noMoustaches) {
      return (
        <div className={classes.loading}>
          <div className={classes.text}>
            Please check if your template has any keywords. Review our 'How to use' section if necessary.
          </div>
        </div>
      )
    } else if (this.state.loadingForm) {
      return (
        <div className={classes.loading}>
          <ReactLoading type={'spinningBubbles'} color={'#990099'} height={100} width={100} className={classes.marginAuto}/>
        </div>
      )
    }
  }
}

Fill.propTypes = {
  handleInitInputs: PropTypes.func,
  handleImagesInputs: PropTypes.func,
  handleNext: PropTypes.func,
  handleCopyId: PropTypes.func,
  handleInputs: PropTypes.func,
  handleChangeFile: PropTypes.func,
  handleBack: PropTypes.func,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Fill);
