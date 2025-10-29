import { Box } from "@mui/material";
import React, { useState } from "react";
import { FaMobileAlt, FaWhatsapp } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import { useSwipe } from "../hooks/useSwipe";
import useWindowSize from "../hooks/useWindowSize";
import TypographyCustom from "./TypographCustom";
import "../global.css";

const MAX_VISIBILITY = 3;

const mockPlanos = [
  { description: "(Start) 2Gb + 100 Minutos + 30 sms", gigas: "2", min: "100", value: "28,80", mostraApp: true },
  { description: "(Start) 6Gb + 100 Minutos + 60 sms", gigas: "6", min: "100", value: "39,05", mostraApp: true },
  { description: "(Start) 8Gb + Minutos Ilimitados + 60 sms + 1 Gb", gigas: "8", min: "999", value: "42,65", mostraApp: true },
  { description: "(Start) 14Gb + Minutos Ilimitados + 100 sms + 1 G", gigas: "14", min: "999", value: "52,33", mostraApp: true },
  { description: "(Start) 21Gb +  Minutos Ilimitados + 100 sms + 1 Gb Portabilidade", gigas: "21", min: "999", value: "68,65", mostraApp: true },
  { description: "(Turbo) 29Gb +  Minutos Ilimitados + 100 sms + 1 Gb Portabilidade", gigas: "29", min: "999", value: "79,55", mostraApp: true },
  { description: "(Turbo) 39Gb +  Minutos Ilimitados + 100 sms + 1 Gb Portabilidade", gigas: "39", min: "999", value: "101,95", mostraApp: true },
  { description: "(Turbo) 44Gb + Minutos Ilimitados + 100 sms + 1 Gb de Portabilidade", gigas: "44", min: "999", value: "111,55", mostraApp: true },
];

interface CardProps {
  title: string;
  gigas: string;
  minutos: string;
  valuePlan: string;
}

const Card: React.FC<CardProps> = ({ title, gigas, minutos, valuePlan }) => (
  <Box
    className="card"
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      textAlign: "center",
      backgroundColor: "#fff",
      p: 3,
      borderRadius: 3,
      minWidth: 250,
      maxWidth: 320,
      boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    }}
  >
    <TypographyCustom variant="h2" color="var(--primary_main)">
      {title}
    </TypographyCustom>

    <Box sx={{ width: "100%", my: 2 }}>
      <TypographyCustom variant="h5" color="var(--primary_main)">
        <TbWorldWww /> {gigas} GB
      </TypographyCustom>
      <TypographyCustom variant="h5" color="var(--primary_main)">
        <FaWhatsapp /> Whatsapp Grátis
      </TypographyCustom>
      <TypographyCustom variant="h5" color="var(--primary_main)">
        <FaMobileAlt /> {minutos}
      </TypographyCustom>
    </Box>

    <Box
      sx={{
        background: "linear-gradient(135deg, #a41902, #c41f03)",
        px: 4,
        py: 1.5,
        borderRadius: "30px",
      }}
    >
      <TypographyCustom
        variant="h5"
        color="#fff"
        fontWeight="900"
      >
        R$ {valuePlan}
      </TypographyCustom>
    </Box>
  </Box>
);

const Carousel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);
  const swipeHandlers = useSwipe({
    onSwipeLeft: () => {
      if (count > 1 && active < count - 1) setActive((i) => i + 1);
    },
    onSwipeRight: () => {
      if (count > 1 && active > 0) setActive((i) => i - 1);
    },
  });

  const { isMobile } = useWindowSize();

  return (
    <div className="carousel" {...swipeHandlers}>
      {count > 1 && active > 0 && !isMobile && (
        <button className="nav left" onClick={() => setActive(i => i - 1)}>
          <TiChevronLeftOutline />
        </button>
      )}

      {React.Children.map(children, (child, i) => (
        <div
          className="card-container"
          style={{
            //@ts-ignore
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 2,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            pointerEvents: active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          {child}
        </div>
      ))}

      {count > 1 && active < count - 1 && !isMobile && (
        <button className="nav right" onClick={() => setActive(i => i + 1)}>
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  );
};

export default function CardSlider() {
  const [res] = useState(mockPlanos);
  const [active, setActive] = useState(0);

  const activePlan = res.filter(p => p.mostraApp)[active];

  const whatsappLink = `https://api.whatsapp.com/send?phone=5511933019327&text=Ol%C3%A1%2C+sou+cliente+ZYBER%0AQuero+assinar+o+plano:+${encodeURIComponent(
    activePlan.description
  )}`;

  return (
    <Box className="container" sx={{ textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      {res.length > 0 ? (
        <>
          <Carousel>
            {res
              .filter(p => p.mostraApp)
              .map((infoPlanos, index) => (
                <Card
                  key={index}
                  title={infoPlanos.description}
                  gigas={infoPlanos.gigas}
                  minutos={
                    infoPlanos.min === "999"
                      ? "Ligações ilimitadas para qualquer DDD"
                      : `${infoPlanos.min} Minutos`
                  }
                  valuePlan={infoPlanos.value}
                />
              ))}
          </Carousel>

          {/* Botão centralizado com cor Zyber */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  background: "linear-gradient(135deg, #a41902, #c41f03)",
                  color: "#fff",
                  px: { xs: 6, md: 10 },
                  py: { xs: 1.5, md: 2 },
                  borderRadius: "14px",
                  fontWeight: 700,
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 8px 25px rgba(164,25,2,0.35)",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    opacity: 0.9,
                  },
                }}
              >
                Assinar Agora
              </Box>
            </a>
          </Box>
        </>
      ) : (
        <TypographyCustom color="#fff" variant="h4" fontWeight="900">
          Em breve!
        </TypographyCustom>
      )}
    </Box>
  );
}
