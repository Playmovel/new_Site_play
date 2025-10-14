import centralImage from "../assets/cell.webp";

export default function InfoSection() {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "60vh", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        padding: "2rem",
        backgroundColor: "#f9f9f9",
        flexWrap: "wrap", 
        textAlign: "center",
      }}
    >
      
      <div
        style={{
          flex: "1 1 250px",
          textAlign: "right",
          paddingRight: "1rem",
          minWidth: "200px",
        }}
      >
        <h3 style={{ color: "#a41902", marginBottom: "1rem" }}>Lado Esquerdo</h3>
        <p style={{ color: "#333", lineHeight: 1.6 }}>
          Coloque aqui informações, descrições ou algum destaque que deseja mostrar
          ao lado esquerdo da imagem. Essa parte se ajusta conforme a tela.
        </p>
      </div>

  
      <div
        style={{
          flex: "0 1 250px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={centralImage}
          alt="Imagem central"
          style={{
            maxWidth: "250px",
            width: "100%",
            height: "auto",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        />
      </div>

    
      <div
        style={{
          flex: "1 1 250px",
          textAlign: "left",
          paddingLeft: "1rem",
          minWidth: "200px",
        }}
      >
        <h3 style={{ color: "#a41902", marginBottom: "1rem" }}>Lado Direito</h3>
        <p style={{ color: "#333", lineHeight: 1.6 }}>
          Aqui vão informações complementares, benefícios, ou o que quiser destacar
          do lado direito da imagem. Tudo se ajusta automaticamente.
        </p>
      </div>
    </section>
  );
}
