import React from "react";
import Players from "./players";
import Player from "./player";

function PlayersList() {
  return (
    <div className="alo"
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "200px" }}>
      {Players.map((el) => <Player data={el} />)}
    </div>
  );
}

export default PlayersList;
