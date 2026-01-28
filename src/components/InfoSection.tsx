import { motion } from "framer-motion";
import styled from "styled-components";
import Botaoapple from "../assets/botao_apple.svg";
import BotaoAndroid from "../assets/botao_google.svg";
import { useAppConstants } from "../hooks/useAppConstants";

interface PhoneMockupProps {
  screenImage?: string;
  alt?: string;
}

interface InfoItem {
  title: string;
  content: string;
  icon: string;
}

interface CardProps {
  info: InfoItem;
  index: number;
  side: "left" | "right";
}

const PhoneMockup = ({
  screenImage,
  alt = "App Screenshot",
}: PhoneMockupProps) => (
  <PhoneDevice>
    {/* Botões laterais */}
    <PhoneSideButtonLeft className="volume-up" />
    <PhoneSideButtonLeft className="volume-down" />
    <PhoneSideButtonRight />

    {/* Frame do celular */}
    <PhoneBody>
      {/* Dynamic Island / Notch */}
      <PhoneNotch>
        <NotchPill />
      </PhoneNotch>

      {/* Tela do celular */}
      <PhoneScreen>
        {screenImage ? (
          <ScreenImage src={screenImage} alt={alt} />
        ) : (
          <ScreenPlaceholder>
            <PlaceholderIcon>📱</PlaceholderIcon>
            <PlaceholderText>Preview do App</PlaceholderText>
          </ScreenPlaceholder>
        )}
      </PhoneScreen>

      {/* Home indicator */}
      <HomeIndicator />
    </PhoneBody>
  </PhoneDevice>
);

export default function InfoSection() {
  const { constants } = useAppConstants();

  const InfosLeft: InfoItem[] = [
    {
      title: "Segurança",
      content:
        "Nosso maior foco é na segurança de seus dados e do nosso aplicativo.",
      icon: "🔒",
    },
    {
      title: "Gerencie Seus Planos",
      content:
        "Controle seus planos com facilidade e segurança direto pelo app.",
      icon: "⚡",
    },
  ];

  const infosRight: InfoItem[] = [
    {
      title: "Faturas",
      content: `Com o aplicativo da ${constants.nameEmpresa} você consegue renovar o seu plano com um só clique.`,
      icon: "💳",
    },
    {
      title: "Acúmulo de Gigas",
      content: "Gerencie e acompanhe seus gigas acumulados em tempo real.",
      icon: "📊",
    },
  ];

  const CardComponent = ({ info, index }: CardProps) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      style={{
        background: "var(--white-alpha-05)",
        backdropFilter: "var(--blur-sm)",
        padding: "2rem",
        gap: "1rem",
        borderRadius: "var(--radius-lg)",
        border: "var(--border-white-medium)",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
        textAlign: "left",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
      className="info-card"
    >
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "2rem",
            marginBottom: "1rem",
            filter: "grayscale(0.3)",
          }}
        >
          {info.icon}
        </div>

        <h3
          style={{
            color: "var(--color-primary)",
            marginBottom: "0.75rem",
            fontSize: "1.35rem",
            fontWeight: "700",
            letterSpacing: "-0.5px",
          }}
        >
          {info.title}
        </h3>

        <p
          style={{
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            fontSize: "0.95rem",
          }}
        >
          {info.content}
        </p>
      </div>
    </motion.div>
  );

  return (
    <Section>
      {/* Glow superior esquerdo */}
      <GlowTopLeft />

      {/* Glow inferior direito */}
      <GlowBottomRight />

      {/* Coluna Esquerda */}
      <SideColumn>
        {InfosLeft.map((info, index) => (
          <CardComponent key={index} info={info} index={index} side="left" />
        ))}
      </SideColumn>

      {/* Imagem Central */}
      <CenterColumn>
        {/* Badge superior */}
        <Badge>📱 Baixe o App</Badge>

        <PhoneWrapper>
          {/* Glow effect atrás da imagem */}
          <PhoneGlow />

          <PhoneMockup
            screenImage={constants.printApp || constants.appScreenshot}
            alt="App Preview"
          />
        </PhoneWrapper>

        {/* Botões */}
        <ButtonsWrapper>
          {[
            {
              text: "App Store",
              href: constants.linkAppApple,
              icon: Botaoapple,
            },
            {
              text: "Google Play",
              href: constants.linkAppAndroid,
              icon: BotaoAndroid,
            },
          ].map((btn, i) => (
            <StoreLink
              key={i}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <StoreButton>
                <StoreIcon src={btn.icon} alt={btn.text} />
              </StoreButton>
            </StoreLink>
          ))}
        </ButtonsWrapper>
      </CenterColumn>

      {/* Coluna Direita */}
      <SideColumn>
        {infosRight.map((info, index) => (
          <CardComponent key={index} info={info} index={index} side="right" />
        ))}
      </SideColumn>
    </Section>
  );
}

/* Styled Components */
const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 2.5rem;
  padding: 5rem 2rem;
  background: var(--gradient-bg-alt);
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    gap: 2rem;
    padding: 4rem 1.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 3rem 1rem;
  }
