import React from "react";
import { Container, Text } from "./styles/empty";

export default function Empty({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Empty.Text = function EmptyText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
