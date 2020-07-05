import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import Modal from '@material-ui/core/Modal';

import { useThemeRD } from '@contexts/theme';

import Header from '@components/Header';
import Footer from '@components/Footer';

import Card from './Card';

import {
  Container,
  Main,
  Title,
  TitleStrong,
  InfoContainer,
  Info,
  ColorContainer,
  Color,
  ColorPoint,
  CardContainer,
  TextCardContent,
  ModalContent,
} from './styles';

const Home: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  const { selectTheme } = useThemeRD();

  const [showDesktopInfo, setShowDesktopInfo] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <Header />
      <Main>
        <Title>
          Crie este site <TitleStrong>responsivo</TitleStrong> com{' '}
          <TitleStrong>REACT</TitleStrong> utilizando{' '}
          <TitleStrong>styled-components</TitleStrong>
        </Title>
        <InfoContainer>
          <Info>A fonte utilizada é a Open Sans de 300 a 800.</Info>
          <Info>
            exemplo: {`${'"Open Sans"'}`}, Helvetica, sans-serif, arial;
          </Info>
          <Info>Já as cores são:</Info>
          <ColorContainer>
            <Color>
              <ColorPoint color={colors.textPrimaty} />
              {colors.textPrimaty},
            </Color>
            <Color>
              <ColorPoint color={colors.textSecondary} />
              {colors.textSecondary},
            </Color>
            <Color>
              <ColorPoint color={colors.desktop} />
              {colors.desktop},
            </Color>
            <Color>
              <ColorPoint color={colors.tablet} />
              {colors.tablet} e
            </Color>
            <Color>
              <ColorPoint color={colors.mobile} />
              {colors.mobile}
            </Color>
          </ColorContainer>
        </InfoContainer>
        <CardContainer>
          <Card
            typecard="desktop"
            textButton="Leia mais..."
            onClick={() => {
              setShowDesktopInfo(!showDesktopInfo);
            }}
          >
            <TextCardContent>
              Quando pressionado o botão <b>Leia mais...</b> o restante da
              informação deverá aparecer em scroll down.{' '}
              {showDesktopInfo && (
                <span data-testid="desktop-info">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </span>
              )}
            </TextCardContent>
          </Card>
          <Card
            typecard="tablet"
            textButton="Leia mais..."
            onClick={() => {
              setShowModal(true);
            }}
          >
            <TextCardContent>
              Quando pressionado o botão <b>Leia mais...</b> a informação deverá
              aparecer em um popup na tela.
            </TextCardContent>
          </Card>
          <Card
            typecard="mobile"
            textButton="alterar tema"
            onClick={selectTheme}
          >
            <TextCardContent>
              Quando pressionado o botão <b>alterar tema</b> modifique o tema do
              site para blackfriday a seu gosto.
            </TextCardContent>
          </Card>
        </CardContainer>
      </Main>
      <Footer />
      <Modal
        open={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <ModalContent>
          <span data-testid="modal-tablet-info">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </span>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Home;
