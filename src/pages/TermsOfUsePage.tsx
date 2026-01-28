import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAppConstants } from "../hooks/useAppConstants";

export default function TermsOfUsePage() {
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
          <PageTitle>TERMO DE ADESÃO - PLANO/BENEFÍCIOS DE SERVIÇOS PRÉ-PAGOS</PageTitle>

          <Paragraph>
            O plano/benefício de serviço pré-pago é realizado em conjunto com a
            prestadora de serviços Telecom – {constants.nameEmpresa}, para toda pessoa física
            ou jurídica, doravante denominada Consumidor. Ao comprar um chip e
            carregando-o com um dos valores de planos/benefícios disponíveis, o
            consumidor está aderindo automaticamente ao plano/benefício
            correspondente ao plano/benefício de serviço comercializado, conforme
            previsto no presente Termo de Adesão e divulgado no nosso site.
          </Paragraph>

          <Section>
            <SectionTitle>1. Ativação do plano/benefício de serviço</SectionTitle>
            <Paragraph>
              A ativação do plano/benefício de serviço é feita automaticamente após
              a aquisição do plano/benefício pelo consumidor.
            </Paragraph>
            <Paragraph>
              Para aderir a um plano/benefício de serviço, o consumidor deve ter
              adquirido e ativado previamente uma linha {constants.nameEmpresa} e escolher por
              um dos valores de recarga disponíveis.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>2. Planos/benefícios de serviços</SectionTitle>
            <Paragraph>
              Os valores dos planos/benefícios de serviços estão disponíveis no site
              da {constants.nameEmpresa}.
            </Paragraph>
            <Paragraph>
              Adicionalmente ao valor do plano/benefício de serviço poderá ocorrer a
              cobrança para aquisição do chip (físico ou virtual).
            </Paragraph>
            <TopicList>
              <Topic>
                <TopicNumber>2.1</TopicNumber>
                Os planos/benefícios podem ter bônus de portabilidade e/ou recarga
                programada.
              </Topic>
            </TopicList>
            <Paragraph>
              O primeiro bônus de portabilidade será concedido em até 7 dias úteis
              após a conclusão, com sucesso, do processo de portabilidade.
            </Paragraph>
            <Paragraph>
              Nas próximas aquisições de planos/benefícios os bônus de portabilidade
              e recarga programada são disponibilizados automaticamente acompanhando
              a vigência do plano, ou seja, se o consumidor adquirir o plano sendo
              um consumidor portado ou com recarga programada, ele não receberá essa
              bonificação apenas no seu primeiro mês de uso do chip, mas sim durante
              todo o período que o consumidor manter o seu plano ativo.
            </Paragraph>
            <Paragraph>
              O primeiro bônus da recarga programada será concedido a partir do 2º
              mês após aquisição do plano/benefício com cartão de crédito e marcação
              da recarga programada, com sucesso. No caso dos planos trimestrais,
              semestrais e anuais os bônus da recarga programada dos
              planos/benefícios serão atribuídos mensalmente nas renovações no
              período contratado (trimestral, semestral e/ou anual).
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>3. Ligações</SectionTitle>
            <Paragraph>
              Todas as chamadas para os serviços públicos de emergência são
              gratuitas. As chamadas para os demais serviços de utilidade pública,
              por sua vez, poderão ser tarifadas pelo valor de uma chamada local,
              embora a prestação do serviço propriamente dita seja gratuita.
            </Paragraph>
            <TopicList>
              <Topic>
                <TopicNumber>3.1</TopicNumber>
                As chamadas ilimitadas são para ligações locais e longa distância
                nacionais com código de seleção de prestadora 41 (CSP 41) para números
                de telefone fixos ou móveis de qualquer prestadora dentro do
                território nacional, desde que não esteja caracterizado o uso
                fraudulento.
              </Topic>
              <Topic>
                <TopicNumber>3.2</TopicNumber>
                Para plano/benefício que contenha ligações ilimitadas, o
                consumidor poderá usufruir do benefício dentro do seu prazo de
                validade, desde que não haja uso fraudulento e não esteja enquadrada
                em uso indevido, conforme descrito no item 8 do presente Termo de
                Adesão.
              </Topic>
              <Topic>
                <TopicNumber>3.3</TopicNumber>
                Chamadas não incluídas no benefício da oferta:
              </Topic>
            </TopicList>
            <BulletList>
              <li>
                Ligações de Longa Distância Internacional, Roaming Internacional de
                Voz, Dados e SMS com qualquer código de prestadora, inclusive o
                código 41 da TIM;
              </li>
              <li>Ligações de Longa Distância Nacional sem o código 41;</li>
              <li>Ligações para códigos não geográficos como 0300, 0500 e 0900;</li>
              <li>
                Ligações para números especiais com três ou quatro dígitos, com
                exceção as chamadas para os Serviços de Utilidade Pública e de
                Emergência (SUP) listados na regulamentação da ANATEL
              </li>
              <li>Utilização de qualquer serviço fora da Rede Surf Telecom;</li>
              <li>
                Serviços adicionais por ligação como downloads de sons e jogos,
                votação e concursos, portais de voz etc., possuem custos variáveis,
                de acordo com o provedor da campanha ou serviço em questão.
              </li>
            </BulletList>
          </Section>

          <Section>
            <SectionTitle>4. SMS</SectionTitle>
            <Paragraph>
              O serviço de mensagens curtas (SMS - Short Message Service em inglês)
              é apenas para números móveis nacionais, de acordo com o
              plano/benefício contratado no plano/benefício de serviço.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>5. Pagamento e Renovação</SectionTitle>
            <TopicList>
              <Topic>
                <TopicNumber>5.1</TopicNumber>
                O consumidor poderá optar por fazer renovações mensais mediante
                aquisição dos planos/benefícios que melhor lhe convier dentro dos
                disponíveis em qualquer canal de atendimento da {constants.nameEmpresa},
                presencial ou remoto num dos valores disponíveis.
              </Topic>
              <Topic>
                <TopicNumber>5.1.1</TopicNumber>
                Considera-se atendimento presencial, todo atendimento realizado
                nos estabelecimentos da {constants.nameEmpresa} e nos pontos de atendimento
                associados à sua marca.
              </Topic>
              <Topic>
                <TopicNumber>5.1.2</TopicNumber>
                Considera-se atendimento remoto aquele realizado por meio de
                Centro de Atendimento Telefônico, do Atendimento por Internet, bem
                como por qualquer outro meio disponibilizado ou utilizado pela
                prestadora em conjunto com a {constants.nameEmpresa} para interação remota com o
                consumidor.
              </Topic>
              <Topic>
                <TopicNumber>5.2</TopicNumber>
                A renovação mensal poderá ser feita mediante pagamento em dinheiro
                nos pontos de atendimento presencial ou por outros meios disponíveis
                como cartão de crédito, cartão de débito, dentro outros.
              </Topic>
              <Topic>
                <TopicNumber>5.3</TopicNumber>
                O consumidor que não realizar uma recarga até a data de vencimento
                do plano/benefício vigente, terá seu plano/benefício remanescente
                expirado.
              </Topic>
            </TopicList>
          </Section>

          <Section>
            <SectionTitle>6. Mecânica dos planos</SectionTitle>
            <TopicList>
              <Topic>
                <TopicNumber>6.1</TopicNumber>
                <strong>Internet sem Cortes</strong>
              </Topic>
            </TopicList>
            <Paragraph>
              Durante a validade do plano/benefício contratado, mesmo após o consumo
              de 100% do plano/benefício de dados, o acesso à internet não será
              cortado e o consumidor continuará navegando em velocidade reduzida (32
              Kbps) até o final do prazo de validade do plano/benefício.
            </Paragraph>
            <TopicList>
              <Topic>
                <TopicNumber>6.2</TopicNumber>
                <strong>Data de Expiração do plano/benefício</strong>
              </Topic>
            </TopicList>
            <Paragraph>
              O consumidor que adquirir um plano/benefício terá a data de expiração
              garantida pelo período do plano/benefício adquirido.
            </Paragraph>
            <Paragraph>
              Planos/benefícios trimestrais, semestrais e anuais têm sua renovação
              agendada mensalmente, garantido todo o período contratado. Nesse
              plano/benefício o consumidor adquire 3, 6 ou 12 recargas de 1 mês de
              validade, com recorrência programada mensalmente.
            </Paragraph>
            <TopicList>
              <Topic>
                <TopicNumber>6.3</TopicNumber>
                <strong>Acúmulo de benefícios</strong>
              </Topic>
            </TopicList>
            <Paragraph>
              Quando realizada a compra de um plano/benefício antes da data de
              vencimento do plano/benefício atual, além do benefício recém
              adquirido, o consumidor poderá acumular saldos remanescentes.
            </Paragraph>
            <InfoBox>
              <Paragraph>
                <strong>Limite de Acúmulo de Benefícios</strong> = Benefício da Recarga Adquiridos +
                Recebidos nos últimos 20 ou 30 dias.
              </Paragraph>
            </InfoBox>
            <Paragraph>
              Caso a nova recarga seja feita após o término do período de validade
              do plano/benefício, não haverá acúmulo de benefício referente ao
              plano/benefício anteriores, pois os saldos remanescentes já teriam
              sido expirados. Em nenhum caso poderão ser acumulados benefícios de
              voz superiores à 2000 minutos, benefícios de SMS superiores à 300 e
              benefícios de dados superiores à 500GB.
            </Paragraph>
            <TopicList>
              <Topic>
                <TopicNumber>6.4</TopicNumber>
                <strong>Acesso a aplicativos e sites gratuitos</strong>
              </Topic>
            </TopicList>
            <Paragraph>
              Caso o plano/benefício contratado ofereça promocionalmente acessos
              gratuitos a aplicativos e sites, como os de redes sociais, estes
              acessos não serão descontados do plano/benefício desde que as
              utilizações não sejam para chamadas de vídeo, downloads de vídeos e
              backups da própria ferramenta.
            </Paragraph>
            <TopicList>
              <Topic>
                <TopicNumber>6.5</TopicNumber>
                <strong>WhatsApp gratuito</strong>
              </Topic>
            </TopicList>
            <Paragraph>
              Nos casos dos planos/benefícios com WhatsApp gratuito, a gratuidade
              aplica-se para o envio/recebimento de mensagens de texto, arquivos de
              foto e arquivos de áudio.
            </Paragraph>
            <Paragraph>
              As ligações (chamadas) de voz ou vídeo realizadas e/ou recebidas
              através do WhatsApp são cobradas (deduzidas do pacote de dados)
              normalmente.
            </Paragraph>
            <Paragraph>
              Da mesma forma, qualquer utilização de internet fora do aplicativo,
              mesmo que originada de um link enviado via aplicativo, irá gerar
              desconto do pacote de internet que o consumidor tiver ativo.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>7. Rede e Cobertura</SectionTitle>
            <TopicList>
              <Topic>
                <TopicNumber>7.1</TopicNumber>
                <strong>Roaming Nacional</strong>
              </Topic>
            </TopicList>
            <Paragraph>
              Dentro da área de cobertura de sua operadora de serviço, o Roaming é
              gratuito para o consumidor. Não haverá cobrança adicional para o
              encaminhamento das chamadas de longa distância em todo o território
              nacional.
            </Paragraph>
            <Paragraph>
              Não haverá cobrança de taxa de deslocamento para as chamadas recebidas
              fora de sua localidade quando em território nacional.
            </Paragraph>
            <Paragraph>
              <strong>7.2 Velocidades de navegação na internet</strong>
            </Paragraph>
            <Paragraph>
              Desde que a qualidade de sinal esteja satisfatória onde o aparelho se
              encontra, a velocidade de referência padrão na rede 3G é de até 1 MBPS
              para download e de até 100 KBPS para upload, enquanto na rede 4G é de
              até 5 MBPS para download e de até 500 KBPS para upload.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>8. Usos não autorizados no plano/benefício de serviço</SectionTitle>
            <Paragraph>
              O consumidor estará passível de bloqueio e cancelamento de sua adesão
              a este termo, quando for identificado o uso indevido do
              plano/benefício enquadrado em quaisquer dos itens abaixo:
            </Paragraph>
            <TopicList>
              <Topic>
                <TopicNumber>8.1</TopicNumber>
                Comercialização de minutos/serviços ou utilização de SMS
                (mensagens) com finalidade comercial, destinados à obtenção de lucro
                por parte do consumidor;
              </Topic>
              <Topic>
                <TopicNumber>8.2</TopicNumber>
                Envio de SMS (mensagens) através de máquinas, computadores ou
                outro dispositivo que não seja o aparelho celular do consumidor;
              </Topic>
              <Topic>
                <TopicNumber>8.3</TopicNumber>
                Envio de SMS (mensagens) indesejados classificados como SPAM;
              </Topic>
              <Topic>
                <TopicNumber>8.4</TopicNumber>
                Realização de chamadas através de máquinas, computadores ou outro
                dispositivo que não seja o aparelho celular utilizado pelo consumidor;
              </Topic>
              <Topic>
                <TopicNumber>8.5</TopicNumber>
                Realização de chamadas indesejadas classificadas como SPAM;
              </Topic>
              <Topic>
                <TopicNumber>8.6</TopicNumber>
                Utilização de equipamentos como GSM Box, Black Box e equipamentos
                similares;
              </Topic>
              <Topic>
                <TopicNumber>8.7</TopicNumber>
                Desbalanceamento do tráfego sainte/entrante, contendo volume de
                chamadas originadas acima de três vezes o de chamadas recebidas;
              </Topic>
              <Topic>
                <TopicNumber>8.8</TopicNumber>
                Utilização do plano/benefício para realização de conferências.
              </Topic>
              <Topic>
                <TopicNumber>8.9</TopicNumber>
                Utilização do plano/benefício para serviços de salas de
                conversação, tele amizade, telesexo e similares.
              </Topic>
            </TopicList>
          </Section>

          <Section>
            <SectionTitle>9. Cancelamento</SectionTitle>
            <Paragraph>
              O consumidor pode realizar o cancelamento da oferta entrando em
              contato via chat com nossa equipe de atendimento direto no aplicativo.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>10. Renovação da Adesão à plano/benefício de serviço</SectionTitle>
            <TopicList>
              <Topic>
                <TopicNumber>10.1</TopicNumber>
                A renovação/contratação do plano/benefício ocorre sempre que o
                consumidor da operadora de serviço efetuar uma recarga do
                plano/benefício correspondente.
              </Topic>
              <Topic>
                <TopicNumber>10.2</TopicNumber>
                O consumidor tem o direito de escolher o plano/benefício que
                melhor lhe convier com base nas recargas que estão disponíveis nos
                canais de recarga da prestadora.
              </Topic>
            </TopicList>
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
  font-size: 1.9rem;
  font-weight: 700;
  color: var(--color-primary);
  text-align: center;
  margin: 2rem 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Section = styled.section`
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--color-primary);
  margin: 1.5rem 0;
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

  strong {
    color: var(--text-primary);
  }
`;

const TopicNumber = styled.span`
  color: var(--color-primary);
  font-weight: 700;
  flex-shrink: 0;
`;

const BulletList = styled.ul`
  font-weight: 700;
  padding: 0rem 4rem;
  color: var(--text-secondary);
  line-height: 1.8;

  li {
    margin-bottom: 0.5rem;
  }
`;

const InfoBox = styled.div`
  background: var(--primary-alpha-10);
  border: 1px solid var(--primary-alpha-30);
  border-radius: var(--radius-lg);
  padding: 1rem 1.5rem;
  margin: 1rem 0;
  text-align: center;
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
