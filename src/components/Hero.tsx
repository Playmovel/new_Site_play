import Banner from "../assets/background.webp";

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
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          zIndex: 0,
        }}
      ></div>

      
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          padding: "0 10%",
          maxWidth: "600px",
          textAlign: "left", 
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "1rem",
            lineHeight: 1.2,
          }}
        >
          Telefonia{" "}
          <span style={{ color: "#FF5733" }}>100% Digital</span>
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            marginBottom: "2rem",
            color: "#f2f2f2",
          }}
        >
          Conheça os planos da Zyber e aproveite liberdade total, com internet rápida, chamadas ilimitadas e muito mais.
        </p>

        <div
          className="app-buttons"
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://play.google.com/store/apps/details?id=app.mobile.zyber"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              style={{
                padding: "0.8rem 1.5rem",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "#FF5733", 
                color: "#fff",
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
              Google Play
            </button>
          </a>

          <a
            href="https://apps.apple.com/us/app/zyber/id6746278691"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              style={{
                padding: "0.8rem 1.5rem",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "#FF5733", 
                color: "#fff",
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
              App Store
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
