import styled from "styled-components";
import { menuColor } from "../../../css/constants";

export const Container = styled.div`
  width: 100%;
  height: 70px;

  background-color: ${menuColor};

  position: absolute;
  bottom: 0;
`;

export const CartButton = styled.button`
  width: 90px;
  height: 90px;

  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%, 0);

  border-radius: 100%;
  border: 3px black solid;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeButton = styled.button`
  background-color: inherit;
  width: 50px;
  height: 50px;
  
  
  position: absolute;
  left: 25px;
  bottom: 10px;
  `;
export const FavoritesButton = styled.button`
  background-color: inherit;
  width: 50px;
  height: 50px;
  
  position: absolute;
  right: 25px;
  bottom: 10px;
`;
