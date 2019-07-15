import React from 'react'
import { Grid } from '@material-ui/core';
import ReactPlayer from 'react-player'
import './styles.scss'

const Videos = () => {
    return (
        <Grid container className="videos-container">
        <Grid item xs={12}>
            <p className="title">
              VIDEOS
            </p>
        </Grid>
        <Grid container justify="center" spacing={8} style={{padding: '8px'}}>
          <Grid item xs={12} sm={4}>
            <ReactPlayer width="100%" url='https://vimeo.com/334075496' />
          </Grid>
          <Grid item xs={12} sm={4}>
            <ReactPlayer width="100%"  url='https://vimeo.com/305034150' />
          </Grid>
        </Grid>
        <Grid container justify="center" spacing={8} style={{padding: '8px'}}>
          <Grid item xs={12} sm={4}>
            <ReactPlayer width="100%" url='https://youtu.be/DbBkdvGr-ag' />
          </Grid>
          <Grid item xs={12} sm={4}>
            <ReactPlayer width="100%" url='https://youtu.be/YltPGdsh6wY' />
          </Grid>
        </Grid>
        <Grid container justify="center" spacing={8} style={{padding: '8px'}}>
          <Grid item xs={12} sm={4}>
            <ReactPlayer width="100%" url='https://youtu.be/VUuIwHoo_Y0' />
          </Grid>
          <Grid item xs={12} sm={4}>
            <ReactPlayer width="100%" url='https://youtu.be/mhzjc6SrXeU' />
          </Grid>
        </Grid>
      </Grid>
    )
}

export default Videos;
