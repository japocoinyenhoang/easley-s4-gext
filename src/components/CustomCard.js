import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  action: {
    height: "200px",
  },
  iconColor: {
    color: theme.palette.primary.main,
  },
  alignItems: {
    textAlign: "center",
  },
});

function CustomCard(props) {
  const { classes, text, onClick, icon } = props;
  return (
    <Card className={classes.root} onClick={onClick}>
      <CardActionArea className={classes.action}>
        <CardContent className={classes.alignItems}>
          <Grid container justify="center" alignItems="center">
            <Grid item>
              <i className={`${icon} ${classes.iconColor}`}></i>
              <Typography gutterBottom variant="h5" component="h2">
                {text}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

CustomCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomCard);

