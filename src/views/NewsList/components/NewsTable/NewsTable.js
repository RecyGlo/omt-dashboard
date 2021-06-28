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

const NewsTable = props => {
  const { className, news_list, ...rest } = props;

  const classes = useStyles();

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = event => {
    const { news_list } = props;

    let selectedUsers;

    if (event.target.checked) {
      selectedUsers = news_list.map(news => news._id);
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
  const [key,setKey] = useState(0);
  const [editUser, setEditUser] = useState({});

  const handleEditOpen = (news) => {
    console.log(news.name)
    setKey(1);
    setEditUser(news);
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
                      checked={selectedUsers.length === news_list.length}
                      color="primary"
                      indeterminate={
                        selectedUsers.length > 0 &&
                        selectedUsers.length < news_list.length
                      }
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Registration Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {news_list.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(news => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={news._id}
                    selected={selectedUsers.indexOf(news._id) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedUsers.indexOf(news._id) !== -1}
                        color="primary"
                        onChange={event => handleSelectOne(event, news._id)}
                        value="true"
                      />
                    </TableCell>
                    <TableCell>
                      <div className={classes.nameContainer}>
                        <Avatar
                          className={classes.avatar}
                          src={news.profileImage}
                        >
                          {getInitials(news.name)}
                        </Avatar>
                        <Typography variant="body1">{news.name}</Typography>
                      </div>
                    </TableCell>
                    <TableCell>{news.email}</TableCell>
                    <TableCell>{news.type}</TableCell>
                    <TableCell>
                      {news.location ? news.location.address : ''}
                    </TableCell>
                    <TableCell>{news.phoneNumber}</TableCell>
                    <TableCell>
                      {/* {moment(news.createdAt).format('DD/MM/YYYY')} */}
                      {news.createdAt}
                    </TableCell>
                    <TableCell align="right">
                      {/* <Button
                        color="primary"
                        // component={RouterLink}
                        size="small"
                        to="/news/edit/1"
                        variant="outlined"
                      > */}
                      <Button
                        color="primary"
                        onClick={() => handleEditOpen(news)}
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
          count={news_list.length}
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

NewsTable.propTypes = {
  className: PropTypes.string,
  news_list: PropTypes.array.isRequired
};

export default NewsTable;
