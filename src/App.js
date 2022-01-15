import React from "react";

import './App.css';
import {Users} from "./components/Services/Api";
import {Posts} from "./components/Services/Api";
import {Comments} from "./components/Services/Api";

function App() {
  return (
      <div className="App">
        <div className={'wrap'}>
          <div className={'container'}>
            <Users/>
          </div>
          <div className={'container'}>
            <Posts/>
          </div>
        </div>
        <div className={'footer'}>
          <Comments/>
        </div>
      </div>
  );
}

export default App;
