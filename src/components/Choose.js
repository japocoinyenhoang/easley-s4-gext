import React, { Component } from "react";
import ApiPicker from "./ApiPicker";
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CustomCard from "./CustomCard";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: `${theme.spacing.unit * 3}px`
  },
});

class Choose extends Component {
  render() {
    const { clientId, scopes, handleTemplate, handlePresentationId, handleNext, classes } = this.props;
    return (
      <Grid container className={classes.root} spacing={16}>
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
          <CustomCard text="Upload Template" onClick={null} icon="fas fa-cloud-upload-alt fa-6x"/>
        </Grid>
      </Grid>
    );
  }
}

Choose.propTypes={
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Choose);
