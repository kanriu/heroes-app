import { mount } from "enzyme";
import React from "react";
import { Navbar } from "../../../components/ui/Navbar";
import { MemoryRouter, Router } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext";
import { types } from "../../../types/types";

describe("Pruebas en Navbar", () => {
  const historyMock = {
    push: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn(),
    replace: jest.fn(),
  };

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: "Leonard",
    },
  };

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter>
        <Router history={historyMock}>
          <Navbar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".text-info").text().trim()).toBe("Leonard");
  });

  test("Debe de llamar el logout y usar history", () => {
    wrapper.find("button").prop("onClick")();
    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.logout,
    });

    expect(historyMock.replace).toHaveBeenCalledWith("/login");
  });
});
