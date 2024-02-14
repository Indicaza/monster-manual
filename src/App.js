import React from "react";
import monsters from "./monsters1.json";
import "./App.css";
import "./media.css";
import { Page } from "./components/pages/pages.jsx";
import { LazyLoadComponent } from "react-lazy-load-image-component";
// check
function App() {
  const [filter, filterSet] = React.useState("");

  return (
    <div className="background">
      <div className="topnav">
        <div className="logoContainer growNav">
          <div className="logo growNav"></div>
          <h1>Monster Manual</h1>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            value={filter}
            onChange={(evt) => filterSet(evt.target.value)}
          />
        </div>
      </div>

      <div className="scrollContainer">
        {monsters
          .filter(monster =>
            monster.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((monster, i) => (
            <LazyLoadComponent key={i}>
              <Page className="page" {...monster} />
            </LazyLoadComponent>
          ))}
      </div>
    </div>
  );
}

export default App;
