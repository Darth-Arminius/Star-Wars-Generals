import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import BattleView from "@/components/BattleView";
import DeckEditor from "@/components/DeckEditor";
import CreateDeck from "@/components/DeckEditor/CreateDeck";
import EditDeck from "@/components/DeckEditor/EditDeck";
import MainMenu from "@/components/MainMenu";
import TrainingView from "@/components/TrainingView";
import ProfileView from "@/components/ProfileView";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainMenu} />
      <Route path="/battle" component={BattleView} />
      <Route exact path="/editor" component={DeckEditor} />
      <Route path="/editor/create" component={CreateDeck} />
      <Route path="/editor/edit" component={EditDeck} />
      <Route path="/training" component={TrainingView} />
      <Route path="/profile" component={ProfileView} />
    </Switch>
  </BrowserRouter>
);

export default Router;
