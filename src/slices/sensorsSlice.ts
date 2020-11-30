import { createSlice } from "@reduxjs/toolkit";
// eslint-disable-next-line import/no-cycle
import { AppThunk } from "../store";

import { WS_BASE } from "../config";

export type State = {
  loading: boolean;
  hasErrors: boolean;
  sensors: Array<any>;
  toggleConnected: boolean;
};

const initialState: State = {
  loading: false,
  hasErrors: false,
  sensors: [],
  toggleConnected: false,
};

const ws = new WebSocket(WS_BASE);

const sensorsSlice = createSlice({
  name: "sensors",
  initialState,
  reducers: {
    getSensors: (state) => {
      state.loading = true;
    },
    addSensorToSensors: (state, { payload }) => {
      const isIn = state.sensors.some((sensor) => sensor.id === payload.id);
      if (isIn) {
        const sensors = state.sensors.map((sensor) => {
          if (sensor.id === payload.id) {
            sensor.value = payload.value;
            sensor.connected = payload.connected;
          }
          return sensor;
        });
        state.sensors = sensors;
      } else {
        state.sensors = [...state.sensors, payload];
      }
      state.loading = false;
      state.hasErrors = false;
    },
    getSensorsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    toggleConnectedSensors: (state) => {
      state.toggleConnected = !state.toggleConnected;
    },
    connectSensor: (state, payload) => {
      console.log("jueputa payload", payload.payload);
      ws.send('{ "command": "connect", "id": "' + payload.payload + '"}');
    },
    disconnectSensor: (state, payload) => {
      ws.send('{ "command": "disconnect", "id": "' + payload.payload + '"}');
    },
  },
});

export const {
  getSensors,
  getSensorsFailure,
  addSensorToSensors,
  toggleConnectedSensors,
  connectSensor,
  disconnectSensor,
} = sensorsSlice.actions;

export const sensorsSelector = (state: State): any => state.sensors;

export const fetchSensors = (): AppThunk => {
  return async (dispatch: (arg0: any) => void) => {
    dispatch(getSensors());

    try {
      ws.onmessage = (e: MessageEvent<any>) => {
        dispatch(addSensorToSensors(JSON.parse(e.data)));
      };
    } catch (error) {
      dispatch(getSensorsFailure());
    }
  };
};

export default sensorsSlice.reducer;
