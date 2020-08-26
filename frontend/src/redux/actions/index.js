import {
  GET_GROUPS,
  GET_GROUP,
  CREATE_GROUP,
  EDIT_GROUP,
  DELETE_GROUP,
  CLEAR_GROUP,
  CREATE_CLIENT,
  EDIT_CLIENT,
  GET_CLIENT,
  GET_CLIENTS,
  DELETE_CLIENT,
  CLEAR_CLIENT
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
  let response;
  try {
    response = await sendRequest(
      `/groups/${formValues.id}`,
      "PATCH",
      JSON.stringify(formValues),
      {
        "Content-Type": "application/json"
      }
    );
  } catch (err) {
    response = err;
  }
  dispatch({ type: EDIT_GROUP, payload: response });
};

export const createGroup = (formValues, sendRequest) => async (dispatch) => {
  let response;
  try {
    response = await sendRequest(
      `/groups`,
      "POST",
      JSON.stringify(formValues),
      {
        "Content-Type": "application/json"
      }
    );
    dispatch({ type: CREATE_GROUP, payload: response });
  } catch (err) {
    console.log(err);
  }
};

export const deleteGroup = (id, sendRequest) => async (dispatch) => {
  const response = await sendRequest(`/groups/${id}`, "DELETE", null, {
    "Content-Type": "application/json"
  });
  dispatch({ type: DELETE_GROUP, payload: response });
};

export const clearGroup = () => {
  return { type: CLEAR_GROUP };
};

export const createClient = (formValues, sendRequest) => async (dispatch) => {
  const response = await sendRequest(
    `/clients`,
    "POST",
    JSON.stringify(formValues),
    { "Content-Type": "application/json" }
  );
  dispatch({ type: CREATE_CLIENT, payload: response });
};

export const editClient = (formValues, sendRequest) => async (dispatch) => {
  // let response;
  // try {
  //   response = await sendRequest(
  //     `/clients/${formValues.id}`,
  //     "PATCH",
  //     JSON.stringify(formValues),
  //     {
  //       "Content-Type": "application/json",
  //     }
  //   );
  // } catch (err) {
  //   response = err;
  // }
  // dispatch({ type: EDIT_CLIENT, payload: response });
  await new Promise((resolve) => setTimeout(resolve, 2000));
  dispatch({ type: EDIT_CLIENT, payload: formValues });
};

export const getClient = (id, sendRequest) => async (dispatch) => {
  const response = await sendRequest(`/clients/${id}`, "GET", null, {
    "Content-Type": "application/json"
  });
  dispatch({ type: GET_CLIENT, payload: response });
};

export const getClients = (sendRequest, query, page, limit) => async (
  dispatch
) => {
  const response = await sendRequest(
    `/clients?page=${page}&limit=${limit}` + query,
    "GET",
    null,
    {
      "Content-Type": "application/json"
    }
  );
  dispatch({ type: GET_CLIENTS, payload: response });
};

export const deleteClient = (id, sendRequest) => async (dispatch) => {
  const response = await sendRequest(`/clients/${id}`, "DELETE", null, {
    "Content-Type": "application/json"
  });
  dispatch({ type: DELETE_CLIENT, payload: response });
};

export const clearClient = () => {
  return { type: CLEAR_CLIENT };
};
