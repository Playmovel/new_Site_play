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

  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "2rem",
        padding: "3rem",
        backgroundColor: "#f5f5f5"
      }}
    >
      <div
        style={{
          flex: "1 1 250px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem"
        }}
      >
        {InfosLeft.map((info, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              padding: "1rem 1.5rem",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            }}
          >
            <h3 style={{ color: "#a41902", marginBottom: "0.5rem" }}>
              {info.title}
            </h3>
            <p style={{ color: "#333", lineHeight: 1.5 }}>{info.content}</p>
          </div>
        ))}
      </div>
      {/* {imagem central} */}
      <div
        style={{
          flex: " 1 1 300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5"
        }}
      >
        <img
          src={centralImagem}
          alt="Imagem central"
          style={{
            width: "100%",
            maxWidth: "1000px",
            height: "auto",
            borderRadius: "12px"
          }}
        />
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          {/* app store  */}
          <a
            href="https://apps.apple.com/us/app/zyber/id6746278691"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "tranparent",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "transform 0.3, ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <img
              src={button1}
              alt="Baixar na App store"
              style={{
                width: "150px",
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
              background: "tranparent",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "transform 0.3, ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            {/* butao playstore   */}
            <img
              src={button2}
              alt="Baixar na Playstore"
              style={{
                width: "150px",
                height: "auto",
                display: "block"
              }}
            />
          </a>
        </div>
      </div>

      {/* coluna direita */}

      <div
        style={{
          flex: "1 1 250px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem"
        }}
      >
        {infosRight.map((info, index) =>
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              padding: "1rem 1.5rem",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
            }}
          >
            <h3 style={{ color: "#a41902", marginBottom: "0.5rem" }}>
              {info.title}
            </h3>
            <p style={{ color: "#333", lineHeight: "1.5" }}>{info.content}</p>
          </div>
        )}

      </div>
    </section>
  )

}

