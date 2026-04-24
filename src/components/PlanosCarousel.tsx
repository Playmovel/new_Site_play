import { useState, useEffect, useMemo } from "react";
import { MdAllInclusive, MdCall } from "react-icons/md";
import { useSwipe } from "../hooks/useSwipe";
import useWindowSize from "../hooks/useWindowSize";
import { useAppConstants, type RedeType } from "../hooks/useAppConstants";
import { usePlanos } from "../hooks/usePlanos";
import type { PlanoAPI } from "../services/planService";
import NetworkButtonGroup from "./NetworkButtonGroup";

interface CardProps {
  plan: PlanoAPI | null;
  index: number;
  active: number;
  isTransitioning: boolean;
  setIsTransitioning: (value: boolean) => void;
  setActive: (index: number) => void;
  isMobile: boolean;
  cardSpacing: number;
  cardWidth: number;
  cardPadding: string;
  cardMinHeight: string;
  resLength: number;
}

function hasUnlimitedMinutes(plan: PlanoAPI | null): boolean {
  const normalizedMin = plan?.min?.trim().toLowerCase() ?? "";
  const normalizedDescription = plan?.description?.toLowerCase() ?? "";
  const normalizedInfinitiVoiceDescription = plan?.descricao_infiniti
    ?.split("|")[0]
    ?.replace(/\s+/g, "")
    .toLowerCase() ?? "";

  return (
    normalizedMin === "999" ||
    normalizedMin === "ilimitado" ||
    normalizedDescription.includes("ilimitado") ||
    normalizedInfinitiVoiceDescription === "playvoz1000min"
  );
}

