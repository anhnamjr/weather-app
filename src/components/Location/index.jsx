import React from "react";
import {
  Container,
  Text,
  SmallText,
  Number,
  Image,
  Item,
} from "./styles/location";

export default function Location({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Location.City = function LocationCity({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Location.Description = function LocationDescription({
  children,
  ...restProps
}) {
  return <SmallText {...restProps}>{children}</SmallText>;
};

Location.Temperature = function LocationTemperature({
  children,
  ...restProps
}) {
  return <Number {...restProps}>{children}</Number>;
};

Location.Image = function LocationImage({ src, ...restProps }) {
  return (
    <Image src={`https://openweathermap.org/img/w/${src}.png`} {...restProps} />
  );
};

Location.Item = function Location({ location, ...restProps }) {
  return (
    <Item {...restProps}>
      <p>{location}</p>
    </Item>
  );
};
