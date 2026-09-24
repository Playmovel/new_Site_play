import styled from "styled-components";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { useAppConstants } from "../hooks/useAppConstants";
import {
  formatCidade,
  formatRua,
  mapsDirectionsUrl,
  mapsEmbedUrl,
  wazeUrl,
} from "../utils/mapsHelpers";

// Endereco da loja fisica + mapa. So aparece quando o parceiro cadastrou o
// endereco no SGM e ligou "Exibir no site" (constants.enderecoLoja != null).
export default function StoreLocation() {
  const { constants, buttonTextStyle } = useAppConstants();
  const endereco = constants.enderecoLoja;

  if (!endereco) return null;

  return (
    <Section id="onde-estamos">
      <Container>
        <InfoColumn
          as={motion.div}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Subtitle>📍 Onde estamos</Subtitle>
          <Title>Venha nos visitar</Title>
          <Paragraph>
            Compre seu chip {constants.nameEmpresa} pessoalmente e tire suas
            dúvidas com a nossa equipe.
          </Paragraph>

          <AddressCard>
            <IconBox>
              <MapPin size={22} />
            </IconBox>
            <div>
              <AddressLine>{formatRua(endereco)}</AddressLine>
              <AddressSub>{formatCidade(endereco)}</AddressSub>
            </div>
          </AddressCard>

          <Actions>
            <PrimaryAction
              href={mapsDirectionsUrl(endereco)}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: buttonTextStyle.color }}
            >
              <Navigation size={18} />
              Como chegar
            </PrimaryAction>
            <SecondaryAction
              href={wazeUrl(endereco)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir no Waze
            </SecondaryAction>
          </Actions>
        </InfoColumn>

        <MapColumn
          as={motion.div}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <MapFrame
            title={`Localização da loja ${constants.nameEmpresa}`}
            src={mapsEmbedUrl(endereco)}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </MapColumn>
      </Container>
    </Section>
  );
}

/* ----------------------------- STYLED COMPONENTS ----------------------------- */

const Section = styled.section`
  background: var(--gradient-bg);
  padding: 6rem 2rem;
  color: var(--text-primary);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -10%;
    right: -5%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, var(--primary-alpha-15), transparent 70%);
    filter: var(--blur-xl);
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    gap: 2.5rem;
  }
`;

const InfoColumn = styled.div`
  flex: 1;
  min-width: 300px;
`;

const Subtitle = styled.h4`
  color: var(--color-primary);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1.2;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.3rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-light-primary);
  max-width: 520px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const AddressCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius-lg);
  background: var(--bg-card);
  border: var(--border-primary);
  box-shadow: var(--shadow-md);
  max-width: 520px;
`;

const IconBox = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  background: var(--primary-alpha-15);
  color: var(--color-primary);
`;

const AddressLine = styled.p`
  margin: 0 0 0.25rem;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-primary);
`;

const AddressSub = styled.p`
  margin: 0;
  font-size: 0.95rem;
  color: var(--text-secondary);
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.75rem;
`;

const actionBase = `
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.6rem;
  border-radius: var(--radius-full);
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition-fast);

  &:hover {
    transform: translateY(-3px);
  }
`;

const PrimaryAction = styled.a`
  ${actionBase}
  background: var(--gradient-primary);
  box-shadow: 0 8px 20px var(--primary-alpha-30);

  &:hover {
    box-shadow: 0 12px 28px var(--primary-alpha-40);
  }
`;

const SecondaryAction = styled.a`
  ${actionBase}
  background: transparent;
  color: var(--color-primary);
  border: var(--border-primary-strong);

  &:hover {
    background: var(--primary-alpha-10);
  }
`;

const MapColumn = styled.div`
  flex: 1;
  min-width: 300px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: var(--border-primary);
  box-shadow: var(--shadow-xl);
`;

const MapFrame = styled.iframe`
  display: block;
  width: 100%;
  height: 400px;
  border: 0;

  @media (max-width: 768px) {
    height: 300px;
  }
`;
