import styled from "styled-components";
import { bgColor, fontFamily } from "../../css/constants";

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;

  padding-top: 25px;
  padding-bottom: 95px;

  gap: 35px;

  position: absolute;
  z-index: -1;
  top: 60px;

  background-color: ${bgColor};
`;

export const IndividualProduct = styled.div`
  width: 80%;
  height: 200px;

  border-radius: 5px; 

  background-color: white;

  display: flex;
  
  img {
    height: 100%;
    width: 55%;
    
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
  }
  
  div {
    width: 100%;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: ${fontFamily};
    
    h1{
      margin-top: 10px;
    }

    h2 {
      position: absolute;
      bottom: 10px;
      right: 15px;
    }
  }

  
`