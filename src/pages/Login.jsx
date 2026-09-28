import { useReducer } from "react";

const initialState = {
  email: "",
  password: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

function Login() {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!state.email || !state.password) {
      alert("Please enter all fields");
      return;
    }

    alert("Login successful!");
  };

  return (
    <section className="form-page">
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={state.email}
          onChange={(e) =>
            dispatch({
              type: "CHANGE",
              field: "email",
              value: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={state.password}
          onChange={(e) =>
            dispatch({
              type: "CHANGE",
              field: "password",
              value: e.target.value,
            })
          }
        />

        <button type="submit">
          Login
        </button>

        <button
          type="button"
          onClick={() =>
            dispatch({ type: "RESET" })
          }
        >
          Reset
        </button>
      </form>
    </section>
  );
}

export default Login;