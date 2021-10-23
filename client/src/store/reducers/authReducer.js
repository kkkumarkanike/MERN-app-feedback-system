import * as actionTypes from "./../actions/actionTypes";

let intialState = {
  user: null,
};

const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.LOG_OUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
