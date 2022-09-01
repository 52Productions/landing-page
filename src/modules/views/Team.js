import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar'
import Typography from '../components/Typography';
import adam_cheyer from '../../assets/adam_cheyer.png';
import ac_image from '../../assets/ac_image_2.png';
import jp from '../../assets/jp_portrait.jpg';
import richard_turner from '../../assets/richard_turner_thumbnail.png';
import andrii_g from '../../assets/andrii_ironman.jpg';
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
  circleCard: {
    height: '260px',
    width: '260px',
    backgroundColor: theme.palette.secondary.light,
    raised: 'false',
    border: 'none',
    boxShadow: 'none',
  },
  avatar: {
    height: '250px',
    width: '250px',
    borderWidth: '1px',
    borderColor: 'black',
    boxShadow: '2px 2px 2px 2px royalblue',
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  imageTitle: {
    marginTop: '38px',
    marginBottom: theme.spacing(4),
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
                <Avatar
                  className={classes.avatar}
                  src={richard_turner}
                  alt="Richard Turner">
                </Avatar>
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
                <Avatar
                  className={classes.avatar}
                  src={adam_cheyer}
                  alt="Acam Dheyer" />
              </Card>
              <img height={'37px'} className={classes.imageTitle} src={ac_image} alt="COO" />
              <Typography variant="h5">
                {'Adam is a tech entrepreneur best known as the creator of SIRI, which he sold to Apple. Adam also helped start the world\'s largest petition platform Change.org, and was one of the co-founders of VIV Labs, which he sold to Samsung. Adam is also a lover of magic and was featured on Penn & Teller’s TV series, “Fool Us.”'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <Card className={classes.circleCard}>
                <Avatar
                  className={classes.avatar}
                  src={jp}
                  alt="Jonathan Pauli" />
              </Card>
              <Typography variant="h6" className={classes.title}>
                Jonathan Pauli, Product Director
              </Typography>
              <Typography variant="h5">
                {'Jonathan leads Software & DevOps teams at Astra (ASTR) as Director of Infrastructure & Constellation Software. Astra is an ambitious space company dedicated to improving life on earth from space. Previously Jonathan designed, built, and maintained large scale cloud deployments of AI technology at Samsung & Adobe. Jonathan is a certified dive master, and a lover of all things adventure related.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <Card className={classes.circleCard}>
                <Avatar
                  className={classes.avatar}
                  src={andrii_g}
                  alt="Andrii Gorishnii" />
              </Card>
              <Typography variant="h6" className={classes.title}>
                Andrii Gorishnii
              </Typography>
              <Typography variant="h5">
                {'Andrii is an engineering leader with over a decade of experience designing, coding, and bringing mobile 3D games to market. He also loves sports, and has competed in multiple Iron Man races around the world.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <Card className={classes.circleCard}>
                <Avatar
                  className={classes.avatar}
                  src={charles_park}
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
    </section >
  );
}

Team.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Team);
