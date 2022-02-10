import styled from 'styled-components';
import { fontFamily, fontSize, menuColor } from '../../../css/constants';

export const Container = styled.div`
  background-color: ${menuColor};
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;

  position: fixed;

  p {
    font-family: ${fontFamily};
    font-size: ${fontSize};
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0)
  }

  svg {
    position: absolute;
    right: 15px;
  }
`