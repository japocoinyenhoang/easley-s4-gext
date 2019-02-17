import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: `${theme.spacing.unit * 3}px`,
  },
  item: {
    textAlign: 'center',
  },
  links: {
    textDecoration:"none",
  },
});

class Footer extends Component {
  render() {
    const {classes} = this.props;

    return (
      <footer>
        <Grid container className={classes.root}>
          <Grid item xs={12} className={classes.item}>
            <Typography component="p">
              Developed in Adalab by <Link className={classes.links} to="/about">Gext Team</Link> in colaboration with Triporate © | 2019
            </Typography>
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
