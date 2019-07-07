import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DialogContent from '@material-ui/core/DialogContent';
import InputAdornment from '@material-ui/core/InputAdornment';
import amber from '@material-ui/core/colors/amber';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKey from '@material-ui/icons/VpnKey';

import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'


const styles = theme => ({


    loginButton: {

        width: '100%',
        marginTop: '15px',
        borderRadius: '50px',
        textAlign: 'center',
        color: 'white',
        backgroundColor: amber[300],
        border: '0',
        '&:hover': {
            backgroundColor: amber[400],
            border: '0',
        },
        fontFamily: 'midan',
        fontSize: '22px',
    },

    textField: {
        fontFamily: 'midan',
        fontSize: '24px',
    },

    cssUnderline: {
        '&:after': {
            borderBottomColor: 'black',
        },
    },

});

class SignupForm extends React.Component {

    state = {
        email: '',
        password: '',
        verifyPassword: '',
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter' && e.target.id === 'password') {
            this.props.handleLogin(this.state);
            // this.setState({ open: false });
        }
    }

    render() {
        const { classes,auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/' /> 
        return (
            <DialogContent>
                <form className="white" onSubmit={this.handleSubmit}>

                    {this.props.authError &&
                        <div>خطأ في تسجيل الدخول</div>
                    }

                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        placeholder="البريد الإلكتروني"
                        type="email"
                        fullWidth
                        dir="rtl"
                        InputProps={{
                            classes: {
                                input: classes.textField,
                                underline: classes.cssUnderline,
                            },
                            startAdornment: (
                                <InputAdornment>
                                    <AccountCircle style={{ marginLeft: '10px' }} />
                                </InputAdornment>
                            ),
                        }}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                    />

                    <TextField
                        margin="dense"
                        id="password"
                        placeholder="كلمة المرور"
                        type="password"
                        fullWidth
                        dir="rtl"
                        InputProps={{
                            classes: {
                                input: classes.textField,
                                underline: classes.cssUnderline,
                            },
                            startAdornment: (
                                <InputAdornment>
                                    <VpnKey style={{ marginLeft: '10px' }} />
                                </InputAdornment>
                            ),
                        }}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                    />

                    <TextField
                        margin="dense"
                        id="verifyPassword"
                        placeholder="تأكيد كلمة المرور"
                        type="password"
                        fullWidth
                        dir="rtl"
                        InputProps={{
                            classes: {
                                input: classes.textField,
                                underline: classes.cssUnderline,
                            },
                            startAdornment: (
                                <InputAdornment>
                                    <VpnKey style={{ marginLeft: '10px' }} />
                                </InputAdornment>
                            ),
                        }}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                    />

                    {this.props.authError &&
                        <div style={{ fontWeight: 'bold', marginTop: '10px', textAlign: 'center' }}>{authError}</div>
                    }


                    <Button onClick={this.handleSubmit} className={classes.loginButton}>
                        التسجيل
                    </Button>

                </form>
            </DialogContent>

        );
    }
}

SignupForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (creds) => dispatch(signUp(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SignupForm))
