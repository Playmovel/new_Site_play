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
  background: var(--gradient-radial-dark);
  color: var(--text-primary);
  position: relative;
  overflow: hidden;
  box-sizing: border-box; /* 🔹 Evita ultrapassar a tela */

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 350px;
    height: 350px;
    background: radial-gradient(circle, var(--primary-alpha-15), transparent 70%);
    filter: var(--blur-2xl);
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
  background: var(--gradient-primary-horizontal);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: var(--text-light-blue);
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
  background: var(--white-alpha-04);
  border: var(--border-white-subtle);
  border-radius: var(--radius-md);
  padding: 2rem 1.5rem;
  text-align: center;
  backdrop-filter: var(--blur-md);
  transition: var(--transition-fast);
  box-shadow: 0 0 25px var(--white-alpha-05);

  &:hover {
    background: var(--white-alpha-08);
    border-color: var(--white-alpha-20);
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  font-size: 2.6rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 0 8px var(--white-alpha-25));
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
  color: var(--color-primary-light);
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: var(--text-light-blue);
  line-height: 1.5;
`;

const CallToAction = styled.div`
  text-align: center;
  margin-top: 4rem;
  background: var(--white-alpha-05);
  padding: 2.5rem 1.5rem;
  border-radius: var(--radius-lg);
  backdrop-filter: var(--blur-md);
  box-shadow: 0 0 30px var(--white-alpha-04);
  box-sizing: border-box;

  h3 {
    font-size: 1.9rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
  }

  p {
    color: var(--text-light-blue);
    margin-bottom: 1.8rem;
    font-size: 1rem;
  }
`;

const Button = styled.button`
  background: var(--gradient-primary-horizontal);
  color: var(--text-primary);
  border: none;
  border-radius: var(--radius-sm);
  padding: 0.8rem 2rem;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition-fast);
  box-shadow: var(--shadow-md);

  &:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-lg);
  }
`;
