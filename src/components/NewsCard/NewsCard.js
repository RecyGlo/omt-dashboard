import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  Link,
  Tooltip,
  Typography,
  colors,
} from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import getInitials from 'utils/getInitials';
import { Label } from 'components';

const useStyles = makeStyles(theme => ({
  root: {
    height: 300
  },
  header: {
    paddingBottom: 0
  },
  content: {
    padding: 0,
    '&:last-child': {
      paddingBottom: 0
    }
  },
  description: {
    padding: theme.spacing(2, 3, 1, 3)
  },
  tags: {
    padding: theme.spacing(0, 3, 1, 3),
    '& > * + *': {
      marginLeft: theme.spacing(1)
    }
  },
  learnMoreButton: {
    marginLeft: theme.spacing(2)
  },
  likedButton: {
    color: colors.red[600]
  },
  shareButton: {
    marginLeft: theme.spacing(1)
  },
  details: {
    padding: theme.spacing(1, 3)
  }
}));

const NewsCard = props => {
  const { news, className, ...rest } = props;

  const classes = useStyles();

  // const [liked, setLiked] = useState(news.liked);

  // const handleLike = () => {
  //   setLiked(true);
  // };

  // const handleUnlike = () => {
  //   setLiked(false);
  // };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        avatar={
          // <Avatar
          //   alt="Author"
          //   src={news.image[0]}
          // >
          //   {/* {getInitials(news.title)} */}
          // </Avatar>
          <img src={news.image[0]}
            style={{ height: 150, resizeMode: 'cover' }}
          />

        }
        className={classes.header}
        disableTypography
      // subheader={
      //   <Typography variant="body2">
      //     by{' '}
      //     <Link
      //       color="textPrimary"
      //       component={RouterLink}
      //       to="/profile/1/timeline"
      //       variant="h6"
      //     >
      //       {news.title}
      //     </Link>{' '}
      //     | Updated: {moment(news.publishedDate).fromNow()}
      //   </Typography>
      // }
      // title={
      //   <Link
      //     color="textPrimary"
      //     component={RouterLink}
      //     to="/projects/1/overview"
      //     variant="h5"
      //   >
      //     {news.title}
      //   </Link>
      // }
      />
      <CardContent className={classes.content}>
        <div className={classes.description}>
          <Typography
            colo="textSecondary"
            variant="subtitle2"
          >
            {news.content}
          </Typography>
        </div>
        {/* <div className={classes.tags}>
          {news.tags.map(tag => (
            <Label
              color={tag.color}
              key={tag.text}
            >
              {tag.text}
            </Label>
          ))}
        </div>
        <Divider /> */}
        {/* <div className={classes.details}>
          <Grid
            alignItems="center"
            container
            justify="space-between"
            spacing={3}
          >
            <Grid item>
              <Typography variant="h5">${news.price}</Typography>
              <Typography variant="body2">Per Project</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">{news.location}</Typography>
              <Typography variant="body2">Location</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">{news.type}</Typography>
              <Typography variant="body2">Type</Typography>
            </Grid>
            <Grid item>
              {liked ? (
                <Tooltip title="Unlike">
                  <IconButton
                    className={classes.likedButton}
                    onClick={handleUnlike}
                    size="small"
                  >
                    <FavoriteIcon />
                  </IconButton>
                </Tooltip>
              ) : (
                <Tooltip title="Like">
                  <IconButton
                    className={classes.likeButton}
                    onClick={handleLike}
                    size="small"
                  >
                    <FavoriteBorderIcon />
                  </IconButton>
                </Tooltip>
              )}
              <Tooltip title="Share">
                <IconButton
                  className={classes.shareButton}
                  size="small"
                >
                  <ShareIcon />
                </IconButton>
              </Tooltip>
              <Button
                className={classes.learnMoreButton}
                component={RouterLink}
                size="small"
                to="/projects/1/overview"
              >
                Learn more
              </Button>
            </Grid>
          </Grid>
        </div> */}
      </CardContent>
    </Card>
  );
};

NewsCard.propTypes = {
  className: PropTypes.string,
  news: PropTypes.object.isRequired
};

export default NewsCard;
