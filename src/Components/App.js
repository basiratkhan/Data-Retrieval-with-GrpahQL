import '../Styles/App.css';
import React, { Component } from 'react';
import LinkList from './LinkList';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import LinkListReversed from "./LinkListReversed";

const App = () => {
  return (
      <div className="center w85">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" component={LinkList} />
            <Route
                exact
                path="/LinkListReversed"
                component={LinkListReversed}
            />
          </Switch>
        </div>
      </div>
  );
};

export default App;

