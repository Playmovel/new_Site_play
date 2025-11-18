import styled from "styled-components";
import aboutImage from "../assets/favicon.png";

export default function AboutUs() {
  return (
    <Section>
      <Container>
        <TextContainer>
          <Subtitle>✨ Sobre Nós</Subtitle>
          <Title>Conectando Pessoas e Simplicidade</Title>
          <Paragraph>
            Somos diferentes de tudo que você já viu! Estamos comprometidos em
            revolucionar a maneira como você interage com a sua operadora através
            de uma abordagem completamente digital. <Highlight>Sem complicações!</Highlight>
            Com um atendimento personalizado, mais próximo das pessoas, fácil de
            usar, conveniente e altamente eficaz.
            Utilizando a tecnologia para seu propósito fundamental:{" "}
            <Highlight>simplificar a vida de todos.</Highlight>
          </Paragraph>
        </TextContainer>

        <ImageWrapper>
          <ImageContainer>
            <img src={aboutImage} alt="Sobre nós" />
            <Glow />
          </ImageContainer>
        </ImageWrapper>
      </Container>
    </Section>
  );
}

/* ----------------------------- STYLED COMPONENTS ----------------------------- */

const Section = styled.section`
  background: var(--gradient-red-reverse);
  padding: 6rem 2rem;
  color: var(--text-primary);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -100px;
    right: -100px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, var(--yellow-alpha-15), transparent 70%);
    filter: var(--blur-xl);
    z-index: 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
`;

const TextContainer = styled.div`
  flex: 1;
  min-width: 320px;
`;

const Subtitle = styled.h4`
  color: var(--color-yellow);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1.2;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2.3rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--text-light-primary);
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Highlight = styled.span`
  color: var(--color-yellow);
  font-weight: 600;
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  min-width: 300px;
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: 0 10px 30px var(--yellow-alpha-30);
  transition: var(--transition-medium);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 40px var(--yellow-alpha-30);
  }

  img {
    width: 100%;
    max-width: 420px;
    border-radius: var(--radius-xl);
    display: block;
  }
`;

const Glow = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, var(--yellow-alpha-15), transparent 60%);
  pointer-events: none;
  mix-blend-mode: screen;
`;
