import styled from 'styled-components';
import { rem } from 'polished';

export const TotalPriceWrapper = styled.h2`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: ${rem(20)};
  line-height: ${rem(28)};
  height: ${rem(72)};
  color: #000000;
  border-top: 1px solid #c2c2c2;
  padding: 0 ${rem(16)};
`;

export const FreeShippingMessage = styled.p`
  color: rgb(24, 153, 0);
  background-color: rgb(49, 197, 22, 0.3);
  font-size: ${rem(16)};
  font-weight: 500;
  line-height: ${rem(32)};
  border-radius: 20px;
  width: fit-content;
  margin: 0 auto;
  display: block;
  padding: 0 ${rem(10)};
  margin-bottom: ${rem(16)};
`;
