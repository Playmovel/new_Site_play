import { useState } from 'react';

const mockPlanos = [
  { description: "(Start) 2Gb + 100 Minutos + 30 sms", gigas: "2", min: "100", value: "28,80", mostraApp: true },
  { description: "(Start) 6Gb + 100 Minutos + 60 sms", gigas: "6", min: "100", value: "39,05", mostraApp: true },
  { description: "(Start) 8Gb + Minutos Ilimitados + 60 sms", gigas: "8", min: "999", value: "42,65", mostraApp: true },
  { description: "(Start) 14Gb + Minutos Ilimitados + 100 sms", gigas: "14", min: "999", value: "52,33", mostraApp: true },
  { description: "(Start) 21Gb + Minutos Ilimitados + 100 sms", gigas: "21", min: "999", value: "68,65", mostraApp: true },
  { description: "(Turbo) 29Gb + Minutos Ilimitados + 100 sms", gigas: "29", min: "999", value: "79,55", mostraApp: true },
  { description: "(Turbo) 39Gb + Minutos Ilimitados + 100 sms", gigas: "39", min: "999", value: "101,95", mostraApp: true },
  { description: "(Turbo) 44Gb + Minutos Ilimitados + 100 sms", gigas: "44", min: "999", value: "111,55", mostraApp: true },
];

