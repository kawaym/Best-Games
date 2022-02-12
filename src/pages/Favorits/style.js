import styled from 'styled-components';
import { bgColor } from '../../css/constants';

export const Container = styled.div`
    width: 100vw;
    min-height: 100%;

    background-color: ${bgColor};
    gap: 10px;
    padding: 70px 10px;

    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    svg:first-child {
    position: absolute;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Product = styled.div`
    width: 100%;
    height: 100px;

    background-color: #fff;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
`;
export const VoidMessage = styled.h1`
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, -50%);
`;