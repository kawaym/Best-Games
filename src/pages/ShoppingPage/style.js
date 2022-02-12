import styled from "styled-components";
import { bgColor, fontFamily, fontSize, menuColor } from "../../css/constants";

export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  min-height: 100vh;

  background-color: ${bgColor};
  gap: 10px;
  padding: 90px 15px;

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

export const CheckoutButton = styled.button`
  width: 100%;
  height: 100px;
  background-color: ${menuColor};

  border-radius: 15px;

  color: black;
  font-family: ${fontFamily};
  font-size: ${fontSize};
`;
