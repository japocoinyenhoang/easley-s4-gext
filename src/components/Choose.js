import React, { Component } from "react";
import ApiPicker from "./ApiPicker";
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class Choose extends Component {
  render() {
    const { clientId, scopes, handleTemplate, handlePresentationId, handleNext } = this.props;
    return (
      <Grid container>
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
          <Button variant="contained" size="large" color="primary">Upload template</Button>
        </Grid>
      </Grid>
    );
  }
}

Choose.propTypes={
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Choose);
