import styled from 'styled-components';

import rd from '@assets/images/rd.png';

export const Container = styled.div`
  flex: 1;
  margin: 0 7rem;

  display: flex;
  padding: 1rem 0;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${props => props.theme.colors.border};

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    margin: 0 2.5rem;
  }
`;

export const LogoContiner = styled.div``;

export const Logo = styled.img.attrs({
  src: rd,
  alt: 'logo',
})``;

export const TechConatiner = styled.div``;

export const Tech = styled.a`
  color: ${props => props.theme.colors.textPrimaty};
  font-size: 3rem;
  margin-right: 1rem;
`;
