import styled from 'styled-components';
import { fontFamily, fontSize, menuColor } from '../../css/constants';

export const Container = styled.div`
  width: 100%;
  height: 60px;

  padding: 15px;
  background-color: ${menuColor};

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;

  p {
    font-family: ${fontFamily};
    font-size: ${fontSize};
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0)
  }
`