import React from 'react';
// import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
  // Link,
  // Avatar
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';

import { Page } from 'components';
import gradients from 'utils/gradients';
import { LoginForm } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(6, 2)
  },
  card: {
    width: theme.breakpoints.values.md,
    maxWidth: '100%',
    overflow: 'unset',
    display: 'flex',
    position: 'relative',
    '& > *': {
      flexGrow: 1,
      flexBasis: '50%',
      width: '50%'
    }
  },
  content: {
    padding: theme.spacing(8, 4, 3, 4)
  },
  media: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    padding: theme.spacing(3),
    color: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  icon: {
    backgroundImage: gradients.green,
    color: theme.palette.white,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    position: 'absolute',
    top: -32,
    left: theme.spacing(3),
    height: 64,
    width: 64,
    fontSize: 32
  },
  loginForm: {
    marginTop: theme.spacing(3)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  person: {
    marginTop: theme.spacing(2),
    display: 'flex'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  logo:{
    height:150,
    width:150
  },
  logo_ui:{
    height:180,
    width:350
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Login"
    >
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <LockIcon className={classes.icon} />
          <Typography
            gutterBottom
            variant="h3"
          >
            Sign in
          </Typography>
          <Typography variant="subtitle2">
            Oh My Trash Dashboard
          </Typography>
          <LoginForm className={classes.loginForm} />
          <Divider className={classes.divider} />
          {/* <Link
            align="center"
            color="secondary"
            component={RouterLink}
            to="/auth/register"
            underline="always"
            variant="subtitle2"
          >
            Don't have an account?
          </Link> */}
        </CardContent>
        <CardMedia
          className={classes.media}
          image="/images/covers/4.jpg"
          title="Cover"
        >
          <img
            alt="Logo"
            className={classes.logo}
            src="/images/logos/oh_my_trash.png"
          />
          <Typography
            color="inherit"
            variant="subtitle1"
          >
            Personal Waste Management & Waste Trading Platform.
          </Typography>
          <img
            alt="Logo"
            className={classes.logo_ui}
            src="/images/logos/oh_my_trash_ui.png"
          />
          {/* <div className={classes.person}>
            <Avatar
              alt="Person"
              className={classes.avatar}
              src="/images/avatars/avatar_2.png"
            />
            <div>
              <Typography
                color="inherit"
                variant="body1"
              >
                Ekaterina Tankova
              </Typography>
              <Typography
                color="inherit"
                variant="body2"
              >
                Manager at inVision
              </Typography>
            </div>
          </div> */}
        </CardMedia>
      </Card>
    </Page>
  );
};

export default Login;
