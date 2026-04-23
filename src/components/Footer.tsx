import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useAppConstants } from '../hooks/useAppConstants'

export default function Footer() {
  const { constants } = useAppConstants()
  const redesSociais = constants.redesSociais
  const whatsappLink = constants.whatsappAtendimentoLink || redesSociais?.whatsapp || ''

  // Verificar se há alguma rede social ativa
  const hasActiveSocialLinks = Boolean(
    (redesSociais?.bool_facebook && redesSociais.facebook) ||
    (redesSociais?.bool_instagram && redesSociais.instagram) ||
    (redesSociais?.bool_linkedin && redesSociais.linkedin) ||
    whatsappLink
  )

  return (
    <FooterContainer>
      <FooterContent>
        {/* COLUNA 1 */}
        <FooterColumn>
          <ColumnTitle>Institucional</ColumnTitle>
          <FooterLink href="">Sobre nós</FooterLink>
        </FooterColumn>

        {/* COLUNA 2 */}
        {(constants.linkSuporte || constants.linkPedirChip) && (
          <FooterColumn>
            <ColumnTitle>Atendimento</ColumnTitle>
            {constants.linkSuporte && (
              <FooterLink href={constants.linkSuporte} target="_blank" rel="noopener noreferrer">
                Atendimento ao cliente
              </FooterLink>
            )}
            {constants.linkPedirChip && (
              <FooterLink href={constants.linkPedirChip} target="_blank" rel="noopener noreferrer">
                Métodos de Pagamento
              </FooterLink>
            )}
          </FooterColumn>
        )}

        {/* COLUNA 3 */}
        {constants.linkPedirChip && (
          <FooterColumn>
            <ColumnTitle>Minha Conta</ColumnTitle>
            <FooterLink href={constants.linkPedirChip} target="_blank" rel="noopener noreferrer">Pedir meu chip</FooterLink>
          </FooterColumn>
        )}

        {/* COLUNA 4 */}
        <FooterColumn>
          <ColumnTitle>Legal</ColumnTitle>
          <FooterLinkInternal to="/privacidade">
            Política de Privacidade
          </FooterLinkInternal>
          <FooterLinkInternal to="/termos">
            Termo de Adesão
          </FooterLinkInternal>
        </FooterColumn>
      </FooterContent>

      {/* Redes Sociais */}
      {hasActiveSocialLinks && (
        <>
          <Divider />
          <SocialSection>
            <SocialTitle>Siga-nos nas redes sociais</SocialTitle>
            <SocialLinks>
              {redesSociais?.bool_facebook && redesSociais.facebook && (
                <SocialLink href={redesSociais.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </SocialLink>
              )}
              {redesSociais?.bool_instagram && redesSociais.instagram && (
                <SocialLink href={redesSociais.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </SocialLink>
              )}
              {redesSociais?.bool_linkedin && redesSociais.linkedin && (
                <SocialLink href={redesSociais.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </SocialLink>
              )}
              {whatsappLink && (
                <SocialLink href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </SocialLink>
              )}
            </SocialLinks>
          </SocialSection>
        </>
      )}

      <Divider />

      <FooterBottom>
        <Copyright>
          © 2025 {constants.nameEmpresa}. Todos os direitos reservados.
        </Copyright>
      </FooterBottom>
    </FooterContainer>
  )
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
    background: radial-gradient(
      circle,
      var(--primary-alpha-15) 0%,
      transparent 70%
    );
  }

  &::after {
    bottom: -10%;
    right: -5%;
    width: 350px;
    height: 350px;
    background: radial-gradient(
      circle,
      var(--secondary-blue-alpha-12) 0%,
      transparent 70%
    );
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem 1.5rem;
  }
`

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
    text-align: center;
  }
`

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

  @media (max-width: 480px) {
    align-items: center;
  }
`

const ColumnTitle = styled.h3`
  color: var(--color-primary);
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
    background: var(--gradient-primary);
    border-radius: 2px;

    @media (max-width: 480px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`

const footerLinkStyles = `
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
    color: var(--color-primary);
  }

  &:hover {
    color: var(--color-primary);
    padding-left: 20px;

    &::before {
      opacity: 1;
      left: 0;
    }

    @media (max-width: 480px) {
      padding-left: 0;

      &::before {
        opacity: 0;
      }
    }
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`

const FooterLink = styled.a`${footerLinkStyles}`

const FooterLinkInternal = styled(Link)`${footerLinkStyles}`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--primary-alpha-30),
    transparent
  );
  margin: 2.5rem 0 1.5rem;
  position: relative;
  z-index: 1;
`

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
`

const Copyright = styled.p`
  opacity: 0.85;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`

const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 0;
  position: relative;
  z-index: 1;
`

const SocialTitle = styled.h4`
  color: var(--text-secondary);
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--primary-alpha-10);
  border: 1px solid var(--primary-alpha-30);
  color: var(--color-primary);
  transition: var(--transition-fast);

  &:hover {
    background: var(--gradient-primary);
    color: var(--text-primary);
    transform: translateY(-4px);
    box-shadow: 0 8px 20px var(--primary-alpha-40);
  }

  svg {
    width: 22px;
    height: 22px;
  }

  @media (max-width: 480px) {
    width: 44px;
    height: 44px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`
