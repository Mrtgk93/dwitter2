import { isPast } from "date-fns";
import jwtDecode from "jwt-decode";
import axios from "axios";

export const SET_USER = "SET_USER";
export const ADD_USER = "ADD_USER";
export const SET_TOKEN = "SET_TOKEN";
export const SET_ALL_ENTRIES = "SET_ALL_ENTRIES";
export const ADD_ENTRY = "ADD_ENTRY";

export const checklogin = () => (dispatch) => {
  const token = localStorage.getItem("twitter");
  let user = null;

  if (token) {
    const decodeUser = jwtDecode(token);
    const gecersizMi = isPast(new Date(token.exp * 1000));

    if (!gecersizMi) {
      user = decodeUser;

      dispatch({ type: SET_TOKEN, payload: token });
    } else {
      localStorage.removeItem("twitter");
      dispatch({ type: SET_TOKEN, payload: null });
    }
    dispatch({ type: SET_USER, payload: user });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("twitter");
  dispatch({ type: SET_USER, payload: null });
  dispatch({ type: SET_TOKEN, payload: null });
};

export const getAllEntries = (token) => (dispatch) => {
  axios
    .get("https://dwitter-app.herokuapp.com/api/dwitler", {
      headers: {
        authorization: token,
      },
    })
    .then((res) => dispatch({ type: SET_ALL_ENTRIES, payload: res.data }))
    .catch((err) => console.log(err));
};

export const addEntry = (gidecekVeri, token) => (dispatch) => {
  axios
    .post("https://dwitter-app.herokuapp.com/api/dwitler", gidecekVeri, {
      headers: {
        authorization: token,
      },
    })
    .then((res) => {
      if (res.status === 201) {
        dispatch({
          type: ADD_ENTRY,
          payload: res.data,
        });
      }
    })
    .catch((err) => console.log(err));
};
