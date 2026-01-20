import styled, { keyframes } from "styled-components";

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  if (!isLoading) return null;

  return (
    <Overlay>
      <Container>
        {/* Animated background grid */}
        <GridBackground />

        {/* Floating orbs */}
        <Orb $position="top-right" />
        <Orb $position="bottom-left" $delay />

        {/* Main loader */}
        <LoaderWrapper>
          {/* Outer ring */}
          <OuterRing />

          {/* Middle ring */}
          <MiddleRing />

          {/* Inner pulse */}
          <InnerPulse />

          {/* Center icon */}
          <CenterIcon>
            <SignalBars>
              <Bar $delay={0} />
              <Bar $delay={0.1} />
              <Bar $delay={0.2} />
              <Bar $delay={0.3} />
              <Bar $delay={0.4} />
            </SignalBars>
          </CenterIcon>
        </LoaderWrapper>

        {/* Text */}
        <TextWrapper>
          <LoadingText>Carregando</LoadingText>
          <Dots>
            <Dot $delay={0} />
            <Dot $delay={0.2} />
            <Dot $delay={0.4} />
          </Dots>
        </TextWrapper>

        <SubText>Preparando sua experiência...</SubText>
      </Container>
    </Overlay>
  );
}

/* Animations */
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const rotateReverse = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const gridMove = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(60px);
  }
`;

const barPulse = keyframes`
  0%, 100% {
    transform: scaleY(0.4);
    opacity: 0.4;
  }
  50% {
    transform: scaleY(1);
    opacity: 1;
  }
`;

const dotPulse = keyframes`
  0%, 100% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
`;

/* Styled Components */
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: var(--gradient-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.3s ease-out;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 2rem;
`;

const GridBackground = styled.div`
  position: fixed;
  inset: 0;
  background-image: linear-gradient(
      var(--primary-alpha-10) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, var(--primary-alpha-10) 1px, transparent 1px);
  background-size: 60px 60px;
  opacity: 0.6;
  pointer-events: none;
  animation: ${gridMove} 20s linear infinite;
`;

const Orb = styled.div<{ $position: string; $delay?: boolean }>`
  position: fixed;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  animation: ${float} ${(props) => (props.$delay ? "10s" : "8s")} ease-in-out
    infinite;
  animation-delay: ${(props) => (props.$delay ? "-5s" : "0s")};

  ${(props) =>
    props.$position === "top-right"
      ? `
    top: -10%;
    right: -10%;
    background: radial-gradient(circle, var(--primary-alpha-20) 0%, transparent 70%);
  `
      : `
    bottom: -10%;
    left: -10%;
    background: radial-gradient(circle, var(--secondary-blue-alpha-15) 0%, transparent 70%);
  `}
`;

const LoaderWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const OuterRing = styled.div`
  position: absolute;
  inset: 0;
  border: 3px solid transparent;
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: ${rotate} 1.5s linear infinite;

  &::before {
    content: "";
    position: absolute;
    inset: -3px;
    border: 3px solid transparent;
    border-top-color: var(--primary-alpha-30);
    border-radius: 50%;
  }
`;

const MiddleRing = styled.div`
  position: absolute;
  inset: 15px;
  border: 2px dashed var(--primary-alpha-40);
  border-radius: 50%;
  animation: ${rotateReverse} 3s linear infinite;
`;

const InnerPulse = styled.div`
  position: absolute;
  inset: 30px;
  background: radial-gradient(
    circle,
    var(--primary-alpha-15) 0%,
    transparent 70%
  );
  border-radius: 50%;
  animation: ${pulse} 2s ease-in-out infinite;
`;

const CenterIcon = styled.div`
  position: relative;
  z-index: 1;
  width: 60px;
  height: 60px;
  background: var(--bg-card-active);
  border: 2px solid var(--primary-alpha-40);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 30px var(--primary-alpha-30),
    inset 0 0 20px var(--primary-alpha-10);
`;

const SignalBars = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 3px;
  height: 24px;
`;

const Bar = styled.div<{ $delay: number }>`
  width: 4px;
  height: 100%;
  background: var(--color-primary);
  border-radius: 2px;
  transform-origin: bottom;
  animation: ${barPulse} 1s ease-in-out infinite;
  animation-delay: ${(props) => props.$delay}s;

  &:nth-child(1) {
    height: 40%;
  }
  &:nth-child(2) {
    height: 55%;
  }
  &:nth-child(3) {
    height: 70%;
  }
  &:nth-child(4) {
    height: 85%;
  }
  &:nth-child(5) {
    height: 100%;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const LoadingText = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  background: var(--gradient-text-white);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 1px;
`;

const Dots = styled.div`
  display: flex;
  gap: 4px;
  padding-top: 8px;
`;

const Dot = styled.div<{ $delay: number }>`
  width: 6px;
  height: 6px;
  background: var(--color-primary);
  border-radius: 50%;
  animation: ${dotPulse} 1.2s ease-in-out infinite;
  animation-delay: ${(props) => props.$delay}s;
`;

const SubText = styled.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin: 0;
  letter-spacing: 0.5px;
`;
