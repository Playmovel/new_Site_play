import { useRef, useState } from "react";
import styled from "styled-components";

export default function PlanosCarousel() {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const planos = [
    {
      nome: "Básico",
      preco: "49,90",
      descricao: "Ideal para uso doméstico.",
      velocidade: "100 Mbps",
      destaque: false,
    },
    {
      nome: "Intermediário",
      preco: "79,90",
      descricao: "Mais velocidade e estabilidade.",
      velocidade: "200 Mbps",
      destaque: false,
    },
    {
      nome: "Premium",
      preco: "119,90",
      descricao: "Perfeito para gamers e streamers.",
      velocidade: "500 Mbps",
      destaque: true,
    },
    {
      nome: "Empresarial",
      preco: "199,90",
      descricao: "Alta performance para empresas.",
      velocidade: "1 Gbps",
      destaque: false,
    },
    {
      nome: "Sócio",
      preco: "30,00",
      descricao: "Plano especial de apoio para associados.",
      velocidade: "50 Mbps",
      destaque: false,
    },
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    (e.preventDefault());
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const scroll = (direction) => {
    const container = carouselRef.current;
    const scrollAmount = 320;
    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  return (
    <Section id="planos">
      <Container>
        <Header>
          <Title>Escolha Seu Plano</Title>
          <Subtitle>Soluções sob medida para todas as necessidades</Subtitle>
        </Header>

        <CarouselContainer>
          <NavButton onClick={() => scroll("left")} position="left">
            ←
          </NavButton>

          <Carousel
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {planos.map((plano, index) => (
              <Card key={index} $destaque={plano.destaque}>
                {plano.destaque && <Badge>Mais Popular</Badge>}

                <CardHeader>
                  <PlanName>{plano.nome}</PlanName>
                  <Velocidade>{plano.velocidade}</Velocidade>
                </CardHeader>

                <PriceContainer>
                  <Currency>R$</Currency>
                  <Price>{plano.preco}</Price>
                  <Period>/mês</Period>
                </PriceContainer>

                <Description>{plano.descricao}</Description>

                <Features>
                  <Feature>✓ Wi-Fi grátis</Feature>
                  <Feature>✓ Instalação incluída</Feature>
                  <Feature>✓ Suporte 24/7</Feature>
                </Features>

                <SubscribeButton $destaque={plano.destaque}>
                  Assinar Agora
                </SubscribeButton>
              </Card>
            ))}
          </Carousel>

          <NavButton onClick={() => scroll("right")} position="right">
            →
          </NavButton>
        </CarouselContainer>

        <ProgressIndicator>
          <ProgressBar />
        </ProgressIndicator>
      </Container>
    </Section>
  );
}

/* ====== ESTILOS ====== */
const Section = styled.section`
  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
  padding: 5rem 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 300px;
    background: radial-gradient(circle at 50% 0%, rgba(164, 25, 2, 0.05) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3.5rem;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 0.8rem;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.15rem;
  color: #666;
  font-weight: 400;
`;

const CarouselContainer = styled.div`
  position: relative;
  padding: 0 3rem;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

const Carousel = styled.div`
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 2rem 0;
  cursor: grab;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &:active {
    cursor: grabbing;
  }
`;

const Card = styled.div`
  flex: 0 0 300px;
  background: ${props => props.$destaque ?
    'linear-gradient(135deg, #a41902 0%, #c41f03 100%)' :
    '#ffffff'};
  border-radius: 24px;
  padding: 2.5rem 2rem;
  position: relative;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: ${props => props.$destaque ?
    '0 20px 60px rgba(164, 25, 2, 0.25)' :
    '0 4px 20px rgba(0, 0, 0, 0.08)'};
  border: ${props => props.$destaque ?
    '2px solid rgba(255, 255, 255, 0.3)' :
    '2px solid #f0f0f0'};
  transform: ${props => props.$destaque ? 'scale(1.05)' : 'scale(1)'};

  &:hover {
    transform: ${props => props.$destaque ?
    'scale(1.08) translateY(-8px)' :
    'scale(1.03) translateY(-8px)'};
    box-shadow: ${props => props.$destaque ?
    '0 30px 80px rgba(164, 25, 2, 0.35)' :
    '0 12px 40px rgba(0, 0, 0, 0.15)'};
  }

  @media (max-width: 768px) {
    flex: 0 0 280px;
    padding: 2rem 1.5rem;
  }
`;

const Badge = styled.div`
  position: absolute;
  top: -12px;
  right: 20px;
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  color: #1a1a1a;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 12px rgba(255, 215, 0, 0.4);
`;

const CardHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const PlanName = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${props => props.theme?.destaque ? '#ffffff' : '#1a1a1a'};
  margin-bottom: 0.5rem;
`;

const Velocidade = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${props => props.theme?.destaque ? 'rgba(255, 255, 255, 0.9)' : '#a41902'};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-bottom: 1.5rem;
  gap: 0.3rem;
`;

const Currency = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${props => props.theme?.destaque ? 'rgba(255, 255, 255, 0.9)' : '#666'};
`;

const Price = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: ${props => props.theme?.destaque ? '#ffffff' : '#1a1a1a'};
  line-height: 1;
`;

const Period = styled.span`
  font-size: 1rem;
  color: ${props => props.theme?.destaque ? 'rgba(255, 255, 255, 0.8)' : '#666'};
  font-weight: 500;
`;

const Description = styled.p`
  color: ${props => props.theme?.destaque ? 'rgba(255, 255, 255, 0.95)' : '#555'};
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  text-align: center;
  min-height: 45px;
`;

const Features = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
`;

const Feature = styled.li`
  color: ${props => props.theme?.destaque ? 'rgba(255, 255, 255, 0.9)' : '#444'};
  font-size: 0.9rem;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    font-weight: bold;
  }
`;

const SubscribeButton = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  background: ${props => props.$destaque ?
    '#ffffff' :
    'linear-gradient(135deg, #a41902 0%, #c41f03 100%)'};
  color: ${props => props.$destaque ? '#a41902' : '#ffffff'};
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: ${props => props.$destaque ?
    '0 4px 15px rgba(255, 255, 255, 0.3)' :
    '0 4px 15px rgba(164, 25, 2, 0.3)'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.$destaque ?
    '0 6px 20px rgba(255, 255, 255, 0.4)' :
    '0 6px 20px rgba(164, 25, 2, 0.4)'};
  }

  &:active {
    transform: translateY(0);
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  ${props => props.position}: 0;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid #e0e0e0;
  color: #a41902;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #a41902;
    color: #ffffff;
    border-color: #a41902;
    transform: translateY(-50%) scale(1.1);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
`;

const ProgressIndicator = styled.div`
  width: 200px;
  height: 4px;
  background: #e0e0e0;
  border-radius: 2px;
  margin: 2rem auto 0;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  height: 100%;
  width: 30%;
  background: linear-gradient(90deg, #a41902 0%, #c41f03 100%);
  border-radius: 2px;
  animation: progress 3s ease-in-out infinite;

  @keyframes progress {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(233%); }
  }
`;

Card.defaultProps = {
  theme: { destaque: false }
};

PlanName.defaultProps = {
  theme: { destaque: false }
};

Velocidade.defaultProps = {
  theme: { destaque: false }
};

Currency.defaultProps = {
  theme: { destaque: false }
};

Price.defaultProps = {
  theme: { destaque: false }
};

Period.defaultProps = {
  theme: { destaque: false }
};

Description.defaultProps = {
  theme: { destaque: false }
};

Feature.defaultProps = {
  theme: { destaque: false }
};