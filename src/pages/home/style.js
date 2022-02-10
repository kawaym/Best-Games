import styled from "styled-components";
import { bgColor } from "../../css/constants";

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  overflow-y: scroll;

  gap: 25px;

  position: absolute;
  z-index: -1;
  bottom: 70px;
  top: 60px;

  background-color: ${bgColor};
`;
