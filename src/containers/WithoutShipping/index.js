import React from 'react';
import FinishButton from '../../components/FinishButton';
import ProductList from '../../components/ProductsList';
import TitleCart from '../../components/TitleCart';
import TotalPrice from '../../components/TotalPrice';
import { useWithoutShipping } from '../../context/WithoutShippingProvider';

import * as S from './styled';

const WithoutShipping = () => {
  const productsInfo = useWithoutShipping();
  console.log(productsInfo.data)

  return (
    <S.WithoutShippingCart>
      <TitleCart />
      <ProductList data={productsInfo.data.items} />
      <TotalPrice data={productsInfo.data.value}/>
      <FinishButton />
    </S.WithoutShippingCart>
  );
};

export default WithoutShipping;