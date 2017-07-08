import { combineReducers } from 'redux';
import { reducer as searchFilter } from 'react-search-filter';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  searchFilter,
  router: routerReducer,
});
