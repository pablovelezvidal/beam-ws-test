import * as React from "react";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import Sensor from "../../components/sensor/Sensor";
import { SensorType } from "../../types/types";

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

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const Sensors: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={4}>
        {sensors.map((sensor) => (
          <Sensor {...sensor}></Sensor>
        ))}
      </Grid>
    </Container>
  );
};

export default Sensors;
