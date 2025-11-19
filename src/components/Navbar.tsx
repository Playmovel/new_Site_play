import { useState, useEffect } from 'react'
import { constants } from '../constants/contants'
import logo from '../assets/logo.png'

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('Home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const menuItems = ['Home', 'Planos', 'Sobre Nós', 'Contato']

  // Mapeamento de itens do menu para IDs das seções
  const menuToSection: { [key: string]: string } = {
    Home: 'hero',
    Planos: 'planos',
    'Sobre Nós': 'sobre',
    Contato: 'faq',
  }

  const scrollToSection = (item: string) => {
    const sectionId = menuToSection[item]
    const element = document.getElementById(sectionId)

    if (element) {
      const offset = 80 // Altura do navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    } else if (item === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    setActiveItem(item)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        style={{
          width: '100%',
          position: 'fixed',
          top: 0,
          zIndex: 1000,
          background: scrolled
            ? 'rgba(10, 10, 10, 0.85)'
            : 'rgba(10, 10, 10, 0.7)',
          backdropFilter: 'var(--blur-md)',
          borderBottom: 'var(--border-primary)',
          boxShadow: scrolled
            ? 'var(--shadow-dark-md)'
            : 'var(--shadow-dark-lg)',
          transition: 'var(--transition-medium)',
        }}
      >
        {/* Scan line effect */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background:
              'linear-gradient(90deg, transparent, var(--primary-alpha-80), transparent)',
            animation: 'scanHorizontal 3s ease-in-out infinite',
          }}
        />

        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 2rem',
            gap: '2rem',
          }}
        >
          {/* Logo Section */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              position: 'relative',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = 'translateX(4px)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = 'translateX(0)')
            }
          >
            <img
              src={logo}
              alt="Logo"
              style={{
                height: '50px',
                width: 'auto',
                objectFit: 'contain',
              }}
            />
          </div>

          {/* Desktop Menu */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              position: 'relative',
              background: 'var(--white-alpha-02)',
              padding: '0.5rem',
              borderRadius: 'var(--radius-md)',
              border: 'var(--border-white-subtle)',
              backdropFilter: 'var(--blur-sm)',
              boxShadow: 'inset 0 2px 8px var(--black-alpha-30)',
            }}
            className="desktop-menu"
          >
            {menuItems.map((item) => {
              const isActive = activeItem === item
              return (
                <div
                  key={item}
                  onClick={() => scrollToSection(item)}
                  style={{
                    color: isActive
                      ? 'var(--bg-dark-1)'
                      : 'var(--white-alpha-80)',
                    fontWeight: '600',
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    position: 'relative',
                    padding: '0.75rem 1.5rem',
                    borderRadius: 'var(--radius-sm)',
                    transition: 'var(--transition-fast)',
                    zIndex: 2,
                    whiteSpace: 'nowrap',
                    background: isActive
                      ? 'var(--gradient-primary)'
                      : 'transparent',
                    boxShadow: isActive
                      ? 'var(--shadow-md), var(--shadow-inset-strong)'
                      : 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--text-primary)'
                      e.currentTarget.style.background =
                        'var(--primary-alpha-10)'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--white-alpha-80)'
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }
                  }}
                >
                  {item}

                  {/* Hover underline effect */}
                  {!isActive && (
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '8px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '0',
                        height: '2px',
                        background: 'var(--color-primary)',
                        borderRadius: '2px',
                        transition: 'var(--transition-fast)',
                      }}
                      className="underline"
                    />
                  )}
                </div>
              )
            })}
          </nav>

          {/* CTA Button */}
          <div
            style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
            className="cta-section"
          >
            <button
              style={{
                padding: '0.75rem 1.8rem',
                background: 'var(--gradient-primary)',
                color: 'var(--text-primary)',
                border: 'var(--border-white-subtle)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.95rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'var(--transition-fast)',
                boxShadow: 'var(--shadow-md)',
                whiteSpace: 'nowrap',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'var(--shadow-md)'
              }}
            >
              <span style={{ position: 'relative', zIndex: 1 }}>
                Fale Conosco
              </span>
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background:
                    'linear-gradient(90deg, transparent, var(--white-alpha-20), transparent)',
                  animation: 'shimmer 2s infinite',
                }}
              />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: 'none',
              background: 'var(--primary-alpha-10)',
              border: 'var(--border-primary)',
              borderRadius: '8px',
              cursor: 'pointer',
              padding: '0.6rem',
              transition: 'var(--transition-fast)',
            }}
            className="mobile-menu-btn"
          >
            <div
              style={{
                width: '28px',
                height: '24px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <span
                style={{
                  display: 'block',
                  width: '100%',
                  height: '3px',
                  background: 'var(--color-primary)',
                  borderRadius: '3px',
                  transition: 'var(--transition-fast)',
                  transform: isMobileMenuOpen
                    ? 'rotate(45deg) translate(8px, 8px)'
                    : 'rotate(0)',
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: '100%',
                  height: '3px',
                  background: 'var(--color-primary)',
                  borderRadius: '3px',
                  transition: 'var(--transition-fast)',
                  opacity: isMobileMenuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: '100%',
                  height: '3px',
                  background: 'var(--color-primary)',
                  borderRadius: '3px',
                  transition: 'var(--transition-fast)',
                  transform: isMobileMenuOpen
                    ? 'rotate(-45deg) translate(8px, -8px)'
                    : 'rotate(0)',
                }}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          style={{
            display: 'none',
            flexDirection: 'column',
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(10, 10, 10, 0.95)',
            backdropFilter: 'var(--blur-md)',
            padding: isMobileMenuOpen ? '1.5rem 2rem' : '0 2rem',
            maxHeight: isMobileMenuOpen ? '500px' : '0',
            overflow: 'hidden',
            transition: 'var(--transition-smooth)',
            borderBottom: isMobileMenuOpen ? 'var(--border-primary)' : 'none',
            boxShadow: isMobileMenuOpen ? 'var(--shadow-dark-md)' : 'none',
            gap: '0.5rem',
          }}
          className="mobile-menu"
        >
          {menuItems.map((item) => {
            const isActive = activeItem === item
            return (
              <div
                key={item}
                onClick={() => {
                  scrollToSection(item)
                  setIsMobileMenuOpen(false)
                }}
                style={{
                  color: isActive
                    ? 'var(--color-primary)'
                    : 'var(--white-alpha-80)',
                  fontWeight: isActive ? '700' : '600',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  padding: '1rem',
                  borderRadius: 'var(--radius-sm)',
                  transition: 'var(--transition-fast)',
                  background: isActive
                    ? 'var(--primary-alpha-15)'
                    : 'transparent',
                  border: isActive
                    ? 'var(--border-primary)'
                    : '1px solid transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--primary-alpha-15)'
                  e.currentTarget.style.color = 'var(--color-primary)'
                  e.currentTarget.style.transform = 'translateX(8px)'
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = 'var(--white-alpha-80)'
                  }
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                {item}
              </div>
            )
          })}

          <button
            style={{
              padding: '1rem',
              marginTop: '1rem',
              background: 'var(--gradient-primary)',
              color: 'var(--text-primary)',
              border: 'var(--border-white-subtle)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '1rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'var(--transition-fast)',
              boxShadow: 'var(--shadow-md)',
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'scale(0.98)'
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            Fale Conosco
          </button>
        </div>
      </header>

      {/* Spacer para compensar o navbar fixo */}
      <div style={{ height: '80px' }} />

      <style>{`
        @keyframes scanHorizontal {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(0.95); }
        }
        
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 200%; }
        }

        .desktop-menu div:hover .underline {
          width: 60% !important;
        }

        @media (max-width: 968px) {
          .desktop-menu,
          .cta-section {
            display: none !important;
          }
          
          .mobile-menu-btn {
            display: block !important;
          }
          
          .mobile-menu {
            display: flex !important;
          }
        }
      `}</style>
    </>
  )
}
