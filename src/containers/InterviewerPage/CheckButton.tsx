import * as React from "react";

import { Button } from "@material-ui/core";

const styles = {
  button: {
    backgroundColor: "#0074e4",
    color: "#fff"
  }
};

interface CheckButtonProps {
  style?: any;
  onClick?: any;
}

export class CheckButton extends React.Component<CheckButtonProps> {
  public render() {
    return (
      <Button
        variant="contained"
        onClick={this.props.onClick}
        style={Object.assign({}, styles.button, this.props.style)}
      >
        APPLY NOW
      </Button>
    );
  }
}
