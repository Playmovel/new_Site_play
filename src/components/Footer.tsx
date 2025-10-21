import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        {/* COLUNA 1 */}
        <FooterColumn>
          <h3>Institucional</h3>
          <a href="">Sobre nós</a>
          <a href="#">Como comprar na Zyber</a>
          <a href="#">FAQ</a>
        </FooterColumn>

        {/* COLUNA 2 */}
        <FooterColumn>
          <h3>Atendimento</h3>
          <a href="https://atendimento.operadora.app.br/?companyId=362">
            Atendimento ao cliente
          </a>
          <a href="#">Métodos de Pagamento</a>
          <a href="#">Frete</a>
        </FooterColumn>

        {/* COLUNA 3 */}
        <FooterColumn>
          <h3>Minha Conta</h3>
          <a href="#">Rastrear meu pedido</a>
          <a href="#">Pedir meu chip</a>
        </FooterColumn>

        {/* COLUNA 4 */}
        <FooterColumn>
          <h3>Legal</h3>
          <a href="https://privacidade.operadora.app.br/#/Zyber">
            Política de Privacidade
          </a>
          <a href="https://privacidade.operadora.app.br/#/adesao/Zyber">
            Termo de Adesão
          </a>
        </FooterColumn>
      </FooterContent>

      <FooterBottom>
        <p>© 2025 Zyber. Todos os direitos reservados.</p>
      </FooterBottom>
    </FooterContainer>
  );
}

/* ===== ESTILOS ===== */

const FooterContainer = styled.footer`
  background-color: #a41902;
  color: #fff;
  padding: 3rem 2rem 2rem;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 2rem;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  min-width: 180px;

  h3 {
    color: #ffe501;
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
    text-transform: uppercase;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    border: 1px solid transparent;
    padding: 0.4rem 0;
    border-radius: 6px;

    &:hover {
      color: #ffe501;
      transform: translateX(5px);
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 1rem;
  font-size: 0.9rem;
  opacity: 0.8;
`;