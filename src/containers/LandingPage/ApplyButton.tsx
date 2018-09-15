import * as React from "react";

import { Button } from "@material-ui/core";

import { NavLink } from "react-router-dom";

import * as routes from "../../constants/routes";

const styles = {
  button: {
    backgroundColor: "#0074e4",
    color: "#fff"
  }
};

interface ApplyButtonProps {
  style?: any;
}
export class ApplyButton extends React.Component<ApplyButtonProps> {
  public render() {
    return (
      <Button
        variant="contained"
        style={Object.assign({}, styles.button, this.props.style)}
      >
        <NavLink
          style={{ textDecoration: "none", color: "#fff" }}
          to={routes.APPLY}
        >
          APPLY NOW
        </NavLink>
      </Button>
    );
  }
}
