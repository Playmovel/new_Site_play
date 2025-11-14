import { useState, useEffect } from "react";

export default function Navbar() {
    const [activeItem, setActiveItem] = useState("Home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const menuItems = ["Home", "Planos", "Sobre Nós", "Contato"];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                    backdropFilter: 'blur(20px)',
                    borderBottom: '1px solid rgba(255, 87, 51, 0.1)',
                    boxShadow: scrolled
                        ? '0 4px 30px rgba(0, 0, 0, 0.5)'
                        : '0 2px 20px rgba(0, 0, 0, 0.3)',
                    transition: 'all 0.4s ease'
                }}
            >
                {/* Scan line effect */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(255, 87, 51, 0.8), transparent)',
                    animation: 'scanHorizontal 3s ease-in-out infinite'
                }} />

                <div style={{
                    maxWidth: '1400px',
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem 2rem',
                    gap: '2rem'
                }}>
                    {/* Logo Section */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease',
                            position: 'relative'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(4px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                    >
                        {/* Hexagon background for logo */}
                        <div style={{
                            position: 'relative',
                            width: '50px',
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <div style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                                background: 'linear-gradient(135deg, rgba(255, 87, 51, 0.3) 0%, rgba(255, 87, 51, 0.1) 100%)',
                                border: '2px solid rgba(255, 87, 51, 0.5)',
                                animation: 'pulse 3s ease-in-out infinite'
                            }} />
                            <div style={{
                                position: 'relative',
                                fontSize: '1.5rem',
                                fontWeight: '900',
                                color: '#FF5733',
                                textShadow: '0 0 10px rgba(255, 87, 51, 0.5)'
                            }}>
                                Z
                            </div>
                        </div>

                        <div style={{
                            fontSize: '1.4rem',
                            fontWeight: '800',
                            background: 'linear-gradient(135deg, #ffffff 0%, #FF5733 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            letterSpacing: '2px'
                        }}>
                            ZYBER
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <nav style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        position: 'relative',
                        background: 'rgba(255, 255, 255, 0.03)',
                        padding: '0.5rem',
                        borderRadius: '16px',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.3)'
                    }}
                        className="desktop-menu"
                    >
                        {menuItems.map((item,) => {
                            const isActive = activeItem === item;
                            return (
                                <div
                                    key={item}
                                    onClick={() => setActiveItem(item)}
                                    style={{
                                        color: isActive ? '#0a0a0a' : 'rgba(255, 255, 255, 0.8)',
                                        fontWeight: '600',
                                        fontSize: '0.95rem',
                                        cursor: 'pointer',
                                        position: 'relative',
                                        padding: '0.75rem 1.5rem',
                                        borderRadius: '12px',
                                        transition: 'all 0.3s ease',
                                        zIndex: 2,
                                        whiteSpace: 'nowrap',
                                        background: isActive
                                            ? 'linear-gradient(135deg, #FF5733 0%, #ff7a5c 100%)'
                                            : 'transparent',
                                        boxShadow: isActive
                                            ? '0 4px 15px rgba(255, 87, 51, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                                            : 'none'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isActive) {
                                            e.currentTarget.style.color = '#ffffff';
                                            e.currentTarget.style.background = 'rgba(255, 87, 51, 0.1)';
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isActive) {
                                            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                                            e.currentTarget.style.background = 'transparent';
                                            e.currentTarget.style.transform = 'translateY(0)';
                                        }
                                    }}
                                >
                                    {item}

                                    {/* Hover underline effect */}
                                    {!isActive && (
                                        <div style={{
                                            position: 'absolute',
                                            bottom: '8px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: '0',
                                            height: '2px',
                                            background: '#FF5733',
                                            borderRadius: '2px',
                                            transition: 'width 0.3s ease'
                                        }}
                                            className="underline"
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </nav>

                    {/* CTA Button */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="cta-section">
                        <button
                            style={{
                                padding: '0.75rem 1.8rem',
                                background: 'linear-gradient(135deg, #FF5733 0%, #ff7a5c 100%)',
                                color: '#fff',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '12px',
                                fontSize: '0.95rem',
                                fontWeight: '700',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 15px rgba(255, 87, 51, 0.3)',
                                whiteSpace: 'nowrap',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 87, 51, 0.5)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 87, 51, 0.3)';
                            }}
                        >
                            <span style={{ position: 'relative', zIndex: 1 }}>Fale Conosco</span>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: '-100%',
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                                animation: 'shimmer 2s infinite'
                            }} />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        style={{
                            display: 'none',
                            background: 'rgba(255, 87, 51, 0.1)',
                            border: '1px solid rgba(255, 87, 51, 0.3)',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            padding: '0.6rem',
                            transition: 'all 0.3s ease'
                        }}
                        className="mobile-menu-btn"
                    >
                        <div style={{
                            width: '28px',
                            height: '24px',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                            <span style={{
                                display: 'block',
                                width: '100%',
                                height: '3px',
                                background: '#FF5733',
                                borderRadius: '3px',
                                transition: 'all 0.3s ease',
                                transform: isMobileMenuOpen ? 'rotate(45deg) translate(8px, 8px)' : 'rotate(0)'
                            }} />
                            <span style={{
                                display: 'block',
                                width: '100%',
                                height: '3px',
                                background: '#FF5733',
                                borderRadius: '3px',
                                transition: 'all 0.3s ease',
                                opacity: isMobileMenuOpen ? 0 : 1
                            }} />
                            <span style={{
                                display: 'block',
                                width: '100%',
                                height: '3px',
                                background: '#FF5733',
                                borderRadius: '3px',
                                transition: 'all 0.3s ease',
                                transform: isMobileMenuOpen ? 'rotate(-45deg) translate(8px, -8px)' : 'rotate(0)'
                            }} />
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
                        backdropFilter: 'blur(20px)',
                        padding: isMobileMenuOpen ? '1.5rem 2rem' : '0 2rem',
                        maxHeight: isMobileMenuOpen ? '500px' : '0',
                        overflow: 'hidden',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        borderBottom: isMobileMenuOpen ? '1px solid rgba(255, 87, 51, 0.2)' : 'none',
                        boxShadow: isMobileMenuOpen ? '0 8px 30px rgba(0, 0, 0, 0.5)' : 'none',
                        gap: '0.5rem'
                    }}
                    className="mobile-menu"
                >
                    {menuItems.map((item) => {
                        const isActive = activeItem === item;
                        return (
                            <div
                                key={item}
                                onClick={() => {
                                    setActiveItem(item);
                                    setIsMobileMenuOpen(false);
                                }}
                                style={{
                                    color: isActive ? '#FF5733' : 'rgba(255, 255, 255, 0.8)',
                                    fontWeight: isActive ? '700' : '600',
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    padding: '1rem',
                                    borderRadius: '12px',
                                    transition: 'all 0.3s ease',
                                    background: isActive
                                        ? 'rgba(255, 87, 51, 0.15)'
                                        : 'transparent',
                                    border: isActive
                                        ? '1px solid rgba(255, 87, 51, 0.3)'
                                        : '1px solid transparent'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 87, 51, 0.15)';
                                    e.currentTarget.style.color = '#FF5733';
                                    e.currentTarget.style.transform = 'translateX(8px)';
                                }}
                                onMouseLeave={(e) => {
                                    if (!isActive) {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                                    }
                                    e.currentTarget.style.transform = 'translateX(0)';
                                }}
                            >
                                {item}
                            </div>
                        );
                    })}

                    <button
                        style={{
                            padding: '1rem',
                            marginTop: '1rem',
                            background: 'linear-gradient(135deg, #FF5733 0%, #ff7a5c 100%)',
                            color: '#fff',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '12px',
                            fontSize: '1rem',
                            fontWeight: '700',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 15px rgba(255, 87, 51, 0.3)'
                        }}
                        onMouseDown={(e) => {
                            e.currentTarget.style.transform = 'scale(0.98)';
                        }}
                        onMouseUp={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
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
    );
}