export default function CardSlider() {
  const [active, setActive] = useState(0);
  const [hoveredButton, setHoveredButton] = useState(false);
  const [, setDirection] = useState(0);

  const res = mockPlanos.filter(p => p.mostraApp);
  const activePlan = res[active];

  const whatsappLink = `https://api.whatsapp.com/send?phone=5511933019327&text=Ol%C3%A1%2C+sou+cliente+ZYBER%0AQuero+assinar+o+plano:+${encodeURIComponent(activePlan.description)}`;

  const handleNext = () => {
    setDirection(1);
    setActive(i => (i + 1) % res.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActive(i => (i - 1 + res.length) % res.length);
  };


  interface Plano {
    description: string;
    gigas: string;
    min: string;
    value: string;
    mostraApp: boolean;
  }
  const Card = ({ plan, index }: { plan: Plano; index: number }) => {
    const isTurbo = plan.description.includes('Turbo');
    const isActive = index === active;
    const offset = ((index - active + res.length) % res.length);
    const normalizedOffset = offset > res.length / 2 ? offset - res.length : offset;


    return (
      <div
        onClick={() => {
          if (normalizedOffset !== 0) {
            setDirection(normalizedOffset > 0 ? 1 : -1);
            setActive(index);
          }
        }}
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          textAlign: 'center',
          background: isActive
            ? 'linear-gradient(135deg, rgba(255, 87, 51, 0.08) 0%, rgba(255, 87, 51, 0.02) 100%)'
            : 'rgba(20, 20, 20, 0.8)',
          backdropFilter: 'blur(20px)',
          padding: '2.5rem 2rem',
          borderRadius: '28px',
          width: '320px',
          minHeight: '520px',
          border: isActive
            ? '2px solid rgba(255, 87, 51, 0.6)'
            : '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: isActive
            ? '0 20px 60px rgba(255, 87, 51, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            : '0 8px 32px rgba(0, 0, 0, 0.6)',
          transition: isActive
            ? 'transform 0.8s ease, opacity 0.8s ease'
            : 'transform 0.6s ease, opacity 0.6s ease',
          transform: `
            translate(-50%, -50%)
            translateX(${normalizedOffset * 380}px)
            scale(${isActive ? 1 : 0.85})
            rotateY(${normalizedOffset * 15}deg)
            ${isActive ? 'translateY(0)' : 'translateY(20px)'}
          `,

          opacity: isActive ? 1 : 0.3,
          animation: isActive ? 'popIn 0.8s ease' : 'none',

          transformStyle: 'preserve-3d',
          // opacity: Math.abs(normalizedOffset) > 2 ? 0 : (isActive ? 1 : 0.4),
          cursor: isActive ? 'default' : 'pointer',
          zIndex: isActive ? 100 : 100 - Math.abs(normalizedOffset),
          overflow: 'hidden',
          pointerEvents: Math.abs(normalizedOffset) > 2 ? 'none' : 'auto'
        }}
      >
        {/* Animated gradient background */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 50%, rgba(0, 0, 0, 0.15) 0%, transparent 50%)',
          opacity: isActive ? 1 : 0,
          transition: 'opacity 0.6s ease',
          pointerEvents: 'none'
        }} />



        {/* Badge Turbo */}
        {isTurbo && (
          <div style={{
            position: 'absolute',
            top: '24px',
            right: '-35px',
            background: 'linear-gradient(135deg, #FF5733 0%, #ff2a00 100%)',
            color: '#fff',
            padding: '0.5rem 3.5rem',
            fontSize: '0.7rem',
            fontWeight: '800',
            letterSpacing: '2px',
            transform: 'rotate(45deg)',
            boxShadow: '0 4px 15px rgba(255, 87, 51, 0.6)',
            textTransform: 'uppercase'
          }}>
            ⚡ Turbo
          </div>
        )}

        {/* Hexagon decorations */}
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          width: '30px',
          height: '30px',
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          background: 'rgba(255, 87, 51, 0.2)',
          border: '1px solid rgba(255, 87, 51, 0.4)',
          opacity: isActive ? 1 : 0.3,
          transition: 'opacity 0.3s ease'
        }} />

        <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          {/* Plan category badge */}
          <div style={{
            display: 'inline-block',
            padding: '0.4rem 1rem',
            background: isTurbo
              ? 'linear-gradient(135deg, rgba(255, 87, 51, 0.2) 0%, rgba(255, 87, 51, 0.1) 100%)'
              : 'rgba(100, 100, 255, 0.1)',
            border: `1px solid ${isTurbo ? 'rgba(255, 87, 51, 0.4)' : 'rgba(100, 100, 255, 0.3)'}`,
            borderRadius: '20px',
            fontSize: '0.7rem',
            color: isTurbo ? '#FF5733' : '#6464ff',
            fontWeight: '700',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>
            {isTurbo ? '🔥 Turbo' : '⚡ Start'}
          </div>

          {/* Título do plano */}
          <h3 style={{
            fontSize: '0.85rem',
            fontWeight: '500',
            color: '#909090',
            marginBottom: '2rem',
            lineHeight: 1.5,
            minHeight: '40px',
            fontFamily: 'monospace',
            letterSpacing: '0.5px'
          }}>
            {plan.description}
          </h3>

          {/* Features com design tech */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            marginBottom: '2rem'
          }}>
            {/* Internet */}
            <div style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem',
              background: 'linear-gradient(135deg, rgba(255, 87, 51, 0.08) 0%, rgba(255, 87, 51, 0.02) 100%)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 87, 51, 0.2)',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '4px',
                background: 'linear-gradient(180deg, #FF5733 0%, transparent 100%)'
              }} />
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: 'rgba(255, 87, 51, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.3rem'
              }}>
                🌐
              </div>
              <div style={{ textAlign: 'left', flex: 1 }}>
                <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#FF5733', lineHeight: 1 }}>
                  {plan.gigas}<span style={{ fontSize: '1rem', fontWeight: '600', marginLeft: '4px' }}>GB</span>
                </div>
                <div style={{ fontSize: '0.7rem', color: '#707070', marginTop: '2px', letterSpacing: '1px' }}>INTERNET 5G</div>
              </div>
            </div>

            {/* WhatsApp */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.9rem 1rem',
              background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.08) 0%, rgba(37, 211, 102, 0.02) 100%)',
              borderRadius: '16px',
              border: '1px solid rgba(37, 211, 102, 0.2)'
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'rgba(37, 211, 102, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem'
              }}>
                💬
              </div>
              <div style={{ textAlign: 'left', flex: 1 }}>
                <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#25D366' }}>
                  WhatsApp Ilimitado
                </div>
                <div style={{ fontSize: '0.65rem', color: '#707070', marginTop: '2px' }}>Sem descontar da franquia</div>
              </div>
            </div>

            {/* Ligações */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.9rem 1rem',
              background: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'rgba(100, 100, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem'
              }}>
                📞
              </div>
              <div style={{ textAlign: 'left', flex: 1 }}>
                <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#d0d0d0' }}>
                  {plan.min === "999" ? "Chamadas Ilimitadas" : `${plan.min} Minutos`}
                </div>
                <div style={{ fontSize: '0.65rem', color: '#707070', marginTop: '2px' }}>
                  {plan.min === "999" ? "Para todo Brasil" : "Para qualquer operadora"}
                </div>
              </div>
            </div>
          </div>

          {/* Preço com design futurista */}
          <div style={{
            position: 'relative',
            background: 'linear-gradient(135deg, #FF5733 0%, #ff4520 100%)',
            padding: '1.5rem',
            borderRadius: '20px',
            marginTop: 'auto',
            boxShadow: '0 8px 30px rgba(255, 87, 51, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '100px',
              height: '100px',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
              borderRadius: '50%',
              transform: 'translate(30%, -30%)'
            }} />
            <div style={{
              fontSize: '0.7rem',
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '0.5rem',
              letterSpacing: '2px',
              fontWeight: '600',
              textTransform: 'uppercase'
            }}>
              Por apenas
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'center',
              gap: '0.3rem'
            }}>
              <span style={{ fontSize: '1.5rem', fontWeight: '700', color: '#fff' }}>R$</span>
              <span style={{ fontSize: '3rem', fontWeight: '900', color: '#fff', lineHeight: 1, letterSpacing: '-2px' }}>
                {plan.value.split(',')[0]}
              </span>
              <span style={{ fontSize: '1.8rem', fontWeight: '700', color: 'rgba(255,255,255,0.9)' }}>
                ,{plan.value.split(',')[1]}
              </span>
              <span style={{ fontSize: '1rem', fontWeight: '500', color: 'rgba(255,255,255,0.8)', marginLeft: '0.2rem' }}>/mês</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{
      padding: '3rem 1rem',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #0f0f0f 50%, #0a0a0a 100%)',
      position: 'relative',
      overflow: 'hidden',
      minHeight: 'auto'
    }}>
      {/* Animated grid background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(rgba(255, 87, 51, 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 87, 51, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        opacity: 0.6,
        pointerEvents: 'none',
        animation: 'gridMove 20s linear infinite'
      }} />

      {/* Floating orbs */}
      <div style={{
        position: 'absolute',
        top: '15%',
        right: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255,87,51,0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        animation: 'float 8s ease-in-out infinite'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '5%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(100,100,255,0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        animation: 'float 10s ease-in-out infinite reverse'
      }} />

      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '2rem',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          display: 'inline-block',
          padding: '0.6rem 1.8rem',
          background: 'rgba(255, 87, 51, 0.1)',
          border: '1px solid rgba(255, 87, 51, 0.3)',
          borderRadius: '50px',
          fontSize: '0.8rem',
          color: '#FF5733',
          fontWeight: '700',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          marginBottom: '2rem',
          boxShadow: '0 4px 15px rgba(255, 87, 51, 0.2)',
        }}>
          <span style={{ marginRight: '8px' }}>💎</span>
          Planos Premium
        </div>

        <h2 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: '900',
          background: 'linear-gradient(135deg, #ffffff 0%, #808080 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '1.5rem',
          letterSpacing: '-2px'
        }}>
          Escolha Seu Plano
        </h2>

        <p style={{
          fontSize: '1.2rem',
          color: '#909090',
          maxWidth: '650px',
          margin: '0 auto',
          lineHeight: 1.7
        }}>
          Internet ultra-rápida 5G, apps ilimitados e muito mais
        </p>
      </div>

      {/* Carousel */}
      <div style={{
        position: 'relative',
        height: '600px',
        marginBottom: '2rem',
        perspective: '2000px'
      }}>
        {res.map((plan, index) => (
          <Card key={index} plan={plan} index={index} />
        ))}
      </div>

      {/* Navigation buttons */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1.5rem',
        marginBottom: '3rem',
        position: 'relative',
        zIndex: 101
      }}>
        <button
          onClick={handlePrev}
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            color: '#fff',
            fontSize: '1.8rem',
            fontWeight: '300',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 87, 51, 0.2)';
            e.currentTarget.style.borderColor = 'rgba(255, 87, 51, 0.5)';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          ‹
        </button>

        <button
          onClick={handleNext}
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            color: '#fff',
            fontSize: '1.8rem',
            fontWeight: '300',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 87, 51, 0.2)';
            e.currentTarget.style.borderColor = 'rgba(255, 87, 51, 0.5)';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          ›
        </button>
      </div>

      {/* Indicators */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '0.6rem',
        marginBottom: '4rem',
        position: 'relative',
        zIndex: 101
      }}>
        {res.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > active ? 1 : -1);
              setActive(index);
            }}
            style={{
              width: active === index ? '40px' : '12px',
              height: '12px',
              borderRadius: '6px',
              background: active === index
                ? 'linear-gradient(135deg, #FF5733 0%, #ff7a5c 100%)'
                : 'rgba(255, 255, 255, 0.15)',
              border: active === index ? '1px solid rgba(255, 87, 51, 0.5)' : 'none',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              boxShadow: active === index ? '0 2px 10px rgba(255, 87, 51, 0.4)' : 'none'
            }}
          />
        ))}
      </div>

      {/* CTA Button */}
      <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 101 }}>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <button
            onMouseEnter={() => setHoveredButton(true)}
            onMouseLeave={() => setHoveredButton(false)}
            style={{
              padding: '1.5rem 4rem',
              fontSize: '1.3rem',
              fontWeight: '800',
              color: '#fff',
              background: 'linear-gradient(135deg, #FF5733 0%, #ff4520 100%)',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              boxShadow: hoveredButton
                ? '0 12px 40px rgba(255, 87, 51, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                : '0 8px 30px rgba(255, 87, 51, 0.4)',
              transform: hoveredButton ? 'translateY(-4px) scale(1.05)' : 'translateY(0)',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <span style={{ position: 'relative', zIndex: 1 }}>Assinar Agora</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: 'relative',
                zIndex: 1,
                transition: 'transform 0.3s ease',
                transform: hoveredButton ? 'translateX(5px)' : 'translateX(0)'
              }}
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '0',
              height: '0',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.3)',
              transform: 'translate(-50%, -50%)',
              transition: 'width 0.6s ease, height 0.6s ease',
              ...(hoveredButton && { width: '300px', height: '300px' })
            }} />
          </button>
        </a>
      </div>

      <style>{`
        @keyframes scan {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(500px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(60px); }
        }
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.95) translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1) translateY(0);
          }
        }

      `}</style>
    </div>
  );
}