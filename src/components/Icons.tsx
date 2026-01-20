import styled from 'styled-components'
import { motion } from 'framer-motion'

import { useAppConstants } from '../hooks/useAppConstants'

export default function SobreEmpresa() {
  const { constants } = useAppConstants()
  const features = [
    {
      id: 1,
      titulo: 'Internet de Alta Performance',
      descricao:
        'Tenha estabilidade e velocidade real para aproveitar cada segundo online. Trabalhe, estude e se divirta sem interrupções.',
      icon: '⚡',
    },
    {
      id: 2,
      titulo: 'Atendimento Humano 24h',
      descricao:
        'Esqueça os robôs. Nossa equipe está sempre pronta para ajudar você de verdade, a qualquer hora, todos os dias.',
      icon: '💬',
    },
    {
      id: 3,
      titulo: 'Planos que Cabem no Seu Bolso',
      descricao:
        'Tenha qualidade premium com o melhor custo-benefício do mercado. Porque conexão boa não precisa ser cara.',
      icon: '💎',
    },
  ]

  // SVG Icons for cube faces
  const WifiIcon = () => (
    <svg
      width="180"
      height="180"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 18C10.9 18 10 18.9 10 20C10 21.1 10.9 22 12 22C13.1 22 14 21.1 14 20C14 18.9 13.1 18 12 18ZM16.23 14.77C15.05 13.59 13.57 13 12 13C10.43 13 8.95 13.59 7.77 14.77L6.36 13.36C7.92 11.8 9.96 11 12 11C14.04 11 16.08 11.8 17.64 13.36L16.23 14.77ZM19.07 11.93C17.14 10 14.61 9 12 9C9.39 9 6.86 10 4.93 11.93L3.52 10.52C5.81 8.23 8.88 7 12 7C15.12 7 18.19 8.23 20.48 10.52L19.07 11.93ZM21.91 9.09C19.25 6.43 15.69 5 12 5C8.31 5 4.75 6.43 2.09 9.09L0.68 7.68C3.68 4.68 7.75 3 12 3C16.25 3 20.32 4.68 23.32 7.68L21.91 9.09Z"
        fill="url(#gradient1)"
      />
      <defs>
        <linearGradient id="gradient1" x1="0" y1="0" x2="24" y2="24">
          <stop offset="0%" stopColor="#FF3366" />
          <stop offset="100%" stopColor="#FF9933" />
        </linearGradient>
      </defs>
    </svg>
  )

  const SignalIcon = () => (
    <svg
      width="180"
      height="180"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 22H4V18H2V22ZM6 22H8V14H6V22ZM10 22H12V10H10V22ZM14 22H16V6H14V22ZM18 22H20V2H18V22Z"
        fill="url(#gradient2)"
      />
      <defs>
        <linearGradient id="gradient2" x1="0" y1="0" x2="24" y2="24">
          <stop offset="0%" stopColor="#3366FF" />
          <stop offset="100%" stopColor="#33CCFF" />
        </linearGradient>
      </defs>
    </svg>
  )

  const NetworkIcon = () => (
    <svg
      width="180"
      height="180"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z"
        fill="url(#gradient3)"
      />
      <defs>
        <linearGradient id="gradient3" x1="0" y1="0" x2="24" y2="24">
          <stop offset="0%" stopColor="#FF6633" />
          <stop offset="100%" stopColor="#FFB733" />
        </linearGradient>
      </defs>
    </svg>
  )

  return (
    <Section id="sobre">
      <Container>
        {/* Animated Grid Background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
            linear-gradient(var(--primary-alpha-10) 1.5px, transparent 1.5px),
            linear-gradient(90deg, var(--primary-alpha-10) 1.5px, transparent 1.5px)
          `,
            backgroundSize: '80px 80px',
            opacity: 0.4,
            pointerEvents: 'none',
            animation: 'gridMove 25s linear infinite',
            zIndex: 0,
          }}
        />

        {/* Floating Particles */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '15%',
            width: '300px',
            height: '300px',
            background:
              'radial-gradient(circle, var(--primary-alpha-20) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'var(--blur-xl)',
            animation: 'float 12s ease-in-out infinite',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'absolute',
            bottom: '25%',
            right: '20%',
            width: '250px',
            height: '250px',
            background:
              'radial-gradient(circle, var(--secondary-blue-alpha-15) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'var(--blur-xl)',
            animation: 'float 15s ease-in-out infinite reverse',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            height: '400px',
            background:
              'radial-gradient(circle, var(--yellow-alpha-15) 0%, transparent 80%)',
            borderRadius: '50%',
            filter: 'var(--blur-xl)',
            animation: 'pulse 8s ease-in-out infinite',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />

        {/* Diagonal Lines */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            right: '10%',
            width: '200px',
            height: '2px',
            background:
              'linear-gradient(90deg, transparent, var(--primary-alpha-30), transparent)',
            transform: 'rotate(45deg)',
            animation: 'slideRight 6s ease-in-out infinite',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'absolute',
            bottom: '15%',
            left: '8%',
            width: '180px',
            height: '2px',
            background:
              'linear-gradient(90deg, transparent, var(--yellow-alpha-30), transparent)',
            transform: 'rotate(-45deg)',
            animation: 'slideLeft 7s ease-in-out infinite',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />

        <TextContainer>
          <SectionTitle>
            Por que escolher a {constants.nameEmpresa}?
          </SectionTitle>
          <Subtitle>
            A {constants.nameEmpresa} vai além de oferecer internet — nós
            conectamos pessoas, sonhos e oportunidades.
          </Subtitle>
        </TextContainer>

        <ContentWrapper>
          {/* Cards de Informações - Lado Esquerdo */}
          <InfoSection>
            {features.map((feature, index) => (
              <InfoCard
                key={feature.id}
                as={motion.div}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ x: -10, scale: 1.02 }}
              >
                <CardIcon>{feature.icon}</CardIcon>
                <CardContent>
                  <CardTitle>{feature.titulo}</CardTitle>
                  <CardDescription>{feature.descricao}</CardDescription>
                </CardContent>
              </InfoCard>
            ))}
          </InfoSection>

          {/* Cubo 3D - Lado Direito */}
          <CubeSection>
            <CubeContainer>
              <CubeScene>
                <Cube
                  as={motion.div}
                  animate={{
                    rotateX: 360,
                    rotateY: 360,
                    rotateZ: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  {/* Face Frontal */}
                  <CubeFace position="front">
                    <FaceContent>
                      <WifiIcon />
                    </FaceContent>
                  </CubeFace>

                  {/* Face Traseira */}
                  <CubeFace position="back">
                    <FaceContent>
                      <SignalIcon />
                    </FaceContent>
                  </CubeFace>

                  {/* Face Direita */}
                  <CubeFace position="right">
                    <FaceContent>
                      <NetworkIcon />
                    </FaceContent>
                  </CubeFace>

                  {/* Face Esquerda */}
                  <CubeFace position="left">
                    <FaceContent>
                      <WifiIcon />
                    </FaceContent>
                  </CubeFace>

                  {/* Face Superior */}
                  <CubeFace position="top">
                    <FaceContent>
                      <SignalIcon />
                    </FaceContent>
                  </CubeFace>

                  {/* Face Inferior */}
                  <CubeFace position="bottom">
                    <FaceContent>
                      <NetworkIcon />
                    </FaceContent>
                  </CubeFace>
                </Cube>
              </CubeScene>
            </CubeContainer>
          </CubeSection>
        </ContentWrapper>
      </Container>
    </Section>
  )
}

/* ----------------------------- STYLED COMPONENTS ----------------------------- */

const Section = styled.section`
  width: 100%;
  padding: 6rem 1.5rem;
  background: var(--gradient-bg-alt);
  color: var(--text-primary);
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  min-height: 100vh;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    background: radial-gradient(
      circle,
      var(--primary-alpha-15),
      transparent 70%
    );
    filter: var(--blur-xl);
    z-index: 0;
    animation: pulseGlow 8s ease-in-out infinite;
  }

  &::before {
    top: -10%;
    right: -5%;
  }

  &::after {
    bottom: -10%;
    left: -5%;
    background: radial-gradient(
      circle,
      var(--secondary-blue-alpha-12),
      transparent 70%
    );
    animation-delay: 4s;
  }

  @keyframes pulseGlow {
    0%,
    100% {
      opacity: 0.6;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.1);
    }
  }

  @keyframes gridMove {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(80px);
    }
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-30px);
    }
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 0.3;
      transform: translate(-50%, -50%) scale(1);
    }
    50% {
      opacity: 0.6;
      transform: translate(-50%, -50%) scale(1.15);
    }
  }

  @keyframes slideRight {
    0%,
    100% {
      opacity: 0;
      transform: rotate(45deg) translateX(-100px);
    }
    50% {
      opacity: 1;
      transform: rotate(45deg) translateX(100px);
    }
  }

  @keyframes slideLeft {
    0%,
    100% {
      opacity: 0;
      transform: rotate(-45deg) translateX(100px);
    }
    50% {
      opacity: 1;
      transform: rotate(-45deg) translateX(-100px);
    }
  }
`

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`

const TextContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
`

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: var(--gradient-primary-horizontal);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: titleGlow 3s ease-in-out infinite;

  @keyframes titleGlow {
    0%,
    100% {
      filter: drop-shadow(0 0 10px var(--primary-alpha-20));
    }
    50% {
      filter: drop-shadow(0 0 20px var(--primary-alpha-30));
    }
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-light-blue);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const ContentWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`

const CubeSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const CubeContainer = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  perspective: 1600px;
  cursor: pointer;

  @media (max-width: 1024px) {
    height: 500px;
  }

  @media (max-width: 640px) {
    height: 400px;
    perspective: 1000px;
  }
`

const CubeScene = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
`

const Cube = styled.div`
  width: 400px;
  height: 400px;
  position: relative;
  transform-style: preserve-3d;

  @media (max-width: 1024px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 640px) {
    width: 280px;
    height: 280px;
  }
`

interface CubeFaceProps {
  position: 'front' | 'back' | 'right' | 'left' | 'top' | 'bottom'
}

const CubeFace = styled.div<CubeFaceProps>`
  position: absolute;
  width: 400px;
  height: 400px;
  background: linear-gradient(
    135deg,
    var(--white-alpha-12) 0%,
    var(--white-alpha-06) 100%
  );
  border: 2px solid var(--white-alpha-25);
  border-radius: var(--radius-lg);
  backdrop-filter: var(--blur-md);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3), 0 0 40px var(--primary-alpha-10),
    inset 0 0 80px var(--white-alpha-08);
  display: flex;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;

  ${(props) => {
    const size = 200
    switch (props.position) {
      case 'front':
        return `transform: translateZ(${size}px);`
      case 'back':
        return `transform: rotateY(180deg) translateZ(${size}px);`
      case 'right':
        return `transform: rotateY(90deg) translateZ(${size}px);`
      case 'left':
        return `transform: rotateY(-90deg) translateZ(${size}px);`
      case 'top':
        return `transform: rotateX(90deg) translateZ(${size}px);`
      case 'bottom':
        return `transform: rotateX(-90deg) translateZ(${size}px);`
      default:
        return ''
    }
  }}

  svg {
    filter: drop-shadow(0 0 20px var(--primary-alpha-20));
    animation: floatSVG 4s ease-in-out infinite;
  }

  @keyframes floatSVG {
    0%,
    100% {
      transform: translateY(0px) scale(1);
    }
    50% {
      transform: translateY(-10px) scale(1.05);
    }
  }

  @media (max-width: 1024px) {
    width: 350px;
    height: 350px;

    ${(props) => {
      const size = 175
      switch (props.position) {
        case 'front':
          return `transform: translateZ(${size}px);`
        case 'back':
          return `transform: rotateY(180deg) translateZ(${size}px);`
        case 'right':
          return `transform: rotateY(90deg) translateZ(${size}px);`
        case 'left':
          return `transform: rotateY(-90deg) translateZ(${size}px);`
        case 'top':
          return `transform: rotateX(90deg) translateZ(${size}px);`
        case 'bottom':
          return `transform: rotateX(-90deg) translateZ(${size}px);`
        default:
          return ''
      }
    }}

    svg {
      width: 150px;
      height: 150px;
    }
  }

  @media (max-width: 640px) {
    width: 280px;
    height: 280px;

    ${(props) => {
      const size = 140
      switch (props.position) {
        case 'front':
          return `transform: translateZ(${size}px);`
        case 'back':
          return `transform: rotateY(180deg) translateZ(${size}px);`
        case 'right':
          return `transform: rotateY(90deg) translateZ(${size}px);`
        case 'left':
          return `transform: rotateY(-90deg) translateZ(${size}px);`
        case 'top':
          return `transform: rotateX(90deg) translateZ(${size}px);`
        case 'bottom':
          return `transform: rotateX(-90deg) translateZ(${size}px);`
        default:
          return ''
      }
    }}

    svg {
      width: 120px;
      height: 120px;
    }
  }
`

const FaceContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

// interface HoverHintProps {
//   isPaused: boolean
// }

// const HoverHint = styled.div<HoverHintProps>`
//   position: absolute;
//   bottom: 1rem;
//   padding: 0.6rem 1.2rem;
//   background: ${(props) =>
//     props.isPaused ? 'var(--yellow-alpha-20)' : 'var(--white-alpha-10)'};
//   border: 2px solid
//     ${(props) =>
//       props.isPaused ? 'var(--color-yellow)' : 'var(--white-alpha-20)'};
//   border-radius: var(--radius-full);
//   color: ${(props) =>
//     props.isPaused ? 'var(--color-yellow)' : 'var(--text-primary)'};
//   font-size: 0.85rem;
//   font-weight: 600;
//   backdrop-filter: var(--blur-sm);
//   transition: all 0.3s ease;
//   z-index: 10;
//   box-shadow: ${(props) =>
//     props.isPaused
//       ? '0 0 20px var(--yellow-alpha-30)'
//       : '0 4px 15px rgba(0, 0, 0, 0.2)'};

//   @media (max-width: 640px) {
//     font-size: 0.75rem;
//     padding: 0.5rem 1rem;
//   }
// `

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`

const InfoCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 2rem;
  background: var(--white-alpha-08);
  border: var(--border-white-subtle);
  border-radius: var(--radius-lg);
  backdrop-filter: var(--blur-md);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.4s cubic-bezier(0.43, 0.13, 0.23, 0.96);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--gradient-primary);
    transform: scaleY(0);
    transition: transform 0.4s ease;
  }

  &:hover {
    background: var(--white-alpha-12);
    border-color: var(--primary-alpha-30);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3), 0 0 30px var(--primary-alpha-15);

    &::before {
      transform: scaleY(1);
    }
  }

  @media (max-width: 640px) {
    padding: 1.5rem;
    gap: 1rem;
  }
`

const CardIcon = styled.div`
  font-size: 3rem;
  min-width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 0 15px var(--primary-alpha-20));
  animation: pulse 3s ease-in-out infinite;

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }

  @media (max-width: 640px) {
    font-size: 2.5rem;
    min-width: 50px;
  }
`

const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary-light);
  margin: 0;
  line-height: 1.3;

  @media (max-width: 640px) {
    font-size: 1.2rem;
  }
`

const CardDescription = styled.p`
  font-size: 1rem;
  color: var(--text-light-blue);
  line-height: 1.7;
  margin: 0;

  @media (max-width: 640px) {
    font-size: 0.9rem;
  }
`
