import { motion } from 'framer-motion'
import imagem from '../assets/cell.webp'
import Botaoapple from '../assets/botao_apple.svg'
import BotaoAndroid from '../assets/botao_google.svg'
import { constants } from '../constants/contants'

// import { Container } from '@mui/material';

interface InfoItem {
  title: string
  content: string
  icon: string
}

interface CardProps {
  info: InfoItem
  index: number
  side: 'left' | 'right'
}

export default function InfoSection() {
  const InfosLeft: InfoItem[] = [
    {
      title: 'Segurança',
      content:
        'Nosso maior foco é na segurança de seus dados e do nosso aplicativo.',
      icon: '🔒',
    },
    {
      title: 'Gerencie Seus Planos',
      content:
        'Controle seus planos com facilidade e segurança direto pelo app.',
      icon: '⚡',
    },
  ]

  const infosRight: InfoItem[] = [
    {
      title: 'Faturas',
      content: `Com o aplicativo da ${constants.nameEmpresa} você consegue renovar o seu plano com um só clique.`,
      icon: '💳',
    },
    {
      title: 'Acúmulo de Gigas',
      content: 'Gerencie e acompanhe seus gigas acumulados em tempo real.',
      icon: '📊',
    },
  ]

  const CardComponent = ({ info, index }: CardProps) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      style={{
        background: 'var(--white-alpha-05)',
        backdropFilter: 'var(--blur-sm)',
        padding: '2rem',
        borderRadius: 'var(--radius-lg)',
        border: 'var(--border-white-medium)',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
        textAlign: 'left',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="info-card"
    >
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            fontSize: '2rem',
            marginBottom: '1rem',
            filter: 'grayscale(0.3)',
          }}
        >
          {info.icon}
        </div>

        <h3
          style={{
            color: 'var(--color-primary)',
            marginBottom: '0.75rem',
            fontSize: '1.35rem',
            fontWeight: '700',
            letterSpacing: '-0.5px',
          }}
        >
          {info.title}
        </h3>

        <p
          style={{
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            fontSize: '0.95rem',
          }}
        >
          {info.content}
        </p>
      </div>
    </motion.div>
  )

  return (
    <section
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '2.5rem',
        padding: '5rem 2rem',
        background: 'var(--gradient-bg-alt)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow superior esquerdo - conecta com container anterior */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          width: '400px',
          height: '400px',
          background:
            'radial-gradient(circle, var(--primary-alpha-15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'var(--blur-xl)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Glow inferior direito - conecta com próximo container */}
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-5%',
          width: '350px',
          height: '350px',
          background:
            'radial-gradient(circle, var(--secondary-blue-alpha-12) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'var(--blur-xl)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Coluna Esquerda */}
      <div
        style={{
          flex: '1 1 280px',
          maxWidth: '350px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {InfosLeft.map((info, index) => (
          <CardComponent key={index} info={info} index={index} side="left" />
        ))}
      </div>

      {/* Imagem Central */}
      <div
        style={{
          flex: '1 1 300px',
          maxWidth: '700px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Badge superior */}
        <div
          style={{
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            background: 'var(--primary-alpha-10)',
            border: 'var(--border-primary)',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.875rem',
            color: 'var(--color-primary)',
            fontWeight: '600',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '-1rem',
          }}
        >
          📱 Baixe o App
        </div>

        <div
          style={{
            position: 'relative',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {/* Glow effect atrás da imagem */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '120%',
              height: '120%',
              background:
                'radial-gradient(circle, var(--primary-alpha-20) 0%, transparent 70%)',
              filter: 'var(--blur-xl)',
              zIndex: 0,
            }}
          />

          <div
            style={{
              position: 'relative',
              padding: '2rem',
              background: 'var(--white-alpha-02)',
              backdropFilter: 'var(--blur-sm)',
              borderRadius: 'var(--radius-full)',
              border: 'var(--border-white-subtle)',
            }}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '400px',
                height: '500px',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-dark-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'var(--border-primary-strong)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Placeholder para imagem do celular */}
              <div
                style={{
                  textAlign: 'center',
                  color: 'var(--text-muted)',
                  padding: '6rem',
                }}
              >
                <img
                  src={imagem}
                  style={{
                    width: '801px',
                    height: 'auto',
                    objectFit: 'contain',
                    borderRadius: 'var(--radius-lg)',
                    alignItems: 'center',
                  }}
                ></img>
              </div>
            </div>
          </div>
        </div>

        {/* Botões */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {[
            {
              text: 'App Store',
              href: 'https://apps.apple.com/us/app/zyber/id6746278691',
              icon: Botaoapple,
            },
            {
              text: 'Google Play',
              href: 'https://play.google.com/store/apps/details?id=app.mobile.zyber',
              icon: BotaoAndroid,
            },
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
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)'
                }}
                style={{
                  padding: '1rem 2rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  background: 'var(--gradient-primary)',
                  border: 'var(--border-white-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  minWidth: '50px',
                  justifyContent: 'center',
                  maxWidth: '150px',
                  height: '50px',
                  justifyItems: 'revert',
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
          flex: '1 1 280px',
          maxWidth: '350px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {infosRight.map((info, index) => (
          <CardComponent key={index} info={info} index={index} side="right" />
        ))}
      </div>
    </section>
  )
}
