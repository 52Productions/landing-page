import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '../components/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 30,
    padding: theme.spacing(5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.secondary.light,
  },
}));

export default function AppFooter() {
  const classes = useStyles();
  return (
    <Typography component="footer" className={classes.root}>
      © 52 Productions, Inc. {new Date().getFullYear()}
    </Typography>
  );
}
