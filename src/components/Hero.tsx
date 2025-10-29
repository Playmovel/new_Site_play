import Banner from "../assets/background.webp";
import "../styles/Button.css";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${Banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          zIndex: 0,
        }}
      ></div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          maxWidth: "600px",
          wordBreak: "break-word",
          whiteSpace: "normal",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)", // ajusta automaticamente entre mobile e desktop
            marginBottom: "1rem",
            lineHeight: 1.2,
            color: "#252525ff",
          }}
        >
          <span style={{ color: "#fff" }}>A ERA DIGITAL CHEGOU, VOCÊ ESTÁ </span>
          <span style={{ color: "#FF5733" }}>PRONTO?</span>
        </h1>

        <p
          style={{
            fontSize: "clamp(1rem, 3.5vw, 1.5rem)", // responsivo também
            marginBottom: "1.5rem",
            color: "#f2f2f2",
          }}
        >
          Conheça os planos da Zyber e aproveite liberdade total, com internet rápida, chamadas ilimitadas e muito mais.
        </p>

        <div
          className="app-buttons"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://api.whatsapp.com/send?phone=5511933019327&text=Ol%C3%A1%2C+sou+cliente+ZYBER%0APoderia+me+ajudar%3F&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button">
              <span className="outline"></span>
              <span className="state state--default">
                <span className="icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 12L22 12M22 12L15 5M22 12L15 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p>
                  {["P", "e", "d", "ir", " ", "C", "h", "i", "p"].map(
                    (letter, i) => (
                      <span key={i} style={{ "--i": i } as React.CSSProperties}>
                        {letter}
                      </span>
                    )
                  )}
                </p>
              </span>

              <span className="state state--sent">
                <span className="icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p>
                  <span style={{ "--i": 1 } as React.CSSProperties}>E</span>
                  <span style={{ "--i": 2 } as React.CSSProperties}>n</span>
                  <span style={{ "--i": 3 } as React.CSSProperties}>v</span>
                  <span style={{ "--i": 4 } as React.CSSProperties}>i</span>
                  <span style={{ "--i": 5 } as React.CSSProperties}>a</span>
                  <span style={{ "--i": 6 } as React.CSSProperties}>d</span>
                  <span style={{ "--i": 7 } as React.CSSProperties}>o</span>
                </p>
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
