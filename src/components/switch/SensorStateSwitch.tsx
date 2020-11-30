import React from "react";
import Switch from "@material-ui/core/Switch";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import {
  toggleConnectedSensors,
  sensorsSelector,
} from "../../slices/sensorsSlice";
import { useSelector, useDispatch } from "react-redux";

const SensorSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: "flex",
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      "&$checked": {
        transform: "translateX(12px)",
        color: theme.palette.common.white,
        "& + $track": {
          opacity: 1,
          borderColor: theme.palette.primary.main,
        },
      },
      "&$checked + $track": {
        backgroundColor: theme.palette.secondary.main,
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: "none",
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  })
)(Switch);

export interface SensorStateSwitchProps {}

const SensorStateSwitch: React.FC<SensorStateSwitchProps> = () => {
  const dispatch = useDispatch();
  const { toggleConnected } = useSelector(sensorsSelector);

  const toggleConnectedFn = () => {
    dispatch(toggleConnectedSensors());
  };

  return (
    <Typography component="div" style={{ position: "absolute", right: 15 }}>
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item>Show All</Grid>
        <Grid item>
          <SensorSwitch
            checked={toggleConnected}
            onChange={toggleConnectedFn}
            name="checkedC"
          />
        </Grid>
        <Grid item>Show Connected</Grid>
      </Grid>
    </Typography>
  );
};

export default SensorStateSwitch;
