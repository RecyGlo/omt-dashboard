import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

// import { Page, SearchBar } from 'components';
import { Page } from 'components';

import { useSelector, useDispatch } from 'react-redux';
import { get_notification_list } from 'actions';
import { NotificationTable } from './components';


const useStyles = makeStyles(theme => ({
  root: {
    // padding: theme.spacing(3)
  },
  results: {
    // marginTop: theme.spacing(3)
  }
}));

const NotificationList = () => {
  const classes = useStyles();

  const notification_list = useSelector(state => state.notification.notification_list);
  // const [filterUsers, setFilterUsers] = useState(null);
  const dispatch = useDispatch();
  // dispatch(get_notification_list());

  useEffect(() => {
    dispatch(get_notification_list());
  }, []);

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
  //         // set notification_list in state
  //       });
  //   };

  //   fetchCustomers();

  //   return () => {
  //     mounted = false;
  //   };
  // }, []);

  // const handleFilter = () => { };
  // const handleSearch = (event) => {
  //   let name = event.target.value;
  //   // console.log(notification_list.length)
  //   // filter_users(name);
  //   // let hello = Object.values(notification_list).includes(name) ? 'exist' : 'no exist'
  //   let filter_users = notification_list.filter(obj => {
  //     return Object.values(obj).includes(name)
  //   })

  //   if (filter_users.length) {
  //     setFilterUsers(filter_users);
  //   } else {
  //     if (filterUsers) {
  //       setFilterUsers(null)
  //     }
  //   }


  //   // console.log(filter_users)
  //   // console.log(filter_users);
  // };

  // let filter_users = (name) => {
  //   // notification_list.map(user => Object.values(notification_list).contains(name) ? console.log('exist') : null)

  // }

  return (
    <Page
      className={classes.root}
      title="Notification History"
    >
      {/* <UsersToolbar /> */}
      {/* <SearchBar
        onFilter={handleFilter}
        onSearch={handleSearch}
      /> */}
      {console.log(notification_list)}
      {notification_list && (
        <NotificationTable
          className={classes.results}
          // user_list={filterUsers ? filterUsers : notification_list}
          notification_list={notification_list}
        />
      )}
    </Page>
  );
};

export default NotificationList;
