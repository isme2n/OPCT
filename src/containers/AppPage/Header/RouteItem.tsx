import * as React from "react";
import { NavLink } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const style = {
  routeItem: {
    textDecoration: "none"
  }
};

const RouteItem = ({ title, to, icon }) => (
  <NavLink to={to} style={style.routeItem}>
    <ListItem button={true}>
      <ListItemIcon>
        <div>{icon}</div>
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  </NavLink>
);

export default RouteItem;
