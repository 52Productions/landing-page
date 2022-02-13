import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../components/Typography';
import casinoChipsImage from '../../assets/casino_chips_sm.jpg';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  cta: {
    border: '4px solid currentColor',
    borderRadius: 0,
    height: 'auto',
    marginTop: theme.spacing(9),
    marginBottom: theme.spacing(9),
    padding: theme.spacing(2, 5),
    backgroundColor: theme.palette.secondary.light,
    display:"flex",
    justifyContent:"center",
  },
  iframeWrapper: {
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
  },
  copyright: {
    color: '#F8FBEF',
    height: 30,
    padding: theme.spacing(5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    backgroundImage: `url(${casinoChipsImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    zIndex: -1,
  },
});


function ContactForm(props) {
  const { classes } = props;

  return (
    <section className={classes.background}>
    <Container className={classes.root} component="section">
      <div className={classes.cta}>
        <Typography variant="h4" component="span" align="center">
          Want to know more? Get in touch!
        </Typography>
      </div>
      <div className={classes.iframe}>
      <iframe title="google_contact_form" src="https://docs.google.com/forms/d/e/1FAIpQLSdcZSNZPAc2-M7Ln9MDsNyEqIVCnr2PWkcGohTc8NoCwebIxA/viewform?embedded=true" width="100%" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
      <Typography variant="body2" component="footer" className={classes.copyright}>
      © 52 Productions, Inc. {new Date().getFullYear()}
    </Typography>
    </Container>
    </section>
  );
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactForm);
