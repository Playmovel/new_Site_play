import styled from "styled-components";
import aboutImage from "../assets/favicon.png";

export default function AboutUs() {
  return (
    <Section>
      <Content>
        <TextContainer>
          <Title>Sobre Nós!</Title>
          <Paragraph>
            Somos diferentes de tudo que você já viu! Estamos comprometidos em
            revolucionar a maneira como você interage com a sua operadora
            através de uma abordagem completamente digital. Sem complicações!
            Com um atendimento personalizado, mais próximo das pessoas, fácil de
            usar, conveniente e altamente eficaz. Utilizando a tecnologia para
            seu propósito fundamental: simplificar a vida de todos.
          </Paragraph>
        </TextContainer>
        <ImageContainer>
          <img src={aboutImage} alt="Sobre nós" />
        </ImageContainer>
      </Content>
    </Section>
  );
}

// Styled components
const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #a41902;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap; /* permite quebrar em telas menores */
`;

const TextContainer = styled.div`
  flex: 1;
  min-width: 300px;
`;

const Title = styled.h2`
  font-size: 5rem;
  color: #ffe501;
  margin-bottom: 5rem;
  font-weight: bold;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #ffffffff;
`;

const ImageContainer = styled.div`
  flex: 1;
  min-width: 300px;

  img {
    width: 100%;
    max-width: 500px;
    border-radius: 12px;
    box-shadow: 0 10px 30px #a41902;
  }
`;
