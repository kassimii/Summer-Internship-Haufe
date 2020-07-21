import { GET_GROUPS, CREATE_GROUP } from "./types";

const groups = ["1", "2", "3", "4", "5"];

export const getGroups = () => async (dispatch) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  dispatch({ type: GET_GROUPS, payload: groups });
};

export const createGroup = (formValues) => async (dispatch) => {
  groups.push(formValues);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  dispatch({ type: CREATE_GROUP, payload: groups });
};
