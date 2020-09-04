import { GET_CLIENTS, USER_LOGOUT } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case GET_CLIENTS:
      return {
        clients: action.payload.clients,
        totalPages: action.payload.totalPages,
        currentPage: action.payload.currentPage
      };
    case USER_LOGOUT:
      return [];
    default:
      return state;
  }
};
