export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#a41902",
        color: "#fff",
        padding: "2rem",
        textAlign: "center",
      }}
      >
        <div 
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem",
          flexWrap:"wrap", 
          marginBottom: "1rem",
        }}
      > 
      <a
        href="https://privacidade.operadora.app.br/#/Zyber"    
        style={{
          color:"#fff",
          textDecoration:"none",
          fontWeight:"bold",
          transition:"color 0.3 ease",
        }}
        onMouseEnter={(e)=> (e.currentTarget.style.color= "#FF5733")}
        onMouseLeave={(e)=> (e.currentTarget.style.color= "#fff") }
        >
        
      
        Politica de Privacidade
      </a>
      
      <a
      href="https://privacidade.operadora.app.br/#/adesao/Zyber"
      style={{
        color: "#fff",
        textDecoration: "none",
        fontWeight: "bold",
        transition:"colo 0.3 ease",
      }}
      onMouseEnter={(e)=> (e.currentTarget.style.color= "#ff5733")}
      onMouseLeave={(e)=> (e.currentTarget.style.color= "#fff")}
      > 
      Termo de Adesão 
      </a>
      <a
      href="https://github.com/gigjodevplay/starter-kit#"
      style={{
      color: "#fff",
      textDecoration: "none",
      fontWeight: "bold",
      transition:"color 0.3 ease"
      }}
      onMouseEnter={(e)=> (e.currentTarget.style.color= "#ff5733")}
      onMouseLeave={(e)=>(e.currentTarget.style.color= "#fff")}
      >
     Sobre nós
      </a>
      <a 
      href="https://atendimento.operadora.app.br/?companyId=362"
      style={{
      color: "#fff",
      textDecoration: "none",
      fontWeight: "bold",
      transition: "color 0.9 ease"
      }}
      onMouseEnter={(e)=> (e.currentTarget.style.color= "#ff5733")}
      onMouseLeave={(e)=>(e.currentTarget.style.color="#fff")}
      >
Atendimento
      </a>
      </div>
        <p>© 2025 Zyber. Todos os direitos reservados.</p>
    </footer>
  );
}
