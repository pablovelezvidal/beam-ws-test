import { combineReducers } from "redux";

// eslint-disable-next-line import/no-cycle
import sensorsSlice from "./slices/sensorsSlice";

export default function createRootReducer() {
  return combineReducers({
    sensors: sensorsSlice,
  });
}
