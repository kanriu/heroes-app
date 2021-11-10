import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe("Pruebas en authReducer", () => {
  const objeto = {
    name: "Snayder",
  };

  test("Debe de retornar el estado por defecto", () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test("Debe de autenticar y colocar el name del usuario", () => {
    const state = authReducer(
      { logged: false },
      { type: types.login, payload: objeto }
    );
    expect(state).toEqual({ ...objeto, logged: true });
  });
  test("Debe de borrar el name del usuario y logged en false", () => {
    const state = authReducer(
      { logged: true, name: "Snayder" },
      { type: types.logout }
    );
    expect(state).toEqual({ logged: false });
  });
});
