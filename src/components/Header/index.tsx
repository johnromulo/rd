import React from 'react';

import { Container, LogoContiner, Logo, TechConatiner, Tech } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <LogoContiner>
        <Logo />
      </LogoContiner>
      <TechConatiner>
        <Tech>HTML</Tech>
        <Tech>CSS3</Tech>
        <Tech>JAVASCRIPT</Tech>
        <Tech>REACT</Tech>
        <Tech>REDUX</Tech>
      </TechConatiner>
    </Container>
  );
};

export default Header;
