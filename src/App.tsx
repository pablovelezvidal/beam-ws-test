import React from "react";

import AppBar from "@material-ui/core/AppBar";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./components/footer/Footer";
import Sensors from "./components/sensors/Sensors";

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
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Da Header
          </Typography>
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
