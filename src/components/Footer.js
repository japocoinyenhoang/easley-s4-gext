import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  item: {
    textAlign: 'center',
  }
});

class Footer extends Component {
  render() {
    const {classes} = this.props;

    return (
      <footer>
        <Grid container className={classes.root}>
          <Grid item xs={12} className={classes.item}>
            Developed in Adalab by <Link className="link__about-us" to="/about">Gext Team</Link> in colaboration with Triporate © | 2019
          </Grid>
        </Grid>
      </footer>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
