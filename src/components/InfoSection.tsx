import centralImagem from "../assets/cell.webp"
import button1 from "../assets/botao_apple.svg"
import button2 from "../assets/botao_google.svg"

export default function InfoSection() {
  const InfosLeft = [
    {
      title: "Portabilidade",
      content:
        "Faça a portabilidade pelo app ou CHAT. Informe nome, CPF, número e operadora antiga. Em até 5 dias úteis seu plano estará ativo.",
    },
    {
      title: "Ligações internacionais",
      content:
        "Benefícios de voz/sms não são válidos para ligações internacionais (DDI).",
    }
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
        "Ative o chip pelo app e faça a primeira recarga. Confirmação enviada por SMS e app."
    }
  ];

  const cardStyle = {
    backgroundColor: "#fff",
    padding: "1.5rem",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(164, 25, 2, 0.08)",
    transition: "all 0.3s ease",
    border: "1px solid rgba(164, 25, 2, 0.1)",
  };

  const cardHoverStyle = {
    transform: "translateY(-4px)",
    boxShadow: "0 8px 30px rgba(164, 25, 2, 0.15)",
  };

  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "2.5rem",
        padding: "4rem 2rem",
        backgroundColor: "#fafafa",
        minHeight: "600px",
      }}
    >
      {/* Coluna Esquerda */}
      <div
        style={{
          flex: "1 1 280px",
          maxWidth: "350px",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem"
        }}
      >
        {InfosLeft.map((info, index) => (
          <div
            key={index}
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = cardHoverStyle.transform;
              e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = cardStyle.boxShadow;
            }}
          >
            <h3 style={{
              color: "#a41902",
              marginBottom: "0.75rem",
              fontSize: "1.25rem",
              fontWeight: "600"
            }}>
              {info.title}
            </h3>
            <p style={{
              color: "#555",
              lineHeight: 1.6,
              fontSize: "0.95rem"
            }}>
              {info.content}
            </p>
          </div>
        ))}
      </div>

      {/* Imagem Central */}
      <div
        style={{
          flex: "1 1 300px",
          maxWidth: "700px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4rem"
        }}
      >
        <div style={{
          position: "relative",
          width: "100%",
          display: "flex",
          justifyContent: "center"
        }}>
          <img
            src={centralImagem}
            alt="Aplicativo Zyber"
            style={{
              width: "100%",
              maxWidth: "900px",
              height: "auto",
              borderRadius: "50px",
              transition: "transform 0.1s ease",
              // background: "#ff0000ff"
            }}
          // onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
          // onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          />
        </div>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          {/* App Store */}
          <a
            href="https://apps.apple.com/us/app/zyber/id6746278691"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "transform 0.3s ease, filter 0.3s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.08)";
              e.currentTarget.style.filter = "brightness(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.filter = "brightness(1)";
            }}
          >
            <img
              src={button1}
              alt="Baixar na App Store"
              style={{
                width: "160px",
                height: "auto",
                display: "block"
              }}
            />
          </a>

          {/* Google Play */}
          <a
            href="https://play.google.com/store/apps/details?id=app.mobile.zyber"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "transform 0.3s ease, filter 0.3s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.08)";
              e.currentTarget.style.filter = "brightness(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.filter = "brightness(1)";
            }}
          >
            <img
              src={button2}
              alt="Baixar na Google Play"
              style={{
                width: "160px",
                height: "auto",
                display: "block"
              }}
            />
          </a>
        </div>
      </div>

      {/* Coluna Direita */}
      <div
        style={{
          flex: "1 1 280px",
          maxWidth: "350px",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem"
        }}
      >
        {infosRight.map((info, index) => (
          <div
            key={index}
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = cardHoverStyle.transform;
              e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = cardStyle.boxShadow;
            }}
          >
            <h3 style={{
              color: "#a41902",
              marginBottom: "0.75rem",
              fontSize: "1.25rem",
              fontWeight: "600"
            }}>
              {info.title}
            </h3>
            <p style={{
              color: "#555",
              lineHeight: 1.6,
              fontSize: "0.95rem"
            }}>
              {info.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}