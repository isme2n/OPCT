import * as React from "react";
import { compose } from "recompose";

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
                justifyContent: "space-between"
              }}
            >
              <Menu />
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
