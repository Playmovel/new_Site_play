import { useState } from "react";

export default function About() {
  const slides = [
    {
      title: "Sobre Nós",
      text: "Somos uma empresa dedicada a fornecer o melhor serviço de internet, com qualidade, estabilidade e suporte de ponta.",
    },
    {
      title: "Nossa Missão",
      text: "Conectar pessoas e negócios com tecnologia de alto desempenho e atendimento humanizado.",
    },
    {
      title: "Por que escolher a Zyber?",
      text: "Oferecemos planos flexíveis, tecnologia de ponta e compromisso total com a satisfação do cliente.",
    },
  ];
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent((prev) => (prev + 1) % slides.length);
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="sobre"
      style={{
        backgroundColor: "#f5f5f5",
        padding: "4rem 2rem",
        textAlign: "center",
        position: "relative",
      }}
    >
      <h2 style={{ fontSize: "2.2rem", marginBottom: "2rem", color: "#333" }}>
        {slides[current].title}
      </h2>

      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          fontSize: "1.2rem",
          color: "#555",
          transition: "all 0.5s ease",
        }}
      >
        {slides[current].text}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "2rem",
        }}
      >
        <button
          onClick={prevSlide}
          style={{
            backgroundColor: "#a41902",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "45px",
            height: "45px",
            cursor: "pointer",
            fontSize: "1.2rem",
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          style={{
            backgroundColor: "#a41902",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "45px",
            height: "45px",
            cursor: "pointer",
            fontSize: "1.2rem",
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
