import React from "react";

import AppBar from "@material-ui/core/AppBar";
import DevicesOtherIcon from "@material-ui/icons/DevicesOther";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./components/footer/Footer";
import Sensors from "./containers/sensors/Sensors";
import SensorStateSwitch from "./components/switch/SensorStateSwitch";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));

const App: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <DevicesOtherIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Sensors Management
          </Typography>
          <SensorStateSwitch></SensorStateSwitch>
        </Toolbar>
      </AppBar>
      <main>
        {/* Main section */}
        <Sensors></Sensors>
      </main>
      {/* Footer */}
      <Footer
        text="copyright"
        url="url"
        footerMainText="main text"
        footerTitle="footer title"
      ></Footer>
      {/* End footer */}
    </React.Fragment>
  );
};

export default App;
