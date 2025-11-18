import { useEffect, useRef } from 'react';
import useWindowSize from '../hooks/useWindowSize';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { isMobile } = useWindowSize();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    const particles: {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      opacity: number;
    }[] = [];

    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Desenha grid
      ctx.strokeStyle = 'var(--primary-alpha-10)';
      ctx.lineWidth = 1;

      for (let i = 0; i < canvas.width; i += 50) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }

      for (let i = 0; i < canvas.height; i += 50) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
      }

      // Anima partículas
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 87, 51, ${p.opacity})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', setCanvasSize);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile ? '3rem 1.5rem' : '4rem 2rem',
        background: 'var(--gradient-bg-alt)',
        overflow: 'hidden',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      />

      {/* Círculos decorativos - Glow superior direito */}
      <div
        style={{
          position: 'absolute',
          top: '-5%',
          right: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, var(--primary-alpha-15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'var(--blur-xl)',
          zIndex: 0,
        }}
      />
      {/* Glow inferior esquerdo - conecta com próximo container */}
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '5%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, var(--secondary-blue-alpha-15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'var(--blur-lg)',
          zIndex: 0,
        }}
      />

      {/* Container principal */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1200px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '2rem' : '4rem',
          alignItems: 'center',
        }}
      >
        {/* Conteúdo de texto - Esquerda */}
        <div
          style={{
            textAlign: isMobile ? 'center' : 'left',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: 'var(--primary-alpha-10)',
              border: 'var(--border-primary)',
              borderRadius: 'var(--radius-full)',
              marginBottom: '1.5rem',
              fontSize: '0.875rem',
              color: 'var(--color-primary)',
              fontWeight: '600',
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            🚀 Nova Era Digital
          </div>

          <h1
            style={{
              fontSize: isMobile ? 'clamp(2rem, 8vw, 2.5rem)' : 'clamp(2.5rem, 5vw, 4rem)',
              marginBottom: '1.5rem',
              lineHeight: 1.2,
              fontWeight: '800',
              background: 'var(--gradient-text-white)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            A ERA DIGITAL CHEGOU,{' '}
            <span
              style={{
                background: 'var(--gradient-text-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
                animation: 'pulse 2s ease-in-out infinite',
              }}
            >
              VOCÊ ESTÁ PRONTO?
            </span>
          </h1>

          <p
            style={{
              fontSize: isMobile ? '1rem' : 'clamp(1rem, 3.5vw, 1.25rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              maxWidth: isMobile ? '100%' : '550px',
              margin: isMobile ? '0 auto 2rem' : '0 0 2rem',
            }}
          >
            Conheça os planos da{' '}
            <strong style={{ color: 'var(--color-primary)' }}>Zyber</strong> e aproveite liberdade total, com internet rápida, chamadas ilimitadas e muito mais.
          </p>

          <a
            href="https://api.whatsapp.com/send?phone=5511933019327&text=Ol%C3%A1%2C+sou+cliente+ZYBER%0APoderia+me+ajudar%3F&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <button
              style={{
                padding: isMobile ? '1rem 2rem' : '1.2rem 2.5rem',
                fontSize: isMobile ? '1rem' : '1.125rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                background: 'var(--gradient-primary)',
                border: 'none',
                borderRadius: 'var(--radius-sm)',
                cursor: 'pointer',
                transition: 'var(--transition-fast)',
                boxShadow: 'var(--shadow-md)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                Pedir Chip
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </a>

          <div
            style={{
              marginTop: '2rem',
              display: 'flex',
              gap: isMobile ? '1.5rem' : '2rem',
              justifyContent: isMobile ? 'center' : 'flex-start',
              flexWrap: 'wrap',
              fontSize: '0.875rem',
              color: 'var(--text-muted)',
            }}
          >
            {['Internet Ultra Rápida', 'Chamadas Ilimitadas', 'Suporte 24/7'].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--color-primary)' }}>✓</span> {item}
              </div>
            ))}
          </div>
        </div>

        {/* SVG Ilustração - Direita */}
        {!isMobile && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'float 6s ease-in-out infinite',
            }}
          >
            <svg
              width="500"
              height="500"
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                filter: 'drop-shadow(0 10px 40px rgba(255, 87, 51, 0.3))',
              }}
            >
              {/* Círculo de fundo com gradiente */}
              <circle cx="250" cy="250" r="200" fill="url(#bgGradient)" opacity="0.1" />

              {/* Anel externo */}
              <circle
                cx="250"
                cy="250"
                r="180"
                stroke="url(#ringGradient)"
                strokeWidth="2"
                fill="none"
                opacity="0.6"
                strokeDasharray="20 10"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  from="0 250 250"
                  to="360 250 250"
                  dur="20s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Anel médio */}
              <circle
                cx="250"
                cy="250"
                r="150"
                stroke="url(#ringGradient2)"
                strokeWidth="3"
                fill="none"
                opacity="0.4"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  from="360 250 250"
                  to="0 250 250"
                  dur="15s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Smartphone central */}
              <g transform="translate(180, 150)">
                {/* Corpo do smartphone */}
                <rect
                  x="0"
                  y="0"
                  width="140"
                  height="200"
                  rx="20"
                  fill="url(#phoneGradient)"
                  stroke="url(#phoneStroke)"
                  strokeWidth="2"
                />

                {/* Tela */}
                <rect
                  x="10"
                  y="20"
                  width="120"
                  height="160"
                  rx="10"
                  fill="#1a1a1a"
                  opacity="0.9"
                />

                {/* Ícones na tela */}
                <g opacity="0.8">
                  {/* WiFi icon */}
                  <path
                    d="M50 60 Q70 50, 90 60"
                    stroke="var(--color-primary)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M45 70 Q70 55, 95 70"
                    stroke="var(--color-primary)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                  <circle cx="70" cy="80" r="4" fill="var(--color-primary)" />

                  {/* 5G badge */}
                  <text x="50" y="120" fontSize="24" fontWeight="bold" fill="url(#textGradient)">5G</text>

                  {/* Signal bars */}
                  <rect x="30" y="140" width="8" height="20" rx="2" fill="var(--color-primary)" opacity="0.3">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
                  </rect>
                  <rect x="42" y="135" width="8" height="25" rx="2" fill="var(--color-primary)" opacity="0.4">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="0.2s" repeatCount="indefinite" />
                  </rect>
                  <rect x="54" y="130" width="8" height="30" rx="2" fill="var(--color-primary)" opacity="0.5">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="0.4s" repeatCount="indefinite" />
                  </rect>
                  <rect x="66" y="125" width="8" height="35" rx="2" fill="var(--color-primary)">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="0.6s" repeatCount="indefinite" />
                  </rect>
                  <rect x="78" y="120" width="8" height="40" rx="2" fill="var(--color-primary)">
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" begin="0.8s" repeatCount="indefinite" />
                  </rect>
                </g>

                {/* Botão home */}
                <circle cx="70" cy="185" r="6" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
              </g>

              {/* Partículas orbitando */}
              <circle cx="100" cy="250" r="8" fill="var(--color-primary)" opacity="0.8">
                <animateMotion
                  path="M 0,0 a 150,150 0 1,0 300,0 a 150,150 0 1,0 -300,0"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="400" cy="250" r="6" fill="var(--color-secondary)" opacity="0.6">
                <animateMotion
                  path="M 0,0 a 180,180 0 1,1 360,0 a 180,180 0 1,1 -360,0"
                  dur="10s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Gradientes */}
              <defs>
                <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: 'var(--color-primary)' }} />
                  <stop offset="100%" style={{ stopColor: 'var(--color-primary-light)' }} />
                </linearGradient>
                <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: 'var(--color-primary)' }} />
                  <stop offset="100%" style={{ stopColor: 'var(--color-secondary-blue)' }} />
                </linearGradient>
                <linearGradient id="ringGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: 'var(--color-secondary-blue)' }} />
                  <stop offset="100%" style={{ stopColor: 'var(--color-primary)' }} />
                </linearGradient>
                <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: 'var(--primary-alpha-20)' }} />
                  <stop offset="100%" style={{ stopColor: 'var(--secondary-blue-alpha-20)' }} />
                </linearGradient>
                <linearGradient id="phoneStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: 'var(--color-primary)' }} />
                  <stop offset="100%" style={{ stopColor: 'var(--color-primary-light)' }} />
                </linearGradient>
                <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: 'var(--color-primary)' }} />
                  <stop offset="100%" style={{ stopColor: 'var(--color-primary-light)' }} />
                </linearGradient>
              </defs>
            </svg>
          </div>
        )}
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
}
