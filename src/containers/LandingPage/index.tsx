import * as React from "react";

import { Card, CardContent, Typography } from "@material-ui/core";

// import { action, observable } from 'mobx';
import { inject, observer } from "mobx-react";

import * as BG from "../../images/BG.png";
import * as blockchain from "../../images/Blockchain.png";
import * as feasibility from "../../images/feasibility.png";
import * as group10 from "../../images/group-10.png";
import * as group2 from "../../images/group-2.png";
import * as group3 from "../../images/group-3.png";
import * as group5 from "../../images/group-5.png";
import * as handshake from "../../images/handshake.png";
import * as meditation from "../../images/meditation.png";
import * as value from "../../images/value.png";

import { ApplyButton } from "./ApplyButton";

interface LandingPageProps {
  ethersStore?: any;
}

const styles = {
  hero: {
    width: "100vw",
    height: "674px",
    display: "flex",
    background:
      "linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5))",
    backgroundImage: `url(${BG})`
  },
  heroLeft: {
    width: "50vw",
    paddingTop: 300
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
    width: "740px",
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
  heroRight: {
    width: "50vw",
    paddingTop: 260,
    paddingLeft: "20%"
  },
  heroContents: {
    width: "360px",
    height: "120px",
    fontFamily: "NotoSansCJKkr",
    fontSize: "44px",
    fontStyle: "normal" as "normal",
    fontStretch: "normal" as "normal",
    lineHeight: "normal" as "normal",
    letterSpacing: "normal" as "normal",
    textAlign: "right" as "right",
    color: "#ffffff"
  },
  heroContentDescription: {
    color: "#919aa3",
    width: "360px",
    height: "56px",
    textAlign: "right" as "right"
  },
  heroContentButton: {
    marginTop: 40,
    marginLeft: "54%"
  },
  contents: {
    marginTop: 100,
    textAlign: "center" as "center",
    backgroundImage: `url(${blockchain})`,
    height: 840,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain"
  },
  contentsTitle: {
    height: "61px",
    fontFamily: "Poppins",
    fontSize: "44px",
    fontWeight: "normal" as "normal",
    fontStyle: "normal" as "normal",
    fontStretch: "normal" as "normal",
    lineHeight: "normal" as "normal",
    letterSpacing: "normal" as "normal",
    color: "#171c34"
  },
  contentsDescription: {
    height: "56px",
    fontFamily: "Poppins",
    fontSize: "18px",
    fontWeight: "normal" as "normal",
    fontStyle: "normal" as "normal",
    fontStretch: "normal" as "normal",
    lineHeight: "1.56",
    letterSpacing: "normal" as "normal",
    color: "#919aa3"
  },
  contentsBody: {
    marginLeft: "12%",
    marginRight: "12%"
  },
  contentsCard: {
    width: 280
  },
  cardImage: {
    marginTop: 32,
    marginBottom: 14,
    width: 60
  },
  firstContents: {
    marginTop: 60
  },
  inContentsBody: {
    marginTop: 34,
    display: "flex",
    justifyContent: "space-between"
  },
  secondContents: {
    marginTop: 120
  },
  contentsPin: {
    width: 248,
    height: 208,
    margin: 10
  },
  pinImage: {
    width: 248,
    backgroundImage: `url(${group2})`,
    backgroundSize: "cover"
  },
  thirdContents: {
    marginTop: 60,
    width: "100vw",
    height: "100%",
    backgroundImage: `url(${handshake})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    verticalAlign: "middle"
  },
  lastTitle: {
    paddingTop: "20%",
    height: "61px",
    fontFamily: "Poppins",
    fontSize: "44px",
    fontWeight: "normal" as "normal",
    fontStyle: "normal" as "normal",
    fontStretch: "normal" as "normal",
    lineHeight: "normal" as "normal",
    letterSpacing: "normal" as "normal",
    color: "#171c34"
  },
  lastContentButton: {
    marginTop: 20
  },
  footer: {
    height: "17px",
    fontFamily: "Poppins",
    fontSize: "12px",
    fontWeight: 300,
    fontStyle: "normal" as "normal",
    fontStretch: "normal" as "normal",
    lineHeight: "normal" as "normal",
    letterSpacing: "normal" as "normal",
    color: "#171c34",
    textAlign: "center" as "center"
  },
  text: {
    marginLeft: "-28px",
    color: "#919aa3"
  }
};

@inject("ethersStore")
@observer
class LandingPage extends React.Component<LandingPageProps> {
  public render() {
    return (
      <div>
        <div style={styles.hero}>
          <div style={styles.heroLeft}>
            <div style={styles.heroTitle}>OPCT</div>
            <div style={styles.heroDescription}>
              office people connecting technology
            </div>
          </div>
          <div style={styles.heroRight}>
            <div style={styles.heroContents}>
              Get your job, simple and reliable
            </div>
            <div style={styles.heroContentDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut pretium
              pretium tempor.
            </div>
            <ApplyButton style={styles.heroContentButton} />
          </div>
        </div>
        <div style={styles.contents}>
          <div style={styles.contentsBody}>
            <div style={styles.firstContents}>
              <div style={styles.contentsTitle}>Why it is needed </div>
              <div style={styles.contentsDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut
                pretium pretium tempor.
              </div>
              <div style={styles.inContentsBody}>
                <Card style={styles.contentsCard}>
                  <img style={styles.cardImage} src={meditation} />
                  <CardContent>
                    <Typography
                      gutterBottom={true}
                      variant="headline"
                      component="h2"
                    >
                      Easy.
                    </Typography>
                    <Typography>
                      Donec facilisis tortor ut augue lacinia, at viverra est
                      semper. Sed sapien metus, scelerisque nec pharetra id,
                      tempor a tortor.
                    </Typography>
                  </CardContent>
                </Card>
                <Card style={styles.contentsCard}>
                  <img style={styles.cardImage} src={feasibility} />
                  <CardContent>
                    <Typography
                      gutterBottom={true}
                      variant="headline"
                      component="h2"
                    >
                      Reliable.
                    </Typography>
                    <Typography>
                      Donec facilisis tortor ut augue lacinia, at viverra est
                      semper. Sed sapien metus, scelerisque nec pharetra id,
                      tempor a tortor.
                    </Typography>
                  </CardContent>
                </Card>
                <Card style={styles.contentsCard}>
                  <img style={styles.cardImage} src={value} />
                  <CardContent>
                    <Typography
                      gutterBottom={true}
                      variant="headline"
                      component="h2"
                    >
                      Open to everyone.
                    </Typography>
                    <Typography>
                      Donec facilisis tortor ut augue lacinia, at viverra est
                      semper. Sed sapien metus, scelerisque nec pharetra id,
                      tempor a tortor.
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div style={styles.secondContents}>
              <div style={styles.contentsTitle}>
                The Process You can Experience
              </div>
              <div style={styles.contentsDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                pretium pretium tempor.
              </div>
              <div style={styles.inContentsBody}>
                <div style={styles.contentsPin}>
                  <img src={group2} style={styles.pinImage} />
                  <Typography
                    gutterBottom={true}
                    variant="headline"
                    component="h2"
                    style={styles.text}
                  >
                    Apply
                  </Typography>
                </div>
                <div style={styles.contentsPin}>
                  <img src={group3} style={styles.pinImage} />
                  <Typography
                    gutterBottom={true}
                    variant="headline"
                    component="h2"
                    style={styles.text}
                  >
                    Test&Interview
                  </Typography>
                </div>
                <div style={styles.contentsPin}>
                  <img src={group5} style={styles.pinImage} />
                  <Typography
                    gutterBottom={true}
                    variant="headline"
                    component="h2"
                    style={styles.text}
                  >
                    Blockchain stored
                  </Typography>
                </div>
                <div style={styles.contentsPin}>
                  <img src={group10} style={styles.pinImage} />
                  <Typography
                    gutterBottom={true}
                    variant="headline"
                    component="h2"
                    style={styles.text}
                  >
                    Check the result
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div style={styles.thirdContents}>
            <div style={styles.lastTitle}>
              Now apply safely, get result fairly.
            </div>
            <div style={styles.contentsDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              pretium pretium tempor.
            </div>
            <ApplyButton style={styles.lastContentButton} />
          </div>
          <div style={styles.footer}>copyright. All rights reserved OPCT</div>
        </div>
      </div>
    );
  }

  // @action
  // private ppong = () => {
  //     const { ethersStore } = this.props

  //     // ethersStore.provider.getBalance('0xbbd64890ebee324b31c20e473d5843c42c0a9d82').then(action((balance) => {
  //     //     this.etherString = ethersStore.ethers.utils.formatEther(balance);
  //     // }));

  //     ethersStore.web3.listAccounts().then(action((accounts) => {
  //         this.etherString = accounts[0]
  //     }))
  // }
}

export default LandingPage;
