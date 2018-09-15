import * as React from "react";

import { CheckButton } from "./CheckButton";

import { TextField } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";

import { action, observable } from "mobx";
import { inject, observer } from "mobx-react";

import * as BG from "../../images/BG.png";
import * as FAILE from "../../images/Fail.jpg";
import * as SUCCESS from "../../images/Hycon.jpg";

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
    width: "730px",
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
    width: "950px",
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
    paddingTop: 20,
    display: "relative",
    width: "100%",
    textAlign: "center" as "center"
  },
  checkButton: {
    marginTop: 30
  },
  textField: {
    width: 500
  },

  resultImg: {
    width: "500px",
    height: "230px",
    marginTop: 30,
    marginLeft: 590,
    borderRadius: 30,
    display: "flex",
    background:
      "linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5))",
    backgroundImage: `url(${BG})`,
    class: "center"
  },

  failImg: {
    width: "500px",
    height: "230px",
    marginTop: 30,
    marginLeft: 630,
    borderRadius: 30,
    display: "flex",
    background:
      "linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5))",
    backgroundImage: `url(${FAILE})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    class: "center"
  },

  successImg: {
    width: "500px",
    height: "230px",
    marginTop: 30,
    marginLeft: 718,
    borderRadius: 30,
    display: "flex",
    background:
      "linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5))",
    backgroundImage: `url(${SUCCESS})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    class: "center"
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

interface ResultPageProps {
  ethersStore?: any;
}

@inject("ethersStore")
@observer
export class ResultPage extends React.Component<ResultPageProps> {
  @observable
  private name;
  @observable
  private address;
  @observable
  private round;
  @observable
  private successorfailure;

  public render() {
    return (
      <div>
        <div style={styles.hero}>
          <div style={styles.heroLeft}>
            <div style={styles.heroTitle}>RESULT</div>
            <div style={styles.heroDescription}>
              office people connecting technology
            </div>
          </div>
        </div>
        <div style={styles.content}>
          <div>
            <TextField
              style={styles.textField}
              label="Write Your Address"
              value={this.name}
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
          <CheckButton style={styles.checkButton} onClick={this.getResult} />
          <div style={this.status()} />
        </div>
      </div>
    );
  }

  private status = () => {
    if (this.successorfailure) {
      return styles.successImg;
    } else {
      return styles.failImg;
    }
  };

  @action
  private changeAddress = e => {
    this.address = e.target.value;
  };

  @action
  private changeRound = e => {
    console.log(e);
    this.round = e.target.value;
  };

  @action
  private getResult = async () => {
    const { opct } = this.props.ethersStore;
    await opct.GetConfirmRound(this.address, 2).then(
      action(res => {
        this.successorfailure = res;
        console.log(this.successorfailure);
      })
    );
  };
}
