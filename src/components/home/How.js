import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Step from './Step';

import postImage from '../../images/post.png'
import waitImage from '../../images/wait.png'
import findImage from '../../images/find.png'
import hireImage from '../../images/handshake.png'



const styles = theme => ({
    root: {
        minHeight: '380px',
        textAlign: 'center',
        width: '70%',
        marginLeft: 'auto',
        marginRight: 'auto',
        direction: 'rtl',
    },

    title: {
        fontFamily: 'DINNEXTARABIC',
        fontSize: '30px',
        color: '#414141',
        marginBottom: '30px'
    }

});

const How = (props) => {
    const { classes } = props;

    return (
        <div style={{ backgroundColor: '#F5f5f5', width: '100%' }}>
            <div className={classes.root} >
                <p className={classes.title}>آلية عمل موقع دروسي</p>
                <Grid container spacing={24}>

                    <Step
                        stepImage={postImage}
                        stepTitle='انشر طلبك'
                        stepContent='باشر بتعبئة بيانات الدرس الخصوصي الذي تحتاجه بكل ما يلزم من معلومات الطالب وعنوان وتاريخ إقامة الدرس.'
                    />

                    <Step
                        stepImage={waitImage}
                        stepTitle='انتظر المعلّمين'
                        stepContent='بعد نشر طلبك، انتظر تقديم مختلف المعلّمين وطلبة الجامعات الراغبين في العمل معك.'
                    />

                    <Step
                        stepImage={findImage}
                        stepTitle='راجع ملفات كافّة المتقدمين'
                        stepContent='راجع وقارن بين مختلف المتقدمين من خلال الولوج إلى صفحة بياناتهم للتعرف على كفاءتهم وتكلفة عملهم.'
                    />

                    <Step
                        stepImage={hireImage}
                        stepTitle='التوظيف والاتفاق'
                        stepContent='بعد إيجاد المتقدم اللأفضل، أرسل له الموافقة على العمل للاتفاق والتواصل.'
                    />

                </Grid>
            </div>
        </div>

    )
}

How.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(How);