import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Text,Title, Spacer } from '@material-ui/core';


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

function Tos(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Title>
        TERMS OF USE/TERMS OF SERVICE QUESTIONNAIRE
        </Title>
        <Spacer />
        <Text>
        (1) Please describe the platform (such as website access to the game only, application access to the game etc.) and the activity that will be conducted on the platform. What’s important here is to describe how the game you’re launching will be interacted with by users (as it is not incredibly apparent to me from a non-user perspective or someone who has not had a feel for the game product you will launch). If you can provide me with a link to your platform or where users can access the game (whether that’s in launch state or pre-launch state), that will be helpful. 

        </Text>
      </Container>
    </section>
  );
}

Tos.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tos);