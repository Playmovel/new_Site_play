import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAppConstants } from "../hooks/useAppConstants";

export default function PrivacyPolicyPage() {
  const { constants } = useAppConstants();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageContainer>
      {/* Header */}
      <Header>
        <HeaderContent>
          <Link to="/">
            {constants.linkIcon ? (
              <Logo src={constants.linkIcon} alt={constants.nameEmpresa} />
            ) : (
              <LogoText>{constants.nameEmpresa}</LogoText>
            )}
          </Link>
          <BackButton to="/">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 12H5M5 12L12 19M5 12L12 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Voltar ao site
          </BackButton>
        </HeaderContent>
      </Header>

      {/* Content */}
      <Content>
        <ContentWrapper>
          <PageTitle>POLÍTICA DE PRIVACIDADE</PageTitle>

          <Section>
            <SectionTitle>1. Introdução</SectionTitle>
            <Paragraph>
              A privacidade dos visitantes do nosso site é muito importante para
              nós, e estamos comprometidos em protegê-la.
            </Paragraph>
            <Paragraph>
              Esta política explica o que faremos com suas informações pessoais.
            </Paragraph>
            <Paragraph>
              Consentir com o uso de cookies de acordo com os termos desta política
              quando você acessa nosso site pela primeira vez nos permite usar
              cookies toda vez que você acessa nosso site. Esses cookies são
              ferramentas técnicas que permitem que sua experiência ao navegar em
              nosso site seja a melhor possível.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>2. Coleta de Dados Pessoais</SectionTitle>
            <TopicList>
              <Topic>
                <TopicNumber>2.1</TopicNumber>
                Informações sobre o seu computador, incluindo seu endereço IP,
                localização geográfica, tipo e versão do navegador e sistema
                operacional;
              </Topic>
              <Topic>
                <TopicNumber>2.2</TopicNumber>
                Informações sobre suas visitas e uso deste site, incluindo fonte
                de referência, duração da visita, visualizações de página e caminhos
                de navegação no site;
              </Topic>
              <Topic>
                <TopicNumber>2.3</TopicNumber>
                Informações como seu endereço de e-mail, que você digita quando se
                registra em nosso site;
              </Topic>
              <Topic>
                <TopicNumber>2.4</TopicNumber>
                Informações que você digita ao criar um perfil em nosso site – por
                exemplo, seu nome, fotos de perfil, gênero, data de nascimento, status
                de relacionamento, interesses e hobbies, informações educacionais e de
                emprego;
              </Topic>
              <Topic>
                <TopicNumber>2.5</TopicNumber>
                Informações como seu nome e endereço de e-mail, que você digita
                para configurar assinaturas de nossos e-mails e/ou newsletters;
              </Topic>
              <Topic>
                <TopicNumber>2.6</TopicNumber>
                Informações que você fornece ao digitar durante o uso dos serviços
                em nosso site;
              </Topic>
              <Topic>
                <TopicNumber>2.7</TopicNumber>
                Informações geradas ao usar nosso site, incluindo quando, com que
                frequência e em que circunstâncias você o utiliza e nele navega;
              </Topic>
              <Topic>
                <TopicNumber>2.8</TopicNumber>
                Informações relacionadas a tudo o que você compra, serviços que
                usa ou transações que realiza através do nosso site, incluindo nome,
                endereço, número de telefone, endereço de e-mail e dados do cartão de
                crédito;
              </Topic>
              <Topic>
                <TopicNumber>2.9</TopicNumber>
                Informações que você publica em nosso site com a intenção de
                publicá-las na internet, incluindo seu nome de usuário, fotos de
                perfil e o conteúdo de suas publicações;
              </Topic>
              <Topic>
                <TopicNumber>2.10</TopicNumber>
                Informações contidas em quaisquer comunicações que você nos envia
                por e-mail ou através de nosso site, incluindo o conteúdo e os
                metadados da comunicação;
              </Topic>
              <Topic>
                <TopicNumber>2.11</TopicNumber>
                Qualquer outra informação pessoal que você nos enviar.
              </Topic>
            </TopicList>
            <Paragraph>
              Antes de nos divulgar dados pessoais de outra pessoa, você deve obter
              o consentimento dessa pessoa para a divulgação e o processamento
              dessas informações pessoais de acordo com esta política. Deve, também,
              informar a finalidade da coleta e nos enviar o consentimento do
              terceiro nestes moldes.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>3. Uso de suas informações pessoais</SectionTitle>
            <Paragraph>
              As informações pessoais que nos são enviadas por meio de nosso site
              serão usadas para os fins especificados nesta Política ou nas páginas
              relevantes do site.
            </Paragraph>
            <Paragraph>
              <strong>Podemos usar suas informações pessoais para o seguinte:</strong>
            </Paragraph>
            <TopicList>
              <Topic>
                <TopicNumber>3.1</TopicNumber>
                Administrar nosso site e nossos negócios visando a uma adequada
                prestação de serviços;
              </Topic>
              <Topic>
                <TopicNumber>3.2</TopicNumber>
                Personalizar nosso site para você, tornando a navegação mais
                amistosa;
              </Topic>
              <Topic>
                <TopicNumber>3.3</TopicNumber>
                Possibilitar o uso dos serviços disponíveis em nosso site;
              </Topic>
              <Topic>
                <TopicNumber>3.4</TopicNumber>
                Enviar produtos adquiridos através do nosso site;
              </Topic>
              <Topic>
                <TopicNumber>3.5</TopicNumber>
                Prestar serviços adquiridos através do nosso site;
              </Topic>
              <Topic>
                <TopicNumber>3.6</TopicNumber>
                Enviar extratos, faturas e lembretes de pagamento, bem como
                coletar seus pagamentos;
              </Topic>
              <Topic>
                <TopicNumber>3.7</TopicNumber>
                Enviar comunicações comerciais que não sejam de marketing;
              </Topic>
              <Topic>
                <TopicNumber>3.8</TopicNumber>
                Enviar notificações por e-mail solicitadas especificamente por
                você;
              </Topic>
              <Topic>
                <TopicNumber>3.9</TopicNumber>
                Enviar comunicações de marketing relacionadas aos nossos negócios
                ou aos negócios de terceiros cuidadosamente selecionados que
                acreditamos ser do seu interesse, por correio ou, onde você
                especificamente concordou com isso, por e-mail ou tecnologia
                semelhante (você pode nos informar a qualquer momento se não mais
                quiser mais receber comunicações de marketing);
              </Topic>
              <Topic>
                <TopicNumber>3.10</TopicNumber>
                Fornecer a terceiros informações estatísticas sobre nossos
                usuários (mas esses terceiros não poderão identificar nenhum usuário
                individual a partir dessas informações);
              </Topic>
              <Topic>
                <TopicNumber>3.11</TopicNumber>
                Lidar com perguntas e reclamações feitas por você ou sobre você
                em relação ao nosso site;
              </Topic>
              <Topic>
                <TopicNumber>3.12</TopicNumber>
                Manter nosso site seguro e evitar fraudes;
              </Topic>
              <Topic>
                <TopicNumber>3.13</TopicNumber>
                Verificar a conformidade com os termos e condições que regem o
                uso do nosso site (incluindo o monitoramento de mensagens privadas
                enviadas por meio do serviço de mensagens privadas do nosso site); e
              </Topic>
              <Topic>
                <TopicNumber>3.14</TopicNumber>
                Outros usos que serão devidamente informados e cujo seu
                consentimento será especialmente obtido
              </Topic>
            </TopicList>
            <Paragraph>
              Se você enviar informações pessoais para publicação em nosso site,
              publicaremos e usaremos essas informações de acordo com o
              consentimento que você nos concedeu, nos limites e para a finalidade
              estabelecida.
            </Paragraph>
            <Paragraph>
              Suas configurações de privacidade podem ser usadas para limitar a
              publicação de suas informações em nosso site e ajustadas através do
              uso de controles de privacidade disponíveis no site.
            </Paragraph>
            <Paragraph>
              Sem seu consentimento expresso, não forneceremos suas informações
              pessoais a terceiros para fins de marketing direto por parte deles ou
              de terceiros.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>4. Divulgação de Dados Pessoais</SectionTitle>
            <Paragraph>
              Podemos divulgar suas informações pessoais a qualquer um de nossos
              funcionários, executivos, seguradoras, consultores profissionais,
              agentes, fornecedores ou subcontratados conforme razoavelmente
              necessário para os fins estabelecidos nesta política.
            </Paragraph>
            <Paragraph>
              Podemos divulgar suas informações pessoais a qualquer membro de nosso
              grupo de empresas (isso significa nossas subsidiárias, nossa holding e
              todas as suas subsidiárias) conforme razoavelmente necessário para os
              fins estabelecidos nesta política
            </Paragraph>
            <Paragraph>
              Podemos divulgar suas informações pessoais:
            </Paragraph>
            <Paragraph>
              Na medida em que somos obrigados a fazê-lo por lei;
            </Paragraph>
            <TopicList>
              <Topic>
                <TopicNumber>4.1</TopicNumber>
                Em relação a qualquer processo judicial em andamento ou potencial,
                desde que haja ordem específica e fundamentada nesse sentido;
              </Topic>
              <Topic>
                <TopicNumber>4.2</TopicNumber>
                Para estabelecer, exercer ou defender nossos direitos legais
                (incluindo fornecer informações a terceiros para fins de prevenção de
                fraudes e redução do risco de crédito), ocasião em que você será
                imediatamente informado;
              </Topic>
              <Topic>
                <TopicNumber>4.3</TopicNumber>
                Ao comprador (ou comprador em potencial) de qualquer negócio ou
                ativo que estejamos vendendo (ou contemplando vender); e
              </Topic>
              <Topic>
                <TopicNumber>4.4</TopicNumber>
                A qualquer pessoa que acreditemos razoavelmente que possa
                solicitar a um tribunal ou outra autoridade competente a divulgação
                dessas informações pessoais, quando, em nossa opinião razoável, for
                provável que tal tribunal ou autoridade ordene a divulgação dessas
                informações pessoais.
              </Topic>
            </TopicList>
            <Paragraph>
              Nunca forneceremos suas informações pessoais a terceiros a não ser
              mediante seu consentimento ou nos casos estabelecidos nesta Política
              de Privacidade.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>5. Transferências Internacionais de Dados Pessoais</SectionTitle>
            <Paragraph>
              As informações que coletamos podem ser armazenadas, processadas e
              transferidas entre qualquer um dos países em que operamos, a fim de
              nos permitir usar as informações de acordo com esta Política de
              Privacidade, nos termos do artigo 33 da Lei nº 13.709/2018, a Lei
              Geral de Proteção de Dados, ou LGPD.
            </Paragraph>
            <Paragraph>
              As informações que coletamos podem ser transferidas para os seguintes
              países que não possuem leis de proteção de dados equivalentes às
              vigentes no Espaço Econômico Europeu: Estados Unidos da América,
              Rússia, Japão, China e Índia.
            </Paragraph>
            <Paragraph>
              As informações pessoais que você publica em nosso site ou envia para
              publicação em nosso site podem estar disponíveis, através da internet,
              em todo o mundo. Não podemos impedir o uso ou uso indevido de tais
              informações por terceiros.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>6. Retenção de Dados Pessoais</SectionTitle>
            <Paragraph>
              Esta Seção define nossas políticas e procedimentos de retenção e
              tratamento de dados pessoais, projetados para ajudar a garantir o
              cumprimento de nossas obrigações legais em relação ao tratamento e
              exclusão de dados pessoais.
            </Paragraph>
            <Paragraph>
              As informações pessoais que processamos para qualquer propósito ou
              propósitos não devem ser mantidas por mais tempo do que o necessário
              para esse propósito ou propósitos.
            </Paragraph>
            <Paragraph>
              Não obstante as outras disposições desta Seção reteremos documentos
              (incluindo documentos eletrônicos) que contenham dados pessoais:
            </Paragraph>
            <TopicList>
              <Topic>
                <TopicNumber>6.1</TopicNumber>
                Na medida em que somos obrigados a fazê-lo por lei;
              </Topic>
              <Topic>
                <TopicNumber>6.2</TopicNumber>
                Se acreditarmos que os documentos podem ser relevantes para
                qualquer processo judicial em andamento ou potencial; e
              </Topic>
              <Topic>
                <TopicNumber>6.3</TopicNumber>
                Para estabelecer, exercer ou defender nossos direitos legais e
                nosso legítimo interesse (incluindo fornecer informações a terceiros
                para fins de prevenção de fraudes e redução do risco de crédito).
              </Topic>
            </TopicList>
          </Section>

          <Section>
            <SectionTitle>7. Segurança de seus dados pessoais</SectionTitle>
            <Paragraph>
              Tomaremos as devidas precauções técnicas e organizacionais para evitar
              a perda, mau uso ou alteração de seus dados pessoais.
            </Paragraph>
            <Paragraph>
              Armazenaremos todas as suas informações pessoais fornecidas em nossos
              servidores seguros (protegidos por senha e firewall).
            </Paragraph>
            <Paragraph>
              Todas as transações financeiras eletrônicas realizadas através do
              nosso site serão protegidas por tecnologia de criptografia.
            </Paragraph>
            <Paragraph>
              Sempre investiremos nas mais adequadas ferramentas de cybersegurança
              para assegurar a incolumidade de seus dados pessoais.
            </Paragraph>
            <Paragraph>
              Quaisquer incidentes de segurança de dados que envolver seus dados
              serão prontamente informados a você. Tomaremos imediatas providências
              para excluir ou mitigar os respectivos efeitos.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>8. Alterações da Política de Privacidade</SectionTitle>
            <Paragraph>
              Podemos atualizar esta Política de Privacidade periodicamente, através
              da publicação de uma nova versão em nosso site.
            </Paragraph>
            <Paragraph>
              Você deve verificar esta página ocasionalmente para garantir que
              compreende quaisquer alterações nesta política. Podemos notificá-lo
              sobre alterações nesta política por e-mail ou através do sistema de
              mensagens privadas em nosso site.
            </Paragraph>
            <Paragraph>
              Em caso de dúvidas sobre esta Política de Privacidade você sempre
              poderá nos contatar por meio do site.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>9. Seus Direitos</SectionTitle>
            <Paragraph>
              Você pode nos instruir a fornecer qualquer informação pessoal que
              detenhamos sobre você. Pode, também, na forma da lei, pedir
              verificação, alteração, correção, portabilidade e exclusão de seus
              dados pessoais.
            </Paragraph>
            <Paragraph>
              Tratamos suas informações pessoais solicitadas na extensão permitida
              por lei, especialmente as leis de proteção de dados.
            </Paragraph>
            <Paragraph>
              Você pode nos instruir a qualquer momento para não processar suas
              informações pessoais para fins de marketing. Nós só utilizaremos seus
              dados pessoais para apresentar nossos produtos e serviços mediante seu
              prévio, expresso e informado consentimento.
            </Paragraph>
            <Paragraph>
              Seus dados pessoais poderão a qualquer momento ser solicitados por
              você. Os direitos do titular, previstos nos artigos 17 a 20 da LGPD,
              poderão ser exercidos a qualquer tempo e sua concretização será por
              nós providenciada com a maior brevidade possível.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>10. Sites de Terceiros</SectionTitle>
            <Paragraph>
              Nosso site inclui links para e detalhes sobre sites de Terceiros.
            </Paragraph>
            <Paragraph>
              Não temos controle sobre e não somos responsáveis pelas políticas e
              práticas de privacidade de terceiros.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>11. Atualização de Informações</SectionTitle>
            <Paragraph>
              Informe-nos se as informações pessoais que mantemos sobre você
              precisam ser corrigidas ou atualizadas.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>12. Cookies</SectionTitle>
            <Paragraph>
              Nosso site usa cookies.
            </Paragraph>
          </Section>
        </ContentWrapper>
      </Content>

      {/* Footer */}
      <PageFooter>
        <FooterContent>
          {constants.linkIcon && (
            <FooterLogo src={constants.linkIcon} alt={constants.nameEmpresa} />
          )}
          <FooterDescription>
            Somos uma empresa brasileira com visão global, que impulsiona conexões
            mais inteligentes e de livre acesso.
          </FooterDescription>
          <Divider />
          <FooterText>
            © {new Date().getFullYear()} {constants.nameEmpresa}. Todos os direitos reservados.
          </FooterText>
        </FooterContent>
      </PageFooter>
    </PageContainer>
  );
}

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--gradient-bg);
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--bg-navbar);
  backdrop-filter: var(--blur-md);
  border-bottom: var(--border-white-subtle);
  padding: 1rem 2rem;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  object-fit: contain;
