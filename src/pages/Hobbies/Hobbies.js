import "./Hobbies.css";
import {
  Card,
  Grid,
  CardActionArea,
  CardMedia,
  CardContent
} from "@material-ui/core";
import Title from "../../components/Title/Title";
import myData from "../../utilities/myData";
import { useMediaQuery } from "react-responsive";

const Hobbies = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 991px)" });

  return (
    <Grid container className="section padding_bottom_45">
      <Grid item className="section_title margin_bottom_30">
        <Title name="HOBBIES" />
      </Grid>
      <Grid container spacing={3}>
        {myData.hobbies.map((hobby) => (
          <Grid
            style={isTabletOrMobile ? { marginTop: hobby.margin } : {}}
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            key={hobby.title}
          >
            <Card
              style={{ animationDelay: hobby.delay }}
              className="fadeInUp hobby-card"
            >
              <CardActionArea>
                {isTabletOrMobile ? (
                  <CardMedia
                    component="video"
                    autoPlay
                    loop
                    src={hobby.video}
                    alt={hobby.title}
                    title={hobby.title}
                  />
                ) : (
                  <CardMedia
                    component="img"
                    className="hobby-card_image"
                    image={hobby.image}
                    alt={hobby.title}
                    title={hobby.title}
                  />
                )}

                <CardContent>{hobby.title}</CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Hobbies;
