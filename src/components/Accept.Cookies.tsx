import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { constants } from '../constants/contants'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const getCookie = (name: string): string | null => {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) return parts.pop()!.split(';').shift() || null
    return null
  }

  useEffect(() => {
    const accepted = getCookie('cookiesAccepted')
    if (!accepted) {
      setTimeout(() => setVisible(true), 500)
    }
  }, [])

  const handleAccept = () => {
    const expirationDays = 365
    const date = new Date()
    date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000)
    document.cookie = `cookiesAccepted=true; expires=${date.toUTCString()}; path=/; SameSite=Lax`

    setIsClosing(true)
    setTimeout(() => setVisible(false), 400)
  }

  if (!visible) return null

  return (
    <CookieWrapper>
      <CookieOverlay $isClosing={isClosing} />
      <CookieContainer $isClosing={isClosing}>
        <CookieCard>
          <CardGlow />

          <CookieHeader>
            <CookieIconWrapper>
              <CookieIcon>🍪</CookieIcon>
              <IconPulse />
            </CookieIconWrapper>
            <HeaderText>
              <CookieTitle>Experiência Personalizada</CookieTitle>
              <CookieSubtitle>
                Cookies para melhorar sua navegação
              </CookieSubtitle>
            </HeaderText>
          </CookieHeader>

          <CookieBody>
            <CookieText>
              Usamos cookies essenciais e analíticos para garantir a melhor
              experiência no site da {constants.nameEmpresa}. Seus dados estão
              seguros e protegidos conforme nossa
              <CookieLink
                href="https://privacidade.operadora.app.br/#/Zyber"
                target="_blank"
                rel="noopener noreferrer"
              >
                Política de Privacidade
              </CookieLink>
              .
            </CookieText>

            <FeaturesList>
              <Feature>
                <FeatureIcon>✓</FeatureIcon>
                <FeatureText>Navegação otimizada</FeatureText>
              </Feature>
              <Feature>
                <FeatureIcon>✓</FeatureIcon>
                <FeatureText>Conteúdo personalizado</FeatureText>
              </Feature>
              <Feature>
                <FeatureIcon>✓</FeatureIcon>
                <FeatureText>100% seguro</FeatureText>
              </Feature>
            </FeaturesList>
          </CookieBody>

          <ButtonGroup>
            <AcceptButton onClick={handleAccept}>
              <ButtonContent>
                <ButtonIcon>🎉</ButtonIcon>
                <ButtonText>Aceitar e Continuar</ButtonText>
              </ButtonContent>
              <ButtonShine />
            </AcceptButton>
          </ButtonGroup>

          <CloseButton onClick={handleAccept} aria-label="Fechar">
            ✕
          </CloseButton>
        </CookieCard>
      </CookieContainer>
    </CookieWrapper>
  )
}

/* ===== ESTILOS ===== */

const CookieWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 0 1rem 1.5rem;

  @media (max-width: 768px) {
    padding: 0 0.75rem 0.75rem;
  }
`

const CookieOverlay = styled.div<{ $isClosing: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  pointer-events: auto;
  animation: ${(props) => (props.$isClosing ? 'fadeOut' : 'fadeIn')} 0.4s
    ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`

const CookieContainer = styled.div<{ $isClosing: boolean }>`
  max-width: 650px;
  width: 100%;
  pointer-events: auto;
  position: relative;
  z-index: 1;
  animation: ${(props) => (props.$isClosing ? 'slideOut' : 'slideIn')} 0.5s
    cubic-bezier(0.34, 1.56, 0.64, 1);

  @keyframes slideIn {
    from {
      transform: translateY(100%) scale(0.9);
      opacity: 0;
    }
    to {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
    to {
      transform: translateY(100%) scale(0.9);
      opacity: 0;
    }
  }
`

const CookieCard = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #fafafa 100%);
  border-radius: 24px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(164, 25, 2, 0.2), 0 8px 24px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  border: 1px solid var(----primary-alpha-30);

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
  }
`

const CardGlow = styled.div`
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    var(--primary-alpha-30) 0%,
    rgba(164, 25, 2, 0.08) 30%,
    transparent 70%
  );
  animation: rotate 20s linear infinite;
  pointer-events: none;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const CookieHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: 480px) {
    gap: 1rem;
    margin-bottom: 1.25rem;
  }
`

const CookieIconWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
`

const CookieIcon = styled.div`
  font-size: 3.5rem;
  position: relative;
  z-index: 1;
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0%,
    100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-8px) rotate(5deg);
    }
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`

const IconPulse = styled.div`
  position: absolute;
  inset: -10px;
  background: radial-gradient(circle, var(--primary-alpha-60), transparent 70%);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;

  @keyframes pulse {
    0%,
    100% {
      transform: scale(0.9);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.8;
    }
  }
`

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

const CookieTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-secondary) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.15rem;
  }
`

const CookieSubtitle = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`

const CookieBody = styled.div`
  position: relative;
  z-index: 1;
  margin-bottom: 1.5rem;
`

const CookieText = styled.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.7;
  margin: 0 0 1.25rem 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
    line-height: 1.6;
  }
`

const CookieLink = styled.a`
  color: var(--color-primary);
  font-weight: 700;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      90deg,
      var(--color-primary),
      var(--color-secondary)
    );
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #000000ff;

    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`

const FeaturesList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--primary-alpha-20);
  padding: 0.6rem 0.9rem;
  border-radius: 12px;
  border: 1px solid var(--primary-alpha-20);
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary-alpha-15);
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.75rem;
  }
`

const FeatureIcon = styled.span`
  color: var(--color-primary);
  font-weight: bold;
  font-size: 1rem;
  flex-shrink: 0;
`

const FeatureText = styled.span`
  font-size: 0.85rem;
  color: #333;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`

const ButtonGroup = styled.div`
  position: relative;
  z-index: 1;
`

const AcceptButton = styled.button`
  width: 100%;
  background: linear-gradient(
    135deg,
    var(--color-secondary) 0%,
    var(--color-primary) 100%
  );
  color: #fff;
  font-weight: 700;
  font-size: 1.05rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(164, 25, 2, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(164, 25, 2, 0.5),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.9rem 1.75rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    padding: 0.85rem 1.5rem;
  }
`

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  position: relative;
  z-index: 1;
`

const ButtonIcon = styled.span`
  font-size: 1.25rem;
  animation: shake 2s ease-in-out infinite;

  @keyframes shake {
    0%,
    100% {
      transform: rotate(0deg);
    }
    10%,
    30% {
      transform: rotate(-10deg);
    }
    20%,
    40% {
      transform: rotate(10deg);
    }
    50% {
      transform: rotate(0deg);
    }
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`

const ButtonText = styled.span`
  letter-spacing: 0.3px;
`

const ButtonShine = styled.div`
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  transition: left 0.5s ease;

  ${AcceptButton}:hover & {
    left: 100%;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--primary-alpha-08);
  border: none;
  color: var(--color-primary);
  font-size: 1.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 2;

  &:hover {
    background: var(--primary-alpha-08);
    transform: rotate(90deg) scale(1.1);
  }

  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
    font-size: 1.1rem;
    top: 0.75rem;
    right: 0.75rem;
  }
`
