import styled from 'styled-components';

import bg from '@assets/images/bg.jpg';

export const Container = styled.div`
  background: ${props => props.theme.colors.backgroudPrimay};
  background-image: url(${props => props.theme.title === 'primary' && bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100%;
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem;

  flex-direction: column;

  @media (max-width: 768px) {
    padding: 5rem 2rem;
  }
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.textPrimaty};
  font-size: 6rem;
  font-weight: 300;
  text-align: center;
  line-height: 6rem;
  padding: 0 20rem;

  @media (max-width: 768px) {
    padding: 0 0rem;
  }

  @media (max-width: 425px) {
    font-size: 4rem;
  }
`;

export const TitleStrong = styled.span`
  font-size: 6rem;
  font-weight: 800;
  line-height: 6rem;

  @media (max-width: 425px) {
    font-size: 4rem;
  }
`;

export const InfoContainer = styled.div`
  padding: 5rem 0;
`;

export const Info = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  text-align: center;
  font-size: 4rem;
  font-weight: 300;

  @media (max-width: 425px) {
    font-size: 2.6rem;
  }
`;

export const ColorContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Color = styled.span`
  display: flex;
  align-items: center;
  font-size: 4rem;
  color: ${props => props.theme.colors.textSecondary};
  margin-right: 1rem;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }

  @media (max-width: 425px) {
    font-size: 1.6rem;
  }
`;

interface ColorPointProps {
  color: string;
}
export const ColorPoint = styled.div<ColorPointProps>`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  background: ${props => props.color};
  display: inline-block;
  margin-top: 0.5rem;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TextCardContent = styled.span`
  font-size: 1.7rem;

  b {
    font-weight: 800;
  }
`;

export const ModalContent = styled.div`
  position: absolute;
  width: 350px;
  background-color: ${props => props.theme.colors.backgroudSecondary};
  padding: 2rem;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  span {
    font-size: 2.5rem;
    color: ${props => props.theme.colors.textSecondary};
  }

  @media (max-width: 425px) {
    width: 300px;
  }
`;
