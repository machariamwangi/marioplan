import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combinedReducer } from "redux";

const rootReducer = combinedReducer({
  auth: authReducer,
  project: projectReducer
});
export default rootReducer;
