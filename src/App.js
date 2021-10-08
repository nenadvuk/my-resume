import { Container, Grid } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { AnimatedSwitch } from "react-router-transition";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Projects from "./pages/Projects/Projects";
import Resume from "./pages/Resume/Resume";
import "./App.css";
import Hobbies from "./pages/Hobbies/Hobbies";
import Skills from "./pages/Skills/Skills";

function App() {
  return (
    <Container className={"top-margin"}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>
          <BrowserRouter>
            <Header />
            <div className="main_content .container_shadow">
              {/* <AnimatedSwitch
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 0 }}
                atActive={{ opacity: 1 }}
                className="switch-wrapper"
              >
                <Route exact path="/" component={Resume} />
                <Route path="/skills" component={Skills } />
                <Route path="/projects" component={Projects} />
                <Route path="/hobbies" component={Hobbies} />
              </AnimatedSwitch> */}
              <Switch>
                <Route path="/hobbies">
                  <Hobbies />
                </Route>
                <Route path="/projects">
                  <Projects />
                </Route>
                <Route path="/skills">
                  <Skills />
                </Route>
                <Route path="/">
                  <Resume />
                </Route>
              </Switch>
            </div>
          </BrowserRouter>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
