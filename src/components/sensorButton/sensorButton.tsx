import React from "react";
import Button from "@material-ui/core/Button";

export interface SensorButtonProps {
  connected: boolean;
}

const SensorButton: React.FC<SensorButtonProps> = ({ connected }) => {
  return (
    <Button size="small" color="primary">
      {connected ? "Disconnect" : "Connect"}
    </Button>
  );
};

export default SensorButton;
