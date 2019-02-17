import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import ReactLoading from 'react-loading';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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

});

let keywords = [];
let eraseMoustache;
let presentation;
let eraseTripleMoustache;

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
  }

  componentDidMount() {
    this.loadSlidesApi();
  }

  loadSlidesApi() {
    if (this.props.presentationId !== '') {
      presentation = this.props.presentationId;
      window.gapi.client.load('slides', 'v1').then(this.listSlides);
    }
  }

  listSlides() {
    window.gapi.client.slides.presentations.get({
      presentationId: this.props.presentationId
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
    if (this.props.presentationId !== '') {
      window.gapi.client.load('slides', 'v1').then(f => {
        window.gapi.client.load('drive', 'v2').then(execute => {
          this.execute()
        })
        this.props.handleNext();
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
    const { handleInputs, handleChangeFile, fileInput, fakeClick, classes } = this.props;
    if (this.state.moustachesArray.length === 0 && this.state.tripleMoustachesArray.length === 0) {
      return (<div className="errorMessage">Sorry but your template has not any keyword to create a form. Please review our 'How to use' section</div>)
    } else {
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
                  />
                );
              })
              }
              </Grid>
              <Grid item xs={12} className={classes.itemBtn}>
                <Link to="/steps/success" className={classes.links}>
                  <Fab
                    variant="extended"
                    size="large"
                    color="primary"
                    aria-label="Add"
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
                <i class="far fa-check-circle fa-3x"></i>
              </Grid>
              <Grid item>
              <Typography component="p" className={classes.paperFill}>
                {selectedTemplate} <Button className={classes.btn} size="small" onClick={this.props.handleBack}><Link className={classes.links} to="/steps/choose">Choose another template</Link></Button>
              </Typography>
              </Grid>
            </Grid>
          </Paper>
          {this.paintForm()}
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
  selectedTemplate: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Fill);
