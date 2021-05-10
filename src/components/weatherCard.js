import React from "react";
import { Card, CardDeck } from "react-bootstrap";

const weatherCard = ({ dt, temp_min, temp_max, main, icon, description }) => {
  // create a date object with Date class constructor
  const date = new Date(dt);

  return (
    <div>
      <CardDeck style={{ width: "15rem" }}>
        <Card
          border="info"
          style={{
            marginTop: 10,
            marginBottom: 10,
            width: 900,
            height: "27rem",
          }}
        >
          <Card.Img
            variant="top"
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          />
          <Card.Body>
            <Card.Title>{main}</Card.Title>
            <p>{description}</p>
            <p>
              {date.toLocaleDateString("en-GB")} -{" "}
              {date.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <p>Min: {temp_min} C</p>
            <p>Max: {temp_max} C</p>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
};

export default weatherCard;
