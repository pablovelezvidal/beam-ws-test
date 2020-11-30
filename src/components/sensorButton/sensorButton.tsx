import React from "react";
import Button from "@material-ui/core/Button";
import { connectSensor, disconnectSensor } from "../../slices/sensorsSlice";
import { useSelector, useDispatch } from "react-redux";

export interface SensorButtonProps {
  connected: boolean;
  id: string;
}

const SensorButton: React.FC<SensorButtonProps> = ({ connected, id }) => {
  const dispatch = useDispatch();

  const handleConnection = () => {
    dispatch(connectSensor(id));
  };

  const handleDisconnection = () => {
    dispatch(disconnectSensor(id));
  };

  const showButton = (connected: boolean) => {
    if (connected) {
      return (
        <Button size="small" color="secondary" onClick={handleDisconnection}>
          "Disconnect"
        </Button>
      );
    } else {
      return (
        <Button size="small" color="primary" onClick={handleConnection}>
          "Connect"
        </Button>
      );
    }
  };

  return showButton(connected);
};

export default SensorButton;
