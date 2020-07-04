import React from 'react';

import drogaraia from '@assets/images/drogaraia.png';
import drogasil from '@assets/images/drogasil.png';
import farmasil from '@assets/images/farmasil.png';
import univers from '@assets/images/univers.png';
import bio from '@assets/images/4bio.png';

import {
  Container,
  Content,
  CompanyContainer,
  LogoContainer,
  CopyrightText,
  Company,
  Logo,
} from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <CopyrightText>RD 2017. Todos os direitos reservados</CopyrightText>
        <CompanyContainer>
          <Company src={drogaraia} alt="drogaraia" />
          <Company src={drogasil} alt="drogasil" />
          <Company src={farmasil} alt="farmasil" />
          <Company src={univers} alt="univers" />
          <Company src={bio} alt="4bio" />
        </CompanyContainer>
      </Content>
      <LogoContainer>
        <Logo />
      </LogoContainer>
    </Container>
  );
};

export default Footer;
