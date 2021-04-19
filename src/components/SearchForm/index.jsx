import React from "react";
import { Container, Input, Title, Button, Feature, InputContainer } from "./styles/searchForm";

export default function SearchForm({ children, ...restProp }) {
  return <Container {...restProp}>{children}</Container>;
}

SearchForm.Title = function SearchFormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

SearchForm.Feature = function SearchFormFeature({ children, ...restProp }) {
  return <Feature {...restProp}>{children}</Feature>;
};

SearchForm.Input = function SearchFormInput({ ...restProp }) {
  return (
    <InputContainer>
      <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png" alt="Search Icon"/>
      <Input {...restProp} />
    </InputContainer>
  );
};

SearchForm.Button = function SearchFormButton({ children, ...restProp }) {
  return <Button {...restProp}>{children}</Button>;
};
