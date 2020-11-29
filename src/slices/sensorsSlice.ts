import { createSlice } from "@reduxjs/toolkit";
// eslint-disable-next-line import/no-cycle
import { AppThunk } from "../store";

const WS_ENDPOINT = "ws://localhost:5000";

export type State = {
  loading: boolean;
  hasErrors: boolean;
  sensors: Array<any>;
};

const initialState: State = {
  loading: false,
  hasErrors: false,
  sensors: [],
};

const sensors = [
  {
    id: "0",
    name: "Temperature",
    connected: false,
    unit: "°C",
    value: null,
  },
  {
    id: "1",
    name: "Pressure",
    connected: false,
    unit: "kPa",
    value: null,
  },
  {
    id: "2",
    name: "Humidity",
    connected: false,
    unit: "%",
    value: null,
  },
  {
    id: "3",
    name: "PM2.5",
    connected: false,
    unit: "PM2.5",
    value: null,
  },
  {
    id: "4",
    name: "PM10",
    connected: false,
    unit: "PM10",
    value: null,
  },
  {
    id: "5",
    name: "Windsssss",
    connected: false,
    unit: "m/s",
    value: null,
  },
];

const sensorsSlice = createSlice({
  name: "sensors",
  initialState,
  reducers: {
    getSensors: (state) => {
      state.loading = true;
    },
    getSensorsSuccess: (state, { payload }) => {
      state.sensors = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getSensorsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const {
  getSensors,
  getSensorsSuccess,
  getSensorsFailure,
} = sensorsSlice.actions;

export const sensorsSelector = (state: State): any => state.sensors;

// Asynchronous thunk action
export const fetchSensors = (): AppThunk => {
  return async (dispatch: (arg0: any) => void) => {
    dispatch(getSensors());

    try {
      // fetch from the ws for now hardcoded
      const data = sensors;
      dispatch(getSensorsSuccess(data));
    } catch (error) {
      dispatch(getSensorsFailure());
    }
  };
};

export default sensorsSlice.reducer;
