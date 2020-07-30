import React from "react";
import { shallow, configure } from "enzyme";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import CreateEditGroupModal from "../CreateEditGroupModal";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import TestRenderer from "react-test-renderer";
import ReactDOM from "react-dom";

const mockStore = configureStore([]);

configure({ adapter: new Adapter() });

describe("CreateEditGroupModal", () => {
  let store;
  let component;

  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element;
    });
  });
  afterEach(() => {
    ReactDOM.createPortal.mockClear();
  });
  beforeEach(() => {
    store = mockStore({
      id: "3"
    });
    component = renderer.create(
      <Provider store={store}>
        <CreateEditGroupModal />
      </Provider>
    );
  });

  it("render a button to pen modal", () => {
    expect(component.toJSON()).toMatchSnapshot();
    //   });

    //   it("render fields empty without given state -> create", () => {
    //     renderer.act(() => {
    //       console.log(component.root.findByType("button").props);
    //       component.root.findByType("button").props.onClick();
    //     });
    //   });

    //   it("render fields with given state from store -> edit", () => {
    //     expect(true).toEqual(true);
  });
});
