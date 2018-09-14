import { Provider } from "mobx-react";
import * as React from "react";
import * as ReactDOM from "react-dom";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import "./index.css";

import App from "./containers/AppPage";
import registerServiceWorker from "./registerServiceWorker";
import store from "./stores";

const theme = createMuiTheme({
  palette: {
    type: "light"
  }
});

ReactDOM.render(
  <Provider {...store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
