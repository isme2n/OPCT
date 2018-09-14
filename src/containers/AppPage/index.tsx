import { inject, observer } from "mobx-react";
import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { compose } from "recompose";

import { withStyles, withTheme } from "@material-ui/core/styles";

import * as routes from "../../constants/routes";
import { ApplyPage } from "../ApplyPage";
import LandingPage from "../LandingPage";
import NotFoundPage from "../NotFoundPage";
import { ResultPage } from "../ResultPage";
import Header from "./Header";

const styles = theme => ({
  appHeader: {
    flexGlow: 1,
    height: 50,
    [theme.breakpoints.down("md")]: {
      height: 48
    }
  },
  appBody: {
    marginTop: "-2px",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      margin: "0px"
    }
  }
});

const App = props => (
  <Router>
    <div>
      <div className={props.classes.appHeader}>
        <Header />
      </div>
      <main
        className={props.classes.appBody}
        onClick={props.drawerStore.drawerClose}
      >
        <Switch>
          <Route exact={true} path={routes.LANDING} component={LandingPage} />
          <Route
            exact={true}
            path={routes.INTERVIEWER}
            component={LandingPage}
          />
          <Route exact={true} path={routes.RESULT} component={ResultPage} />
          <Route exact={true} path={routes.APPLY} component={ApplyPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    </div>
  </Router>
);

export default compose(
  inject("drawerStore"),
  observer,
  withTheme(),
  withStyles(styles)
)(App);
