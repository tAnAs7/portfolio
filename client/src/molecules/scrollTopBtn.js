import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  button: {
    minWidth: "44px",
    aspectRatio: "1/1",
    position: "fixed",
    bottom: "15px",
    right: "15px",
  },
}));

const ScrollTopBtn = () => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      size="small"
      color="primary"
      className={classes.button}
      onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}
    >
      <KeyboardArrowUp />
    </Button>
  );
};

export default ScrollTopBtn;
