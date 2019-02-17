import React, { Component } from "react";
import logoHeader from '../images/logo__gext_header.svg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import SimpleModal from './SimpleModal';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  marginIcon: {
    marginRight: theme.spacing.unit,
  },
  links: {
    textDecoration:"none",
    color: "unset"
  },
  marginButton: {
    marginLeft: theme.spacing.unit,
  }
});

class Header extends Component {
  render() {
    const {classes} = this.props;
    return (
      <header className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Link to="/"><img src={logoHeader} alt="Gext logo" height="35px"></img></Link>
            <Grid container direction="row" justify="flex-end" alignItems="center">
              <Grid item>
                <IconButton onClick={this.props.handleOpen} color="secondary" className={classes.button}>
                <i className="far fa-question-circle"></i>
                </IconButton>
                <SimpleModal
                    open={this.props.open}
                    handleClose={this.props.handleClose}/>
              </Grid>
              <Grid item>
                <Link to="/about" className={classes.links}>
                  <IconButton color="secondary" className={classes.button}>
                    <i className="fas fa-info-circle"></i>
                  </IconButton>
                </Link>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  size="medium"
                  color="secondary"
                  className={classes.marginButton}
                  onClick={this.props.handleSignoutClick}>
                  <i className={`fab fa-google ${classes.marginIcon}`}></i>
                  <span>Sign out</span>
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </header>
    );
  }
}
Header.propTypes={
  handleSignoutClick: PropTypes.func,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);