`;

const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-primary);
`;

const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-md);
  background: var(--white-alpha-05);
  border: var(--border-white-subtle);
  transition: var(--transition-fast);

  &:hover {
    background: var(--primary-alpha-15);
    color: var(--color-primary);
    border-color: var(--primary-alpha-30);
  }
`;

const Content = styled.main`
  flex: 1;
  padding: 3rem 2rem;
`;

const ContentWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background: var(--bg-card);
  border-radius: var(--radius-2xl);
  border: var(--border-white-subtle);
  padding: 3rem;
  box-shadow: var(--shadow-2xl);

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-primary);
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: var(--border-white-subtle);

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--color-primary);
  margin: 1.5rem 0 1rem;
  text-align: center;
  padding: 0 0.5rem;
`;

const Paragraph = styled.p`
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 0.5rem;
  padding: 0 0.5rem;
  font-size: 1rem;

  strong {
    color: var(--text-primary);
    font-weight: 700;
  }
`;

const TopicList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0.5rem 0;
`;

const Topic = styled.div`
  display: flex;
  gap: 0.5rem;
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 1rem;
  font-weight: 700;
  text-align: left;
  margin: 0.5rem 2rem;
  padding: 0 0.5rem;
`;

const TopicNumber = styled.span`
  color: var(--color-primary);
  font-weight: 700;
  flex-shrink: 0;
`;

const PageFooter = styled.footer`
  background: var(--gradient-bg-alt);
  padding: 2rem;
  border-top: var(--border-white-subtle);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const FooterLogo = styled.img`
  height: 40px;
  object-fit: contain;
  margin: 1rem 0;
`;

const FooterDescription = styled.p`
  color: var(--text-tertiary);
  font-size: 0.95rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const Divider = styled.div`
  height: 1px;
  width: 90%;
  background-color: var(--white-alpha-10);
  margin-bottom: 1rem;
`;

const FooterText = styled.p`
  color: var(--text-tertiary);
  font-size: 0.9rem;
`;
