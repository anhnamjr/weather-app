import styled from "styled-components/macro"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

export const Text = styled.p`
  font-size: 2rem;
  color: #fff;
`;

export const SmallText = styled(Text)`
  font-size: 1.5rem;
`;

export const Number = styled.h1`
  color: #fff;
  font-size: 5rem;
  font-weight: 300;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
`;

export const Item = styled.div`
  border: 1px solid #fff;
  width: 100%;
  padding: 25px 20px;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color .2s;

  &:not(:last-of-type){
    margin-bottom: 10px;
  }

  > p {
    text-transform: capitalize;
    font-size: 2rem;
    font-weight: bold;
  }

  &:hover {
    background-color: #1e3aa0;
  }
`;