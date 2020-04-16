import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Screen from "./Screen";

function App() {
  return (
    <BrowserRouter>
    <Route
          path={`/user/:pageNumber`}
          component={Screen}
        />
    </BrowserRouter>
  );
}

export default App;
