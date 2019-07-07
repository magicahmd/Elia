import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import logo from '../../images/elia-logo.png';

import { connect } from 'react-redux'

const styles = theme => ({
    root: {
        fontFamily: 'midan',
    },

    dataContainer: {
        paddingBottom: '30px'
    },

    paper: {
        padding: theme.spacing.unit * 2,
        marginBottom: '10px',
        minHeight: '600px'
    },

    textField: {
        fontFamily: 'midan',
        fontSize: '24px',
        width: '100%',
        textAlign: 'left',
    },

    textArea: {
        fontFamily: 'midan',
        fontSize: '24px',
        width: '100%',
        minHeight:'60px',
        lineHeight: '20px',
        textAlign: 'left',
    },

    submitButton: {     
        width: '70%',   
        fontFamily: 'midan',
        fontSize: '24px',
        backgroundColor:'#019999',
        border: '0',
        '&:hover': {
            backgroundColor: '#018786',
            border: '0',
        },
    },
});

class RequestForm extends Component {

    state = {
        title: '',
        duration: '',
        category: 'Fiction',
        year: '',
        country:'',
        language:'',
        director:'',
        directorBio:'',
        directorEmail:'',
        directorPhone:'',
        synopsis:'',
        movieLink:'',
        moviePassword:'',
        showThanks:false,
        showError:false,

    };

    handleChange = (id) => (e) => {
        if (id)
            this.setState({
                [id]: e.target.value
            })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(!this.state.title || !this.state.duration || !this.state.year || !this.state.country || !this.state.language || !this.state.director || !this.state.directorBio || !this.state.directorBio || !this.state.directorEmail || !this.state.directorPhone || !this.state.synopsis || !this.state.movieLink){
            this.setState({showError:true})
        }

        else{
            this.props.handleCreateRequest(this.state);
            this.setState({showThanks:true})
        }
        
    }

