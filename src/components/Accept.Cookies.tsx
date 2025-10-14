import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  const getCookie = (name: string): string | null => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()!.split(";").shift() || null;
    return null;
  };

  useEffect(() => {
    const accepted = getCookie("cookiesAccepted");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    const expirationDays = 180; 
    const date = new Date();
    date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000);
    document.cookie = `cookiesAccepted=true; expires=${date.toUTCString()}; path=/; SameSite=Lax`;
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px", 
        transform: "none", 
        background: "linear-gradient(135deg, #ff2600ff, #f5775bff)", 
        color: "#fff",
        padding: "1.5rem",
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.25)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        zIndex: 1000,
        width: "500px", 
      }}
    >
      <p style={{ margin: 0, fontSize: "0.95rem", textAlign: "left" }}>
        Usamos cookies para melhorar sua experiência. Ao continuar, você concorda com nossa{" "}
        <a
          href="https://privacidade.operadora.app.br/#/Zyber"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", textDecoration: "underline", fontWeight: "bold" }}
        >
          Política de Privacidade
        </a>.
      </p>

      <button
        onClick={handleAccept}
        style={{
          padding: "0.6rem 1.2rem",
          backgroundColor: "#333",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          alignSelf: "flex-start",
          transition: "background 0.3s ease",
        }}
       onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#b22222")}  
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#272727")} 

      >
        Aceitar
      </button>
    </div>
  );
}
