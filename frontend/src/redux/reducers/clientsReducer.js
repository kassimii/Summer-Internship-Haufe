// import * as actions from "../actions/types";

// export default (state = [], action) => {
//   switch (action.type) {
//     case actions.GET_CLIENTS:
//       if (action.payload.clients) {
//         if (action.payload.clients.length === 0) return null;
//         return action.payload.cliens;
//       } else {
//         return state;
//       }
//     case actions.CREATE_CLIENT:
//       if (action.payload.client) {
//         if (state === null) return [action.payload.client];
//         else return [...state, action.payload.client];
//       }
//       return state;

//     default:
//       return state;
//   }
// };

import {GET_CLIENTS, CREATE_CLIENT, EDIT_CLIENT} from "../actions/types";

export let defaultState = [
  {
    id: "1",
    name: "Client1",
    advancedSettings: [
      {
        key: "key1",
        value: "val1",
      },
      {
        key: "key2",
        value: "val2",
      },
    ],
    attribute: [
      {
        key: "key3",
        value: "val3",
      },
      {
        key: "key4",
        value: "val4",
      },
    ],
  },
  {
    id: "2",
    name: "Client2",
    advancedSettings: [
      {
        key: "key5",
        value: "val5",
      },
      {
        key: "key6",
        value: "val6",
      },
    ],
    attribute: [
      {
        key: "key7",
        value: "val7",
      },
      {
        key: "key8",
        value: "val8",
      },
    ],
  },
  {
    id: "3",
    name: "Client3",
    advancedSettings: [
      {
        key: "key9",
        value: "val9",
      },
      {
        key: "key10",
        value: "val10",
      },
    ],
    attribute: [
      {
        key: "key11",
        value: "val11",
      },
      {
        key: "key12",
        value: "va12",
      },
    ],
  },
  {
    id: "4",
    name: "Client4",
    advancedSettings: [
      {
        key: "key13",
        value: "val13",
      },
      {
        key: "key14",
        value: "val14",
      },
    ],
    attribute: [
      {
        key: "key15",
        value: "val15",
      },
      {
        key: "key15",
        value: "val15",
      },
    ],
  },
];

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_CLIENTS:
      return state;
    case CREATE_CLIENT:
      return [...state, action.payload];
    case EDIT_CLIENT:
      let newState = state;
      newState = state.map((client) =>
        client.id === action.payload.id ? action.payload : client
      );
      return newState;
    default:
      return state;
  }
};