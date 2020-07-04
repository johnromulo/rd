import styled from 'styled-components';

import rdsmall from '@assets/images/rd-small.png';

export const Container = styled.div`
  display: flex;

  flex: 1;
  margin: 0 7rem 0 10rem;

  padding-bottom: 2rem;

  @media (max-width: 768px) {
    margin: 0 2.5rem;
  }

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1.7;

  @media (max-width: 768px) {
    flex: 5;
    margin-bottom: 2rem;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CompanyContainer = styled.div`
  @media (max-width: 425px) {
    margin-top: 2rem;
  }
`;

export const Company = styled.img`
  margin-right: 1rem;
  object-fit: scale-down;

  @media (max-width: 425px) {
    height: 4rem;
  }
`;

export const CopyrightText = styled.span`
  color: ${props => props.theme.colors.textSecondary};
  font-weight: 300;
  font-size: 1.5rem;
  padding-top: 0.5rem;

  @media (max-width: 425px) {
    font-size: 1.2rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  @media (max-width: 425px) {
    justify-content: center;
  }
`;

export const Logo = styled.img.attrs({
  src: rdsmall,
  alt: 'logo',
})`
  object-fit: scale-down;
`;
