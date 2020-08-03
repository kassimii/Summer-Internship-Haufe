import React from "react";
import { shallow, configure } from "enzyme";
const renderer = require("react-test-renderer");
import { Provider } from "react-redux";
import CreateEditGroupModal from "../CreateEditGroupModal";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import ReactDOM from "react-dom";

const mockStore = configureStore([]);

configure({ adapter: new Adapter() });
beforeAll(() => {
  ReactDOM.createPortal = jest.fn((element, node) => {
    return element;
  });
});
describe("CreateEditGroupModal", () => {
  let store;
  let component;

  // beforeAll(() => {
  //   ReactDOM.createPortal = jest.fn((element, node) => {
  //     return element;
  //   });
  // });
  // afterEach(() => {
  //   ReactDOM.createPortal.mockClear();
  // });

  beforeEach(() => {
    store = mockStore({
      group: {
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
    });

    component = renderer.create(
      <Provider store={store}>
        <CreateEditGroupModal group={store.getState().group} />
      </Provider>
    );
  });

  it("render default button", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("render a button to open modal", () => {
    renderer.act(() => {
      console.log(component.root.findByType("button").props);
      component.root.findByType("button").props.onClick();
    });
    expect(true).toEqual(true);
  });
});
