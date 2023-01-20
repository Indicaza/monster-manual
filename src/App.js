import React from "react";
import monsters from "./monsters1.json";
import "./App.css";
import "./media.css";
import { Page } from "./components/pages/pages.jsx";
import { LazyLoadComponent } from "react-lazy-load-image-component";

function App() {
  const [filter, filterSet] = React.useState("");

  return (
    <div className="background">
      {/* <TopNav {...monsters}/> */}

      <div className="topnav">
        <div className="logoContainer growNav">
          <div className="logo growNav"></div>
          <h1>Monster Manual</h1>
        </div>
        <div className="search gradient-border">
          <input
            type="text"
            placeholder="Search..."
            value={filter}
            onChange={(evt) => filterSet(evt.target.value)}
          />
        </div>
      </div>
      {/* <video autoplay muted loop className="myVideo">
        <source src="./imgs/stars.mp4" type="video/mp4" />
      </video> */}

      <div className="scrollContainer">
        {monsters
          .filter((monsters) =>
            monsters.name.toLowerCase().includes(filter.toLowerCase())
          )
          // .slice(0, Math.ceil((monsters.length * 12) / 100))
          .map((monsters, i) => (
            <LazyLoadComponent>
              <Page className="page" key={i} {...monsters} />
            </LazyLoadComponent>
          ))}
      </div>
    </div>
  );
}

export default App;
