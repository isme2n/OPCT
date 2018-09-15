import * as React from "react";

import { Button } from "@material-ui/core";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";

import { action, observable } from "mobx";
import { inject, observer } from "mobx-react";

const styles = {
  content: {
    margin: 10,
    paddingTop: 20,
    display: "relative",
    width: "100%",
    textAlign: "center" as "center"
  },
  textField: {
    width: 500
  },
  button: {
    margin: 10,
    backgroundColor: "#0074e4",
    color: "#fff"
  }
};

interface AdminPageProps {
  ethersStore?: any;
}

let ArrayList;

@inject("ethersStore")
@observer
export class AdminPage extends React.Component<AdminPageProps> {
  @observable
  public ApplicantInfo: any = [];

  public render() {
    return (
      <div>
        <Button
          variant="contained"
          style={styles.button}
          onClick={this.GetApplicantList}
        >
          send
        </Button>
        <Button
          variant="contained"
          style={styles.button}
          onClick={this.GetApplicantInfo}
        >
          Fuck
        </Button>
        <div style={styles.content}>
          <List>
            {this.ApplicantInfo.map(value => (
              <ListItem key={value}>
                <ListItemText primary={`Line item ${value + 1}`} />
                <ListItemSecondaryAction />
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    );
  }

  private GetApplicantList = async () => {
    const { opct } = this.props.ethersStore;
    try {
      await opct.GetApplicantAddress().then(res => {
        ArrayList = res;
        console.log(ArrayList.length);
      });
    } catch (err) {
      alert(err);
    }
  };

  @action
  private GetApplicantInfo = async () => {
    const { opct } = this.props.ethersStore;
    for (let num = 0; num < ArrayList.length; num++) {
      try {
        await opct.GetApplicant(ArrayList[num]).then(
          action(res => {
            console.log(`SiBAL ${num}`);
            this.ApplicantInfo.push(res);
            console.log(res);
          })
        );
      } catch (err) {
        alert(err);
      }
    }
  };
}
