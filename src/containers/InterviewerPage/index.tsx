import * as React from "react";

import { Button, TextField } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";

import { action, observable } from "mobx";
import { inject, observer } from "mobx-react";

import * as BG from "../../images/apply-bg.png";

const styles = {
  hero: {
    width: "100vw",
    height: "404px",
    display: "flex",
    background:
      "linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5))",
    backgroundImage: `url(${BG})`
  },
  heroLeft: {
    width: "50vw",
    paddingTop: 160
  },
  heroTitle: {
    width: "780px",
    height: "124px",
    fontFamily: "NotoSansCJKkr",
    fontSize: "114px",
    fontWeight: "bold" as "bold",
    fontStyle: "normal" as "normal",
    fontStretch: "normal" as "normal",
    lineHeight: "normal" as "normal",
    letterSpacing: "normal" as "normal",
    textAlign: "center" as "center",
    color: "#ffffff",
    margin: 0
  },
  heroDescription: {
    width: "680px",
    height: "80px",
    fontFamily: "NotoSansCJKkr",
    fontSize: "42px",
    fontWeight: 100,
    fontStyle: "normal" as "normal",
    fontStretch: "normal" as "normal",
    lineHeight: "normal" as "normal",
    letterSpacing: "normal" as "normal",
    textAlign: "center" as "center",
    color: "#b1b8bf",
    margin: 0
  },
  status: {},
  content: {
    margin: 10,
    display: "relative",
    width: "100%",
    textAlign: "center" as "center"
  },
  button: {
    margin: 10,
    backgroundColor: "#0074e4",
    color: "#fff"
  },
  textField: {
    width: 500
  }
};

const ROUND = [
  {
    value: 0,
    label: "Application Phase"
  },
  {
    value: 1,
    label: "Interview"
  }
];

interface InterviewerPageProps {
  ethersStore?: any;
}

@inject("ethersStore")
@observer
export class InterviewerPage extends React.Component<InterviewerPageProps> {
  @observable
  private address;
  @observable
  private score;
  @observable
  private comments;
  @observable
  private round = 0;

  public render() {
    return (
      <div>
        <div style={styles.hero}>
          <div style={styles.heroLeft}>
            <div style={styles.heroTitle}>INTERVIEWER</div>
            <div style={styles.heroDescription}>
              office people connecting technology
            </div>
          </div>
        </div>
        <div style={styles.content}>
          <div style={styles.status}>{this.status()}</div>
          <div>
            <TextField
              style={styles.textField}
              label="address"
              onChange={this.changeAddress}
            />
          </div>
          <div>
            <TextField
              style={styles.textField}
              label="Check Round"
              value={this.round}
              onChange={this.changeRound}
              select={true}
            >
              {ROUND.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <TextField
              style={styles.textField}
              label="score"
              onChange={this.changeScore}
            />
          </div>
          <div>
            <TextField
              style={styles.textField}
              multiline={true}
              rows={6}
              rowsMax={6}
              label="comments"
              onChange={this.changeComments}
            />
          </div>
          <Button
            variant="contained"
            style={styles.button}
            onClick={this.sendApply}
          >
            send
          </Button>
        </div>
      </div>
    );
  }

  private status = () => {
    const { ethersStore } = this.props;

    if (!ethersStore.web3) {
      return "no Web3";
    } else if (!(ethersStore.accounts.length > 0)) {
      return "can't detected Accounts. Please Logging into Metamask";
    } else {
      return "";
    }
  };

  @action
  private changeAddress = e => {
    this.address = e.target.value;
  };
  @action
  private changeScore = e => {
    this.score = e.target.value;
  };
  @action
  private changeComments = e => {
    this.comments = e.target.value;
  };
  @action
  private changeRound = e => {
    this.round = e.target.value;
  };

  private sendApply = async () => {
    const { opct } = this.props.ethersStore;

    opct.SetEvaluate(this.address, this.round, this.score);
    console.log(this.address, this.score, this.comments);
  };
}
