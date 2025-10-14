import { useState } from "react";
import centralImage from "../assets/cell.webp";

export default function InfoSection() {
  const [showLeft1, setShowLeft1] = useState(false);
  const [showLeft2, setShowLeft2] = useState(false);
  const [showRight1, setShowRight1] = useState(false);
  const [showRight2, setShowRight2] = useState(false);

  const questions = [
    {
      title: "Como faço a portabilidade para a Zyber?",
      content:
        "O titular da conta pode utilizar o nosso aplicativo ou o CHAT para fazer a solicitação. Serão solicitadas as seguintes informações: Nome e CPF, número que deseja manter e operadora antiga. É importante que as linhas estejam no mesmo CPF e DDD. Pronto! Em até 5 dias úteis, o Plano Play Móvel estará disponível no seu número.",
      show: showLeft1,
      setShow: setShowLeft1,
      align: "right",
      gridColumn: 1,
      gridRow: 1,
    },
    {
      title: "É possível fazer ligações internacionais (DDI)?",
      content:
        "Não é possível. Os benefícios dos serviços de voz/sms dos planos não são válidos para ligações internacionais.",
      show: showLeft2,
      setShow: setShowLeft2,
      align: "right",
      gridColumn: 1,
      gridRow: 2,
    },
    {
      title: "Como é feita a renovação do plano?",
      content:
        "A renovação do plano é automática, e ocorre no dia seguinte ao término da validade do mesmo, que é de 30 dias. Para isso, o cliente precisa efetuar o pagamento da próxima assinatura via Pix, boleto ou cartão. Também é possível desativar a renovação no app.",
      show: showRight1,
      setShow: setShowRight1,
      align: "left",
      gridColumn: 3,
      gridRow: 1,
    },
    {
      title: "É necessário pagar alguma taxa para aderir ao plano?",
      content:
        "Não há cobrança de taxa de adesão. Para aderir, basta ativar o chip pelo app e fazer a primeira recarga. A confirmação será enviada por SMS e no aplicativo.",
      show: showRight2,
      setShow: setShowRight2,
      align: "left",
      gridColumn: 3,
      gridRow: 2,
    },
  ];

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 600px 1fr",
        gridTemplateRows: "auto auto",
        gap: "2rem",
        padding: "3rem",
        margin: "0 auto",
        backgroundColor: "#f5f5f5",
      }}
    >
      
      {questions.map((q, index) => (
        <div
          key={index}
          style={{
            gridColumn: q.gridColumn,
            gridRow: q.gridRow,
           
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent:
                q.align === "right" ? "flex-end" : "flex-start",
              alignItems: "center",
              gap: "0.5rem",
              cursor: "pointer",
            }}
            onClick={() => q.setShow(!q.show)}
          >
            <h3 style={{ color: "#a41902", marginBottom: "0.5rem" }}>
              {q.title}
            </h3>
            <span
              style={{
                display: "inline-block",
                transform: q.show ? "rotate(90deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
                color: "#a41902",
                fontWeight: "bold",
              }}
            >
              ▶
            </span>
          </div>

          <div
            style={{
              maxHeight: q.show ? "500px" : "0px",
              overflow: "hidden",
              transition: "all 0.5s ease",
              opacity: q.show ? 1 : 0,
              marginTop: q.show ? "0.5rem" : "0",
              color: "#333",
              lineHeight: 1.5,
            }}
          >
            <p>{q.content}</p>
          </div>
        </div>
      ))}

      
      <div
        style={{
          gridColumn: 2,
          gridRow: "1 / span 2",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={centralImage}
          alt="Imagem central"
          style={{
            width: "100%",
            maxWidth: "800px",
            height: "auto",
            borderRadius: "12px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          }}
        />
      </div>
    </section>
  );
}
