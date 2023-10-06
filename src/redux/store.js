import { createStore } from "redux";

const dummyStore = () => {
  return 100;
};

const store = createStore(dummyStore);

export default store;
