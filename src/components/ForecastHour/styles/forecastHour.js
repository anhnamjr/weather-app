import styled from "styled-components/macro";

export const Container = styled.div``;

export const Inner = styled.div`
  display: flex;
  overflow: scroll hidden;
  justify-content: space-between;
  align-items: center;
  margin: 10px 20px;
  padding-bottom: 10px;
`; 

export const Item = styled.div`
  min-width: 125px;
  background-color: rgba(255, 255, 255, 0.2);
  max-width: 150px;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  &:not(:last-of-type) {
    margin-right: 10px;
  }
`;

export const Text = styled.p`
  font-size: 1.2rem;
`;

export const Temperature = styled(Text)`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Icon = styled.img``;

export const Title = styled(Text)`
  margin: 0 20px;
`;