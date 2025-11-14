import { useState } from 'react';
import imagem from '../assets/cell.webp';
import Botaoapple from '../assets/botao_apple.svg';
import BotaoAndroid from '../assets/botao_google.svg'

// import { Container } from '@mui/material';

interface InfoItem {
  title: string;
  content: string;
  icon: string;
}

interface CardProps {
  info: InfoItem;
  index: number;
  side: 'left' | 'right';
}

export default function InfoSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const InfosLeft: InfoItem[] = [
    {
      title: "Segurança",
      content: "Nosso maior foco é na segurança de seus dados e do nosso aplicativo.",
      icon: "🔒",
    },
    {
      title: "Gerencie Seus Planos",
      content: "Controle seus planos com facilidade e segurança direto pelo app.",
      icon: "⚡",
    },
  ];

  const infosRight: InfoItem[] = [
    {
      title: "Faturas",
      content: "Com o aplicativo da Zyber você consegue renovar o seu plano com um só clique.",
      icon: "💳",
    },
    {
      title: "Acúmulo de Gigas",
      content: "Gerencie e acompanhe seus gigas acumulados em tempo real.",
      icon: "📊",
    },
  ];

  const CardComponent = ({ info, index, side }: CardProps) => (
    <div
      onMouseEnter={() => setHoveredCard(`${side}-${index}`)}
      onMouseLeave={() => setHoveredCard(null)}
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        padding: '2rem',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: hoveredCard === `${side}-${index}`
          ? '0 8px 32px rgba(255, 87, 51, 0.3)'
          : '0 4px 16px rgba(0, 0, 0, 0.2)',
        textAlign: 'left',
        transition: 'all 0.3s ease',
        transform: hoveredCard === `${side}-${index}` ? 'translateY(-8px)' : 'translateY(0)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Glow effect no hover */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at center, rgba(255,87,51,0.1) 0%, transparent 70%)',
          opacity: hoveredCard === `${side}-${index}` ? 1 : 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none'
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          fontSize: '2rem',
          marginBottom: '1rem',
          filter: 'grayscale(0.3)',
        }}>
          {info.icon}
        </div>

        <h3
          style={{
            color: '#FF5733',
            marginBottom: '0.75rem',
            fontSize: '1.35rem',
            fontWeight: '700',
            letterSpacing: '-0.5px'
          }}
        >
          {info.title}
        </h3>

        <p
          style={{
            color: '#b0b0b0',
            lineHeight: 1.7,
            fontSize: '0.95rem',
          }}
        >
          {info.content}
        </p>
      </div>

      {/* Corner accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '60px',
        height: '60px',
        background: 'linear-gradient(135deg, transparent 50%, rgba(255,87,51,0.1) 50%)',
        transition: 'all 0.3s ease',
        opacity: hoveredCard === `${side}-${index}` ? 1 : 0
      }} />
    </div>
  );

  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "2.5rem",
        padding: "5rem 2rem",
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Grid de fundo sutil */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(rgba(255, 87, 51, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 87, 51, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        opacity: 0.5,
        pointerEvents: 'none'
      }} />

      {/* Coluna Esquerda */}
      <div
        style={{
          flex: "1 1 280px",
          maxWidth: "350px",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          position: 'relative',
          zIndex: 1
        }}
      >
        {InfosLeft.map((info, index) => (
          <CardComponent key={index} info={info} index={index} side="left" />
        ))}
      </div>

      {/* Imagem Central */}
      <div
        style={{
          flex: "1 1 300px",
          maxWidth: "700px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "3rem",
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Badge superior */}
        <div
          style={{
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            background: 'rgba(255, 87, 51, 0.1)',
            border: '1px solid rgba(255, 87, 51, 0.3)',
            borderRadius: '50px',
            fontSize: '0.875rem',
            color: '#FF5733',
            fontWeight: '600',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '-1rem'
          }}
        >
          📱 Baixe o App
        </div>

        <div
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* Glow effect atrás da imagem */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '120%',
            height: '120%',
            background: 'radial-gradient(circle, rgba(255,87,51,0.2) 0%, transparent 70%)',
            filter: 'blur(80px)',
            zIndex: 0
          }} />

          <div style={{
            position: 'relative',
            padding: '2rem',
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(5px)',
            borderRadius: '50px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }}>
            <div style={{
              width: '100%',
              maxWidth: '400px',
              height: '500px',
              borderRadius: '40px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid rgba(255, 87, 51, 0.2)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Placeholder para imagem do celular */}
              <div style={{
                textAlign: 'center',
                color: '#666',
                padding: '6rem'
              }}>
                <img src={imagem}
                  style={{
                    width: '801px',
                    height: 'auto',
                    objectFit: 'contain',
                    borderRadius: '20px',
                    alignItems: 'center'
                  }}

                >
                </img>
              </div>
            </div>
          </div>
        </div>

        {/* Botões */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            { text: "App Store", href: "https://apps.apple.com/us/app/zyber/id6746278691", icon: Botaoapple },
            { text: "Google Play", href: "https://play.google.com/store/apps/details?id=app.mobile.zyber", icon: BotaoAndroid }
          ].map((btn, i) => (
            <a
              key={i}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <button
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 25px rgba(250, 55, 12, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(250, 55, 12, 0.4)';
                }}
                style={{
                  padding: '1rem 2rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#fff',
                  background: i === 0
                    ? 'linear-gradient(135deg, #FF5733 0%, #444 100%)'
                    : 'linear-gradient(135deg, #FF5733 0%, #444 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(255, 87, 51, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  minWidth: '50px',
                  justifyContent: 'center',
                  maxWidth: '150px',
                  height: '50px',
                  justifyItems: 'revert'
                }}
              >
                <img
                  src={btn.icon}
                  alt={btn.text}
                  style={{ height: '50px', width: 'auto', display: 'block' }}
                />

              </button>
            </a>
          ))}
        </div>
      </div>

      {/* Coluna Direita */}
      <div
        style={{
          flex: "1 1 280px",
          maxWidth: "350px",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          position: 'relative',
          zIndex: 1
        }}
      >
        {infosRight.map((info, index) => (
          <CardComponent key={index} info={info} index={index} side="right" />
        ))}
      </div>
    </section>
  );
}