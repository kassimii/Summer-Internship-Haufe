import React from "react";
import { shallow, configure } from "enzyme";
import renderer from "react-test-renderer";
import GroupsList from "../GroupsList";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { Router } from "react-router-dom";

configure({ adapter: new Adapter() });

describe("GroupsList", () => {
  const testGroups = [
    {
      id: "1",
      name: "Group1",
      claimToGroupMapping: ["claim1", "claim2"],
      defaultSettings: [
        {
          key: "setting1",
          value: "true"
        },
        {
          key: "setting2",
          value: "false"
        }
      ]
    },
    {
      id: "2",
      name: "Group2",
      claimToGroupMapping: ["claim1"],
      defaultSettings: [
        {
          key: "setting1",
          value: "false"
        },
        {
          key: "setting2",
          value: "false"
        },
        {
          key: "flag1",
          value: "true"
        }
      ]
    },
    {
      id: "3",
      name: "Group3",
      claimToGroupMapping: ["claim1", "claim2", "claim3"],
      defaultSettings: [
        {
          key: "setting3",
          value: "true"
        },
        {
          key: "setting2",
          value: "false"
        },
        {
          key: "setting4",
          value: "false"
        }
      ]
    },
    {
      id: "4",
      name: "Group4",
      claimToGroupMapping: ["claim1", "claim2", "claim5"],
      defaultSettings: [
        {
          key: "setting1",
          value: "true"
        }
      ]
    }
  ];

  it("renders with no group", () => {
    let groupsList = renderer.create(<GroupsList />);
    let tree = groupsList.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with with many groups", () => {
    const groupsList = shallow(<GroupsList groups={testGroups} />);
    expect(groupsList.find("div").length).toEqual(3 + 2 * testGroups.length);
  });
});
