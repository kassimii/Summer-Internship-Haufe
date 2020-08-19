import { store } from "../store";

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
} from "./types";

export const getGroups = (sendRequest) => async (dispatch) => {
  const response = await sendRequest("/groups", "GET", null, {
    "Content-Type": "application/json",
  });
  dispatch({ type: GET_GROUPS, payload: response });
};

export const getGroup = (id, sendRequest) => async (dispatch) => {
  const response = await sendRequest(`/groups/${id}`, "GET", null, {
    "Content-Type": "application/json",
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
        "Content-Type": "application/json",
      }
    );
  } catch (err) {
    response = err;
  }
  dispatch({ type: EDIT_GROUP, payload: response });
};

export const createGroup = (formValues, sendRequest) => async (dispatch) => {
  const response = await sendRequest(
    `/groups`,
    "POST",
    JSON.stringify(formValues),
    {
      "Content-Type": "application/json",
    }
  );
  dispatch({ type: CREATE_GROUP, payload: response });
};

export const deleteGroup = (id, sendRequest) => async (dispatch) => {
  const response = await sendRequest(`/groups/${id}`, "DELETE", null, {
    "Content-Type": "application/json",
  });
  dispatch({ type: DELETE_GROUP, payload: response });
};

export const clearGroup = () => {
  return { type: CLEAR_GROUP };
};

export const createClient = (formValues, sendRequest) => async (dispatch) => {
  // const response = await sendRequest(
  //   `/clients`,
  //   "POST",
  //   JSON.stringify(formValues),
  //   { "Content-Type": "application/json" }
  // );
  // dispatch({ type: CREATE_CLIENT, payload: response });

  await new Promise((resolve) => setTimeout(resolve, 2000));
  dispatch({ type: CREATE_CLIENT, payload: formValues });
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
  // const response = await sendRequest(`/clients/${id}`, "GET", null, {
  //   "Content-Type": "application/json",
  // });
  // dispatch({ type: GET_CLIENT, payload: response });
  const currentState = store.getState();
  const client = currentState.clients.find((client) => client.id === id);

  await new Promise((resolve) => setTimeout(resolve, 2000));
  dispatch({ type: GET_CLIENT, payload: client });
};

export const getClients = (sendRequest) => async (dispatch) => {
  // const response = await sendRequest("/clients", "GET", null, {
  //   "Content-Type": "application/json",
  // });
  // dispatch({ type: GET_CLIENTS, payload: response });
  await new Promise((resolve) => setTimeout(resolve, 2000));
  dispatch({ type: GET_CLIENTS, payload: "clients" });
};

export const deleteClient = (id, sendRequest) => async (dispatch) => {
  const response = await sendRequest(`/clients/${id}`, "DELETE", null, {
    "Content-Type": "application/json",
  });
  dispatch({ type: DELETE_CLIENT, payload: response });
};
