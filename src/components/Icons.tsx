import styled from "styled-components";
import { motion } from "framer-motion";

export default function SobreZyber() {
  const features = [
    {
      id: 1,
      titulo: "Internet de Alta Performance",
      descricao:
        "Tenha estabilidade e velocidade real para aproveitar cada segundo online. Trabalhe, estude e se divirta sem interrupções.",
      icon: "⚡",
    },
    {
      id: 2,
      titulo: "Atendimento Humano 24h",
      descricao:
        "Esqueça os robôs. Nossa equipe está sempre pronta para ajudar você de verdade, a qualquer hora, todos os dias.",
      icon: "💬",
    },
    {
      id: 3,
      titulo: "Planos que Cabem no Seu Bolso",
      descricao:
        "Tenha qualidade premium com o melhor custo-benefício do mercado. Porque conexão boa não precisa ser cara.",
      icon: "💎",
    },
  ];

  return (
    <Section id="sobre">
      <Container>
        <TextContainer>
          <SectionTitle>Por que escolher a Zyber?</SectionTitle>
          <Subtitle>
            A Zyber vai além de oferecer internet — nós conectamos pessoas,
            sonhos e oportunidades.
          </Subtitle>
        </TextContainer>

        <FeaturesGrid>
          {features.map((feature) => (
            <FeatureCard
              as={motion.div}
              key={feature.id}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            >
              <IconWrapper>{feature.icon}</IconWrapper>
              <CardTitle>{feature.titulo}</CardTitle>
              <CardDescription>{feature.descricao}</CardDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>

        <CallToAction>
          <h3>Conecte-se ao futuro com a Zyber 🚀</h3>
          <p>Escolha o plano ideal e descubra o poder de uma internet sem limites.</p>
          <Button>Ver Planos</Button>
        </CallToAction>
      </Container>
    </Section>
  );
}

/* ----------------------------- STYLED COMPONENTS ----------------------------- */

const Section = styled.section`
  width: 100%;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #fff;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -100px;
    left: -100px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(164, 25, 2, 0.4), transparent 70%);
    z-index: 0;
    filter: blur(80px);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const TextContainer = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #ff3b3f, #ff8a00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #e2e8f0;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem 2rem;
  text-align: center;
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.05);
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.2));
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: #ff784e;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #cbd5e1;
  line-height: 1.6;
`;

const CallToAction = styled.div`
  text-align: center;
  margin-top: 5rem;
  background: rgba(255, 255, 255, 0.08);
  padding: 3rem 2rem;
  border-radius: 24px;
  backdrop-filter: blur(15px);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.05);

  h3 {
    font-size: 2rem;
    color: #ffffff;
    margin-bottom: 1rem;
  }

  p {
    color: #cbd5e1;
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }
`;

const Button = styled.button`
  background: linear-gradient(90deg, #ff3b3f, #ff8a00);
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 0.9rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(255, 122, 0, 0.3);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(255, 122, 0, 0.4);
  }
`;
