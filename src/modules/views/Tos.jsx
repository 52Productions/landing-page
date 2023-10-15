import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Typography } from '@mui/material';


const styles = (theme) => ({
  root: {
    color: theme.palette.common.black,
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

function Tos(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Typography variant='h1'>
        TERMS OF USE
        <br /><br />
        </Typography>
        <Typography variant='h4'>
          Have fun. <br />
          Be good. <br />
          Help us help you.<br />
        </Typography>
      </Container>
    </section>
  );
}

Tos.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tos);