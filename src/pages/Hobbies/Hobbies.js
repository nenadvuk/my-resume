import React from "react";
import { Grid } from "@material-ui/core";
import Title from "../../components/Title/Title";

const Hobbies = () => {
  return (
    <Grid item className="section_title margin_bottom_30">
      {/* <span></span> */}
      {/* <h6 className="section_title_text">Hobbies</h6> */}
      <Title name='HOBBIES' />
    </Grid>
  );
};

export default Hobbies;
