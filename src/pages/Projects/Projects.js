import React from "react";
import { Grid } from "@material-ui/core";
import Title from "../../components/Title/Title";
import myData from "../../utilities/myData"

const Projects = () => {
  return (
    <Grid container className="section padding_bottom_45">
      <Grid item className="section_title margin_bottom_30">
       {/*  <span></span>
        <h6 className="section_title_text">Projects</h6> */}
         <Title name='PROJECTS' />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Projects;
