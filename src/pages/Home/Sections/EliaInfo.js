import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import { title } from "../../../assets/styles/material-kit-react";
import { Grid } from "@material-ui/core";

import EliaLogo from "../../../images/elia-logo-colored.png";

const EliaInfoStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description: {
    fontSize: "22px",
    color: "#444",
    textAlign: "left",
  },
  logo: {
    width: "100%"
  },
  ar: {
    direction: "rtl",
    textAlign: "right"
  }
};

class EliaInfo extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <Grid container justify="center" spacing={32}>
          <Grid item xs={12} sm={12} md={8}>
            <img src={EliaLogo} alt="elia-logo" className={classes.logo} />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <p className={classes.description}>
              Elia short films festival This annual film festival is entirely
              organized by an independent Palestinian initiative “We have a
              Cinema”, in partnership with the local cultural and community
              organizations in Jerusalem. The festival presents a cinematic
              experience filled with the highlight of and the newest
              Palestinian, Arabic, and International films. That tells stories
              of humanitarian cases increasing the public's awareness socially
              and culturally. The second edition of Elia Short Film Festival
              will be held on September 12, 2019 and will last for five days.
              The festival will attract a wide audience of different generations
              and social segments. CineElia platform provides a warm space for
              directors, producers, and moviemakers to meet and increase chances
              of cinematic development in the city of Jerusalem, through various
              annual programs.
            </p>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <p className={classNames(classes.description, classes.ar)}>
              مهرجان إيليا للأفلام القصيرة حدث سينمائي سنوي منظم من قبل مبادرة
              صار عنا سينما المستقلة بالشراكة مع المؤسسات الثقافية والمجتمعية في
              مدينة القدس. يقدم مهرجان إيليا برنامج سينمائي حافل بأهم وأحدث
              الأفلام الفلسطينية والعربية والدولية، وتتناول قضايا إنسانية متنوعة
              تزيد من وعي الأفراد اجتماعياً وثقافياً. تنطلق فعاليات الدورة
              الثانية في 12 أيلول 2019 وتستمر على مدار خمسة أيام، لتحشد جمهوراً
              واسعاً من مختلف الأجيال والشرائح. تتيح منصة إيليا السينمائية
              فضاءاً للقاء المخرجين والمنتجين وصناع الأفلام لتعزيز فرص تطوير
              السينما في مدينة القدس، من خلال برامج سنوية.
            </p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

EliaInfo.propTypes = {
  classes: PropTypes.object
};

export default withStyles(EliaInfoStyle)(EliaInfo);
