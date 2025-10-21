import { useState } from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = ["Home", "Planos", "Sobre Nós", "Contato"];

  return (
    <NavContainer>
      <NavContent>
        <LogoSection>
          <LogoImage src={Logo} alt="Logo" />
          <BrandName></BrandName>
        </LogoSection>

        <DesktopMenu>
          {menuItems.map((item, index) => (
            <NavItem
              key={item}
              $active={activeItem === item}
              onClick={() => setActiveItem(item)}
              style={{ "--index": index }}
            >
              {item}
              <ItemUnderline $active={activeItem === item} />
            </NavItem>
          ))}
          <ActiveIndicator
            $index={menuItems.indexOf(activeItem)}
            $totalItems={menuItems.length}
          />
        </DesktopMenu>

        <CTASection>
          <ContactButton>Fale Conosco</ContactButton>
        </CTASection>

        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <MenuIcon $isOpen={isMobileMenuOpen}>
            <span></span>
            <span></span>
            <span></span>
          </MenuIcon>
        </MobileMenuButton>
      </NavContent>

      <MobileMenu $isOpen={isMobileMenuOpen}>
        {menuItems.map((item) => (
          <MobileNavItem
            key={item}
            $active={activeItem === item}
            onClick={() => {
              setActiveItem(item);
              setIsMobileMenuOpen(false);
            }}
          >
            {item}
          </MobileNavItem>
        ))}
        <MobileContactButton>Fale Conosco</MobileContactButton>
      </MobileMenu>
    </NavContainer>
  );
}

const NavContainer = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
  background: linear-gradient(135deg, rgba(164, 25, 2, 0.97) 0%, rgba(139, 21, 2, 0.97) 100%);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 6px 40px rgba(0, 0, 0, 0.4);
  }
`;

const NavContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  gap: 2rem;

  @media (max-width: 968px) {
    padding: 1rem 1.5rem;
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(4px);
  }
`;

const LogoImage = styled.img`
  height: 55px;
  width: auto;
  cursor: pointer;
  transition: all 0.3s ease;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));

  ${LogoSection}:hover & {
    transform: scale(1.05);
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.4));
  }
`;

const BrandName = styled.div`
  font-size: 1.4rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.5px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const DesktopMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  background: rgba(255, 255, 255, 0.15);
  padding: 0.5rem;
  border-radius: 16px;
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);

  @media (max-width: 968px) {
    display: none;
  }
`;

const NavItem = styled.div`
  color: ${props => props.$active ? '#1a1a1a' : 'rgba(255, 255, 255, 0.9)'};
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  position: relative;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
  white-space: nowrap;

  &:hover {
    color: ${props => props.$active ? '#1a1a1a' : '#ffffff'};
    transform: translateY(-1px);
  }
`;

const ItemUnderline = styled.div`
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
  width: ${props => props.$active ? '0' : '0'};
  height: 2px;
  background: #ffffff;
  border-radius: 2px;
  transition: width 0.3s ease;

  ${NavItem}:hover & {
    width: ${props => props.$active ? '0' : '60%'};
  }
`;

const ActiveIndicator = styled.div`
  position: absolute;
  top: 0.5rem;
  left: ${props => `calc(${props.$index} * (100% / ${props.$totalItems}) + 0.5rem)`};
  width: calc((100% / ${props => props.$totalItems}) - 1rem);
  height: calc(100% - 1rem);
  background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
  border-radius: 12px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

const CTASection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 968px) {
    display: none;
  }
`;

const ContactButton = styled.button`
  padding: 0.75rem 1.8rem;
  background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
  color: #a41902;
  border: none;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
    background: #ffffff;
  }

  &:active {
    transform: translateY(0);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 968px) {
    display: block;
  }
`;

const MenuIcon = styled.div`
  width: 28px;
  height: 24px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    display: block;
    width: 100%;
    height: 3px;
    background: #ffffff;
    border-radius: 3px;
    transition: all 0.3s ease;

    &:nth-child(1) {
      transform: ${props => props.$isOpen ? 'rotate(45deg) translate(8px, 8px)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${props => props.$isOpen ? '0' : '1'};
    }

    &:nth-child(3) {
      transform: ${props => props.$isOpen ? 'rotate(-45deg) translate(8px, -8px)' : 'rotate(0)'};
    }
  }
`;

const MobileMenu = styled.div`
  display: none;
  
  @media (max-width: 968px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(139, 21, 2, 0.98);
    backdrop-filter: blur(20px);
    padding: ${props => props.$isOpen ? '1.5rem 2rem' : '0 2rem'};
    max-height: ${props => props.$isOpen ? '400px' : '0'};
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border-bottom: ${props => props.$isOpen ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'};
    box-shadow: ${props => props.$isOpen ? '0 8px 20px rgba(0, 0, 0, 0.3)' : 'none'};
    gap: 0.5rem;
  }
`;

const MobileNavItem = styled.div`
  color: ${props => props.$active ? '#ffffff' : 'rgba(255, 255, 255, 0.8)'};
  font-weight: ${props => props.$active ? '700' : '600'};
  font-size: 1rem;
  cursor: pointer;
  padding: 1rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  background: ${props => props.$active ? 'rgba(255, 255, 255, 0.15)' : 'transparent'};

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    color: #ffffff;
    transform: translateX(4px);
  }
`;

const MobileContactButton = styled.button`
  padding: 1rem;
  margin-top: 1rem;
  background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
  color: #a41902;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  &:active {
    transform: scale(0.98);
  }
`;