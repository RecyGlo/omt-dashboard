import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { Page, SearchBar } from 'components';
// import { Page } from 'components';

import { useSelector } from 'react-redux';
// import { get_user_list } from 'actions';
import { JunkShopTable } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  }
}));

const JunkShopList = () => {
  const classes = useStyles();

  const junk_shop_list = useSelector(state => state.junk_shop.junk_shop_list);
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
  //         // set junk_shop_list in state
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
      title="Junk Shop"
    >
      {/* <UsersToolbar /> */}
      <SearchBar
        onFilter={handleFilter}
        onSearch={handleSearch}
      />
      {junk_shop_list && (
        <JunkShopTable
          className={classes.results}
          junk_shop_list={junk_shop_list}
        />
      )}
    </Page>
  );
};

export default JunkShopList;
