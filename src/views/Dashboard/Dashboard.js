import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { Page } from 'components';
import {
  Header,
  // LatestProjects,
  // NewProjects,
  // RealTime,
  // RoiPerCustomer,
  // TeamTasks,
  // TodaysMoney,
  // SystemHealth,
  // PerformanceOverTime
  TotalJunkShops,
  TotalUsers,
  TotalItems,
  TotalNews
} from './components';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { get_user_list, get_item_list, get_junk_shop_list, get_news_list } from 'actions';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  const { totalUsers, totalItems, totalJunkShops, totalNews } = useSelector(state => ({
    totalUsers: state.user.user_list,
    totalItems: state.item.item_list,
    totalJunkShops: state.junk_shop.junk_shop_list,
    totalNews: state.news.news_list
  }), shallowEqual);
  // const totalUsers = useSelector(state => state.user.user_list);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_user_list());
  }, []);

  useEffect(() => {
    dispatch(get_item_list());
  }, []);

  useEffect(() => {
    dispatch(get_junk_shop_list());
  }, []);

  useEffect(() => {
    dispatch(get_news_list());
  }, []);

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Header />
      <Grid
        className={classes.container}
        container
        spacing={3}
      >
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TotalUsers totalUsers={totalUsers ? totalUsers.length : 0} />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TotalItems totalItems={totalItems ? totalItems.length : 0} />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TotalJunkShops totalJunkShops={totalJunkShops ? totalJunkShops.length : 0} />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TotalNews totalNews={totalNews ? totalNews.length : 0} />
        </Grid>
        {/* <Grid
          item
          lg={3}
          xs={12}
        >
          <RealTime />
        </Grid>
        <Grid
          item
          lg={9}
          xs={12}
        >
          <PerformanceOverTime />
        </Grid>
        <Grid
          item
          lg={5}
          xl={4}
          xs={12}
        >
          <TeamTasks />
        </Grid>
        <Grid
          item
          lg={7}
          xl={8}
          xs={12}
        >
          <LatestProjects />
        </Grid> */}
      </Grid>
    </Page>
  );
};

export default Dashboard;
