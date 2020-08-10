import React from "react";
import { shallow, configure } from "enzyme";
import GroupCard from "../GroupCard";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const testGroup = {
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
};

describe("GroupCard", () => {
  it("renders with group", () => {
    const card = shallow(<GroupCard group={testGroup} />);
    expect(card.find("div").length).toEqual(3) &&
      expect(card.find("CreateEditGroupModal").length).toEqual(1);
  });
  it("renders without group", () => {
    const card = shallow(<GroupCard />);
    expect(card.find("div").length).toEqual(1) &&
      expect(card.find("CreateEditGroupModal").length).toEqual(0);
  });
  it("renders group correctly", () => {
    const card = shallow(<GroupCard group={testGroup} />);
    const expectedText = testGroup.claimToGroupMapping.reduce(
      (acc, cur) => acc + cur
    );
    expect(card.find(".card-text").text()).toEqual(expectedText);
  });
});
