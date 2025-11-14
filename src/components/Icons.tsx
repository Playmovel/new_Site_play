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
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 180, damping: 14 }}
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
  padding: 6rem 1.5rem;
  background: radial-gradient(circle at top left, #0f172a, #020617 80%);
  color: #fff;
  position: relative;
  overflow: hidden;
  box-sizing: border-box; /* 🔹 Evita ultrapassar a tela */

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 350px;
    height: 350px;
    background: radial-gradient(circle, rgba(255, 56, 92, 0.15), transparent 70%);
    filter: blur(100px);
    z-index: 0;
  }

  &::before {
    top: -80px;
    left: -80px;
  }

  &::after {
    bottom: -80px;
    right: -80px;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  overflow-x: hidden; /* 🔹 Garante que o conteúdo não quebre lateralmente */
`;

const TextContainer = styled.div`
  text-align: center;
  margin-bottom: 3.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #ff3b3f, #ff8a00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #cbd5e1;
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.6;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  width: 100%;
  box-sizing: border-box;
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: 2rem 1.5rem;
  text-align: center;
  backdrop-filter: blur(14px);
  transition: all 0.3s ease;
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.05);

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  font-size: 2.6rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.25));
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
  color: #ff784e;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #cbd5e1;
  line-height: 1.5;
`;

const CallToAction = styled.div`
  text-align: center;
  margin-top: 4rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 2.5rem 1.5rem;
  border-radius: 20px;
  backdrop-filter: blur(18px);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.04);
  box-sizing: border-box;

  h3 {
    font-size: 1.9rem;
    margin-bottom: 1rem;
    color: #fff;
  }

  p {
    color: #cbd5e1;
    margin-bottom: 1.8rem;
    font-size: 1rem;
  }
`;

const Button = styled.button`
  background: linear-gradient(90deg, #ff3b3f, #ff8a00);
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 0.8rem 2rem;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 18px rgba(255, 122, 0, 0.35);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 22px rgba(255, 122, 0, 0.45);
  }
`;
