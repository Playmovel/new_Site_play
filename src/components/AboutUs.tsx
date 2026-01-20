import styled from "styled-components";
import { motion } from "framer-motion";
import fallbackImage from "../assets/favicon.png";
import { useAppConstants } from "../hooks/useAppConstants";

export default function AboutUs() {
  const { constants } = useAppConstants();

  // Use API logo if available, otherwise use fallback
  const logoSrc = constants.logotipo || fallbackImage;
  return (
    <Section>
      <Container>
        <TextContainer
          as={motion.div}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
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

        <ImageWrapper
          as={motion.div}
          initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <ImageContainer>
            <img src={logoSrc} alt={constants.nameEmpresa} />
            <Glow />
          </ImageContainer>
        </ImageWrapper>
      </Container>
    </Section>
  );
}

/* ----------------------------- STYLED COMPONENTS ----------------------------- */

const Section = styled.section`
  background: var(--gradient-bg-alt);
  padding: 6rem 2rem;
  color: var(--text-primary);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -10%;
    left: -5%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, var(--primary-alpha-15), transparent 70%);
    filter: var(--blur-xl);
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -10%;
    right: -5%;
    width: 350px;
    height: 350px;
    background: radial-gradient(circle, var(--secondary-blue-alpha-12), transparent 70%);
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
  color: var(--color-primary);
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
  color: var(--color-primary);
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
  overflow: visible;
  transition: var(--transition-medium);

  &:hover {
    transform: scale(1.05);

    img {
      filter: drop-shadow(0 15px 40px var(--primary-alpha-30));
    }
  }

  img {
    width: 100%;
    max-width: 420px;
    border-radius: var(--radius-xl);
    display: block;
    filter: drop-shadow(0 10px 30px var(--primary-alpha-30));
    transition: var(--transition-medium);
  }
`;

const Glow = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, var(--primary-alpha-15), transparent 60%);
  pointer-events: none;
  mix-blend-mode: screen;
`;
