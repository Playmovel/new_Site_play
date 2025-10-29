// import aboutImage from "../assets/logo.png";
import { useState } from 'react';
import styled from "styled-components";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { id: 1, pergunta: "É necessário pagar alguma taxa para aderir ao plano?", resposta: "Não há cobrança de taxa de adesão ao Plano. Para aderir ao plano, o Cliente deve adquirir e ativar previamente o chip da AIVA no aplicativo. A ativação do plano é feita automaticamente após a realização da primeira recarga, no valor mínimo de R$ 34,90 (Trinta e quatro reais e noventa centavos), após o isso o Cliente receberá automaticamente a confirmação de ativação do plano por SMS e/ou App" },
    { id: 2, pergunta: "Como é feita a renovação do plano?", resposta: "A renovação do plano é automática, e ocorre no dia seguinte ao término da validade do mesmo, que é de 30 (trinta) dias. Para isso, o Cliente precisa efetuar o pagamento da sua próxima assinatura através de um dos métodos disponíveis no aplicativo AIVA (Pix, Boleto e Cartão de Crédito ou Débito). O Cliente poderá manifestar-se em contrário, pela não renovação do plano, podendo ainda, optar por outra promoção em vigor se assim o desejar, basta efetuar a solicitação pelo APP AIVA." },
    { id: 3, pergunta: "Como faço a portabilidade para a Zyber", resposta: "O titular da conta utiliza o seu Aplicativo ou o CHAT para solicitar. Serão solicitadas as seguintes informações: Nome e CPF Número que deseja manter Operadora antiga *As linhas precisam estar no mesmo CPF e DDD Pronto! Em até 5 dias úteis o seu Plano Zyber estará disponível no seu número." },
    { id: 4, pergunta: "É possível fazer ligações internacionais (DDI)", resposta: "Não é possível. Os benefícios dos serviços de voz/sms do plano não são válidos para ligações internacionais." }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq">
      <Container>
        <SectionTitle>Perguntas Frequentes</SectionTitle>
        <Subtitle>Tire suas dúvidas sobre nossos serviços</Subtitle>

        <FAQGrid>
          {faqs.map((faq, index) => (
            <FAQItem key={faq.id}>
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
    </Section>
  );
}

/* --- Tipos para styled components --- */
interface ToggleProps {
  isOpen: boolean;
}

/* --- Styled Components --- */
const Section = styled.section`
  width: 100%;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -100px;
    right: -100px;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(164, 25, 2, 0.08) 0%, transparent 70%);
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -100px;
    left: -100px;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(255, 229, 1, 0.1) 0%, transparent 70%);
    z-index: 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #a41902;
  text-align: center;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 3rem;
  }
`;

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FAQItem = styled.div`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 35px rgba(164, 25, 2, 0.12);
    border-color: rgba(164, 25, 2, 0.2);
  }
`;

const FAQQuestion = styled.div<ToggleProps>`
  padding: 1.8rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: ${props => (props.isOpen ? 'linear-gradient(135deg, #a41902 0%, #8a1502 100%)' : '#fff')};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: ${props => (props.isOpen ? '#ffe501' : '#a41902')};
    transition: all 0.4s ease;
  }

  &:hover {
    background: ${props => (props.isOpen ? 'linear-gradient(135deg, #8a1502 0%, #6a1102 100%)' : '#fafafa')};
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem;
  }
`;

const QuestionText = styled.h3<ToggleProps>`
  font-size: 1.15rem;
  font-weight: 600;
  color: ${props => (props.isOpen ? '#fff' : '#333')};
  margin: 0;
  transition: all 0.3s ease;
  padding-right: 1rem;
  line-height: 1.5;

  ${FAQQuestion}:hover & {
    color: ${props => (props.isOpen ? '#fff' : '#a41902')};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Arrow = styled.span<ToggleProps>`
  font-size: 1rem;
  color: ${props => (props.isOpen ? '#ffe501' : '#a41902')};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${props => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  background: ${props => (props.isOpen ? 'rgba(255, 229, 1, 0.2)' : 'rgba(164, 25, 2, 0.1)')};
`;

const FAQAnswer = styled.div<ToggleProps>`
  max-height: ${props => (props.isOpen ? '600px' : '0')};
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;

const AnswerText = styled.p`
  padding: 2rem;
  margin: 0;
  font-size: 1rem;
  color: #555;
  line-height: 1.8;
  background: linear-gradient(to bottom, #fafafa 0%, #ffffff 100%);
  border-top: 1px solid #f0f0f0;

  @media (max-width: 768px) {
    padding: 1.5rem;
    font-size: 0.95rem;
  }
`;
