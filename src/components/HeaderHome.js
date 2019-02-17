import React, { Component } from "react";
import { Link } from 'react-router-dom';
import SimpleModal from './SimpleModal';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  links: {
    textDecoration:"none",
    color: "unset"
  },
});

class HeaderHome extends Component {
  render() {
    const {classes} = this.props;
    return (
      <header className={classes.root}>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Grid item>
            <IconButton onClick={this.props.handleOpen} color="secondary" className={classes.button}>
            <i class="far fa-question-circle"></i>
            </IconButton>
            <SimpleModal
                open={this.props.open}
                handleClose={this.props.handleClose}/>
          </Grid>
          <Grid item>
            <Link to="/about" className={classes.links}>
              <IconButton color="secondary" className={classes.button}>
                  <i class="fas fa-info-circle"></i>
              </IconButton>
            </Link>
          </Grid>
        </Grid>
      </header>
    );
  }
}

HeaderHome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderHome);
