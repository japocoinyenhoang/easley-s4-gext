import React, { Component, Fragment } from "react";
import ApiPicker from "./ApiPicker";
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CustomCard from "./CustomCard";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  widthStyle: {
    margin:  `0 ${theme.spacing.unit * 3}px`,
  },
  hidden: {
    display: "none"
  },
});

class Choose extends Component {
  constructor(props){
    super(props);

    this.roadToFill = this.roadToFill.bind(this);
  }

  componentDidMount() {
    this.props.handleInit();
  }

  roadToFill(){
    if(this.props.uploadedFileId !== '') {
      return <Redirect to='/steps/fill' />
      } else {
      return (
        <Fragment>
          <CustomCard text="Upload Template from PC" onClick={this.props.handleClick} icon="fas fa-cloud-upload-alt fa-5x"/>
          <label htmlFor="upload"></label>
          <input className={this.props.classes.hidden} id="upload" type="file" ref={this.props.templateInput} onChange={this.props.handleChangeTemplate}/>
        </Fragment>)
      }
  }

  render() {
    const { clientId, scopes, handleTemplate, handlePresentationId, handleNext, classes } = this.props;
    return (
      <div className={classes.widthStyle}>
        <Grid container className={classes.root} spacing={16} justify="center" alignItems="center">
          <Grid item xs={12} sm={6}>
            <ApiPicker
              clientId={clientId}
              scopes={scopes}
              handleTemplate={handleTemplate}
              handlePresentationId={handlePresentationId}
              handleNext={handleNext}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          {this.roadToFill()}
          </Grid>
        </Grid>
      </div>
    );
  }
}

Choose.propTypes={
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Choose);
