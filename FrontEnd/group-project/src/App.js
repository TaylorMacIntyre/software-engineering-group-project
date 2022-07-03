

import React from "react";
import Navigation from "./components/Navigation"
import RegisterPage from "./pages/Register"
import LoginPage from "./pages/Login"
import HomePage from "./pages/Home"
import PasswordPage from "./pages/ForgotPassword"
import { Route, Switch } from "react-router-dom";
import { Container } from '@mui/material';
import Boards from './pages/Boards';
import CreateBoard from './pages/CreateBoard';
import Navigation1 from './components/Navigation1';
import WorkSpace from './pages/Workspace';
import CreateWorkSpace from './pages/CreateWorkspace';
import Navigation2 from './components/Navigation2';
import DeleteBoard from './pages/DeleteBoard';

function App() {
  return (
    <div>

      <Switch>
        <Route path="/register" exact>
          <Navigation />
          <RegisterPage />
        </Route>

        <Route path={["/", "/login"]} exact>
          <Navigation />
          <LoginPage />

        </Route>

        <Route path={['/WorkSpace/:uid']}>
            <Navigation2 />
            <WorkSpace />
        </Route>

        {/* <Route path={['/WorkSpace']} exact>
            <Navigation2 />
            <WorkSpace />
        </Route> */}

        <Route path='/create-WorkSpace' exact>
            <Navigation2 />
            <CreateWorkSpace />
          </Route>

          <Route path={'/boards/:id'}>
            <Navigation1 />
            <Boards />
          </Route>

          <Route path='/create-board' exact>
            <Navigation1 />
            <CreateBoard />
          </Route>

          <Route path='/delete-board' exact>
            <Navigation1 />
            <DeleteBoard />
          </Route>

        <Route path="/forgotpassword" exact>
          <Navigation />
          <PasswordPage />

        </Route>
      </Switch>
    </div>

  );
}

export default App;
