import axios from "axios";
import Cookie from "js-cookie";

import * as actions from "./types";

export const getGroups = (sendRequest) => async (dispatch, getState) => {
  try {
    const {
      userSignIn: { userInfo }
    } = getState();
    const response = await sendRequest("/groups", "GET", null, {
      Authorization: "Bearer " + userInfo.token
    });
    dispatch({ type: actions.GET_GROUPS, payload: response });
  } catch (err) {
    console.log(err);
  }
};

export const getGroup = (id, sendRequest) => async (dispatch, getState) => {
  try {
    const {
      userSignIn: { userInfo }
    } = getState();
    const response = await sendRequest(`/groups/${id}`, "GET", null, {
      Authorization: "Bearer " + userInfo.token
    });
    dispatch({ type: actions.GET_GROUP, payload: response });
  } catch (err) {
    console.log(err);
  }
};

export const editGroup = (formValues, sendRequest) => async (
  dispatch,
  getState
) => {
  let response;
  try {
    const {
      userSignIn: { userInfo }
    } = getState();
    response = await sendRequest(
      `/groups/${formValues.id}`,
      "PATCH",
      JSON.stringify(formValues),
      {
        "Content-Type": "application/json",
        Authorization: "Bearer " + userInfo.token
      }
    );
    dispatch({ type: actions.EDIT_GROUP, payload: response });
  } catch (err) {
    console.log(err);
  }
};

export const createGroup = (formValues, sendRequest) => async (
  dispatch,
  getState
) => {
  let response;
  try {
    const {
      userSignIn: { userInfo }
    } = getState();
    response = await sendRequest(
      `/groups`,
      "POST",
      JSON.stringify(formValues),
      {
        "Content-Type": "application/json",
        Authorization: "Bearer " + userInfo.token
      }
    );
    dispatch({ type: actions.CREATE_GROUP, payload: response });
  } catch (err) {
    console.log(err);
  }
};

export const deleteGroup = (id, sendRequest) => async (dispatch, getState) => {
  try {
    const {
      userSignIn: { userInfo }
    } = getState();
    const response = await sendRequest(`/groups/${id}`, "DELETE", null, {
      Authorization: "Bearer " + userInfo.token
    });
    dispatch({ type: actions.DELETE_GROUP, payload: response });
  } catch (err) {
    console.log(err);
  }
};

export const clearGroup = () => {
  return { type: actions.CLEAR_GROUP };
};

export const createClient = (formValues, sendRequest) => async (
  dispatch,
  getState
) => {
  try {
    const {
      userSignIn: { userInfo }
    } = getState();
    const response = await sendRequest(
      `/clients`,
      "POST",
      JSON.stringify(formValues),
      {
        "Content-Type": "application/json",
        Authorization: "Bearer " + userInfo.token
      }
    );
    dispatch({ type: actions.CREATE_CLIENT, payload: response });
  } catch (err) {
    console.log(err);
  }
};

export const editClient = (formValues, sendRequest) => async (
  dispatch,
  getState
) => {
  let response;
  try {
    const {
      userSignIn: { userInfo }
    } = getState();
    response = await sendRequest(
      `/clients/${formValues.id}`,
      "PATCH",
      JSON.stringify({ ...formValues, userId: userInfo.id }),
      {
        "Content-Type": "application/json",
        Authorization: "Bearer " + userInfo.token
      }
    );
    dispatch({ type: actions.EDIT_CLIENT, payload: response });
  } catch (err) {
    console.log(err);
  }
};

export const getClient = (id, sendRequest) => async (dispatch, getState) => {
  try {
    const {
      userSignIn: { userInfo }
    } = getState();
    const response = await sendRequest(`/clients/${id}`, "GET", null, {
      Authorization: "Bearer " + userInfo.token
    });
    dispatch({ type: actions.GET_CLIENT, payload: response });
  } catch (err) {
    console.log(err);
  }
};

export const getClients = (sendRequest, query, page, limit) => async (
  dispatch,
  getState
) => {
  try {
    const {
      userSignIn: { userInfo }
    } = getState();
    const response = await sendRequest(
      `/clients?page=${page}&limit=${limit}` + query,
      "GET",
      null,
      {
        Authorization: "Bearer " + userInfo.token
      }
    );
    dispatch({ type: actions.GET_CLIENTS, payload: response });
  } catch (err) {
    console.log(err);
  }
};

export const deleteClient = (id, sendRequest) => async (dispatch, getState) => {
  try {
    const {
      userSignIn: { userInfo }
    } = getState();
    const response = await sendRequest(`/clients/${id}`, "DELETE", null, {
      Authorization: "Bearer " + userInfo.token
    });
    dispatch({ type: actions.DELETE_CLIENT, payload: response });
  } catch (err) {
    console.log(err);
  }
};

export const clearClient = () => {
  return { type: actions.CLEAR_CLIENT };
};

export const signin = (jwtKey, sendRequest) => async (dispatch) => {
  dispatch({ type: actions.USER_SIGNIN_REQUEST, payload: { jwtKey } });
  try {
    const { user } = await sendRequest(
      "/signin",
      "POST",
      JSON.stringify({ jwtKey }),
      {
        "Content-Type": "application/json"
      }
    );
    dispatch({ type: actions.USER_SIGNIN_SUCCESS, payload: user });
    Cookie.set("userInfo", JSON.stringify(user));
  } catch (error) {
    console.log(error);
    dispatch({ type: actions.USER_SIGNIN_FAIL, payload: error.message });
  }
};

export const uploadMetadata = (client, file) => async (dispatch) => {
  const newClient = { ...client };
  const js = JSON.stringify({ file: file.file });
  const id = client.id;
  newClient.metadata.push(file);

  let formData = new FormData();
  formData.append("file", file);

  try {
    await axios({
      baseURL: "http://localhost:5000",
      url: `/api/clients/${id}/metadata`,
      method: "post",
      data: formData
    });
  } catch (err) {
    console.log(err);
  }
  dispatch({ type: actions.UPLOAD_CLIENT_METADATA, payload: newClient });
};

export const getClientMetadata = async (name, sendRequest) => {
  try {
    const download = require("downloadjs");

    const response = await axios({
      baseURL: "http://localhost:5000",
      url: `/api/clients/metadata/${name}`,
      method: "get"
    }).then((response) => response.data);

    download(response, name);
  } catch (err) {
    console.log(err);
  }
};
export const logout = () => (dispatch) => {
  Cookie.remove("userInfo");
  dispatch({ type: actions.USER_LOGOUT });
};

export const addStatus = (userId, status, sendRequest) => async (
  dispatch,
  getState
) => {
  try {
    const {
      userSignIn: { userInfo },
      selectedClient
    } = getState();
    const data = { userId, status };

    const response = await sendRequest(
      `/clients/${selectedClient.id}/status`,
      "POST",
      JSON.stringify(data),
      {
        "Content-Type": "application/json",
        Authorization: "Bearer " + userInfo.token
      }
    );

    dispatch({ type: actions.ADD_STATUS, payload: response });
  } catch (err) {
    console.log(err);
  }
};

export const getStatus = (sendRequest) => async (dispatch, getState) => {
  try {
    const {
      userSignIn: { userInfo },
      selectedClient: { id }
    } = getState();
    const response = await sendRequest(`/clients/${id}/status`, "GET", null, {
      Authorization: "Bearer " + userInfo.token
    });
    dispatch({
      type: actions.GET_STATUS,
      payload: { clientId: id, ...response }
    });
  } catch (err) {
    console.log(err);
  }
};
