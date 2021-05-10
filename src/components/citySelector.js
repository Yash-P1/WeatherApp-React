import React, { useState } from "react";
import { Row, Col, FormControl, Button } from "react-bootstrap";

const CitySelector = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const citySearchHandler = (event) => {
    setCity(event.target.value);
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      onSearch(city);
    }
  };

  return (
    <>
      <Row>
        <Col>
          <h1>Search your city</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={4} className="text-center">
          <FormControl
            placeholder="Enter city"
            onKeyDown={onKeyDown}
            // update city value with the user's input
            onChange={citySearchHandler}
            // value will be the currently selected city
            value={city}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={() => onSearch(city)}>Check Weather</Button>
        </Col>
      </Row>
    </>
  );
};

export default CitySelector;
