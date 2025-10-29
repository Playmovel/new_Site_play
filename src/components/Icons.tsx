import styled from "styled-components";

export default function SobreZyber() {
  const features = [
    {
      id: 1,
      titulo: "Internet de Qualidade",
      descricao: "Conexão estável e de alta velocidade para sua casa ou empresa.",
      icon: "🌐" // Temporário - será substituído
    },
    {
      id: 2,
      titulo: "Suporte 24/7",
      descricao: "Equipe dedicada pronta para ajudar você a qualquer momento.",
      icon: "💬" // Temporário - será substituído
    },
    {
      id: 3,
      titulo: "Melhor Custo-Benefício",
      descricao: "Planos acessíveis sem abrir mão da qualidade e performance.",
      icon: "⚡" // Temporário - será substituído
    }
  ];

  return (
    <Section id="sobre">
      <Container>
        <SectionTitle>Sobre a Zyber</SectionTitle>
        <Subtitle>Conectando você ao que realmente importa</Subtitle>

        <FeaturesGrid>
          {features.map((feature) => (
            <FeatureCard key={feature.id}>
              <IconWrapper>
                <Icon>{feature.icon}</Icon>
              </IconWrapper>
              <CardTitle>{feature.titulo}</CardTitle>
              <CardDescription>{feature.descricao}</CardDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>




      </Container>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #ffffffff 0%, #ffffffff 100%);
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    pointer-events: none;
  }
`;



const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #a41902;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
  text-align: center;
  margin-bottom: 3rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FeatureCard = styled.div`
  background: #e0e0e0;
  border-radius: 30px;
  padding: 2.5rem 2rem;
  text-align: center;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 25px 25px 70px #bebebe, -25px -25px 70px #ffffff;
  }
`;

const IconWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #e0e0e0;
  box-shadow: inset 8px 8px 16px #bebebe, inset -8px -8px 16px #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  ${FeatureCard}:hover & {
    box-shadow: 8px 8px 16px #bebebe, -8px -8px 16px #ffffff;
  }
`;

const Icon = styled.div`
  font-size: 3rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #a41902;
  margin-bottom: 0.5rem;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;