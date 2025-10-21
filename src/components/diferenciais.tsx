import styled from "styled-components";

export default function Diferenciais() {
    const diferenciais = [
        {
            id: 1,
            titulo: "Inovação Tecnológica",
            descricao:
                "Soluções de ponta utilizando as tecnologias mais modernas do mercado para impulsionar seu negócio.",
            icon: "⚡",
        },
        {
            id: 2,
            titulo: "Suporte 24/7",
            descricao:
                "Equipe especializada disponível a qualquer momento para garantir que sua operação nunca pare.",
            icon: "💬",
        },
        {
            id: 3,
            titulo: "Segurança Avançada",
            descricao:
                "Proteção máxima dos seus dados com criptografia de última geração e monitoramento constante.",
            icon: "🛡️",
        },
        {
            id: 4,
            titulo: "Escalabilidade",
            descricao:
                "Infraestrutura que cresce junto com seu negócio, adaptando-se às suas necessidades.",
            icon: "📈",
        },
        {
            id: 5,
            titulo: "Experiência Comprovada",
            descricao:
                "Anos de atuação no mercado com centenas de projetos bem-sucedidos e clientes satisfeitos.",
            icon: "🏆",
        },
        {
            id: 6,
            titulo: "Personalização Total",
            descricao:
                "Soluções sob medida desenvolvidas especificamente para atender os desafios únicos da sua empresa.",
            icon: "⚙️",
        },
    ];

    return (
        <Section id="diferenciais">
            <Container>
                <SectionTitle>Por que Escolher a Zyber?</SectionTitle>
                <Subtitle>
                    Descubra os diferenciais que nos tornam únicos no mercado
                </Subtitle>

                <DiferenciaisGrid>
                    {diferenciais.map((item) => (
                        <Card key={item.id}>
                            <IconCircle>{item.icon}</IconCircle>
                            <CardTitle>{item.titulo}</CardTitle>
                            <CardDescription>{item.descricao}</CardDescription>
                        </Card>
                    ))}
                </DiferenciaisGrid>
            </Container>
        </Section>
    );
}

const Section = styled.section`
  width: 100%;
  padding: 6rem 2rem;
  background: #f9f9f9;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -150px;
    right: -150px;
    width: 400px;
    height: 400px;
    background: radial-gradient(
      circle,
      rgba(164, 25, 2, 0.1) 0%,
      transparent 70%
    );
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -150px;
    left: -150px;
    width: 400px;
    height: 400px;
    background: radial-gradient(
      circle,
      rgba(255, 229, 1, 0.08) 0%,
      transparent 70%
    );
    z-index: 0;
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
  font-weight: 700;
  color: #a41902;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
  text-align: center;
  margin-bottom: 4rem;
`;

const DiferenciaisGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 2.5rem 1.8rem;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 35px rgba(164, 25, 2, 0.15);
  }
`;

const IconCircle = styled.div`
  background: linear-gradient(145deg, #fff, #f2f2f2);
  border: 2px solid #a41902;
  color: #a41902;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  ${Card}:hover & {
    background: #a41902;
    color: #fff;
    transform: rotate(8deg);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #a41902;
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #444;
  line-height: 1.6;
  max-width: 280px;
`;

