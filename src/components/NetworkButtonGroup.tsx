import styled from "styled-components";
import type { ApelidoRede } from "../types/company";
import type { RedeType } from "../hooks/useAppConstants";

interface NetworkButtonGroupProps {
  apelidoRede: ApelidoRede | null;
  selectedNetwork: RedeType;
  onNetworkChange: (network: RedeType) => void;
  showAllButton: boolean;
  showTimButton: boolean;
  showVivoButton: boolean;
  buttonTextColor?: string;
}

export default function NetworkButtonGroup({
  apelidoRede,
  selectedNetwork,
  onNetworkChange,
  showAllButton,
  showTimButton,
  showVivoButton,
  buttonTextColor = "var(--text-primary)",
}: NetworkButtonGroupProps) {
  const visibleButtons = [showAllButton, showTimButton, showVivoButton].filter(
    Boolean,
  ).length;

  if (visibleButtons === 0) {
    return null;
  }

  const timLabel = apelidoRede?.apelido_tim || "Cobertura: TIM";
  const vivoLabel = apelidoRede?.apelido_vivo || "Cobertura: VIVO";

  return (
    <Container>
      <p
        style={{
          fontSize: "1.2rem",
          color: "var(--text-tertiary)",
          maxWidth: "650px",
          margin: "0 auto",
          lineHeight: 1.7,
        }}
      >
        {visibleButtons > 1
          ? "Escolha a cobertura de rede que mais se adequa às suas necessidades:"
          : "Cobertura disponível para este parceiro:"}
      </p>
      <ButtonGroup>
        {showAllButton && (
          <NetworkButton
            $isActive={selectedNetwork === "AMBOS"}
            $activeTextColor={buttonTextColor}
            onClick={() => onNetworkChange("AMBOS")}
          >
            <ButtonIcon>📶</ButtonIcon>
            <ButtonText>Todas as Coberturas</ButtonText>
          </NetworkButton>
        )}

        {showTimButton && (
          <NetworkButton
            $isActive={selectedNetwork === "TIM"}
            $activeTextColor={buttonTextColor}
            onClick={() => onNetworkChange("TIM")}
          >
            <ButtonIcon>📡</ButtonIcon>
            <ButtonText>{timLabel}</ButtonText>
          </NetworkButton>
        )}

        {showVivoButton && (
          <NetworkButton
            $isActive={selectedNetwork === "VIVO"}
            $activeTextColor={buttonTextColor}
            onClick={() => onNetworkChange("VIVO")}
          >
            <ButtonIcon>📡</ButtonIcon>
            <ButtonText>{vivoLabel}</ButtonText>
          </NetworkButton>
        )}
      </ButtonGroup>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  width: 100%;
  padding: 0 1rem;
  position: relative;
  z-index: 1;
`;

const ButtonGroup = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.5rem;
  background: var(--bg-card);
  backdrop-filter: var(--blur-md);
  border-radius: var(--radius-xl);
  border: var(--border-white-subtle);
  box-shadow: var(--shadow-dark-lg);
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    width: auto;
  }
`;

const NetworkButton = styled.button<{ $isActive: boolean; $activeTextColor: string }>`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.9rem 1.5rem;
  background: ${(props) =>
    props.$isActive ? "var(--gradient-primary)" : "transparent"};
  border: ${(props) =>
    props.$isActive
      ? "1px solid var(--primary-alpha-50)"
      : "1px solid transparent"};
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  color: ${(props) =>
    props.$isActive ? props.$activeTextColor : "var(--text-primary)"};

  ${(props) =>
    props.$isActive &&
    `
    box-shadow: 0 4px 20px var(--primary-alpha-40),
                inset 0 1px 0 var(--white-alpha-20);
  `}

  &:hover {
    background: ${(props) =>
      props.$isActive ? "var(--gradient-primary)" : "var(--primary-alpha-10)"};
    border-color: ${(props) =>
      props.$isActive ? "var(--primary-alpha-50)" : "var(--primary-alpha-30)"};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    width: auto;
    justify-content: center;
  }
`;

const ButtonIcon = styled.span`
  font-size: 1.1rem;
`;

const ButtonText = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: inherit;
  letter-spacing: 0.5px;
  white-space: nowrap;
`;
