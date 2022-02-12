import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60px;

  background-color: #D0391C;
  padding: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 3;

  h1 {
    font-size: 36px;
  }
`

export const Button = styled.div`
  &:hover {
    cursor: pointer;
  }
`;