import styled from 'styled-components';
import { rem } from 'polished';

export const TitleCartWrapper = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: ${rem(24)};
  line-height: ${rem(30)};
  height: ${rem(72)};
  color: #000000;
  border-bottom: 1px solid #c2c2c2;
  margin-bottom: ${rem(20)};
`;
