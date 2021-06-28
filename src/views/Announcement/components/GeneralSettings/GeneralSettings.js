import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Divider,
  // Switch,
  TextField,
  // Typography,
  colors
} from '@material-ui/core';
import { Page } from 'components';
import SuccessSnackbar from '../SuccessSnackbar';
import axios from 'axios';
import { push_notification } from 'utils/endPoint';

const useStyles = makeStyles(theme => ({
  root: {
    // height: '100%',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: theme.spacing(6, 2)
  },
  // item: {
  //   display: 'flex',
  //   flexDirection: 'column'
  // },
  saveButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900]
    }
  }
}));

const GeneralSettings = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [values, setValues] = useState({
    title: '',
    message: '',
    // image: null
  });

  const handleChange = event => {
    event.persist();
    setValues({
      ...values,
      [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    const data = { ...values };
    console.log(data)

    const token = localStorage.getItem('token');
    const headers = {
      // 'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Credentials': true,
      'Authorization': `Bearer ${token}`,
    }
    axios.post(push_notification, values, { headers })
      .then(function (response) {
        console.log(response);
        // dispatch({
        //   type: USER_LIST,
        //   payload: response.data.data,
        // })
        // console.log(response);
        setOpenSnackbar(true);
      })
      .catch(function (error) {
        console.log(error);
      });

  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  // const states = ['Alabama', 'New York', 'San Francisco'];

  return (
    <Page
      className={classes.root}
      title="Notification"
    >
      <Card
        {...rest}
        className={clsx(classes.root, className)}
      >
        <form onSubmit={handleSubmit}>
          <CardHeader title="Oh My Trash App" />
          <Divider />
          <CardContent>
            <Grid
              container
              spacing={4}
            >
              {/* <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please enter the tile"
                label="Title"
                name="title"
                onChange={handleChange}
                required
                value={values.title}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={handleChange}
                type="text"
                value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Select State"
                name="state"
                onChange={handleChange}
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
              >
                {states.map(state => (
                  <option
                    key={state}
                    value={state}
                  >
                    {state}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Country"
                name="country"
                onChange={handleChange}
                required
                value={values.country}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <Typography variant="h6">Make Contact Info Public</Typography>
              <Typography variant="body2">
                Means that anyone viewing your profile will be able to see your
                contacts details
              </Typography>
              <Switch
                checked={values.isPublic}
                color="secondary"
                edge="start"
                name="isPublic"
                onChange={handleChange}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <Typography variant="h6">Available to hire</Typography>
              <Typography variant="body2">
                Toggling this will let your teamates know that you are available
                for acquireing new projects
              </Typography>
              <Switch
                checked={values.canHire}
                color="secondary"
                edge="start"
                name="canHire"
                onChange={handleChange}
              />
            </Grid>
          </Grid> */}

              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  name="title"
                  // helperText="Please enter the title"
                  label="Title"
                  onChange={handleChange}
                  // required
                  value={values.title}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >

                <TextField
                  fullWidth
                  // margin={5}
                  // helperText="Please enter the title"
                  label="Message"
                  name="message"
                  onChange={handleChange}
                  // required
                  value={values.message}
                  variant="outlined"
                  multiline
                />
              </Grid>
              {/* <Grid
              item
              md={6}
              xs={12}
            >

            </Grid> */}
            </Grid>

          </CardContent>
          <Divider />
          <CardActions>
            <Button
              className={classes.saveButton}
              type="submit"
              variant="contained"
            >
              Send Notification
          </Button>
          </CardActions>
        </form>
        <SuccessSnackbar
          onClose={handleSnackbarClose}
          open={openSnackbar}
        />
      </Card >
    </Page>
  );
};

GeneralSettings.propTypes = {
  className: PropTypes.string,
  // profile: PropTypes.object.isRequired
};

export default GeneralSettings;
