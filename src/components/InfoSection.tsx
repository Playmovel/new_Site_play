import centralImage from "../assets/cell.webp";

export default function InfoSection() {
  const infosLeft = [
    {
      title: "Portabilidade",
      content:
        "Faça a portabilidade pelo app ou CHAT. Informe nome, CPF, número e operadora antiga. Em até 5 dias úteis seu plano estará ativo.",
    },
    {
      title: "Ligações internacionais",
      content:
        "Benefícios de voz/sms não são válidos para ligações internacionais (DDI).",
    },
  ];

  const infosRight = [
    {
      title: "Renovação automática",
      content:
        "A renovação ocorre automaticamente a cada 30 dias via Pix, boleto ou cartão. Pode ser desativada no app.",
    },
    {
      title: "Sem taxa de adesão",
      content:
        "Ative o chip pelo app e faça a primeira recarga. Confirmação enviada por SMS e app.",
    },
  ];

  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        padding: "3rem",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          flex: "1 1 250px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {infosLeft.map((info, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              padding: "1rem 1.5rem",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ color: "#a41902", marginBottom: "0.5rem" }}>
              {info.title}
            </h3>
            <p style={{ color: "#333", lineHeight: 1.5 }}>{info.content}</p>
          </div>
        ))}
      </div>

      <div
        style={{
          flex: "1 1 300px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={centralImage}
          alt="Imagem central"
          style={{
            width: "100%",
            maxWidth: "400px",
            height: "auto",
            borderRadius: "12px",
          }}
        />
      </div>

      <div
        style={{
          flex: "1 1 250px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {infosRight.map((info, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              padding: "1rem 1.5rem",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ color: "#a41902", marginBottom: "0.5rem" }}>
              {info.title}
            </h3>
            <p style={{ color: "#333", lineHeight: 1.5 }}>{info.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
