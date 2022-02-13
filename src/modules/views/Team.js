import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import adam_cheyer from '../../assets/adam_cheyer.png';
import cap from '../../assets/cap.png';
import richard_turner from '../../assets/richard_turner_thumbnail.png';
import asa_turner from '../../assets/asa_turner.png';
import charles_park from '../../assets/charles_park.png';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(15),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2, 5),
  },
  image: {
    height: 55,
  },
  circleCard: {
    borderColor: theme.palette.secondary.dark,
    borderRadius: 100,
    boxShadow: "2px 2px 2px 2px royalblue",
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});


function Team(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <Card className={classes.circleCard}>
                <CardMedia
                  component="img"
                  height="194"
                  image={richard_turner}
                  alt="Richard Turner" />
              </Card>
              <Typography variant="h6" className={classes.title}>
                Richard Turner, CEO
              </Typography>
              <Typography variant="h5">
                {'Seen in over 200 countries by over a billion people, multiple awardwinner and the subject of the 5-Star feature documentary film “DEALT”, Turner is a world-renowned Card Mechanic whose skills cannot be replicated, according to experts and scientists from Harvard and the University of Moscow. Turner’s touch and card skills leave audiences baffled beyond comprehension! Over the past fifty years Richard has used his unique gaming knowledge to design interactive puzzles, gambling board games and now conversational-interface gaming apps.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
            <Card className={classes.circleCard}>
                <CardMedia
                  component="img"
                  height="194"
                  image={adam_cheyer}
                  alt="Adam Cheyer" />
              </Card>
              <Typography variant="h6" className={classes.title}>
                Adam Cheyer, COO
              </Typography>
              <Typography variant="h5">
                {'Adam is a tech entrepreneur best known as the creator of SIRI, which he sold to Apple. Adam also helped start the world\'s largest petition platform Change.org, and was one of the co-founders of VIV Labs, which he sold to Samsung. Adam is also a lover of magic and was featured on Penn & Teller’s TV series, “Fool Us.”'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
            <Card className={classes.circleCard}>
                <CardMedia
                  component="img"
                  height="194"
                  image={cap}
                  alt="Jonathan Pauli" />
              </Card>
              <Typography variant="h6" className={classes.title}>
                Jonathan Pauli, Product Director
              </Typography>
              <Typography variant="h5">
                {'Jonathan works as a Director of Software and Operations at Astra (ASTR), a rocket company dedicated to improving life on earth from space. Previously Jonathan worked to manage server deployments of AI technology supporting hundreds of millions of devices at Samsung. Jonathan is a certified master scuba diver, and a lover of all things adventure related.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
            <Card className={classes.circleCard}>
                <CardMedia
                  component="img"
                  height="194"
                  image={asa_turner}
                  alt="Asa Spades Turner" />
              </Card>
              <Typography variant="h6" className={classes.title}>
                Asa Spades Turner, Engineering Director
              </Typography>
              <Typography variant="h5">
                {'Asa codes Virtual Reality (VR) games for top business and government projects and previously was the personal stage manager for a world class act that performed in over one-hundred national and international cities including a 32-city tour throughout China. He holds advanced belts in four martial art systems and is a top ranked gamer.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
          <div className={classes.item}>
            <Card className={classes.circleCard}>
                <CardMedia
                  component="img"
                  height="194"
                  image={charles_park}
                  alt="Charles Park" />
              </Card>
              <Typography variant="h6" className={classes.title}>
                Charles Park, Creative Director
              </Typography>
              <Typography variant="h5">
                {'Charles was cofounder and Creative Director at Gaia Interactive, a gaming company that produced such hits as Monster Galaxy (25M+ players, #3 on iTunes). Gaia pioneered many of the concepts now in frequent use by online games, such as virtual goods. Charles\' game development experience goes back twenty years, and he has contributed to the comics industry as well, having worked on numerous comic books for Marvel, DC Comics, and more.'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

Team.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Team);
