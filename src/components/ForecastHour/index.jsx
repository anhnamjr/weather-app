import React, { useState, useEffect } from "react";
import {
  Container,
  Item,
  Text,
  Temperature,
  Icon,
  Inner,
  Title
} from "./styles/forecastHour";
import axios from "axios";
import { API_KEY } from "../../constant";

export default function ForecastHour({ city, ...restProps }) {
  const [listHours, setListHours] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      )
      .then(({ data }) => {
        setListHours(data.list);
      });
  }, [city]);

  const forecastHour = listHours.map((item, index) => {
    const day = item.dt_txt.slice(5, 10);
    const time = item.dt_txt.slice(11, 16);
    const temp = item.main.temp;
    const icon = item.weather[0].icon;

    return (
      <ForecastHour.Item key={index}>
        <ForecastHour.Day>{day}</ForecastHour.Day>
        <ForecastHour.Day>{time}</ForecastHour.Day>
        <ForecastHour.Icon src={icon} />
        <ForecastHour.Temperature>{temp}°</ForecastHour.Temperature>
      </ForecastHour.Item>
    );
  });

  return (
    <Container {...restProps}>
      <Title>Hourly:</Title>
      <Inner>{listHours && forecastHour}</Inner>
    </Container>
  );
}

ForecastHour.Item = function ForecastHourItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

ForecastHour.Day = function ForecastHourDay({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

ForecastHour.Temperature = function ForecastHourTemperature({
  children,
  ...restProps
}) {
  return <Temperature {...restProps}>{children}</Temperature>;
};

ForecastHour.Icon = function ForecastHourImage({ src, ...restProps }) {
  return (
    <Icon src={`https://openweathermap.org/img/w/${src}.png`} {...restProps} />
  );
};

