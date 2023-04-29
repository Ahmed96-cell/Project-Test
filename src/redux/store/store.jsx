import { createStore } from "redux";
import { appReducer } from "../reducer/appreducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
export const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
