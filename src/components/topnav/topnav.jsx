import React from "react";
// import monsters from '../monsters.json';
import "./topnav.css";

export const TopNav = (props) => {
  const [filter, filterSet] = React.useState("");

  return (
    <div className="topnav growNav">
      <div className="logoContainer growNav">
        <div className="logo growNav"></div>
        <h1>Monster Manual</h1>
      </div>
      <div className="search growNav">
        <input
          type="text"
          placeholder="Search..."
          value={filter}
          onChange={(evt) => filterSet(evt.target.value)}
        />
      </div>
    </div>
  );
};
