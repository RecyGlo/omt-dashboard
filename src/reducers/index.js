import { combineReducers } from 'redux';

import sessionReducer from './sessionReducer';
import userReducer from './userReducer';
import itemReducer from './itemReducer';
import junkShopReducer from './junkShopReducer';
import newsReducer from './newsReducer';
import notificationReducer from './notificationReducer';



const rootReducer = combineReducers({
  session: sessionReducer,
  user: userReducer,
  item: itemReducer,
  junk_shop: junkShopReducer,
  news: newsReducer,
  notification: notificationReducer
  
});

export default rootReducer;
