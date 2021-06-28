import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { Page, SearchBar } from 'components';
// import { Page } from 'components';

import { useSelector } from 'react-redux';
// import { get_item_list } from 'actions';
import { ItemTable } from './components';

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

  const item_list = useSelector(state => state.item.item_list);
  // const dispatch = useDispatch();
  // dispatch(get_item_list());

  // useEffect(() => {
  //   dispatch(get_item_list());
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
  //         // set item_list in state
  //       });
  //   };

  //   fetchCustomers();

  //   return () => {
  //     mounted = false;
  //   };
  // }, []);

  const handleFilter = () => { };
  const handleSearch = () => { };

  return (
    <Page
      className={classes.root}
      title="Item"
    >
      {/* <UsersToolbar /> */}
      <SearchBar
        onFilter={handleFilter}
        onSearch={handleSearch}
      />
      {item_list && (
        <ItemTable
          className={classes.results}
          item_list={item_list}
        />
      )}
    </Page>
  );
};

export default UserList;
