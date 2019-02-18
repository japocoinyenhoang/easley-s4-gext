import React, { Component } from "react";
import { Link } from 'react-router-dom';
import SimpleModal from './SimpleModal';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  links: {
    textDecoration:"none",
    color: "unset"
  },
  marginIcon: {
    marginRight: theme.spacing.unit,
  },
  lightTooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  }
});

class HeaderHome extends Component {
  render() {
    const {classes, goBack, handleOpen, open, handleClose} = this.props;
    return (
      <header className={classes.root}>
        <Grid container direction="row" justify="space-between" alignItems="center">
          <Grid item>
            {
              goBack &&
              <Link className={classes.links} to="/">
                <Fab
                  variant="extended"
                  size="medium"
                  color="primary">
                  <i className={`far fa-arrow-alt-circle-left ${classes.marginIcon}`}></i>
                  <span>Go back home</span>
                </Fab>
              </Link>
            }
          </Grid>
          <Grid item>
            <Grid container direction="row" justify="flex-end" alignItems="center">
              <Grid item>
                <Tooltip title="how it works" classes={{tooltip: classes.lightTooltip}}>
                  <IconButton onClick={handleOpen} color="secondary" className={classes.button}>
                  <i className="far fa-question-circle"></i>
                  </IconButton>
                </Tooltip>
                <SimpleModal
                    open={open}
                    handleClose={handleClose}/>
              </Grid>
              <Grid item>
                <Link to="/about" className={classes.links}>
                  <Tooltip title="about us" classes={{tooltip: classes.lightTooltip}}>
                    <IconButton color="secondary" className={classes.button}>
                      <i className="fas fa-info-circle"></i>
                    </IconButton>
                  </Tooltip>
                </Link>
              </Grid>
            </Grid>
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