`;

const GlowTopLeft = styled.div`
  position: absolute;
  top: -10%;
  left: -5%;
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    var(--primary-alpha-15) 0%,
    transparent 70%
  );
  border-radius: 50%;
  filter: var(--blur-xl);
  z-index: 0;
  pointer-events: none;

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const GlowBottomRight = styled.div`
  position: absolute;
  bottom: -10%;
  right: -5%;
  width: 350px;
  height: 350px;
  background: radial-gradient(
    circle,
    var(--secondary-blue-alpha-12) 0%,
    transparent 70%
  );
  border-radius: 50%;
  filter: var(--blur-xl);
  z-index: 0;
  pointer-events: none;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const SideColumn = styled.div`
  flex: 1 1 280px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    flex: 1 1 240px;
    max-width: 300px;
  }

  @media (max-width: 768px) {
    flex: none;
    width: 100%;
    max-width: 400px;
    order: 2;
  }
`;

const CenterColumn = styled.div`
  flex: 1 1 300px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    flex: none;
    width: 100%;
    max-width: 100%;
    order: 1;
    gap: 1.5rem;
  }
`;

const Badge = styled.div`
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: var(--primary-alpha-10);
  border: var(--border-primary);
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  color: var(--color-primary);
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.4rem 1.2rem;
  }
`;

const PhoneWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const PhoneGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  background: radial-gradient(
    circle,
    var(--primary-alpha-20) 0%,
    transparent 70%
  );
  filter: var(--blur-xl);
  z-index: 0;
`;

/* Phone Mockup Styled Components */
const PhoneDevice = styled.div`
  position: relative;
  width: clamp(220px, 50vw, 300px);
  z-index: 1;

  @media (max-width: 768px) {
    width: clamp(200px, 55vw, 280px);
  }

  @media (max-width: 480px) {
    width: clamp(180px, 65vw, 260px);
  }
`;

const PhoneSideButtonLeft = styled.div`
  position: absolute;
  left: -3px;
  width: 3px;
  background: linear-gradient(to right, #1a1a1a, #2d2d2d);
  border-radius: 2px 0 0 2px;

  &.volume-up {
    top: 15%;
    height: 35px;
  }

  &.volume-down {
    top: 25%;
    height: 55px;
  }
`;

const PhoneSideButtonRight = styled.div`
  position: absolute;
  right: -3px;
  top: 20%;
  width: 3px;
  height: 70px;
  background: linear-gradient(to left, #1a1a1a, #2d2d2d);
  border-radius: 0 2px 2px 0;
`;

const PhoneBody = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 9 / 19.5;
  background: linear-gradient(145deg, #1a1a1a 0%, #0d0d0d 100%);
  border-radius: clamp(28px, 6vw, 45px);
  padding: clamp(8px, 1.5vw, 12px);
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.1),
    0 25px 50px -12px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const PhoneNotch = styled.div`
  position: absolute;
  top: clamp(10px, 2vw, 16px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  justify-content: center;
`;

const NotchPill = styled.div`
  width: clamp(80px, 25%, 100px);
  height: clamp(24px, 4vw, 32px);
  background: #000;
  border-radius: 20px;
  box-shadow: inset 0 0 2px rgba(255, 255, 255, 0.1);
`;

const PhoneScreen = styled.div`
  flex: 1;
  background: linear-gradient(180deg, #1c1c1e 0%, #000 100%);
  border-radius: clamp(20px, 4.5vw, 35px);
  overflow: hidden;
  position: relative;
`;

const ScreenImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
`;

const ScreenPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #2c2c2e 0%, #1c1c1e 100%);
  gap: 1rem;
`;

const PlaceholderIcon = styled.div`
  font-size: 3rem;
  opacity: 0.5;
`;

const PlaceholderText = styled.div`
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.875rem;
  font-weight: 500;
`;

const HomeIndicator = styled.div`
  position: absolute;
  bottom: clamp(6px, 1.2vw, 10px);
  left: 50%;
  transform: translateX(-50%);
  width: clamp(100px, 35%, 140px);
  height: 5px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 400px) {
    gap: 0.75rem;
  }
`;

const StoreLink = styled.a`
  text-decoration: none;
`;

const StoreButton = styled.button`
  padding: 0;
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  overflow: hidden;
  box-shadow:
    0 0 15px var(--primary-alpha-40),
    0 0 30px var(--primary-alpha-20),
    0 4px 15px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow:
      0 0 25px var(--primary-alpha-70),
      0 0 50px var(--primary-alpha-40),
      0 0 80px var(--primary-alpha-20),
      0 8px 25px rgba(0, 0, 0, 0.4);
  }

  &:hover img {
    filter: brightness(1.1);
  }

  &:active {
    transform: translateY(0) scale(1);
  }
`;

const StoreIcon = styled.img`
  height: 50px;
  width: auto;
  display: block;
  transition: filter 0.3s ease;

  @media (max-width: 400px) {
    height: 42px;
  }
`;
