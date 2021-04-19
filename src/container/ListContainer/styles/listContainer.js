import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const FeatureAdd = styled.div`
  opacity: 0.7;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  margin-bottom: 10px;

  &:hover {
    opacity: 1;
  }

  &:before, &:after {
    content: " ";
    position: absolute;
    left: 0px;
    top: -30px;
    height: 5px;
    width: 22px;
    background-color: #fff;
  }

  &:before {
    transform: rotate(0deg);
  }

  &:after {
    transform: rotate(90deg);
  }
`;

export const FeatureClose = styled(FeatureAdd)`
  &:before {
    transform: rotate(-45deg);
  }

  &:after {
    transform: rotate(45deg);
  }

  &:before, &:after {
    background-color: #000;
    top: 15px;
    left: 5px;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const Inner = styled.div`
  width: 600px;
  height: fit-content;
  display: flex;
  background-color: #fff;
  position: relative;
  padding: 50px 30px;
`;