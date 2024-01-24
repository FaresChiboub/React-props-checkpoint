import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Card from "react-bootstrap/Card";

function Player({ data }) {
  const { name, team, imageUrl } = data;

  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img
        variant="top"
        src={imageUrl}
        alt={name}
        style={{ width: "100%", height: "auto" }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Team: {team}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default Player;
