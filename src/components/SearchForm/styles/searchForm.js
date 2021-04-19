import styled from "styled-components/macro";

export const Container = styled.div`
  border: 1px solid #555;
  width: 100%;
  border-radius: 40px;
  position: relative;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  outline: 0;
  font-size: 1.2rem;
  color: #000;
  border: 1px solid #555;
  border-radius: 10px;
  padding-left: 45px;
`;

export const Feature = styled.div`
  margin-top: 20px;
`;

export const Button = styled.button`
  background-color: ${({type}) => type === "submit" ? "#B6244F" : "#504746"};
  padding: 10px 20px;
  border: 0;
  outline: 0;
  border-radius: 5px;
  font-size: 1rem;
  color: #ccc;
  cursor: pointer;
  transition: background-color .2s;

  &:not(:last-of-type) {
    margin-right: 10px;
  }

  &:hover {
    background-color: ${({type}) => type === "submit" ? "#ec1555" : "#463331"};
  }
`;

export const Title = styled.h2`
  color: #000;
  position: absolute;
  top: -15px;
  left: 40px;
  background-color: #fff;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;

  img {
    width: 35px;
    height: 35px;
    position: absolute;
    top: 2px;
    left: 6px;
  }
`;

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
  width: 100%;
  text-align: center
`;