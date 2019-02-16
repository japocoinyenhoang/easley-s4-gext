import React, { Component } from "react";
import PropTypes from 'prop-types';
import HeaderHome from './HeaderHome';
import logo from '../images/logo__gext.svg';
import ApiLogin from './ApiLogin';
import Footer from './Footer';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    padding: `${theme.spacing.unit * 2}px`
  },
  itemMain:{
    textAlign: "center",
  },
  hidden: {
    display: "none",
  }
});

class Home extends Component {
  render() {
    const { clientId, discoveryDocs, scopes, updateStateLogin, signIn, loadingHome, handleOpen, handleClose, open, classes } = this.props;
    return (
      <Grid container className={classes.root} direction="row" justify="space-between">
        <Grid item xs={12}>
          <HeaderHome handleOpen={handleOpen}
                      handleClose={handleClose}
                      open={open} />
        </Grid>
        <Grid item xs={12} className={classes.itemMain}>
          <main>
            <h1 className={classes.hidden}>Gext, presentations with superpowers</h1>
            <img src={logo} alt="Gext logo" width="300px"></img>
            <ApiLogin clientId={clientId} discoveryDocs={discoveryDocs} scopes={scopes} updateStateLogin={updateStateLogin} signIn={signIn} loadingHome={loadingHome} />
          </main>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
