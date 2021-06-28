import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { Page, SearchBar } from 'components';
// import { Page } from 'components';

import { useSelector } from 'react-redux';
// import { get_user_list } from 'actions';
import { UserTable } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  }
}));

const UserList = () => {
  const classes = useStyles();

  const user_list = useSelector(state => state.user.user_list);
  const [filterUsers, setFilterUsers] = useState(null);
  // const dispatch = useDispatch();
  // dispatch(get_user_list());

  // useEffect(() => {
  //   dispatch(get_user_list());
  // }, []);

  // useEffect(() => {
  //   let mounted = true;

  //   const fetchCustomers = () => {
  //     fetch(users_url, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //         'Authorization': `Bearer ${token}`,
  //       },
  //     })
  //       .then(response => response.json())
  //       .then(data => {
  //         console.log(data)

  //         if (mounted) {
  //           setUsers(data.data);
  //         }
  //         // set user_list in state
  //       });
  //   };

  //   fetchCustomers();

  //   return () => {
  //     mounted = false;
  //   };
  // }, []);

  const handleFilter = () => { };
  const handleSearch = (event) => {
    let name = event.target.value;
    // console.log(user_list.length)
    // filter_users(name);
    // let hello = Object.values(user_list).includes(name) ? 'exist' : 'no exist'
    let filter_users = user_list.filter(obj => {
      return Object.values(obj).includes(name)
    })

    if (filter_users.length) {
      setFilterUsers(filter_users);
    } else {
      if (filterUsers) {
        setFilterUsers(null)
      }
    }


    // console.log(filter_users)
    // console.log(filter_users);
  };

  // let filter_users = (name) => {
  //   // user_list.map(user => Object.values(user_list).contains(name) ? console.log('exist') : null)

  // }

  return (
    <Page
      className={classes.root}
      title="User"
    >
      {/* <UsersToolbar /> */}
      <SearchBar
        onFilter={handleFilter}
        onSearch={handleSearch}
      />
      {user_list && (
        <UserTable
          className={classes.results}
          user_list={filterUsers ? filterUsers : user_list}
        />
      )}
    </Page>
  );
};

export default UserList;
