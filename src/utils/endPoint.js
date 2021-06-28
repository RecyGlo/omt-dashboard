const base_url = 'https://api.ohmytrash.com'
// const base_url = 'http://192.168.0.185:4000'
// const base_url = 'http://192.168.100.21:4000'
// const base_url = 'http://192.168.43.92:4000'


const user = base_url + '/users';
const news = base_url + '/news';
const junk_shop = base_url + '/junkshops';
const item = base_url + '/item';

const pending_item = base_url + '/item/pending';
const pending_news = base_url + '/news/pending';

//user
const refresh_token = user + '/refresh_token';
const log_in = user + '/log_in';
const log_in_by_social = user + '/log_in_by_social';
const sign_up_url = user + '/';
const user_info = user + '/:id';

//junk shop
const pending_junk_shop = junk_shop + '/pending';
const approved_junk_shop = junk_shop + '/approved';
const rejected_junk_shop = junk_shop + '/rejected';
const added_junk_shop = junk_shop + '/added/';


//news


//item
const get_item = item + '/';
const post_item = item + '/';

//push notification
const push_notification = user + '/push_notification';
// const notification = user + '/notification';
const notification = junk_shop + '/notification';






export {
  user,
  refresh_token,
  log_in,
  log_in_by_social,
  sign_up_url,
  junk_shop,
  pending_junk_shop,
  approved_junk_shop,
  rejected_junk_shop,
  added_junk_shop,
  user_info,
  get_item,
  post_item,
  item,
  news,
  pending_item,
  pending_news,
  push_notification,
  notification,
}
