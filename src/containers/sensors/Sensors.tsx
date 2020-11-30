import React, { useEffect, useState } from "react";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import Sensor from "../../components/sensor/Sensor";
import { SensorType } from "../../types/types";
import { useSelector, useDispatch } from "react-redux";

import { fetchSensors, sensorsSelector } from "../../slices/sensorsSlice";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const Sensors: React.FC<{}> = () => {
  const dispatch = useDispatch();

  const { sensors, loading, hasErrors, toggleConnected } = useSelector(
    sensorsSelector
  );

  useEffect(() => {
    dispatch(fetchSensors());
  }, []);

  const classes = useStyles();

  const renderSensors = () => {
    if (loading)
      return (
        <p>
          Loading sensors... <CircularProgress />
        </p>
      );
    if (hasErrors || !sensors)
      return <p>There was an error fetching the sensors, is the WS active?</p>;
    return (
      <Grid container spacing={4}>
        {sensors &&
          sensors.map((sensor: SensorType) => {
            if (toggleConnected) {
              return (
                sensor.connected && (
                  <Sensor {...sensor} key={sensor.id}></Sensor>
                )
              );
            } else {
              return <Sensor {...sensor} key={sensor.id}></Sensor>;
            }
          })}
      </Grid>
    );
  };

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      {renderSensors()}
    </Container>
  );
};

export default Sensors;
