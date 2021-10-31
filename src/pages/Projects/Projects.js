import { useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Grow,
  Typography
} from "@material-ui/core";
import Title from "../../components/Title/Title";
import myData from "../../utilities/myData";
import "./Projects.css";

const Projects = () => {
  const [projectModal, setProjectModal] = useState(false);

  return (
    <Grid container className="section padding_bottom_45">
      <Grid item className="section_title margin_bottom_30">
        {/*  <span></span>
        <h6 className="section_title_text">Projects</h6> */}
        <Title name="PROJECTS" />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {myData.projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={project.title}>
              <Grow in timeout={1500}>
                <Card
                  className="custom-card"
                  onClick={() => setProjectModal(project)}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      className="custom-card_image"
                      image={project.image}
                      title={project.title}
                      alt={project.title}
                    />
                    <CardContent>
                      <Typography className="custom-card_title">
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="custom-card_description"
                      >
                        {project.caption}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Dialog open={projectModal} onClose={() => setProjectModal(false)}>
        <DialogTitle onClose={() => setProjectModal(false)}>
          {projectModal.title}
        </DialogTitle>
        <img src={projectModal.image} alt="" className="projectModal_image" />
        <DialogContent>{projectModal.description}</DialogContent>
        <DialogActions className="projectModal_actions">
          {projectModal && (
            <a
              href={projectModal.link}
              target="_blank"
              rel="noreferrer"
              className="projectModal_link"
            ></a>
          )}
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Projects;
