import * as Actions from '../actiontypes/leaderboard-action-types';

// Initial State
const initialState = {
  processing: false,
  listingUsers: [],
};

// Reducer
export default (state = initialState, action) => {
  const newState = {...state};

  const {type, payload} = action;

  switch (type) {
    case Actions.LEADERBOARD_SET_PROCESSING:
      newState.processing = payload;
      break;
    case Actions.LEADERBOARD_SET_ALL_USERS:
      newState.listingUsers = payload;
      break;
    default:
      break;
  }
  return newState;
};
