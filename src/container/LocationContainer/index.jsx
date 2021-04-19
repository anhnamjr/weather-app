import React, { useEffect, useState } from "react";
import axios from "axios";
import { Location, ForecastHour } from "../../components";
import { API_KEY } from "../../constant";

export function LocationContainer({ location }) {
  const [cityName, setCityName] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [icon, setIcon] = useState("unknown");

  let originalLoc = location.split("-").join(" ")
  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${originalLoc}&units=metric&appid=${API_KEY}`
      )
      .then(({ data }) => {
        setTemperature(data.main.temp);
        setDescription(data.weather[0].description);
        setIcon(data.weather[0].icon);

        const name = `${data.name}, ${data.sys.country}`;
        setCityName(name);
      });
  });

  return (
    <>
      <Location>
        {cityName && <Location.City>{cityName}</Location.City>}
        {description && (
          <Location.Description>{description}</Location.Description>
        )}
        {temperature && (
          <Location.Temperature>{temperature}°</Location.Temperature>
        )}
        <Location.Image src={icon} />
      </Location>
      <ForecastHour location={originalLoc} />
    </>
  );
}
