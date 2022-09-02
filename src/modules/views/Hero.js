import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import splash_image from '../../assets/Turner52_header.webp';


const styles = (theme) => ({
  root: {
    color: theme.palette.common.white,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    width: "100vw"
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

function Hero(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img className={classes.image}
          src={splash_image}
          alt='52 productions header'
        />
      </Container>
    </section>
  );
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);