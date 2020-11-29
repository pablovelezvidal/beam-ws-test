import React, { useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import Sensor from "../../components/sensor/Sensor";
import { SensorType } from "../../types/types";
import { useSelector, useDispatch } from "react-redux";

import { fetchSensors, sensorsSelector } from "../../slices/sensorsSlice";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const Sensors: React.FC<{}> = () => {
  const dispatch = useDispatch();

  const { sensors, loading, hasErrors } = useSelector(sensorsSelector);

  useEffect(() => {
    dispatch(fetchSensors());
  }, []);
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={4}>
        {sensors.map((sensor: SensorType) => (
          <Sensor {...sensor}></Sensor>
        ))}
      </Grid>
    </Container>
  );
};

export default Sensors;
