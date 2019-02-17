import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AboutCard from './AboutCard';
import HeaderHome from './HeaderHome';
import { Typography } from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    padding: `${theme.spacing.unit * 2}px`
  },
  members: {
    padding: `${theme.spacing.unit * 3}px`,
  },
  title: {
    textAlign:"center"
  }
})

const gextTeam = [{
  name:'Silvia García Cacho',
  description:'Master in cultural management. Due to my interest in technology and continuous learning I decided to start a new adventure as front-end developer. Hope to keep helping cultural institutions to embrace the XXI Century technology.',
  photo:'https://drive.google.com/uc?export=view&id=10WBqOaAbgwgMGwnwlATjIoheib2wyUIb',
  socialIcons: [
    ['fab fa-twitter', 'https://twitter.com/garcaplay'],
    ['fab fa-github-alt', 'https://github.com/garcaplay'],
    ['fab fa-linkedin', 'https://www.linkedin.com/in/silvia-garcía-cacho/'],
    ['far fa-envelope', 'mailto:silvia@garca.info'],
  ],
},
{
  name:'Alba López Folgar',
  description:'Graduated in Sociology, driven by social questions and issues. After studying in Adalab and develop the necessary skills to start a new path on web development, I am very eager to develop my career and never stop learning and growing.',
  photo: 'https://drive.google.com/uc?export=view&id=1HCKOLQ_2EjxEEjxWad3WOLsqbuk587QK',
  socialIcons: [
      ['fab fa-twitter', 'https://twitter.com/albahniuk'],
      ['fab fa-github-alt', 'https://github.com/albahniuk'],
      ['fab fa-linkedin', 'https://www.linkedin.com/in/albalopezfolgar/'],
      ['far fa-envelope', 'mailto:albalopezfolgar@gmail.com'],
  ],
},
{
  name:'Roxana Sánchez Briñas',
  description:'After graduating on Fine Arts, I implemented several multidisciplinary projects while serving coffees during the day and photographing "zombies" during the night on trendy bars. Nowadays, I have jumped into the digital world, and thanks Adalab I hope to keep evolving and growing in the technological career.',
  photo: 'https://drive.google.com/uc?export=view&id=1mm16NWv0LslR4Qn15xqQaussiwlcCoqE',
  socialIcons: [
      ['fab fa-twitter', 'Twitter: https://twitter.com/RoxSBri'],
      ['fab fa-github-alt', 'https://github.com/roxsb'],
      ['fab fa-linkedin', 'https://www.linkedin.com/in/roxana-sb/'],
      ['far fa-envelope', 'mailto:rox.san.bri@gmail.com'],

  ],
},
{
  name:'Laura Sánchez Redondo',
  description:'I changed my career as a Teacher of Infant Education and English, for UX Design. I discovered Adalab through a group of Spanish Ux Ladies on Twitter and, at the first time, I thought it was the best option to develop my professional career in the technological world. I love being part of this great initiative.',
  photo: 'https://drive.google.com/uc?export=view&id=1SU5Fg8xwMgcHnbvJhKvOS47CT6tgDnlT',
  socialIcons: [
      ['fab fa-twitter', 'https://twitter.com/babelarr'],
      ['fab fa-github-alt', 'https://github.com/babelarr'],
      ['fab fa-linkedin', 'https://www.linkedin.com/in/laurasanchezredondo/'],
      ['far fa-envelope', 'mailto:babelarr@gmail.com'],
  ],
},
{
  name:'Yen Hoang',
  description:'Future front-end developer, passionate about flex-box, currently trying to keep me afloat in the world of code. Philosophy of life: Work hard and win.',
  photo: 'https://drive.google.com/uc?export=view&id=1sK3QIldiWU8nfgz0TdQrfnBsEOra1pM7',
  socialIcons: [
      ['fab fa-twitter', 'https://twitter.com/japocoinyh'],
      ['fab fa-github-alt', 'https://github.com/japocoinyenhoang'],
      ['fab fa-linkedin', 'https://www.linkedin.com/in/yenhoangchu/'],
      ['far fa-envelope', 'mailto:japocoin@gmail.com'],
  ],
}]


