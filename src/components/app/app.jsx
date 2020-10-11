import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Main from "../../pages/main/main";
import SignIn from "../../pages/sign-in/sign-in";
import MyList from "../../pages/mylist/mylist";
import Film from "../../pages/film/film";
import Review from "../../pages/review/review";
import Player from "../../pages/player/player";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main
            title={`The Grand Budapest Hotel`}
            genre={`Drama`}
            date={`2014`}
          />
        </Route>
        <Route path="/sign-in" exact>
          <SignIn/>
        </Route>
        <Route path="/mylist" exact>
          <MyList/>
        </Route>
        <Route path="/films/:id" exact>
          <Film/>
        </Route>
        <Route path="/films/:id/review" exact>
          <Review/>
        </Route>
        <Route path="/player/:id" exact>
          <Player/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
