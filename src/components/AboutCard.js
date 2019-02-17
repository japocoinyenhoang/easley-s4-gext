import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
  links: {
    textDecoration:"none",
    color: "unset"
  },
});

function AboutCard (props) {
  const { classes, name, description, photo, socialIcons} = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={name}
          className={classes.media}
          height="200"
          image={photo}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {
          socialIcons.map(item => {
            return(
              <a href={item[1]} className={classes.links} target="_blank" rel="noopener noreferrer">
                  <IconButton color="primary" className={classes.button}>
                    <i className={item[0]}></i>
                  </IconButton>
              </a>
            )
          })
        }
      </CardActions>
    </Card>
  );
}

AboutCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutCard);
