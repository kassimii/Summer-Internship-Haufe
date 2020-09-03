import axios from "axios";
import Cookie from "js-cookie";


import * as actions from "./types";


export const getGroups = (sendRequest) => async (dispatch) => {
  const response = await sendRequest("/groups", "GET", null, {
    "Content-Type": "application/json"
  });
  dispatch({ type: actions.GET_GROUPS, payload: response });
};

export const getGroup = (id, sendRequest) => async (dispatch) => {
  const response = await sendRequest(`/groups/${id}`, "GET", null, {
    "Content-Type": "application/json"
  });
  dispatch({ type: actions.GET_GROUP, payload: response });
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
  dispatch({ type: actions.EDIT_GROUP, payload: response });
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
    dispatch({ type: actions.CREATE_GROUP, payload: response });
  } catch (err) {
    console.log(err);
  }
};

export const deleteGroup = (id, sendRequest) => async (dispatch) => {
  const response = await sendRequest(`/groups/${id}`, "DELETE", null, {
    "Content-Type": "application/json"
  });
  dispatch({ type: actions.DELETE_GROUP, payload: response });
};

export const clearGroup = () => {
  return { type: actions.CLEAR_GROUP };
};

export const createClient = (formValues, sendRequest) => async (dispatch) => {
  const response = await sendRequest(
    `/clients`,
    "POST",
    JSON.stringify(formValues),
    { "Content-Type": "application/json" }
  );
  dispatch({ type: actions.CREATE_CLIENT, payload: response });
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
  dispatch({ type: actions.EDIT_CLIENT, payload: formValues });
};

export const getClient = (id, sendRequest) => async (dispatch) => {
  const response = await sendRequest(`/clients/${id}`, "GET", null, {
    "Content-Type": "application/json"
  });
  dispatch({ type: actions.GET_CLIENT, payload: response });
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
  dispatch({ type: actions.GET_CLIENTS, payload: response });
};

export const deleteClient = (id, sendRequest) => async (dispatch) => {
  const response = await sendRequest(`/clients/${id}`, "DELETE", null, {
    "Content-Type": "application/json"
  });
  dispatch({ type: actions.DELETE_CLIENT, payload: response });
};

export const clearClient = () => {
  return { type: actions.CLEAR_CLIENT };
};

export const signin = (email, sendRequest) => async (dispatch) => {
  dispatch({ type: actions.USER_SIGNIN_REQUEST, payload: { email } });
  try {
    const { user } = await sendRequest(
      "/signin",
      "POST",
      JSON.stringify({ email: email }),
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

// export const uploadMetadata = (client, file) => async(dispatch) => {

  // const js = JSON.stringify({file:file , client_id: id});

  // const js
  
  // console.log(js);
  // client.metadata.push(file);
  // console.log('idk');
  // dispatch({type: actions.UPLOAD_CLIENT_METADATA, payload: client});
  // try{
  // console.log('in upload meata');
  // const response = await sendRequest(
  //   `/clients/${id}/metadata`,
  //   "POST",
  //   file,
  //   { "Content-Type": "application/json" }
  // );
  // dispatch({type: actions.UPLOAD_CLIENT_METADATA, payload: response});
  
  // } catch(err){
  //   console.log(err);
  // }

  // console.log(file);
 
//}

export const uploadMetadata = (client, file) => async(dispatch) => {
  const newClient = { ...client};
  const js = JSON.stringify({file: file.file});
  const id = client.id;
  newClient.metadata.push(file);
  
  let formData = new FormData();
  formData.append('file', file);

  // console.log('adadadad',formData.values());
  // for(let val of formData.values()){
  //   console.log(val);
  // }
  try{
    console.log('in upload meata');
    await axios({
      baseURL: 'http://localhost:5000',
      url: `/api/clients/${id}/metadata`,
      method: 'post',
      data: formData,
    })  
  // dispatch({type: actions.UPLOAD_CLIENT_METADATA, payload: newClient });
  } catch(err){
    console.log(err);
  }
  dispatch({type: actions.UPLOAD_CLIENT_METADATA, payload: newClient });

}

export const getClientMetadata = async(name, sendRequest) => {

  
  try{
    const download = require("downloadjs");

    const response = await axios({
      baseURL: 'http://localhost:5000',
      url: `/api/clients/metadata/${name}`,
      method: 'get'
    }).then(response => response.data);  
   
    download(response, name);
  } catch(err){
    console.log(err);
  }
 
  
  // dispatch({type: actions.UPLOAD_CLIENT_METADATA, payload: client });
  
}; 
