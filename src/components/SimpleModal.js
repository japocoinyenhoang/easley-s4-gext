import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 100,
    Height: "100vh",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
  title: {
    textAlign: "center",
    color: theme.palette.primary.main
  }
});

class SimpleModal extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.open}
          onClose={this.props.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography className={classes.title} variant="h6" id="modal-title">
              How Gext works?
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              <ol>
                <li>
                  <p>In your presentation template, write between two curly braces the text fields that you want to change, or between three curly braces the images that you want to insert. For example: {'{{text}}'} or {'{{{image}}}'}.</p>
                  <p>Please, be aware that you must position the images on a different shape. Otherwise, the image will overwrite the texts.</p>
                </li>
                <li>
                  <p>Log in to Gext with your Google account and select your presentation template.</p>
                </li>
                <li>
                  <p>You already have in your hands the superpowers: The fields of the presentation that you have 'gexted' will automatically appear and you will be able to fill them in order to automatically generate a new copy.</p>
                </li>
                <li>
                  <p>Take a look or download your new presentation. And remember: 'With great power comes great responsibility'.</p>
                </li>
              </ol>
            </Typography>
            <SimpleModalWrapped />
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
