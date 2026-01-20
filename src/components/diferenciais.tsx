import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useAppConstants } from '../hooks/useAppConstants'

export default function FAQ() {
  const { constants } = useAppConstants()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      id: 1,
      pergunta: 'É necessário pagar alguma taxa para aderir ao plano?',
      resposta:
        'Não há cobrança de taxa de adesão ao Plano. Para aderir ao plano, o Cliente deve adquirir e ativar previamente o chip da AIVA no aplicativo. A ativação do plano é feita automaticamente após a realização da primeira recarga, no valor mínimo de R$ 34,90 (Trinta e quatro reais e noventa centavos), após o isso o Cliente receberá automaticamente a confirmação de ativação do plano por SMS e/ou App.',
    },
    {
      id: 2,
      pergunta: 'Como é feita a renovação do plano?',
      resposta:
        'A renovação do plano é automática, e ocorre no dia seguinte ao término da validade do mesmo, que é de 30 (trinta) dias. Para isso, o Cliente precisa efetuar o pagamento da sua próxima assinatura através de um dos métodos disponíveis no aplicativo AIVA (Pix, Boleto e Cartão de Crédito ou Débito). O Cliente poderá manifestar-se em contrário, pela não renovação do plano, podendo ainda, optar por outra promoção em vigor se assim o desejar, basta efetuar a solicitação pelo APP AIVA.',
    },
    {
      id: 3,
      pergunta: `Como faço a portabilidade para a ${constants.nameEmpresa}?`,
      resposta: `O titular da conta utiliza o seu Aplicativo ou o CHAT para solicitar. Serão solicitadas as seguintes informações: Nome e CPF, número que deseja manter, operadora antiga. *As linhas precisam estar no mesmo CPF e DDD. Pronto! Em até 5 dias úteis o seu Plano ${constants.nameEmpresa} estará disponível no seu número.`,
    },
    {
      id: 4,
      pergunta: 'É possível fazer ligações internacionais (DDI)?',
      resposta:
        'Não é possível. Os benefícios dos serviços de voz/sms do plano não são válidos para ligações internacionais.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Section id="faq">
      {/* Animated grid background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
          linear-gradient(var(--primary-alpha-10) 1px, transparent 1px),
          linear-gradient(90deg, var(--primary-alpha-10) 1px, transparent 1px)
        `,
          backgroundSize: '60px 60px',
          opacity: 0.6,
          pointerEvents: 'none',
          animation: 'gridMove 20s linear infinite',
        }}
      />

      {/* Floating orbs */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: '400px',
          height: '400px',
          background:
            'radial-gradient(circle, var(--primary-alpha-15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'var(--blur-xl)',
          animation: 'float 8s ease-in-out infinite',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: '350px',
          height: '350px',
          background:
            'radial-gradient(circle, rgba(100,100,255,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'var(--blur-xl)',
          animation: 'float 10s ease-in-out infinite reverse',
        }}
      />

      <Container>
        <SectionTitle>Perguntas Frequentes</SectionTitle>
        <Subtitle>Tire suas dúvidas sobre nossos serviços</Subtitle>
        <FAQGrid>
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.id}
              as={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FAQQuestion
                onClick={() => toggleFAQ(index)}
                isOpen={openIndex === index}
              >
                <QuestionText isOpen={openIndex === index}>
                  {faq.pergunta}
                </QuestionText>
                <Arrow isOpen={openIndex === index}>▼</Arrow>
              </FAQQuestion>
              <FAQAnswer isOpen={openIndex === index}>
                <AnswerText>{faq.resposta}</AnswerText>
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQGrid>
      </Container>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }

        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(60px); }
        }
      `}</style>
    </Section>
  )
}

/* --- Tipos --- */
interface ToggleProps {
  isOpen: boolean
}

/* --- Styled Components --- */
const Section = styled.section`
  width: 100%;
  padding: 6rem 1.5rem;
  background: var(--gradient-bg);
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
`

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  padding: 0 1rem;
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 0.5rem;
  background: var(--gradient-text-white);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 3rem;
  }
`

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.8rem;
  width: 100%;
  box-sizing: border-box;
  align-items: start;
`

const FAQItem = styled.div`
  background: var(--bg-card);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: var(--transition-medium);
  box-shadow: var(--shadow-dark-lg);
  border: var(--border-white-subtle);
  backdrop-filter: var(--blur-sm);

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary-alpha-30);
  }
`

const FAQQuestion = styled.div<ToggleProps>`
  padding: 1.8rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: ${(props) =>
    props.isOpen ? 'var(--bg-card-active)' : 'transparent'};
  transition: var(--transition-medium);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: ${(props) =>
      props.isOpen ? 'var(--color-primary)' : 'transparent'};
    transition: var(--transition-medium);
  }

  &:hover {
    background: ${(props) =>
      props.isOpen ? 'var(--bg-card-active)' : 'var(--white-alpha-05)'};
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

const QuestionText = styled.h3<ToggleProps>`
  font-size: 1.15rem;
  font-weight: 600;
  color: ${(props) =>
    props.isOpen ? 'var(--text-primary)' : 'var(--text-primary)'};
  margin: 0;
  transition: var(--transition-fast);
  line-height: 1.5;
  flex: 1;

  ${FAQQuestion}:hover & {
    color: ${(props) =>
      props.isOpen ? 'var(--text-primary)' : 'var(--color-primary)'};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const Arrow = styled.span<ToggleProps>`
  font-size: 1rem;
  color: ${(props) =>
    props.isOpen ? 'var(--color-primary)' : 'var(--color-primary)'};
  transition: var(--transition-medium);
  transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  background: ${(props) =>
    props.isOpen ? 'var(--primary-alpha-20)' : 'var(--primary-alpha-10)'};
`

const FAQAnswer = styled.div<ToggleProps>`
  max-height: ${(props) => (props.isOpen ? '600px' : '0')};
  overflow: hidden;
  transition: var(--transition-medium);
`

const AnswerText = styled.p`
  padding: 2rem;
  margin: 0;
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.8;
  background: linear-gradient(
    to bottom,
    var(--white-alpha-05) 0%,
    var(--white-alpha-02) 100%
  );
  border-top: var(--border-white-subtle);

  @media (max-width: 768px) {
    padding: 1.5rem;
    font-size: 0.95rem;
  }
`
