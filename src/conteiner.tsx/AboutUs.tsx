import { useState } from "react";

export default function AboutUs() {
  const sections = [
    {
      title: "Nossa História",
      text: "A Zyber nasceu com o objetivo de conectar pessoas e empresas com soluções de internet de alta qualidade, oferecendo atendimento humanizado e tecnologia de ponta.",
    },
    {
      title: "Nossa Missão",
      text: "Proporcionar a melhor experiência em conectividade, garantindo velocidade, estabilidade e suporte confiável para nossos clientes.",
    },
    {
      title: "Nossa Visão",
      text: "Ser referência em serviços de internet, reconhecida pela qualidade, inovação e compromisso com a satisfação do cliente.",
    },
    {
      title: "Nossos Valores",
      text: "Integridade, transparência, excelência no atendimento e dedicação total à satisfação dos clientes são os pilares que nos guiam.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % sections.length);
  const prev = () => setCurrent((prev) => (prev - 1 + sections.length) % sections.length);

  return (
    <section
      id="sobre"
      style={{
        backgroundColor: "#fff",
        padding: "4rem 2rem",
        textAlign: "center",
        position: "relative",
      }}
    >
      <h2 style={{ fontSize: "2.2rem", marginBottom: "2rem", color: "#a41902", fontWeight: "bold" }}>
        Sobre Nós
      </h2>

      {/* Modal do carrossel */}
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          padding: "2rem",
          backgroundColor: "#f5f5f5",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          transition: "all 0.5s ease",
        }}
      >
        <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#333" }}>
          {sections[current].title}
        </h3>
        <p style={{ color: "#555", fontSize: "1.1rem", lineHeight: "1.6" }}>
          {sections[current].text}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "2rem",
        }}
      >
        <button
          onClick={prev}
          style={{
            backgroundColor: "#a41902",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "45px",
            height: "45px",
            fontSize: "1.5rem",
            cursor: "pointer",
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          ‹
        </button>
        <button
          onClick={next}
          style={{
            backgroundColor: "#a41902",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "45px",
            height: "45px",
            fontSize: "1.5rem",
            cursor: "pointer",
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          ›
        </button>
      </div>
    </section>
  );
}
