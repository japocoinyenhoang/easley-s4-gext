import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: `${theme.spacing.unit * 3}px`
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

function getSteps() {
  return ['Choose your template', 'Fill the fields', 'Review and download'];
}

class HorizontalLabelPositionBelowStepper extends React.Component {
  render() {
    const { classes, activeStep } = this.props;
    const steps = getSteps();
    return (
        <Paper className={classes.root} elevation={1}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
          ))}
          </Stepper>
        </Paper>
    );
  }
}

HorizontalLabelPositionBelowStepper.propTypes = {
  classes: PropTypes.object,
  activeStep: PropTypes.number.isRequired
};

export default withStyles(styles)(HorizontalLabelPositionBelowStepper);
