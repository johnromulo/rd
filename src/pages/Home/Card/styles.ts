import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

import desktopImg from '@assets/images/desktop.png';
import tabletImg from '@assets/images/tablet.png';
import mobileImg from '@assets/images/mobile.png';

function getImg(type: string): string {
  if (type === 'tablet') {
    return tabletImg;
  }
  if (type === 'mobile') {
    return mobileImg;
  }
  return desktopImg;
}

export const Wrap = styled.div`
  margin-right: 4rem;
  &:nth-last-child(1) {
    margin-right: 0rem;
    margin-bottom: 0rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 4rem;
    margin-right: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 365px;
  background: ${props => props.theme.colors.backgroudSecondary};

  @media (max-width: 425px) {
    width: 290px;
  }
`;

interface ImageProps {
  typestyle: string;
}
export const ImageContainer = styled.div<ImageProps>`
  background: ${props => {
    if (props.typestyle === 'tablet') {
      return props.theme.colors.tablet;
    }
    if (props.typestyle === 'mobile') {
      return props.theme.colors.mobile;
    }
    return props.theme.colors.desktop;
  }};

  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem 0;

  padding: 2rem 3rem;
`;

export const Image = styled.img.attrs<ImageProps>(props => ({
  src: getImg(props.typestyle),
  alt: props.typestyle,
}))<ImageProps>``;

export const ImageInfo = styled.span`
  color: ${props => props.theme.colors.textImageCard};
  font-size: 2.5rem;
  font-weight: 300;
  margin-top: 2rem;
`;

export const TextContainer = styled.div`
  padding: 0.8rem 0.5rem;
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 160px;
`;

export const Text = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-weight: 400;
  text-align: justify;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 2rem 2rem;
  letter-spacing: -1px;
`;

export const ButtonMore = styled.button<ImageProps>`
  color: ${props => props.theme.colors.textImageCard};
  font-size: 2.2rem;
  font-weight: 500;
  letter-spacing: -1px;

  padding: 0.6rem;

  background: ${props => {
    if (props.typestyle === 'tablet') {
      return props.theme.colors.tablet;
    }
    if (props.typestyle === 'mobile') {
      return props.theme.colors.mobile;
    }
    return props.theme.colors.desktop;
  }};
`;
