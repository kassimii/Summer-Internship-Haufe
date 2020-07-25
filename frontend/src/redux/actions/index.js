import { GET_GROUPS, GET_GROUP, CREATE_GROUP, EDIT_GROUP } from "./types";

import { store } from "../store";

export const getGroups = () => async (dispatch) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  dispatch({ type: GET_GROUPS, payload: "groups" });
};

export const getGroup = (id) => async (dispatch) => {
  const currentState = store.getState();
  const group = currentState.groups.find((group) => group.id === id);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  dispatch({ type: GET_GROUP, payload: group });
};

export const editGroup = (formValues) => async (dispatch) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  dispatch({ type: EDIT_GROUP, payload: formValues });
};

export const createGroup = (formValues) => async (dispatch) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  dispatch({ type: CREATE_GROUP, payload: formValues });
};
