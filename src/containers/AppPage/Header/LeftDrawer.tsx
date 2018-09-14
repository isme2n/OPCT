import { inject, observer } from "mobx-react";
import * as React from "react";
import { compose } from "recompose";

import { IconButton } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import Menu from "./Menu";

const LeftDrawer = ({ drawerStore }) => (
  <div>
    <Drawer variant="persistent" anchor={"left"} open={drawerStore.open}>
      <IconButton className={"left-anchor"} onClick={drawerStore.toggle}>
        <ChevronLeftIcon />
      </IconButton>
      <Divider />
      <List onClick={drawerStore.drawerClose}>
        <Menu />
      </List>
      <Divider />
    </Drawer>
  </div>
);

export default compose(
  inject("drawerStore"),
  observer
)(LeftDrawer);
