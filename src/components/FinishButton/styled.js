import styled from 'styled-components';
import { rem } from 'polished';

export const FinishButtonWrapper = styled.div`
  display: block;
  padding: ${rem(20)} ${rem(16)};
  height: ${rem(110)};
  border-top: 1px solid #c2c2c2;
`;

export const FinishButtonContent = styled.button`
  display: block;
  height: ${rem(70)};
  color: #ffffff;
  width: 100%;
  background-color: #281ac7;
  border-radius: ${rem(20)};
  font-size: ${rem(24)};
  line-height: ${rem(30)};
  font-weight: 700;
  cursor: pointer;
`;
