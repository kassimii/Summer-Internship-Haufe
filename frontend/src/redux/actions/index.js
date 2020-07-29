import {
  GET_GROUPS,
  GET_GROUP,
  CREATE_GROUP,
  EDIT_GROUP,
  DELETE_GROUP,
  CLEAR_GROUP
} from "./types";

import { store } from "../store";

export const getGroups = () => async (dispatch) => {
  // const response = await sendRequest(
  //   "http://localhost:3001/api/groups",
  //   "GET",
  //   null,
  //   {
  //     "Content-Type": "application/json",
  //   }
  // );
  // dispatch({ type: GET_GROUPS, payload: response });
  await new Promise((resolve) => setTimeout(resolve, 2000));
  dispatch({ type: GET_GROUPS, payload: "groups" });
};

export const getGroup = (id) => async (dispatch) => {
  // const response = await sendRequest(
  //   `http://localhost:3001/api/groups/${id}`,
  //   "GET",
  //   null,
  //   {
  //     "Content-Type": "application/json",
  //   }
  // );
  // dispatch({ type: GET_GROUP, payload: response });
  const currentState = store.getState();
  const group = currentState.groups.find((group) => group.id === id);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  dispatch({
    type: GET_GROUP,
    payload: group
  });
};

export const clearGroup = () => {
  return { type: CLEAR_GROUP };
};

export const editGroup = (formValues) => async (dispatch) => {
  // const response = await sendRequest(
  //   `http://localhost:3001/api/groups/${formValues.id}`,
  //   "PATCH",
  //   JSON.stringify(formValues),
  //   {
  //     "Content-Type": "application/json",
  //   }
  // );
  // dispatch({ type: EDIT_GROUP, payload: response });
  await new Promise((resolve) => setTimeout(resolve, 2000));
  dispatch({
    type: EDIT_GROUP,
    payload: formValues
  });
};

export const createGroup = (formValues) => async (dispatch) => {
  // const response = await sendRequest(
  //   `http://localhost:3001/api/groups/&{formValues.id}`,
  //   "POST",
  //   JSON.stringify(formValues),
  //   {
  //     "Content-Type": "application/json",
  //   }
  // );
  // dispatch({ type: CREATE_GROUP, payload: response });
  await new Promise((resolve) => setTimeout(resolve, 2000));
  dispatch({
    type: CREATE_GROUP,
    payload: formValues
  });
};

export const deleteGroup = (id) => async (dispatch) => {
  // const response = await sendRequest(
  //   `http://localhost:3001/api/groups/&{formValues.id}`,
  //   "DELETE",
  //   null,
  //   {
  //     "Content-Type": "application/json",
  //   }
  // );
  // dispatch({ type: DELETE_GROUP, payload: response });
  await new Promise((resolve) => setTimeout(resolve, 2000));
  dispatch({
    type: DELETE_GROUP,
    payload: id
  });
};
