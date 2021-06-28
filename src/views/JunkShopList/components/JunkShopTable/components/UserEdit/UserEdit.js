import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Modal,
  Card,
  CardContent,
  CardActions,
  Checkbox,
  FormGroup,
  Grid,
  Typography,
  TextField,
  // Switch,
  Button,
  colors,
  Radio,
  RadioGroup
} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import axios from 'axios'
import { user as edit_profile } from 'utils/endPoint'
// import useRouter from 'utils/useRouter';


const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    boxShadow: theme.shadows[20],
    width: 700,
    maxHeight: '100%',
    overflowY: 'auto',
    maxWidth: '100%'
  },
  container: {
    marginTop: theme.spacing(3)
  },
  actions: {
    justifyContent: 'flex-end'
  },
  saveButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900]
    }
  }
}));

const UserEdit = props => {
  const { open, onClose, user, className, ...rest } = props;

  const classes = useStyles();

  // const router = useRouter();

  const [formState, setFormState] = useState({
    ...user,
  });

  const [permission, setPermission] = useState(
    user.permission ? user.permission : {
      'item': false,
      'junk_shop': true,
      'news': false
    }
  );

  if (!open) {
    return null;
  }

  const handleFieldChange = event => {
    event.persist();

    setFormState(formState => {
      return ({
        ...formState,
        [event.target.name]:
          event.target.type === 'checkbox'
            ?
            event.target.checked
            :
            event.target.type === 'radiogroup'
              ?
              event.target.checked
              :
              event.target.value
      })
    });
    console.log(formState);
  };


  const handleUserPermission = event => {
    event.persist();
    console.log(permission)
    console.log(event.target.name);
    setPermission(permission => {
      return ({
        ...permission,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
      })
    });

    console.log(formState);

  };

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTU4MzQ2MjE4NSwiZXhwIjoxNTgzNTQ4NTg1fQ.oBQAEniCh85aC3JAT53Olei7b5nP6WdQ8ftUTVMmVhI'

  const headers = {
    'Content-Type': 'multipart/form-data',
    'Authorization': `Bearer ${token}`,
    'Access-Control-Allow-Credentials': true,
  }

  const onSave = () => {
    const data = { ...formState, 'permission': permission };
    delete data.createdAt;
    delete data.updatedAt;
    delete data.__v;
    delete data._id;
    delete data.isConfirm;
    if (user.phoneNumber === data.phoneNumber) {
      delete data.phoneNumber;
    }
    axios.patch(edit_profile + "/" + user._id, data, headers)
      .then(function (response) {
        console.log(response);
        onClose();
        window.location.reload();
        // router.history.push('/presentation');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Modal
      onClose={onClose}
      open={open}
    >
      <Card
        {...rest}
        className={clsx(classes.root, className)}
      >
        <form>
          <CardContent>
            <Typography
              align="center"
              gutterBottom
              variant="h3"
            >
              Edit User
            </Typography>
            <Grid
              className={classes.container}
              container
              spacing={3}
            >
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  onChange={handleFieldChange}
                  value={formState.name}
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
                  label="Email address"
                  name="email"
                  onChange={handleFieldChange}
                  value={formState.email}
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
                  label="Phone number"
                  name="phoneNumber"
                  onChange={handleFieldChange}
                  value={formState.phoneNumber}
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
                  label="Address"
                  name="address"
                  onChange={handleFieldChange}
                  value={formState.location ? formState.location.address : ''}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                {/* <TextField
                  fullWidth
                  label="Country"
                  name="country"
                  onChange={handleFieldChange}
                  value={formState.country}
                  variant="outlined"
                /> */}
                {/* <FormControl component="fieldset" > */}
                {/* <FormLabel component="legend">Gender</FormLabel> */}
                {/* value={value} onChange={handleChange} */}
                {/* <div> */}
                <RadioGroup
                  aria-label="gender"
                  name="type"
                  onChange={handleFieldChange}
                  row
                  value={formState.type}

                >
                  <FormControlLabel
                    control={<Radio />}
                    label="ADMIN"
                    value="ADMIN"
                  />
                  <FormControlLabel
                    control={<Radio />}
                    label="CUSTOMER"
                    value="CUSTOMER"
                  />
                  <FormControlLabel
                    control={<Radio />}
                    label="EDITOR"
                    value="EDITOR"
                  />
                </RadioGroup>
                {/* </FormControl> */}


              </Grid>
              {

                formState.type === 'EDITOR'

                  ?

                  < Grid
                    item
                    md={6}
                    xs={12}
                  >
                    <FormGroup
                      row
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={permission.item}
                            onChange={handleUserPermission}
                          // value="item"
                          />}
                        label="Item"
                        name="item"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={permission.junk_shop}
                            onChange={handleUserPermission}
                          // value="junk_shop"
                          />}
                        label="Junk Shop"
                        name="junk_shop"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={permission.news}
                            onChange={handleUserPermission}
                          // value="news"
                          />}
                        label="News"
                        name="news"
                      />
                    </FormGroup>
                  </Grid>

                  :
                  null
              }
              {/* <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Address 1"
                  name="address1"
                  onChange={handleFieldChange}
                  value={formState.address1}
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
                  label="Address 2"
                  name="address2"
                  onChange={handleFieldChange}
                  value={formState.address2}
                  variant="outlined"
                />
              </Grid> */}
              {/* <Grid item /> */}
              {/* <Grid
                item
                md={6}
                xs={12}
              >
                <Typography variant="h5">Email Verified</Typography>
                <Typography variant="body2">
                  Disabling this will automatically send the user a verification
                  email
                </Typography>
                <Switch
                  checked={formState.verified}
                  color="secondary"
                  edge="start"
                  name="verified"
                  onChange={handleFieldChange}
                  value={formState.verified}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <Typography variant="h5">Discounted Prices</Typography>
                <Typography variant="body2">
                  This will give the user discountedprices for all products
                </Typography>
                <Switch
                  checked={formState.discountedPrices}
                  color="secondary"
                  edge="start"
                  name="discountedPrices"
                  onChange={handleFieldChange}
                  value={formState.discountedPrices}
                />
              </Grid> */}
            </Grid>
          </CardContent>
          <CardActions className={classes.actions}>
            <Button
              onClick={onClose}
              variant="contained"
            >
              Close
            </Button>
            <Button
              className={classes.saveButton}
              onClick={onSave}
              variant="contained"
            >
              Save
            </Button>
          </CardActions>
        </form>
      </Card>
    </Modal >
  );
};

UserEdit.displayName = 'UserEdit';

UserEdit.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  user: PropTypes.any,
};

UserEdit.defaultProps = {
  open: false,
  onClose: () => { }
};

export default UserEdit;
