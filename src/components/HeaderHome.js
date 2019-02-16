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
});

class HeaderHome extends Component {
  render() {
    const {classes} = this.props;
    return (
      <header className={classes.root}>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Grid item>
            <IconButton onClick={this.props.handleOpen} color="primary" className={classes.button} aria-label="Add to shopping cart">
            <i class="fas fa-question-circle"></i>
            </IconButton>
            <SimpleModal
                open={this.props.open}
                handleClose={this.props.handleClose}/>
          </Grid>
          <Grid item>
            <IconButton color="primary" className={classes.button} aria-label="Add to shopping cart">
              <Link to="/about">
                <i class="fas fa-info-circle"></i>
              </Link>
            </IconButton>
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
