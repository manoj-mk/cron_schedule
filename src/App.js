import React from "react";
import { Switch, Route } from "react-router-dom";
import Example from "./components/examples/examples";
import Cron from "./components/cron/cron";

function App() {
  return (
    <>
      <Switch>
        <Route path="/examples/:example" component={Cron} />
        <Route exact path="/examples" component={Example} />
        <Route exact path="/" component={Cron} />
      </Switch>
    </>
  );
}

export default App;
