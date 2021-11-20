import React from 'react';
import { formatPrice } from '../../utils/formatPrice';

import * as S from './styled';

const TotalPrice = ({ data }) => {
  const isGreater = data > 1000;

  if (!data) return null

  return (
    <>
      <S.TotalPriceWrapper>
        <span>Total</span>
        <span>R$ {formatPrice(data)}</span>
      </S.TotalPriceWrapper>
      {isGreater && (
        <S.FreeShippingMessage>
          Parabéns, sua compra tem frete grátis !
        </S.FreeShippingMessage>
      )}
    </>
  )
}

export default TotalPrice;