import * as React from "react";

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";

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
          Call Applicants Data
        </Button>
        <div style={styles.content}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Birth</TableCell>
                <TableCell>FingerPrint</TableCell>
                <TableCell>PortfolioLink</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.ApplicantInfo.map((row, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {row[0]}
                    </TableCell>
                    <TableCell>{row[1]}</TableCell>
                    <TableCell>{row[2]}</TableCell>
                    <TableCell>{row[3]}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
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
        this.GetApplicantInfo();
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
