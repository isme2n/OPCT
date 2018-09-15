import * as React from "react";

import { Button, TextField, Typography } from "@material-ui/core";

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
    width: "390px",
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

interface ApplyPageProps {
  ethersStore?: any;
}

@inject("ethersStore")
@observer
export class ApplyPage extends React.Component<ApplyPageProps> {
  @observable
  private name;
  @observable
  private birth;
  @observable
  private pincode;
  @observable
  private portfolio;
  @observable
  private isPossible;

  public render() {
    return (
      <div>
        <div style={styles.hero}>
          <div style={styles.heroLeft}>
            <div style={styles.heroTitle}>APPLY</div>
            <div style={styles.heroDescription}>
              office people connecting technology
            </div>
          </div>
        </div>
        <div style={styles.content}>
          <div style={styles.status}>{this.status()}</div>
          {this.isPossible ? (
            <div>
              <div>
                <TextField
                  style={styles.textField}
                  label="name"
                  onChange={this.changeName}
                />
              </div>
              <div>
                <TextField
                  style={styles.textField}
                  label="birth"
                  onChange={this.changeBirth}
                />
              </div>
              <div>
                <TextField
                  style={styles.textField}
                  label="pincode"
                  onChange={this.changePincode}
                />
              </div>
              <div>
                <TextField
                  style={styles.textField}
                  label="portfolio"
                  onChange={this.changePortfolio}
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
          ) : (
            <div>
              <Typography> You can't Apply Now</Typography>
            </div>
          )}
        </div>
      </div>
    );
  }

  @action
  private status = () => {
    const { ethersStore } = this.props;

    if (!ethersStore.web3) {
      this.isPossible = false;
      return "no Web3";
    } else if (!(ethersStore.accounts.length > 0)) {
      this.isPossible = false;
      return "can't detected Accounts. Please Logging into Metamask";
    } else {
      this.isPossible = true;
      return "";
    }
  };

  @action
  private changeName = e => {
    this.name = e.target.value;
  };
  @action
  private changeBirth = e => {
    this.birth = e.target.value;
  };
  @action
  private changePincode = e => {
    this.pincode = e.target.value;
  };
  @action
  private changePortfolio = e => {
    this.portfolio = e.target.value;
  };

  private sendApply = async () => {
    const { opct } = this.props.ethersStore;
    try {
      await opct
        .SetApplicant(this.name, this.birth, this.pincode, this.portfolio)
        .then(res => {
          console.log(res);
        });
    } catch (err) {
      alert(err);
    }
  };
}
