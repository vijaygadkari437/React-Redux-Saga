import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import UserList from "./components/UserList";

// Wrap with Redux Provider
const App = () => (
  <Provider store={store}>
    <UserList />
  </Provider>
);

export default App;
