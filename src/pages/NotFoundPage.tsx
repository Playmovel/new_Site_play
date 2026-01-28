import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAppConstants } from "../hooks/useAppConstants";

export default function NotFoundPage() {
  const { constants } = useAppConstants();

  return (
    <PageContainer>
      {/* Background effects */}
      <BackgroundOrb1 />
      <BackgroundOrb2 />
      <GridBackground />

      <Content>
        {/* Logo */}
        <LogoContainer to="/">
          {constants.linkIcon ? (
            <Logo src={constants.linkIcon} alt={constants.nameEmpresa} />
          ) : (
            <LogoText>{constants.nameEmpresa}</LogoText>
          )}
        </LogoContainer>

        {/* 404 Display */}
        <ErrorCode>404</ErrorCode>
        <ErrorTitle>Página não encontrada</ErrorTitle>
        <ErrorDescription>
          Ops! A página que você está procurando não existe ou foi movida.
        </ErrorDescription>

        {/* Actions */}
        <ButtonsContainer>
          <PrimaryButton to="/">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Voltar ao início
          </PrimaryButton>

          {constants.linkChat && (
            <SecondaryButton href={constants.linkChat} target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.4183 16.9706 20 12 20C10.4607 20 9.01172 19.6565 7.74467 19.0511L3 20L4.39499 16.28C3.51156 15.0423 3 13.5743 3 12C3 7.58172 7.02944 4 12 4C16.9706 4 21 7.58172 21 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Falar com suporte
            </SecondaryButton>
          )}
        </ButtonsContainer>

        {/* Decorative elements */}
        <DecorationContainer>
          <DecorationIcon>
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </DecorationIcon>
        </DecorationContainer>
      </Content>

      {/* Footer */}
      <Footer>
        <FooterText>
          © {new Date().getFullYear()} {constants.nameEmpresa}. Todos os direitos reservados.
        </FooterText>
      </Footer>
    </PageContainer>
  );
}

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--gradient-bg);
  position: relative;
  overflow: hidden;
  padding: 2rem;
`;

const GridBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
      var(--primary-alpha-10) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, var(--primary-alpha-10) 1px, transparent 1px);
  background-size: 60px 60px;
  opacity: 0.5;
  pointer-events: none;
`;

const BackgroundOrb1 = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    var(--primary-alpha-20) 0%,
    transparent 70%
  );
  border-radius: 50%;
  filter: blur(60px);
  animation: float 8s ease-in-out infinite;
  pointer-events: none;

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-30px);
    }
  }
`;

const BackgroundOrb2 = styled.div`
  position: absolute;
  bottom: 10%;
  right: 10%;
  width: 350px;
  height: 350px;
  background: radial-gradient(
    circle,
    rgba(100, 100, 255, 0.15) 0%,
    transparent 70%
  );
  border-radius: 50%;
  filter: blur(60px);
  animation: float 10s ease-in-out infinite reverse;
  pointer-events: none;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 500px;
`;

const LogoContainer = styled(Link)`
  margin-bottom: 2rem;
  text-decoration: none;
`;

const Logo = styled.img`
  height: 60px;
  object-fit: contain;
`;

const LogoText = styled.span`
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--color-primary);
`;

const ErrorCode = styled.h1`
  font-size: 8rem;
  font-weight: 900;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 1rem;
  text-shadow: 0 0 60px var(--primary-alpha-40);

  @media (max-width: 480px) {
    font-size: 6rem;
  }
`;

const ErrorTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const ErrorDescription = styled.p`
  font-size: 1.1rem;
  color: var(--text-tertiary);
  margin-bottom: 2.5rem;
  line-height: 1.6;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const PrimaryButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: var(--gradient-primary);
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  border-radius: var(--radius-md);
  border: none;
  cursor: pointer;
  transition: var(--transition-fast);
  box-shadow: var(--shadow-lg), 0 0 30px var(--primary-alpha-30);

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-xl), 0 0 40px var(--primary-alpha-50);
  }
`;

const SecondaryButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: var(--white-alpha-05);
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  border-radius: var(--radius-md);
  border: var(--border-white-subtle);
  cursor: pointer;
  transition: var(--transition-fast);
  backdrop-filter: var(--blur-sm);

  &:hover {
    background: var(--primary-alpha-15);
    color: var(--color-primary);
    border-color: var(--primary-alpha-30);
    transform: translateY(-3px);
  }
`;

const DecorationContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  opacity: 0.1;
  pointer-events: none;
`;

const DecorationIcon = styled.div`
  color: var(--color-primary);
  animation: pulse 3s ease-in-out infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 0.1;
      transform: scale(1);
    }
    50% {
      opacity: 0.2;
      transform: scale(1.1);
    }
  }
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
  text-align: center;
`;

const FooterText = styled.p`
  color: var(--text-tertiary);
  font-size: 0.85rem;
`;
