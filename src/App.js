import React from "react";
import CitySelector from "./components/citySelector";
import UseFetch from "../src/hooks/useFetch";
import "./App.css";
import { Container } from "react-bootstrap";
import { API_KEY, API_BASE_URL } from "../src/config";
import WeatherList from "./components/weatherList";

const App = () => {
  // destructure the returned values
  const { data, error, isLoading, setUrl } = UseFetch();

  // error handling and loading
  const getContent = () => {
    if (error) return <h2>Error when fetching: {error}</h2>;
    if (!data && isLoading) return <h2>LOADING...</h2>;
    if (!data) return null;
    return <WeatherList weathers={data.list} />;
  };

  const onSearchHandler = (city) => {
    setUrl(
      `${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
  };

  return (
    <Container className="App">
      <CitySelector onSearch={onSearchHandler} />
      <hr />
      {getContent()}
    </Container>
  );
};

export default App;
