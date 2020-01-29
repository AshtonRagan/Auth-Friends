import React from 'react';
import { Route, Switch } from "react-router-dom";
import {Login} from "./Components/Login";
import {FriendsList} from "./Components/FriendsList";
import {ProtectedRoute} from "./Components/ProtectedRoute";
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <ProtectedRoute path="/Protected" component={FriendsList} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
