import React from "react";
import { shallow, configure } from "enzyme";
import CreateEditGroupModal from "../CreateEditGroupModal";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

configure({ adapter: new Adapter() });

describe("CreateEditGroupModal", () => {
  it("renders create", () => {
    const modal = shallow(<CreateEditGroupModal />);
    expect(modal.find("Button").length).toEqual(1);
  });
});
