import {
  GET_GROUPS,
  GET_GROUP,
  CREATE_GROUP,
  EDIT_GROUP,
  DELETE_GROUP,
  CLEAR_GROUP
} from "./types";

export const getGroups = (sendRequest) => async (dispatch) => {
  const response = await sendRequest("/groups", "GET", null, {
    "Content-Type": "application/json"
  });
  dispatch({ type: GET_GROUPS, payload: response });
};

export const getGroup = (id, sendRequest) => async (dispatch) => {
  const response = await sendRequest(`/groups/${id}`, "GET", null, {
    "Content-Type": "application/json"
  });
  dispatch({ type: GET_GROUP, payload: response });
};

export const editGroup = (formValues, sendRequest) => async (dispatch) => {
  const response = await sendRequest(
    `/groups/${formValues.id}`,
    "PATCH",
    JSON.stringify(formValues),
    {
      "Content-Type": "application/json"
    }
  );
  dispatch({ type: EDIT_GROUP, payload: response });
};

export const createGroup = (formValues, sendRequest) => async (dispatch) => {
  const response = await sendRequest(
    `/groups`,
    "POST",
    JSON.stringify(formValues),
    {
      "Content-Type": "application/json"
    }
  );
  dispatch({ type: CREATE_GROUP, payload: response });
};

export const deleteGroup = (id, sendRequest) => async (dispatch) => {
  const response = await sendRequest(`/groups/&{id}`, "DELETE", null, {
    "Content-Type": "application/json"
  });
  dispatch({ type: DELETE_GROUP, payload: response });
};

export const clearGroup = () => {
  return { type: CLEAR_GROUP };
};
