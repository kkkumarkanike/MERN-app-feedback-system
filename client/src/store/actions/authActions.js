import axios from "axios";
import * as actionTypes from "./actionTypes";

export const getUser = () => {
  return async (dispatch) => {
    try {
      const user = await axios.get("/auth/user");
      if (user.data) dispatch({ type: actionTypes.GET_USER, user: user.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    const user = await axios.get("/auth/logout");
    if (user) {
      dispatch({ type: actionTypes.LOG_OUT });
    }
  };
};
