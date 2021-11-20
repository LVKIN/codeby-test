import React from 'react';
import FinishButton from '../../components/FinishButton';
import ProductList from '../../components/ProductsList';
import TitleCart from '../../components/TitleCart';
import TotalPrice from '../../components/TotalPrice';
import { useWithShipping } from '../../context/WithShippingProvider';

import * as S from './styled';

const WithShipping = () => {
  const productsInfo = useWithShipping();
  console.log(productsInfo.data)

  return (
    <S.WithShippingCart>
      <TitleCart />
      <ProductList data={productsInfo.data.items} />
      <TotalPrice data={productsInfo.data.value}/>
      <FinishButton />
    </S.WithShippingCart>
  );
};

export default WithShipping;