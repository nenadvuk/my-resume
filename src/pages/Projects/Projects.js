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
  const [modalContent, setModalContent] = useState([]);
  

  return (
    <Grid container className="section padding_bottom_45">
      <Grid item className="section_title margin_bottom_30">
        <Title name="PROJECTS" />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {myData.projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={project.title}>
              <Grow in timeout={800}>
                <Card
                  className="custom-card"
                  onClick={() =>
                    setModalContent(project) || setProjectModal(true) 
                  }
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
          {modalContent.title}
        </DialogTitle>
        <img
          src={modalContent.image}
          alt={`${modalContent.caption}-img`}
          className="projectModal_image"
        />
        <DialogContent>{modalContent.description}</DialogContent>
        <DialogActions className="projectModal_actions">
          {projectModal && (
            <a
              href={modalContent.link}
              target="_blank"
              rel="noreferrer"
              className="projectModal_link"
            >
              Go to project
            </a>
          )}
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Projects;