const Card = ({
  plan,
  index,
  active,
  isTransitioning,
  setIsTransitioning,
  setActive,
  isMobile,
  cardSpacing,
  cardWidth,
  cardPadding,
  cardMinHeight,
  resLength,
}: CardProps) => {
  const isTurbo = plan?.description.includes("TURBO");
  const isActive = index === active;
  const planHasUnlimitedMinutes = hasUnlimitedMinutes(plan);

  // Calcular offset normalizado
  const offset = (index - active + resLength) % resLength;
  const normalizedOffset = offset > resLength / 2 ? offset - resLength : offset;

  // Calcular valores de transformação - Slide horizontal com perspectiva 3D
  const translateX = normalizedOffset * cardSpacing;
  const translateY = isActive ? 0 : Math.abs(normalizedOffset) * 15;
  const translateZ = isActive ? 20 : -Math.abs(normalizedOffset) * 10;
  const scale = isActive
    ? 1.02
    : Math.max(0.7, 1 - Math.abs(normalizedOffset) * 0.15);
  const rotateY = normalizedOffset * (isMobile ? 12 : 15);
  const rotateX = isActive ? 0 : Math.abs(normalizedOffset) * 2;
  const rotateZ = isActive ? 0 : normalizedOffset * 1.5;
  const blur = isActive ? 0 : Math.abs(normalizedOffset) * 0.6;
  const brightness = isActive
    ? 1
    : Math.max(0.6, 1 - Math.abs(normalizedOffset) * 0.15);
  const opacity =
    Math.abs(normalizedOffset) > 3
      ? 0
      : Math.max(0.2, 1 - Math.abs(normalizedOffset) * 0.25);

  return (
    <div
      onMouseEnter={() => !isActive && !isTransitioning}
      onClick={(e) => {
        e.stopPropagation();
        if (normalizedOffset !== 0 && !isTransitioning) {
          setIsTransitioning(true);
          setActive(index);

          setTimeout(() => {
            setIsTransitioning(false);
          }, 600);
        }
      }}
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: `
          translate(-50%, -50%)
          translateX(${translateX}px)
          translateY(${translateY}px)
          translateZ(${translateZ}px)
          scale(${scale})
          rotateY(${rotateY}deg)
          rotateX(${rotateX}deg)
          rotateZ(${rotateZ}deg)
        `,
        filter: `blur(${blur}px) brightness(${brightness})`,
        opacity: opacity,
        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        willChange: "transform, opacity, filter",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        textAlign: "center",
        background: isActive ? "var(--bg-card-active)" : "var(--bg-card)",
        backdropFilter: isActive ? "var(--blur-md)" : "var(--blur-sm)",
        padding: cardPadding,
        borderRadius: isMobile ? "var(--radius-xl)" : "var(--radius-2xl)",
        width: `${cardWidth}px`,
        minHeight: cardMinHeight,
        border: isActive
          ? "var(--border-primary-strong)"
          : "var(--border-white-subtle)",
        boxShadow: isActive
          ? "var(--shadow-2xl), var(--shadow-inset)"
          : "var(--shadow-dark-md)",
        transformStyle: "preserve-3d",
        cursor: isActive ? "default" : "pointer",
        zIndex: isActive ? 100 : 100 - Math.abs(normalizedOffset),
        overflow: "hidden",
        pointerEvents: Math.abs(normalizedOffset) > 3 ? "none" : "auto",
      }}
    >
      {/* Animated gradient background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 30% 50%, var(--primary-alpha-15) 0%, transparent 70%)",
          opacity: isActive ? 1 : 0,
          transition: "var(--transition-slow)",
          pointerEvents: "none",
          animation: isActive ? "pulseGlow 3s ease-in-out infinite" : "none",
        }}
      />

      {/* Shimmer effect on active card */}
      <div
        style={{
          position: "absolute",
          top: "-100%",
          left: "-100%",
          right: "-100%",
          bottom: "-100%",
          background:
            "linear-gradient(45deg, transparent 30%, var(--white-alpha-08) 50%, transparent 70%)",
          animation: isActive ? "shimmer 4s ease-in-out infinite" : "none",
          opacity: isActive ? 1 : 0,
          transition: "var(--transition-slow)",
          pointerEvents: "none",
        }}
      />

      {/* Glow ring on active card */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          borderRadius: "var(--radius-2xl)",
          opacity: isActive ? 1 : 0,
          transition: "opacity var(--transition-slow)",
          pointerEvents: "none",
          boxShadow: isActive
            ? "0 0 40px var(--primary-alpha-40), inset 0 0 40px var(--primary-alpha-10)"
            : "none",
        }}
      />

      {/* Badge Turbo */}
      {isTurbo && (
        <div
          style={{
            position: "absolute",
            top: "24px",
            right: "-35px",
            background: "var(--color-turbo-badge)",
            color: "var(--text-primary)",
            padding: "0.5rem 3.5rem",
            fontSize: "0.7rem",
            fontWeight: "800",
            letterSpacing: "2px",
            transform: "rotate(45deg)",
            boxShadow: "0 4px 15px var(--primary-alpha-60)",
            textTransform: "uppercase",
          }}
        >
          ⚡ Turbo
        </div>
      )}

      {/* Hexagon decorations */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          width: "30px",
          height: "30px",
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          background: "var(--primary-alpha-20)",
          border: "1px solid var(--primary-alpha-40)",
          opacity: isActive ? 1 : 0.3,
          transition: "var(--transition-fast)",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
        {/* Plan category badge */}
        <div
          style={{
            display: "inline-block",
            padding: "0.4rem 1rem",
            background: isTurbo
              ? "linear-gradient(135deg, var(--primary-alpha-20) 0%, var(--primary-alpha-10) 100%)"
              : "rgba(255, 255, 255, 0.1)",
            border: `1px solid ${
              isTurbo ? "var(--primary-alpha-40)" : "rgba(255, 255, 255, 0.3)"
            }`,
            borderRadius: "var(--radius-lg)",
            fontSize: "0.7rem",
            color: isTurbo ? "var(--color-primary)" : "var(--text-primary)",
            fontWeight: "700",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          {isTurbo ? "🔥 Turbo" : "⚡ Start"}
        </div>

        {/* Título do plano */}
        <h3
          style={{
            fontSize: isMobile ? "0.75rem" : "0.85rem",
            fontWeight: "500",
            color: "var(--text-tertiary)",
            marginBottom: isMobile ? "1.5rem" : "2rem",
            lineHeight: 1.5,
            minHeight: isMobile ? "35px" : "40px",
            fontFamily: "monospace",
            letterSpacing: "0.5px",
          }}
        >
          {plan?.description}
        </h3>

        {/* Features com design tech */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            marginBottom: "2rem",
          }}
        >
          {/* Internet */}
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "1rem",
              background: "var(--bg-card-active)",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--primary-alpha-20)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: "4px",
                background:
                  "linear-gradient(180deg, var(--color-primary) 0%, transparent 100%)",
              }}
            />
            <div
              style={{
                width: isMobile ? "36px" : "40px",
                height: isMobile ? "36px" : "40px",
                borderRadius: "var(--radius-sm)",
                background: "var(--primary-alpha-15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: isMobile ? "1.1rem" : "1.3rem",
              }}
            >
              🌐
            </div>
            <div style={{ textAlign: "left", flex: 1 }}>
              <div
                style={{
                  fontSize: isMobile ? "1.6rem" : "1.8rem",
                  fontWeight: "800",
                  color: "var(--color-primary)",
                  lineHeight: 1,
                }}
              >
                {plan?.gigas}
                <span
                  style={{
                    fontSize: isMobile ? "0.9rem" : "1rem",
                    fontWeight: "600",
                    marginLeft: "4px",
                  }}
                >
                  GB
                </span>
              </div>
              <div
                style={{
                  fontSize: isMobile ? "0.65rem" : "0.7rem",
                  color: "var(--text-dark)",
                  marginTop: "2px",
                  letterSpacing: "1px",
                }}
              >
                INTERNET 5G
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "0.9rem 1rem",
              background:
                "linear-gradient(135deg, rgba(37, 211, 102, 0.08) 0%, rgba(37, 211, 102, 0.02) 100%)",
              borderRadius: "var(--radius-md)",
              border: "1px solid rgba(37, 211, 102, 0.2)",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "var(--radius-sm)",
                background: "rgba(37, 211, 102, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.2rem",
              }}
            >
              💬
            </div>
            <div style={{ textAlign: "left", flex: 1 }}>
              <div
                style={{
                  fontSize: "0.85rem",
                  fontWeight: "700",
                  color: "var(--color-whatsapp)",
                }}
              >
                WhatsApp Ilimitado
              </div>
              <div
                style={{
                  fontSize: "0.65rem",
                  color: "var(--text-dark)",
                  marginTop: "2px",
                }}
              >
                Sem descontar da franquia
              </div>
            </div>
          </div>

          {/* Ligações */}
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "0.9rem 1rem",
              background: "rgba(255, 255, 255, 0.02)",
              borderRadius: "var(--radius-md)",
              border: "var(--border-white-subtle)",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "var(--radius-sm)",
                background: planHasUnlimitedMinutes
                  ? "var(--primary-alpha-15)"
                  : "rgba(100, 100, 255, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 0,
                lineHeight: 0,
                color: planHasUnlimitedMinutes
                  ? "var(--color-primary)"
                  : "#d0d0d0",
              }}
            >
              {planHasUnlimitedMinutes ? "∞" : "📞"}
            </div>
            <div
              style={{
                position: "absolute",
                left: "1rem",
                top: "50%",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: planHasUnlimitedMinutes
                  ? "var(--color-primary)"
                  : "#d0d0d0",
                transform: "translateY(-50%)",
                pointerEvents: "none",
              }}
            >
              {planHasUnlimitedMinutes ? (
                <MdAllInclusive size={24} />
              ) : (
                <MdCall size={20} />
              )}
            </div>
            <div style={{ textAlign: "left", flex: 1 }}>
              <div
                style={{
                  fontSize: "0.85rem",
                  fontWeight: "700",
                  color: "#d0d0d0",
                }}
              >
                {planHasUnlimitedMinutes
                  ? "Minutos Ilimitados"
                  : `${plan?.min} Minutos`}
              </div>
              <div
                style={{
                  fontSize: "0.65rem",
                  color: "var(--text-dark)",
                  marginTop: "2px",
                }}
              >
                {planHasUnlimitedMinutes
                  ? "Para todo Brasil"
                  : "Para qualquer operadora"}
              </div>
            </div>
          </div>
        </div>

        {/* Preço com design futurista */}
        <div
          style={{
            position: "relative",
            background: "var(--gradient-primary-reverse)",
            padding: isMobile ? "1.2rem" : "1.5rem",
            borderRadius: isMobile ? "var(--radius-md)" : "var(--radius-lg)",
            marginTop: "auto",
            boxShadow: "var(--shadow-lg), var(--shadow-inset-strong)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "100px",
              height: "100px",
              background:
                "radial-gradient(circle, var(--white-alpha-10) 0%, transparent 70%)",
              borderRadius: "50%",
              transform: "translate(30%, -30%)",
            }}
          />
          <div
            style={{
              fontSize: isMobile ? "0.65rem" : "0.7rem",
              color: "rgba(255,255,255,0.7)",
              marginBottom: "0.5rem",
              letterSpacing: "2px",
              fontWeight: "600",
              textTransform: "uppercase",
            }}
          >
            Por apenas
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "center",
              gap: "0.3rem",
            }}
          >
            <span
              style={{
                fontSize: isMobile ? "1.3rem" : "1.5rem",
                fontWeight: "700",
                color: "var(--text-primary)",
              }}
            >
              R$
            </span>
            <span
              style={{
                fontSize: isMobile ? "2.5rem" : "3rem",
                fontWeight: "900",
                color: "var(--text-primary)",
                lineHeight: 1,
                letterSpacing: "-2px",
              }}
            >
              {plan?.value.split(",")[0]}
            </span>
            <span
              style={{
                fontSize: isMobile ? "1.5rem" : "1.8rem",
                fontWeight: "700",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              {plan?.value.split(",")[1]}
            </span>
            <span
              style={{
                fontSize: isMobile ? "0.9rem" : "1rem",
                fontWeight: "500",
                color: "rgba(255,255,255,0.8)",
                marginLeft: "0.2rem",
              }}
            >
              /mês
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const mockPlanos: PlanoAPI[] = [
  {
    description: "(Start) 2Gb + 100 Minutos + 30 sms",
    gigas: "2",
    min: "100",
    value: "28,80",
    mostraApp: true,
    rede: "AMBOS",
  },
  {
    description: "(Start) 6Gb + 100 Minutos + 60 sms",
    gigas: "6",
    min: "100",
    value: "39,05",
    mostraApp: true,
    rede: "AMBOS",
  },
  {
    description: "(Start) 8Gb + Minutos Ilimitados + 60 sms",
    gigas: "8",
    min: "999",
    value: "42,65",
    mostraApp: true,
    rede: "AMBOS",
  },
  {
    description: "(Start) 14Gb + Minutos Ilimitados + 100 sms",
    gigas: "14",
    min: "999",
    value: "52,33",
    mostraApp: true,
    rede: "AMBOS",
  },
  {
    description: "(Start) 21Gb + Minutos Ilimitados + 100 sms",
    gigas: "21",
    min: "999",
    value: "68,65",
    mostraApp: true,
    rede: "AMBOS",
  },
  {
    description: "(Turbo) 29Gb + Minutos Ilimitados + 100 sms",
    gigas: "29",
    min: "999",
    value: "79,55",
    mostraApp: true,
    rede: "AMBOS",
  },
  {
    description: "(Turbo) 39Gb + Minutos Ilimitados + 100 sms",
    gigas: "39",
    min: "999",
    value: "101,95",
    mostraApp: true,
    rede: "AMBOS",
  },
  {
    description: "(Turbo) 44Gb + Minutos Ilimitados + 100 sms",
    gigas: "44",
    min: "999",
    value: "111,55",
    mostraApp: true,
    rede: "AMBOS",
  },
];

export default function CardSlider() {
  const { constants, rede, apelidoRede, buttonTextStyle } = useAppConstants();
  const { data: planos = [], isLoading } = usePlanos(constants.companyId);
  const [active, setActive] = useState(0);
  const [hoveredButton, setHoveredButton] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [selectedNetwork, setSelectedNetwork] = useState<RedeType>(
    rede === "AMBOS" ? "AMBOS" : rede,
  );
  const { isMobile, windowSize } = useWindowSize();

  const basePlanos = useMemo(() => {
    return planos.length > 0
      ? planos.filter((p) => p.mostraApp === true)
      : mockPlanos.filter((p) => p.mostraApp === true);
  }, [planos]);

  const availableNetworks = useMemo(() => {
    const companyAllowsTim = rede === "TIM" || rede === "AMBOS";
    const companyAllowsVivo = rede === "VIVO" || rede === "AMBOS";

    const normalizedPlanNetworks = basePlanos.map((plan) => {
      const planRede = plan.rede?.toUpperCase();

      if (planRede === "TIM" || planRede === "VIVO" || planRede === "AMBOS") {
        return planRede as RedeType;
      }

      return rede;
    });

    const hasTimPlans = normalizedPlanNetworks.some(
      (planRede) => planRede === "TIM" || planRede === "AMBOS",
    );
    const hasVivoPlans = normalizedPlanNetworks.some(
      (planRede) => planRede === "VIVO" || planRede === "AMBOS",
    );

    const showTimButton = companyAllowsTim && hasTimPlans;
    const showVivoButton = companyAllowsVivo && hasVivoPlans;
    const showAllButton = showTimButton && showVivoButton;

    const defaultNetwork: RedeType = showAllButton
      ? "AMBOS"
      : showTimButton
        ? "TIM"
        : showVivoButton
          ? "VIVO"
          : "AMBOS";

    return {
      showAllButton,
      showTimButton,
      showVivoButton,
      defaultNetwork,
    };
  }, [basePlanos, rede]);

  useEffect(() => {
    const allowedNetworks = new Set<RedeType>();

    if (availableNetworks.showAllButton) {
      allowedNetworks.add("AMBOS");
    }

    if (availableNetworks.showTimButton) {
      allowedNetworks.add("TIM");
    }

    if (availableNetworks.showVivoButton) {
      allowedNetworks.add("VIVO");
    }

    if (allowedNetworks.size > 0 && !allowedNetworks.has(selectedNetwork)) {
      setSelectedNetwork(availableNetworks.defaultNetwork);
    }
  }, [availableNetworks, selectedNetwork]);

  // Filter plans by network selection
  const filteredPlanos = useMemo(() => {
    if (selectedNetwork === "AMBOS") {
      return basePlanos;
    }

    return basePlanos.filter((p) => {
      const planRede = p.rede?.toUpperCase();
      const normalizedPlanRede =
        planRede === "TIM" || planRede === "VIVO" || planRede === "AMBOS"
          ? planRede
          : rede;

      return (
        normalizedPlanRede === selectedNetwork || normalizedPlanRede === "AMBOS"
      );
    });
  }, [basePlanos, selectedNetwork, rede]);

  const res = filteredPlanos;

  // Reset active index when filter changes
  useEffect(() => {
    setActive(0);
  }, [selectedNetwork]);

  const handleNext = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setActive((i) => (i + 1) % res.length);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  const handlePrev = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setActive((i) => (i - 1 + res.length) % res.length);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  const swipeRef = useSwipe({
    onSwipeLeft: handleNext,
    onSwipeRight: handlePrev,
  });

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isTransitioning) return;
    setIsDragging(true);
    setDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || isTransitioning) return;
    const diff = dragStart - e.clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Suporte para navegação por teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTransitioning, active]);

  // Valores responsivos
  const cardWidth = isMobile ? (windowSize < 380 ? 280 : 300) : 320;
  const cardSpacing = isMobile ? (windowSize < 380 ? 260 : 280) : 340;
  const cardPadding = isMobile ? "2rem 1.5rem" : "2.5rem 2rem";
  const cardMinHeight = isMobile ? "480px" : "520px";

  return (
    <div
      id="planos"
      style={{
        padding: "3rem 0",
        background: "var(--gradient-bg)",
        position: "relative",
        overflow: "hidden",
        minHeight: "auto",
      }}
    >
      {/* Animated grid background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
          linear-gradient(var(--primary-alpha-10) 1px, transparent 1px),
          linear-gradient(90deg, var(--primary-alpha-10) 1px, transparent 1px)
        `,
          backgroundSize: "60px 60px",
          opacity: 0.6,
          pointerEvents: "none",
          animation: "gridMove 20s linear infinite",
        }}
      />

      {/* Floating orbs */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "10%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, var(--primary-alpha-15) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "var(--blur-xl)",
          animation: "float 8s ease-in-out infinite",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: "350px",
          height: "350px",
          background:
            "radial-gradient(circle, rgba(100,100,255,0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "var(--blur-xl)",
          animation: "float 10s ease-in-out infinite reverse",
        }}
      />

      {/* Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          position: "relative",
          zIndex: 1,
          padding: "0 1rem",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "0.6rem 1.8rem",
            background: "var(--primary-alpha-10)",
            border: "var(--border-primary)",
            borderRadius: "var(--radius-full)",
            fontSize: "0.8rem",
            color: "var(--color-primary)",
            fontWeight: "700",
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "2rem",
            boxShadow: "0 4px 15px var(--primary-alpha-20)",
          }}
        >
          <span style={{ marginRight: "8px" }}>💎</span>
          Planos Premium
        </div>

        <h2
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: "900",
            background: "var(--gradient-text-white)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "1.5rem",
            letterSpacing: "-2px",
          }}
        >
          Escolha Seu Plano
        </h2>

        <p
          style={{
            fontSize: "1.2rem",
            color: "var(--text-tertiary)",
            maxWidth: "650px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Internet ultra-rápida 5G, apps ilimitados e muito mais
        </p>
      </div>

      {/* Network Filter ButtonGroup */}
      <NetworkButtonGroup
        apelidoRede={apelidoRede}
        selectedNetwork={selectedNetwork}
        onNetworkChange={setSelectedNetwork}
        showAllButton={availableNetworks.showAllButton}
        showTimButton={availableNetworks.showTimButton}
        showVivoButton={availableNetworks.showVivoButton}
        buttonTextColor={buttonTextStyle.color}
      />

      {/* Loading State */}
      {isLoading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: isMobile ? "560px" : "620px",
            gap: "1rem",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              border: "4px solid var(--primary-alpha-20)",
              borderTop: "4px solid var(--color-primary)",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
            }}
          />
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1rem",
              fontWeight: "600",
            }}
          >
            Carregando planos...
          </p>
        </div>
      ) : res.length === 0 ? (
        /* Empty State - No plans for selected filter */
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: isMobile ? "400px" : "450px",
            gap: "1.5rem",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              background: "var(--primary-alpha-10)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "3rem",
            }}
          >
            📋
          </div>
          <div>
            <h3
              style={{
                color: "var(--text-primary)",
                fontSize: isMobile ? "1.3rem" : "1.5rem",
                fontWeight: "700",
                marginBottom: "0.75rem",
              }}
            >
              Nenhum plano encontrado
            </h3>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: isMobile ? "0.95rem" : "1.05rem",
                maxWidth: "400px",
                lineHeight: 1.6,
              }}
            >
              Não há planos disponíveis para a cobertura selecionada.
              <br />
              Tente selecionar outra opção de rede.
            </p>
          </div>
          <button
            onClick={() => setSelectedNetwork("AMBOS")}
            style={{
              marginTop: "0.5rem",
              padding: "0.9rem 2rem",
              fontSize: "1rem",
              fontWeight: "600",
              color: "var(--text-primary)",
              background: "var(--gradient-primary)",
              border: "none",
              borderRadius: "var(--radius-md)",
              cursor: "pointer",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              boxShadow: "var(--shadow-md)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "var(--shadow-lg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "var(--shadow-md)";
            }}
          >
            Ver todas as coberturas
          </button>
        </div>
      ) : (
        <>
          {/* Carousel */}
          <div
            ref={swipeRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{
              position: "relative",
              height: isMobile ? "560px" : "620px",
              marginBottom: "2rem",
              perspective: isMobile ? "2500px" : "3000px",
              perspectiveOrigin: "50% 50%",
              overflow: "visible",
              touchAction: "pan-y",
              cursor: isDragging ? "grabbing" : "grab",
              userSelect: "none",
            }}
          >
            {/* Subtle background pulse during transition */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: isTransitioning ? "600px" : "0",
                height: isTransitioning ? "600px" : "0",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, var(--primary-alpha-05) 0%, transparent 70%)",
                opacity: isTransitioning ? 1 : 0,
                transition: "var(--transition-slow)",
                zIndex: 1,
                pointerEvents: "none",
              }}
            />

            {res.map((plan, index) => (
              <Card
                key={index}
                plan={plan}
                index={index}
                active={active}
                isTransitioning={isTransitioning}
                setIsTransitioning={setIsTransitioning}
                setActive={setActive}
                isMobile={isMobile}
                cardSpacing={cardSpacing}
                cardWidth={cardWidth}
                cardPadding={cardPadding}
                cardMinHeight={cardMinHeight}
                resLength={res.length}
              />
            ))}
          </div>

          {/* Navigation buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
              marginBottom: "3rem",
              position: "relative",
              zIndex: 101,
            }}
          >
            <button
              onClick={handlePrev}
              style={{
                background: "var(--white-alpha-05)",
                backdropFilter: "var(--blur-sm)",
                border: "var(--border-white-medium)",
                borderRadius: "50%",
                width: isMobile ? "50px" : "60px",
                height: isMobile ? "50px" : "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "var(--transition-fast)",
                color: "var(--text-primary)",
                fontSize: isMobile ? "1.5rem" : "1.8rem",
                fontWeight: "300",
                boxShadow: "var(--shadow-dark-lg)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--primary-alpha-20)";
                e.currentTarget.style.borderColor = "var(--primary-alpha-50)";
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--white-alpha-05)";
                e.currentTarget.style.borderColor = "var(--white-alpha-10)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              ‹
            </button>

            <button
              onClick={handleNext}
              style={{
                background: "var(--white-alpha-05)",
                backdropFilter: "var(--blur-sm)",
                border: "var(--border-white-medium)",
                borderRadius: "50%",
                width: isMobile ? "50px" : "60px",
                height: isMobile ? "50px" : "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "var(--transition-fast)",
                color: "var(--text-primary)",
                fontSize: isMobile ? "1.5rem" : "1.8rem",
                fontWeight: "300",
                boxShadow: "var(--shadow-dark-lg)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--primary-alpha-20)";
                e.currentTarget.style.borderColor = "var(--primary-alpha-50)";
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--white-alpha-05)";
                e.currentTarget.style.borderColor = "var(--white-alpha-10)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              ›
            </button>
          </div>

          {/* Indicators */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.6rem",
              marginBottom: "4rem",
              position: "relative",
              zIndex: 101,
            }}
          >
            {res.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isTransitioning || index === active) return;

                  setIsTransitioning(true);
                  setActive(index);

                  setTimeout(() => {
                    setIsTransitioning(false);
                  }, 600);
                }}
                style={{
                  width: active === index ? "40px" : "12px",
                  height: "12px",
                  borderRadius: "6px",
                  background:
                    active === index
                      ? "var(--gradient-primary)"
                      : "var(--white-alpha-15)",
                  border:
                    active === index
                      ? "1px solid var(--primary-alpha-50)"
                      : "none",
                  cursor: "pointer",
                  transition: "var(--transition-bounce)",
                  boxShadow: active === index ? "var(--shadow-sm)" : "none",
                  animation:
                    active === index
                      ? "indicatorPop var(--transition-bounce)"
                      : "none",
                  transform: active === index ? "scale(1)" : "scale(0.9)",
                }}
              />
            ))}
          </div>

          {/* CTA Button */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
              zIndex: 101,
            }}
          >
            <a
              href={constants.linkPedirChip}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button
                onMouseEnter={() => setHoveredButton(true)}
                onMouseLeave={() => setHoveredButton(false)}
                style={{
                  padding: isMobile ? "1.2rem 2.5rem" : "1.5rem 4rem",
                  fontSize: isMobile ? "1.1rem" : "1.3rem",
                  fontWeight: "800",
                  color: "var(--text-primary)",
                  background: "var(--gradient-primary-reverse)",
                  border: "2px solid var(--white-alpha-10)",
                  borderRadius: isMobile
                    ? "var(--radius-md)"
                    : "var(--radius-lg)",
                  cursor: "pointer",
                  transition: "var(--transition-medium)",
                  boxShadow: hoveredButton
                    ? "var(--shadow-xl), var(--shadow-inset-strong)"
                    : "var(--shadow-lg)",
                  transform: hoveredButton
                    ? "translateY(-4px) scale(1.05)"
                    : "translateY(0)",
                  display: "flex",
                  alignItems: "center",
                  gap: isMobile ? "0.7rem" : "1rem",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <span style={{ position: "relative", zIndex: 1 }}>
                  {isMobile ? "Assinar" : "Assinar Agora"}
                </span>
                <svg
                  width={isMobile ? "20" : "24"}
                  height={isMobile ? "20" : "24"}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: "relative",
                    zIndex: 1,
                    transition: "transform 0.3s ease",
                    transform: hoveredButton
                      ? "translateX(5px)"
                      : "translateX(0)",
                  }}
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "0",
                    height: "0",
                    borderRadius: "50%",
                    background: "var(--white-alpha-20)",
                    transform: "translate(-50%, -50%)",
                    transition: "width 0.6s ease, height 0.6s ease",
                    ...(hoveredButton && { width: "300px", height: "300px" }),
                  }}
                />
              </button>
            </a>
          </div>
        </>
      )}

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }

        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(60px); }
        }

        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
        }

        @keyframes indicatorPop {
          0% {
            transform: scale(0.8);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes cardRotateIn {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) rotateY(90deg) scale(0.5);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, -50%) rotateY(0deg) scale(1);
          }
        }

        @keyframes activeCardPulse {
          0%, 100% {
            transform: translate(-50%, -50%) translateZ(20px) scale(1.02);
          }
          50% {
            transform: translate(-50%, -50%) translateZ(25px) scale(1.03);
          }
        }

      `}</style>
    </div>
  );
}