    render() {

        const { classes } = this.props;

        const categories = [
            {
                value: 'Fiction',
                label: 'Fiction',
            },
            {
                value: 'Documentary',
                label: 'Documentary',
            },
            {
                value: 'Animation',
                label: 'Animation',
            },
        ];

        return (
            <Grid item className={classes.root} xs={12} sm={8} md={8} lg={5}>

                <Paper className={classes.paper}>

                { !this.state.showThanks && <div>
                
                    <Grid container className={classes.dataContainer}>
                        <label style={{ fontSize: '24px' }}>Original title of film:</label>
                        <TextField
                            className={classes.textField}
                            value={this.state.title}
                            InputProps={{
                                classes: {
                                    input: classes.textField,
                                    underline: classes.cssUnderline,

                                },
                            }}
                            onChange={this.handleChange('title')}
                        />

                    </Grid>

                    <Grid container className={classes.dataContainer}>
                        <label style={{ fontSize: '24px' }}>Film duration:</label>
                        <TextField
                            className={classes.textField}
                            value={this.state.duration}
                            InputProps={{
                                classes: {
                                    input: classes.textField,
                                    underline: classes.cssUnderline,

                                },
                            }}
                            onChange={this.handleChange('duration')}
                        />

                    </Grid>

                    <Grid container className={classes.dataContainer}>

                        <label style={{ fontSize: '24px' }}>Category</label>

                        <TextField
                            select
                            className={classes.textField}
                            value={this.state.category}
                            InputProps={{
                                classes: {
                                    input: classes.textField,
                                    underline: classes.cssUnderline,
                                },
                            }}
                            onChange={this.handleChange('category')}
                        >
                            {categories.map(option => (
                                <MenuItem key={option.value} value={option.value} className={classes.textField}
                                >
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                    </Grid>

                    <Grid container className={classes.dataContainer}>
                        <label style={{ fontSize: '24px' }}>Year of completion:</label>
                        <TextField
                            className={classes.textField}
                            value={this.state.year}
                            InputProps={{
                                classes: {
                                    input: classes.textField,
                                    underline: classes.cssUnderline,

                                },
                            }}
                            onChange={this.handleChange('year')}
                        />

                    </Grid>

                    <Grid container className={classes.dataContainer}>
                        <label style={{ fontSize: '24px' }}>Country of production:</label>
                        <TextField
                            className={classes.textField}
                            value={this.state.country}
                            InputProps={{
                                classes: {
                                    input: classes.textField,
                                    underline: classes.cssUnderline,

                                },
                            }}
                            onChange={this.handleChange('country')}
                        />

                    </Grid>

                    <Grid container className={classes.dataContainer}>
                        <label style={{ fontSize: '24px' }}>Original Language of film:</label>
                        <TextField
                            className={classes.textField}
                            value={this.state.language}
                            InputProps={{
                                classes: {
                                    input: classes.textField,
                                    underline: classes.cssUnderline,

                                },
                            }}
                            onChange={this.handleChange('language')}
                        />

                    </Grid>

                    <Grid container className={classes.dataContainer}>
                        <label style={{ fontSize: '24px' }}>Director:</label>
                        <TextField
                            className={classes.textField}
                            value={this.state.director}
                            InputProps={{
                                classes: {
                                    input: classes.textField,
                                    underline: classes.cssUnderline,

                                },
                            }}
                            onChange={this.handleChange('director')}
                        />

                    </Grid>

                    <Grid container className={classes.dataContainer}>
                        <label style={{ fontSize: '24px' }}>Bio of director:</label>
                        <TextField
                            multiline
                            className={classes.textField}
                            value={this.state.directorBio}
                            InputProps={{
                                classes: {
                                    input: classes.textArea,
                                    underline: classes.cssUnderline,

                                },
                            }}
                            onChange={this.handleChange('directorBio')}
                        />

                    </Grid>

                    <Grid container className={classes.dataContainer}>
                        <label style={{ fontSize: '24px' }}>Email of Director:</label>
                        <TextField
                            className={classes.textField}
                            value={this.state.directorEmail}
                            InputProps={{
                                classes: {
                                    input: classes.textField,
                                    underline: classes.cssUnderline,

                                },
                            }}
                            onChange={this.handleChange('directorEmail')}
                        />

                    </Grid>

                    <Grid container className={classes.dataContainer}>
                        <label style={{ fontSize: '24px' }}>Mobile Number (with Code):</label>
                        <TextField
                            className={classes.textField}
                            value={this.state.directorPhone}
                            InputProps={{
                                classes: {
                                    input: classes.textField,
                                    underline: classes.cssUnderline,

                                },
                            }}
                            onChange={this.handleChange('directorPhone')}
                        />

                    </Grid>

                    <Grid container className={classes.dataContainer}>
                        <label style={{ fontSize: '24px' }}>Synopsis:</label>
                        <TextField
                            multiline
                            className={classes.textField}
                            value={this.state.synopsis}
                            InputProps={{
                                classes: {
                                    input: classes.textArea,
                                    underline: classes.cssUnderline,

                                },
                            }}
                            onChange={this.handleChange('synopsis')}
                        />

                    </Grid>

                    <Grid container className={classes.dataContainer}>
                        <label style={{ fontSize: '24px' }}>link of films on Vimeo/Dropbox:</label>
                        <TextField
                            className={classes.textField}
                            value={this.state.movieLink}
                            InputProps={{
                                classes: {
                                    input: classes.textField,
                                    underline: classes.cssUnderline,

                                },
                            }}
                            onChange={this.handleChange('movieLink')}
                        />

                    </Grid>


                    <Grid container className={classes.dataContainer}>
                        <label style={{ fontSize: '24px' }}>Password (if exists):</label>
                        <TextField
                            className={classes.textField}
                            value={this.state.moviePassword}
                            InputProps={{
                                classes: {
                                    input: classes.textField,
                                    underline: classes.cssUnderline,

                                },
                            }}
                            onChange={this.handleChange('moviePassword')}
                        />

                    </Grid>

                    { this.state.showError && <div>
                        <p style={{fontSize:'30px',color:'red'}}>Please fill all the fields!</p>
                    </div>
                    }

                    <Button variant="contained" color="primary" onClick={this.handleSubmit} className={classes.submitButton}>
                        Submit
                    </Button>

                    </div> }

                    { this.state.showThanks && <div>
                        <img src={logo} alt="logo" style={{ width: '100%', marginTop:'150px', }} />
                        <p style={{fontSize:'120px'}}>THANK YOU!</p>
                    </div>
                    }
                
                </Paper>

            </Grid>
        )

    }
}

RequestForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps)(withStyles(styles)(RequestForm))
