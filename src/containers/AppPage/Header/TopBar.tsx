import * as React from "react";
import { compose } from "recompose";

import { Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";

import Menu from "./Menu";
interface TopBarProps {
  history?: any;
  location?: any;
  drawerStore?: any;
  titleStore?: any;
  couchStore?: any;
  dialogStore?: any;
}

const styles = {
  button: {
    boxShadow: "0 5px 20px 0 rgba(7, 42, 68, 0.1)",
    border: 0
  }
};
class TopBar extends React.Component<TopBarProps> {
  public render() {
    return (
      <div>
        <AppBar
          position="absolute"
          style={{ background: "#fff", color: "#000" }}
        >
          <Toolbar variant="dense">
            <Typography variant="title" color="inherit" noWrap={true}>
              OPCT
            </Typography>
            <div style={{ flexGrow: 1 }} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingRight: "4%"
              }}
            >
              <Menu />
              <Button variant="outlined" style={styles.button}>
                APPLY NOW
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withRouter(
  compose(
    inject("drawerStore"),
    observer
  )(TopBar)
);
