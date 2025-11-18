import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        {/* COLUNA 1 */}
        <FooterColumn>
          <ColumnTitle>Institucional</ColumnTitle>
          <FooterLink href="">Sobre nós</FooterLink>
          <FooterLink href="#">Como comprar na Zyber</FooterLink>
          <FooterLink href="#">FAQ</FooterLink>
        </FooterColumn>

        {/* COLUNA 2 */}
        <FooterColumn>
          <ColumnTitle>Atendimento</ColumnTitle>
          <FooterLink href="https://atendimento.operadora.app.br/?companyId=362">
            Atendimento ao cliente
          </FooterLink>
          <FooterLink href="#">Métodos de Pagamento</FooterLink>
          <FooterLink href="#">Frete</FooterLink>
        </FooterColumn>

        {/* COLUNA 3 */}
        <FooterColumn>
          <ColumnTitle>Minha Conta</ColumnTitle>
          <FooterLink href="#">Rastrear meu pedido</FooterLink>
          <FooterLink href="#">Pedir meu chip</FooterLink>
        </FooterColumn>

        {/* COLUNA 4 */}
        <FooterColumn>
          <ColumnTitle>Legal</ColumnTitle>
          <FooterLink href="https://privacidade.operadora.app.br/#/Zyber">
            Política de Privacidade
          </FooterLink>
          <FooterLink href="https://privacidade.operadora.app.br/#/adesao/Zyber">
            Termo de Adesão
          </FooterLink>
        </FooterColumn>
      </FooterContent>

      <Divider />

      <FooterBottom>
        <Copyright>© 2025 Zyber. Todos os direitos reservados.</Copyright>
        <SocialLinks>
          <SocialIcon href="https://wa.me/qr/5ZQKIH3R6PAUB1" aria-label="Facebook">📘</SocialIcon>
          <SocialIcon href="https://www.instagram.com/zyber_fibra/profilecard/?igsh=am80ZGF6c2prcGxq" aria-label="Instagram">📷</SocialIcon>
          <SocialIcon href="#" aria-label="LinkedIn">💼</SocialIcon>
        </SocialLinks>
      </FooterBottom>
    </FooterContainer>
  );
}

/* ===== ESTILOS ===== */

const FooterContainer = styled.footer`
  background: var(--gradient-bg-alt);
  color: var(--text-primary);
  padding: 4rem 2rem 2rem;
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    filter: var(--blur-xl);
  }

  &::before {
    top: -10%;
    left: -5%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, var(--primary-alpha-15) 0%, transparent 70%);
  }

  &::after {
    bottom: -10%;
    right: -5%;
    width: 350px;
    height: 350px;
    background: radial-gradient(circle, var(--secondary-blue-alpha-12) 0%, transparent 70%);
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem 1.5rem;
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: left;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  animation: fadeInUp 0.6s ease;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ColumnTitle = styled.h3`
  color: var(--color-yellow);
  font-size: 1.3rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.5px;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background: var(--gradient-yellow);
    border-radius: 2px;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const FooterLink = styled.a`
  color: var(--white-alpha-90);
  text-decoration: none;
  font-weight: 400;
  font-size: 0.95rem;
  transition: var(--transition-fast);
  padding: 0.3rem 0;
  position: relative;
  display: inline-block;

  &::before {
    content: '→';
    position: absolute;
    left: -20px;
    opacity: 0;
    transition: var(--transition-fast);
    color: var(--color-yellow);
  }

  &:hover {
    color: var(--color-yellow);
    padding-left: 20px;

    &::before {
      opacity: 1;
      left: 0;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--yellow-alpha-30),
    transparent
  );
  margin: 2.5rem 0 1.5rem;
  position: relative;
  z-index: 1;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 1.5rem;
  font-size: 0.9rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  opacity: 0.85;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  font-size: 1.5rem;
  transition: transform 0.3s ease, filter 0.3s ease;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transform: translateY(-3px) scale(1.1);
    filter: brightness(1.3);
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;