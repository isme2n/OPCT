import * as React from "react";

import { Button, TextField } from "@material-ui/core";

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
  content: {
    margin: 10,
    display: "relative",
    width: "100%",
    textAlign: "center" as "center"
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
          <div>
            <TextField
              label="name"
              value={this.name}
              onChange={this.changeName}
            />
          </div>
          <div>
            <TextField
              label="birth"
              value={this.birth}
              onChange={this.changeBirth}
            />
          </div>
          <div>
            <TextField
              label="pincode"
              value={this.pincode}
              onChange={this.changePincode}
            />
          </div>
          <div>
            <TextField
              label="portfolio"
              value={this.portfolio}
              onChange={this.changePortfolio}
            />
          </div>
          <Button onClick={this.sendApply}>send</Button>
        </div>
      </div>
    );
  }

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

  private sendApply = () => {
    const { opct } = this.props.ethersStore;
    opct.SetApplicant(this.name, this.birth, this.pincode, this.portfolio);
  };
}
