export default function PlansContainer() {
  const plans = [
    { name: "Básico", price: "R$29,90/mês", benefits: ["10GB", "Chamadas ilimitadas"] },
    { name: "Plus", price: "R$49,90/mês", benefits: ["30GB", "Chamadas ilimitadas", "WhatsApp"] },
    { name: "Max", price: "R$79,90/mês", benefits: ["100GB", "Chamadas ilimitadas", "App ilimitado"] },
  ];

  return (
    <section
      className="plans-container"
      style={{
        padding: "4rem 2rem",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem", color: "#333" }}>
        Escolha seu Plano
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      > 
        {plans.map((plan, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "2rem",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              minWidth: "220px",
              transition: "all 0.3s ease-in-out",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLDivElement;
              target.style.transform = "translateY(-10px)";
              target.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLDivElement;
              target.style.transform = "translateY(0)";
              target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
            }}
          >
            <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{plan.name}</h3>
            <p style={{ fontWeight: "bold", marginBottom: "1rem", color: "#a41902" }}>{plan.price}</p>
            <ul style={{ textAlign: "left", marginBottom: "1rem" }}>
              {plan.benefits.map((b, i) => (
                <li key={i}>• {b}</li>
              ))}
            </ul>
            <button
            className="opaaaaaaa"
              style={{
                padding: "0.7rem 1.5rem",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "#FF5733",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "all 0.2s ease-in-out",
               
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#a41902";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#FF5733";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Assinar
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
