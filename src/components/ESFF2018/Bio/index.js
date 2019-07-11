import React from 'react'
import { Grid } from '@material-ui/core';
import IMG5 from '../../../images/ESFF2018/IMG5.png'
import './styles.scss'

const Bio = () => {
    return (
        <Grid container justify="center" className="bio-container">
          <Grid item xs={12}>
              <p className="title">
                BIO
              </p>
          </Grid>
          <Grid item xs={10} md={6} lg={3}>
            <img src={IMG5} alt="bio"/>
          </Grid>
          <Grid item xs={12} md={4} >
            <p style={{padding:'10px'}}>
            Elia Short Films Festival is a cinematic space and an annual venue for Palestinian and Arab directors and filmmakers. This local film festival is entirely organized by an independent Palestinian initiative “We have a Cinema”, in partnership with the local cultural and community organizations in Jerusalem.
The festival presents feature, documentary and animation films from both Palestine and the Arab world, as well as specialized workshops on the world of filmmaking spanning over three days, aiming to leave a clear impression and to add a special cinematic character to the cultural scene in Jerusalem.
            </p>
            <p className="arabic" style={{padding:'10px'}}>
            مهرجان إيليا للأفلام القصيرة هو فضاء سينمائي ومزار سنوي للمخرجين الفلسطينيين والعرب. منظم من قبل مبادرة فلسطينية مستقلة "صار عنا سينما" بالشراكة مع المؤسسات الثقافية والمجتمعية في مدينة القدس.
يقدم المهرجان أفلاماً روائية ووثائقية ورسوم متحركة من فلسطين والوطن العربي، وورشات عمل متخصصة في صناعة الأفلام على مدار ثلاثة أيام، ليضيف طابعاً سينمائياً خاصاً للمشهد الثقافي في مدينة القدس
            </p>
          </Grid>
        </Grid>
    )
}

export default Bio

