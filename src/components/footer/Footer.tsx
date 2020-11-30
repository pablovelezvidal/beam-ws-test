import * as React from "react";

import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

export interface FooterProps {
  text: string;
  url: string;
  footerMainText: string;
  footerTitle: string;
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Footer: React.FC<FooterProps> = ({
  text,
  url,
  footerMainText,
  footerTitle,
}) => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        {footerTitle}
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        {footerMainText}
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        {"© "}
        <Link color="inherit" href={url}>
          {text}
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>{" "}
    </footer>
  );
};

export default Footer;
