export default function Navbar() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      style={{
        backgroundColor: "#a41902",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>Zyber</div>

      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "2rem",
          margin: 0,
          alignItems: "center",
        }}
      >
        <li
          style={{ cursor: "pointer" }}
          onClick={() => scrollToSection("home")}
        >
          Home
        </li>
        <li
          style={{ cursor: "pointer" }}
          onClick={() => scrollToSection("planos")}
        >
          Planos
        </li>
        <li
          style={{ cursor: "pointer" }}
          onClick={() => scrollToSection("sobre")}
        >
          Sobre Nós
        </li>
        <li
         className="Opaaaa"
          style={{
            backgroundColor: "#FF5733",
            padding: "0.6rem 1rem",
            borderRadius: "8px",
            cursor: "pointer",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          Seja Cliente
        </li>
      </ul>
    </nav>
  );
}
