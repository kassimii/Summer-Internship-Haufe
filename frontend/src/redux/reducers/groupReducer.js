import { GET_GROUP } from "../actions/types";

export default (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case GET_GROUP:
      return action.payload;
    default:
      return state;
  }
};
