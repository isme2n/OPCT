import * as React from "react";

import * as routes from "../../../constants/routes";
import RouteItem from "./RouteItem";

const styles = {
  menu: {
    display: "flex",
    justifyContent: "space-between"
  }
};

const Menu = () => <MenuAuth />;

const MenuAuth = () => (
  <div style={styles.menu}>
    <RouteItem icon={null} title={"Apply"} to={routes.APPLY} />
    <RouteItem icon={null} title={"Result"} to={routes.RESULT} />
    <RouteItem icon={null} title={"Interviewer"} to={routes.INTERVIEWER} />
  </div>
);

export default Menu;
