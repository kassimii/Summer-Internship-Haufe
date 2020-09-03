import { GET_CLIENTS, EDIT_CLIENT, USER_LOGOUT } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case GET_CLIENTS:
      return {
        clients: action.payload.clients,
        totalPages: action.payload.totalPages,
        currentPage: action.payload.currentPage
      };
    case EDIT_CLIENT:
      let newState = state;
      newState = state.map((client) =>
        client.id === action.payload.id ? action.payload : client
      );
      return newState;
    case USER_LOGOUT:
      return [];
    default:
      return state;
  }
};
