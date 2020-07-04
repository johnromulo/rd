import React from 'react';

import {
  Wrap,
  Container,
  ImageContainer,
  Image,
  ImageInfo,
  TextContainer,
  Text,
  Scroll,
  ButtonContainer,
  ButtonMore,
} from './styles';

type CardProps = React.Props<{}> & {
  typecard: 'desktop' | 'tablet' | 'mobile';
  textButton: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Card: React.FC<CardProps> = ({
  typecard,
  children,
  textButton,
  onClick,
}: CardProps) => {
  return (
    <Wrap>
      <Container>
        <ImageContainer typestyle={typecard}>
          <Image typestyle={typecard} />
          <ImageInfo>Site responsivo DESKTOP</ImageInfo>
        </ImageContainer>
        <TextContainer>
          <Scroll>
            <Text>{children}</Text>
          </Scroll>
        </TextContainer>
        <ButtonContainer>
          <ButtonMore typestyle={typecard} onClick={onClick}>
            {textButton}
          </ButtonMore>
        </ButtonContainer>
      </Container>
    </Wrap>
  );
};

export default Card;
