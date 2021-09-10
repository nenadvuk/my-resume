import { Grid, Typography } from '@material-ui/core';
import myData from '../../utilities/myData';
import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <>
      {/* About me */}
      <Grid container className="section">
        <Grid item className="section_title" xs={12}>
          <span></span>
          <Typography variant="h6">About me</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className="aboutMe_text">{myData.aboutMe}</Typography>
        </Grid>
      </Grid>
      {/* Experience */}
      <Grid container className="section"></Grid>
      {/* Skills */}
      <Grid container className="section"></Grid>
      {/* Contact */}
      <Grid container className="section"></Grid>
    </>
  );
};

export default Resume;
