import { GET_GROUPS, CREATE_GROUP, EDIT_GROUP } from "./types";

export const getGroups = () => async (dispatch) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  dispatch({ type: GET_GROUPS, payload: "groups" });
};

export const editGroup = (formValues) => async (dispatch) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  dispatch({ type: EDIT_GROUP, payload: formValues });
};

export const createGroup = (formValues) => async (dispatch) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  dispatch({ type: CREATE_GROUP, payload: { name: formValues } });
};
