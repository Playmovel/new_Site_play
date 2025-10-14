import { useRef } from "react";

export default function PlanosCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      if (direction === "left") {
        container.scrollTo({
          left: 0, 
          behavior: "smooth",
        });
      } else {
        container.scrollTo({
          left: container.scrollWidth, 
          behavior: "smooth",
        });
      }
    }
  };

  const planos = [
    { nome: "Básico", preco: "R$ 49,90", descricao: "Ideal para uso doméstico." },
    { nome: "Intermediário", preco: "R$ 79,90", descricao: "Mais velocidade e estabilidade." },
    { nome: "Premium", preco: "R$ 119,90", descricao: "Perfeito para gamers e streamers." },
    { nome: "Empresarial", preco: "R$ 199,90", descricao: "Alta performance para empresas." },
    { nome: "Sócio", preco: "R$ 30,00", descricao: "Plano especial de apoio para associados." },
  ];

  return (
    <section
      id="planos"
      style={{
        backgroundColor: "#f9f9f9",
        padding: "4rem 0",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "2.5rem",
          color: "#a41902",
          fontWeight: "bold",
        }}
      >
        Nossos Planos
      </h2>

      {/* Botão Esquerdo */}
      <button
        onClick={() => scroll("left")}
        style={{
          position: "absolute",
          top: "50%",
          left: "1rem",
          transform: "translateY(-50%)",
          backgroundColor: "#a41902",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "45px",
          height: "45px",
          fontSize: "1.5rem",
          cursor: "pointer",
          zIndex: 10,
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        }}
      >
        ‹
      </button>

      {/* Container Centralizado */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Carrossel */}
        <div
          ref={carouselRef}
          style={{
            display: "flex",
            gap: "2rem",
            overflowX: "auto",
            scrollBehavior: "smooth",
            padding: "1rem",
            scrollbarWidth: "none",
            width: "90%",
          }}
        >
          {planos.map((plano, index) => (
            <div
              key={index}
              style={{
                flex: "0 0 260px",
                backgroundColor: "#fff",
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                padding: "1.5rem",
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
              }}
            >
              <h3 style={{ color: "#a41902", fontSize: "1.3rem", fontWeight: "bold" }}>
                {plano.nome}
              </h3>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  margin: "0.5rem 0",
                }}
              >
                {plano.preco}
              </p>
              <p style={{ color: "#555", fontSize: "0.95rem" }}>{plano.descricao}</p>
              <button
                style={{
                  backgroundColor: "#a41902",
                  color: "#fff",
                  border: "none",
                  padding: "0.6rem 1.2rem",
                  borderRadius: "6px",
                  cursor: "pointer",
                  marginTop: "1rem",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#7e3412")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#a41902")
                }
              >
                Assinar
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Botão Direito */}
      <button
        onClick={() => scroll("right")}
        style={{
          position: "absolute",
          top: "50%",
          right: "1rem",
          transform: "translateY(-50%)",
          backgroundColor: "#a41902",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "45px",
          height: "45px",
          fontSize: "1.5rem",
          cursor: "pointer",
          zIndex: 10,
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        }}
      >
        ›
      </button>
    </section>
  );
}
