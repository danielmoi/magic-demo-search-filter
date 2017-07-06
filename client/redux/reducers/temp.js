import { fromJS } from 'immutable';
import initialState from '../initial_state';
import C from '../../constants';

export default(state = fromJS(initialState.temp), action) => {
  switch (action.type) {

    default: {
      return state;
    }
  }
};
