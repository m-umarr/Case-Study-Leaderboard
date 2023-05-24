import * as Actions from '../actiontypes/leaderboard-action-types';
import users from "../../../assets/json/leaderboard.json";

// Get All Users
export const getAllUsers = (query, cb) => {
  return dispatch => {
    dispatch(_setProcessing(true));
    // Converting object into array and sorting and assign ranks;
    let userArr = Object.values(users);
    userArr = userArr.sort(function(a, b){return b?.bananas - a?.bananas});
    userArr.forEach(function(data, index){
      data.rank = index + 1;
      data.isSearchedUser = false;
    });

    // trim query
    let filters = query.toLowerCase().trim().split(/\s+/);

    //filtered searched user
    let searchedUser = userArr?.filter(res =>
      filters.every(
        word =>
          res?.name.toLowerCase().indexOf(word) > -1,
      ),
    );

    //Check if user exist or not
    if (searchedUser?.length > 0) {
      // updating isSearchUser
      searchedUser[0].isSearchedUser = true;
      let topTenUsers = userArr.slice(0, 10);
      topTenUsers = topTenUsers.sort(function(a, b){return b?.bananas - a?.bananas});
      if (!topTenUsers.includes(searchedUser[0])) {
        topTenUsers[topTenUsers. length - 1] = searchedUser[0];
      } else {

      }
      dispatch(_setAllUsers(topTenUsers));
      cb && cb(true);
    } else {
      dispatch(_setAllUsers([]));
      cb && cb(false);
    }
  };
};


// Dispatch Actions
export const _setProcessing = payload => {
  return {
    type: Actions.LEADERBOARD_SET_PROCESSING,
    payload,
  };
};

const _setAllUsers = payload => {
  return {
    type: Actions.LEADERBOARD_SET_ALL_USERS,
    payload,
  };
};
