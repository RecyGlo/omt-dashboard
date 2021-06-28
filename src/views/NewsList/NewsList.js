import React, { useState, } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Page } from 'components';
import { useSelector } from 'react-redux';
// import clsx from 'clsx';
// import PropTypes from 'prop-types';
import {
  // Button,
  Grid,
  // Menu,
  // MenuItem,
  // ListItemText,
  Typography
} from '@material-ui/core';

import { Paginate } from 'components';
import { NewsCard } from 'components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(2)
  },
  title: {
    position: 'relative',
    '&:after': {
      position: 'absolute',
      bottom: -8,
      left: 0,
      content: '" "',
      height: 3,
      width: 48,
      backgroundColor: theme.palette.primary.main
    }
  },
  actions: {
    display: 'flex',
    alignItems: 'center'
  },
  sortButton: {
    textTransform: 'none',
    letterSpacing: 0,
    marginRight: theme.spacing(2)
  },
  paginate: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center'
  }
}));


// const useStyles = makeStyles(theme => ({
//   root: {
//     padding: theme.spacing(3)
//   },
//   results: {
//     marginTop: theme.spacing(3)
//   }
// }));

const NewsList = () => {
  // const { className, ...rest } = props;

  const news_list = useSelector(state => state.news.news_list);
  // const dispatch = useDispatch();
  // dispatch(get_user_list());

  // useEffect(() => {
  //   dispatch(get_user_list());
  // }, []);
  const classes = useStyles();
  // const sortRef = useRef(null);
  // const [openSort, setOpenSort] = useState(false);
  // const [selectedSort, setSelectedSort] = useState('Most popular');
  const [mode, setMode] = useState('grid');
  // const [news_list, setProjects] = useState([]);

  // useEffect(() => {
  //   let mounted = true;

  //   const fetchProjects = () => {
  //     axios.get('/api/news_list').then(response => {
  //       if (mounted) {
  //         setProjects(response.data.news_list);
  //       }
  //     });
  //   };

  //   fetchProjects();

  //   return () => {
  //     mounted = false;
  //   };
  // }, []);

  // const handleSortOpen = () => {
  //   setOpenSort(true);
  // };

  // const handleSortClose = () => {
  //   setOpenSort(false);
  // };

  // const handleSortSelect = value => {
  //   setSelectedSort(value);
  //   setOpenSort(false);
  // };

  // const handleModeChange = (event, value) => {
  //   setMode(value);
  // };

  return (
    <Page
      className={classes.root}
      title="News"
    >
      <div
        // {...rest}
        // className={clsx(classes.root, className)}
      >
        <div className={classes.header}>
          <Typography
            className={classes.title}
            variant="h5"
          >
            Showing {news_list.length} news
        </Typography>
          {/* <div className={classes.actions}>
          <Button
            className={classes.sortButton}
            onClick={handleSortOpen}
            ref={sortRef}
          >
            {selectedSort}
            <ArrowDropDownIcon />
          </Button>
          <ToggleButtonGroup
            exclusive
            onChange={handleModeChange}
            size="small"
            value={mode}
          >
            <ToggleButton value="grid">
              <ViewModuleIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </div> */}
        </div>
        <Grid
          container
          spacing={3}
        >
          {news_list.map(news => (
            <Grid
              item
              key={news._id}
              md={mode === 'grid' ? 4 : 12}
              sm={mode === 'grid' ? 6 : 12}
              xs={12}
            >
              <NewsCard news={news} />
            </Grid>
          ))}
        </Grid>
        <div className={classes.paginate}>
          <Paginate pageCount={3} />
        </div>
        {/* <Menu
        anchorEl={sortRef.current}
        className={classes.menu}
        onClose={handleSortClose}
        open={openSort}
      >
        {['Most recent', 'Popular', 'Price high', 'Price low', 'On sale'].map(
          option => (
            <MenuItem
              className={classes.menuItem}
              key={option}
              onClick={() => handleSortSelect(option)}
            >
              <ListItemText primary={option} />
            </MenuItem>
          )
        )}
      </Menu> */}
      </div>
    </Page>
  );
};

// Projects.propTypes = {
//   className: PropTypes.string
// };


export default NewsList;
