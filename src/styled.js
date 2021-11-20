import styled from 'styled-components';
import { rem } from 'polished';

export const AppWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-top: ${rem(80)};
`;

export const AppFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  height: ${rem(80)};
  background-color: #080063;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  h1, a {
    color: #ffffff;
    font: normal normal 600 ${rem(28)}/${rem(32)} 'Poppins', sans-serif;
  }
`;
