import { Grid, Typography, Grow } from "@material-ui/core";
import myData from "../../utilities/myData";
import React from "react";
import "./Resume.css";
import CustomTimeline, {
  CustomTimelineSeparator
} from "../../components/Timeline/CustomTimeline";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import { TimelineContent, TimelineItem } from "@material-ui/lab";
import Title from "../../components/Title/Title";

const Resume = () => {
  return (
    <>
      {/*Education && Experience */}
      <Grid container className="section padding_bottom_45">
        <Grid item className="section_title margin_bottom_30">
          <Title name="RESUME" />
        </Grid>

        <Grid item xs={12}>
          <Grow in timeout={1200}>
            <Grid container className="resume_timeline">
              {/* Experiences */}
              <Grid item sm={12} md={6}>
                <CustomTimeline title="Working History" icon={<WorkIcon />}>
                  {myData.experiences.map((exp) => (
                    <TimelineItem key={exp.title}>
                      <CustomTimelineSeparator />
                      <TimelineContent className="resume_content">
                        <Typography className="timeline_title">
                          <strong>{exp.title}</strong>
                        </Typography>
                        <Typography variant="caption" className="timeline_date">
                          {exp.date}
                        </Typography>
                        <Typography
                          variant="body2"
                          className="timeline_description margin_bottom_30"
                        >
                          {exp.description}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </CustomTimeline>
              </Grid>

              {/* Education */}
              <Grid item sm={12} md={6}>
                <CustomTimeline title="Education" icon={<SchoolIcon />}>
                  {myData.educations.map((edu) => (
                    <TimelineItem key={edu.title}>
                      <CustomTimelineSeparator />
                      <TimelineContent className="resume_content">
                        <Typography className="timeline_title">
                          <strong> {edu.title}</strong>
                        </Typography>
                        <Typography variant="caption" className="timeline_date">
                          {edu.date}
                        </Typography>
                        <Typography
                          variant="body2"
                          className="timeline_description margin_bottom_30"
                        >
                          {edu.description}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </CustomTimeline>
              </Grid>
            </Grid>
          </Grow>
        </Grid>
      </Grid>

      {/* Contact */}
      <Grid container className="section"></Grid>
    </>
  );
};

export default Resume;