class AboutUs extends Component {
  render() {

    const {classes, handleOpen, handleClose, open} = this.props;
    return (
      <div>
        <Grid container className={classes.root} direction="row" justify="space-between">
          <Grid item xs={12}>
            <HeaderHome handleOpen={handleOpen}
                        handleClose={handleClose}
                        open={open}
                        goBack={true} />
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.title} variant="h3" component="h2">Gext team</Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container className={classes.members} justify="center" alignItems="flex-start" spacing={16}>
                {
                  gextTeam.map( item => {
                    return (
                      <Grid item xs={12} sm={6}>
                        <AboutCard name={item.name} description={item.description} photo={item.photo} socialIcons={item.socialIcons}/>
                      </Grid>
                    )
                  }
                )}
            </Grid>
          </Grid>
        </Grid>
        {/* <ul className='about-us__list'>
          <li className='about-us__item'>
            <div className='about-us__pic'>
              <img className='profile-pic' src={roxana} alt='profile pic'></img>
            </div>
            <h2 className='about-us__title'>Roxana Sánchez Briñas</h2>
            <p className='about-us__description'>After graduating on Fine Arts, I implemented several multidisciplinary projects while serving coffees during the day and photographing "zombies" during the night on dive bars. Nowadays, I have jumped into the digital world, where I hope to keep evolving and acomplish in life, as her "Sim" does.</p>
            <ul className='social-media__list'>
              <li className='social-media__item'>Twitter: https://twitter.com/RoxSBri</li>
              <li className='social-media__item'>Github: https://github.com/roxsb</li>
              <li className='social-media__item'>Linkedin: https://www.linkedin.com/in/roxana-sb/</li>
              <li className='social-media__item'>Correo: rox.san.bri@gmail.com</li>
            </ul>
          </li>
          <li className='about-us__item'>
            <div className='about-us__pic'>
              <img className='profile-pic' src={yen} alt='profile pic'></img>
            </div>
            <h2 className='about-us__title'>Yen Hoang</h2>
            <p className='about-us__description'>Future front-end developer, passionate about flex-box, currently trying to keep me afloat in the world of code. Philosophy of life: Work hard and win.</p>
            <ul className='social-media__list'>
              <li className='social-media__item'>Twitter: https://twitter.com/JapocoinYH</li>
              <li className='social-media__item'>Github: https://github.com/japocoinyenhoang</li>
              <li className='social-media__item'>Linkedin: https://www.linkedin.com/in/YenHoangChu/</li>
              <li className='social-media__item'>Correo: japocoin@gmail.com</li>
            </ul>
          </li>
          <li className='about-us__item'>
            <div className='about-us__pic'>
              <img className='profile-pic' src={laura} alt='profile pic'></img>
            </div>
            <h2 className='about-us__title'>Laura Sánchez Redondo</h2>
            <p className='about-us__description'>I changed my career as a Teacher of Infant Education and English, for UX Design. I discovered Adalab through a group of Spanish Ux Ladies on Twitter and, at the first time, I thought it was the best option to develop my professional career in the technological world. I love being part of this great initiative.</p>
            <ul className='social-media__list'>
              <li className='social-media__item'>Twitter: https://twitter.com/babelarr</li>
              <li className='social-media__item'>Github: https://github.com/babelarr</li>
              <li className='social-media__item'>Linkedin: https://www.linkedin.com/in/laurasanchezredondo/</li>
              <li className='social-media__item'>Correo: babelarr@gmail.com</li>
            </ul>
          </li>
        </ul> */}
      </div>
    );
  }
}

AboutUs.propTypes = {
 classes: PropTypes.object.isRequired
};

export default withStyles (styles)(AboutUs);



