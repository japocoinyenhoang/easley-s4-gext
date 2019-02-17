import React, { Component } from "react";
import ApiPicker from "./ApiPicker";
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CustomCard from "./CustomCard";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  widthStyle: {
    margin:  `0 ${theme.spacing.unit * 3}px`,
  }
});

class Choose extends Component {

  componentDidMount() {
    this.props.handleInit();
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
            <CustomCard text="Upload Template" onClick={null} icon="fas fa-cloud-upload-alt fa-5x"/>
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
