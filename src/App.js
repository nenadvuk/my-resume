import { Container, Grid } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
      <Grid container spacing={6}>
        <Grid item xs={12} sm={8} md={7} lg={4}>
          <Profile />
        </Grid>
        <Grid item xs>
          <BrowserRouter>
            <Header />
            <div className="main_content .container_shadow">
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
