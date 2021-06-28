import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
// import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Avatar,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination
} from '@material-ui/core';

import getInitials from 'utils/getInitials';
import { UserEdit } from './components';
// import { getSourceMapRange } from 'typescript';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const JunkShopTable = props => {
  const { className, junk_shop_list, ...rest } = props;

  const classes = useStyles();

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = event => {
    const { junk_shop_list } = props;

    let selectedUsers;

    if (event.target.checked) {
      selectedUsers = junk_shop_list.map(junk_shop => junk_shop._id);
    } else {
      selectedUsers = [];
    }

    setSelectedUsers(selectedUsers);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedUsers.indexOf(id);
    let newSelectedUsers = [];

    if (selectedIndex === -1) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers, id);
    } else if (selectedIndex === 0) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(1));
    } else if (selectedIndex === selectedUsers.length - 1) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedUsers = newSelectedUsers.concat(
        selectedUsers.slice(0, selectedIndex),
        selectedUsers.slice(selectedIndex + 1)
      );
    }

    setSelectedUsers(newSelectedUsers);
  };

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
  };

  const [openEdit, setOpenEdit] = useState(false);
  const [key, setKey] = useState(0);
  const [editUser, setEditUser] = useState({});

  const handleEditOpen = (junk_shop) => {
    console.log(junk_shop.name)
    setKey(1);
    setEditUser(junk_shop);
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setKey(0);
    setEditUser({});
    setOpenEdit(false);
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedUsers.length === junk_shop_list.length}
                      color="primary"
                      indeterminate={
                        selectedUsers.length > 0 &&
                        selectedUsers.length < junk_shop_list.length
                      }
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Added Date</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {junk_shop_list.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(junk_shop => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={junk_shop._id}
                    selected={selectedUsers.indexOf(junk_shop._id) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedUsers.indexOf(junk_shop._id) !== -1}
                        color="primary"
                        onChange={event => handleSelectOne(event, junk_shop._id)}
                        value="true"
                      />
                    </TableCell>
                    <TableCell style={{ maxWidth: 200 }}>
                      <div className={classes.nameContainer}>
                        <Avatar
                          className={classes.avatar}
                          src={junk_shop.image}
                        >
                          {getInitials(junk_shop.name)}
                        </Avatar>
                        <Typography variant="body1">{junk_shop.name}</Typography>
                      </div>
                    </TableCell>
                    <TableCell style={{ maxWidth: 200 }}>
                      {junk_shop.location ? junk_shop.location.address : ''}
                    </TableCell>
                    <TableCell>{junk_shop.phoneNumber}</TableCell>
                    <TableCell>
                      {/* {moment(junk_shop.createdAt).format('DD/MM/YYYY')} */}
                      {junk_shop.createdAt}
                    </TableCell>
                    <TableCell>{junk_shop.approve_status}</TableCell>
                    {/* <TableCell>{junk_shop.type}</TableCell> */}
                    <TableCell align="right">
                      {/* <Button
                        color="primary"
                        // component={RouterLink}
                        size="small"
                        to="/junk_shop/edit/1"
                        variant="outlined"
                      > */}
                      <Button
                        color="primary"
                        onClick={() => handleEditOpen(junk_shop)}
                        size="small"
                      >
                        Edit
                      </Button>

                    </TableCell>

                  </TableRow>

                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>

      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={junk_shop_list.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions>
      <UserEdit
        key={key}
        onClose={handleEditClose}
        open={openEdit}
        user={editUser}
      />
    </Card>
  );
};

JunkShopTable.propTypes = {
  className: PropTypes.string,
  junk_shop_list: PropTypes.array.isRequired
};

export default JunkShopTable;
