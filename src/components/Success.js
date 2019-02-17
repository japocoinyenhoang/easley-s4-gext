import React, { Component } from "react";
import ReactLoading from 'react-loading';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CustomCard from "./CustomCard";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: `${theme.spacing.unit * 2}px`,
    margin:  `0 ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    backgroundColor: "#8bc34a",
    color: theme.palette.primary.contrastText,
  },
  card: {
    flexGrow: 1,
  },
  links: {
    textDecoration:"none",
    color: "unset"
  },
  paperSuccess: {
    color: theme.palette.primary.contrastText,
  },
  widthStyle: {
    margin: `0 ${theme.spacing.unit * 3}px`,
  },
  marginAuto: {
    margin:"auto",
    padding: `${theme.spacing.unit * 2}px`,
  }
});

class Success extends Component {
  render() {
    const {classes} = this.props;
    let urlSlide = `https://docs.google.com/presentation/d/${this.props.copyId}/`;
    let urlDownload = `https://docs.google.com/presentation/d/${this.props.copyId}/export/pptx`;
    let urlDownloadPdf = `https://docs.google.com/presentation/d/${this.props.copyId}/export/pdf`;
    if (this.props.copyId !== '') {
      return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Grid container justify="center" alignItems="center" spacing={16}>
            <Grid item>
              <i className="far fa-thumbs-up fa-3x"></i>
            </Grid>
            <Grid item>
            <Typography component="p" className={classes.paperSuccess}>
              Congratulations!! You have completed your presentation.
            </Typography>
            </Grid>
          </Grid>
        </Paper>

        <div className={classes.widthStyle}>
          <Grid container className={classes.card} spacing={16} justify="center" alignItems="center">
            <Grid item xs={12} sm={6}>
              <a className={classes.links} href={urlSlide} target="_blank" rel="noopener noreferrer">
                <CustomCard text="View Presentation" onClick={null} icon="far fa-eye fa-5x"/>
              </a>
            </Grid>
            <Grid item xs={12} sm={6}>
              <a className={classes.links} href={urlDownload} download="test.pptx">
                <CustomCard text="Download in PPTX" onClick={null} icon="fas fa-file-download fa-5x"/>
              </a>
            </Grid>
            <Grid item xs={12} sm={6}>
              <a className={classes.links} href={urlDownloadPdf} download="test.pdf">
                <CustomCard text="Download in PDF" onClick={null} icon="fas fa-file-pdf fa-5x"/>
              </a>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Link to='/steps/choose' className={classes.links}>
                <CustomCard text="Create new presentation" onClick={null} icon="fas fa-sync-alt fa-5x"/>
              </Link>
            </Grid>
          </Grid>
        </div>
        <div className="photo__container">
         {/* <img src={this.props.photos} alt="uploaded"/>
        {this.props.photos} */}
        </div>
      </div>
    );
    } else {
      return (
        <ReactLoading type={'spinningBubbles'} color={'#990099'} height={100} width={100} className={classes.marginAuto} />
      )
    }
  }
}

Success.propTypes={
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Success);
