import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import ESFF2018IMG from "../../images/ESFF2018.JPG";
import "./styles.css";

class ESFF2018 extends Component {
  state = {};

  render() {
    return (
      <Grid>
        <Grid container>
          <img src={ESFF2018IMG} alt="ESFF 2018 IMG" className="ESFF2018-img" />
        </Grid>
        <Grid container justify="center">
          <Grid item xs={12} sm={4} className="center">
            <p>
            Elia Short Films Festival is a cinematic space and an annual venue for Palestinian and Arab directors and filmmakers. This local film festival is entirely organized by an independent Palestinian initiative “We have a Cinema”, in partnership with the local cultural and community organizations in Jerusalem.
The festival presents feature, documentary and animation films from both Palestine and the Arab world, as well as specialized workshops on the world of filmmaking spanning over three days, aiming to leave a clear impression and to add a special cinematic character to the cultural scene in Jerusalem.
            </p>
          </Grid>
          <Grid item xs={12} sm={4} className="center">
          مهرجان إيليا للأفلام القصيرة هو فضاء سينمائي ومزار سنوي للمخرجين الفلسطينيين والعرب. منظم من قبل مبادرة فلسطينية مستقلة "صار عنا سينما" بالشراكة مع المؤسسات الثقافية والمجتمعية في مدينة القدس.
يقدم المهرجان أفلاماً روائية ووثائقية ورسوم متحركة من فلسطين والوطن العربي، وورشات عمل متخصصة في صناعة الأفلام على مدار ثلاثة أيام، ليضيف طابعاً سينمائياً خاصاً للمشهد الثقافي في مدينة القدس

          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default ESFF2018;
