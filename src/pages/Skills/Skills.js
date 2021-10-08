import React from "react";
import { Grid, Typography} from "@material-ui/core";
import myData from "../../utilities/myData";
import './Skills.css';
import AnimatedBar from "../../components/AnimatedBar/AnimatedBar";

const Skills = () => {
  return (
    <div>
      <Grid item className="section_title margin_bottom_30">
          <span></span>
          <h6 className="section_title_text">Skills</h6>
        </Grid>
      <Grid
        container
        spacing={3}
        justifyContent="space-between"
        className="section graybg padding_bottom_45"
      >
        {myData.skills.map((skill) => (
          <Grid item xs={12} sm={6} md={4} key={skill.title}>
            <Typography  variant="h6" className="skill_title">
              {skill.title }
            </Typography>
            {skill.description.map(el => (
              // console.log(el[1])
              <Typography key={el[0]} variant="body2" component={'span'} className="skill_description">
                <AnimatedBar source={el[0]} size={el[1]}/>
              </Typography>
            ))}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};




export default Skills;
