import React from 'react';
import WithShipping from './containers/WithShipping';
import WithoutShipping from './containers/WithoutShipping';

import * as S from './styled';
import { WithShippingProvider } from './context/WithShippingProvider';
import { WithoutShippingProvider } from './context/WithoutShippingProvider';

const Minicart = () => (
  <S.AppWrapper>
    <WithShippingProvider>
      <WithShipping />
    </WithShippingProvider>
    <WithoutShippingProvider>
      <WithoutShipping />
    </WithoutShippingProvider>
    <S.AppFooter>
      <h1>This app was developed by <a href='https://github.com/LVKIN/codeby-test' rel='noreferrer' target='_blank'>LVKIN</a>!</h1>
    </S.AppFooter>
  </S.AppWrapper>
);


export default Minicart;
