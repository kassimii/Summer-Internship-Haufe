import { GET_GROUPS, CREATE_GROUP, EDIT_GROUP } from "../actions/types";

export let defaultState = [
  {
    id: "1",
    name: "Group1",
    claimToGroupMapping: ["claim1", "claim2"],
    defaultSettings: [
      {
        key: "setting1",
        value: "true",
      },
      {
        key: "setting2",
        value: "false",
      },
    ],
  },
  {
    id: "2",
    name: "Group2",
    claimToGroupMapping: ["claim1"],
    defaultSettings: [
      {
        key: "setting1",
        value: "false",
      },
      {
        key: "setting2",
        value: "false",
      },
      {
        key: "flag1",
        value: "true",
      },
    ],
  },
  {
    id: "3",
    name: "Group3",
    claimToGroupMapping: ["claim1", "claim2", "claim3"],
    defaultSettings: [
      {
        key: "setting3",
        value: "true",
      },
      {
        key: "setting2",
        value: "false",
      },
      {
        key: "setting4",
        value: "false",
      },
    ],
  },
  {
    id: "4",
    name: "Group4",
    claimToGroupMapping: ["claim1", "claim2", "claim5"],
    defaultSettings: [
      {
        key: "setting1",
        value: "true",
      },
    ],
  },
];

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_GROUPS:
      return state;
    case CREATE_GROUP:
      return [...state, action.payload];
    case EDIT_GROUP:
      let newState = state;
      newState = state.map((group) =>
        group.id === action.payload.id ? action.payload : group
      );
      return newState;
    default:
      return state;
  }
};
