import styled from 'styled-components';
import { rem } from 'polished';

export const ProductListWrapper = styled.div`
  display: flex;
  padding: 0 ${rem(16)};
  margin-bottom: ${rem(16)};
`;

export const ProductImage = styled.img`
  display: block;
  height: ${rem(120)};
  width: 100%;
  max-width: ${rem(120)};
  margin-right: ${rem(8)};
  outline: 1px solid #c2c2c2;
`;

export const ProductInfo = styled.div`
  display: block;
  padding: ${rem(10)} 0;
`;

export const ProductTitle = styled.h2`
  font-size: ${rem(16)};
  line-height: ${rem(30)};
`;

export const ProductFullPrice = styled.span`
  color: #444;
  font-size: ${rem(14)};
`;

export const ProductDiscountPrice = styled.h3`
  font-size: ${rem(14)};
`;

