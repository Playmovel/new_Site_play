import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <NavContainer>
      <NavContent>
        <Logo src={logo} alt="Logo" />

        <NavMenu>
          <NavItem>Home</NavItem>
          <NavItem>Planos</NavItem>
          <NavItem>Sobre Nós</NavItem>
          <NavItem>Contato</NavItem>
          <OutlineSVG
            viewBox="0 0 420 60"
            xmlns="http://www.w3.org/2000/svg"
            width={420}
            height={60}
          >
            <rect
              className="rect"
              x={3}
              y={3}
              width="414"
              height="54"
              pathLength={100}
              fill="transparent"
              strokeWidth={4}
            />
          </OutlineSVG>
        </NavMenu>
      </NavContent>
    </NavContainer>
  );
}

const NavContainer = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(15, 15, 15, 0.9);
  backdrop-filter: blur(8px);
  border-bottom: 2px solid #a41902;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`;

const NavContent = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1.5rem;
`;

const Logo = styled.img`
  height: 55px;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const NavMenu = styled.nav`
  position: relative;
  background: linear-gradient(135deg, #a41902, #ffb703);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 420px;
  height: 60px;
  padding: 0.5em;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;

const NavItem = styled.div`
  color: #fff;
  font-weight: 600;
  letter-spacing: 0.5px;
  font-size: 1rem;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    color: #ffe501;
    transform: translateY(-2px);
  }

  &:after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    background: #ffe501;
    border-radius: 2px;
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 50%;
  }
`;

const OutlineSVG = styled.svg`
  position: absolute;
  top: 1;
  left: 6;
  pointer-events: none;

  .rect {
    stroke: #fff;
    stroke-linecap: round;
    stroke-dasharray: 10 40 10 40;
    stroke-dashoffset: 5;
    transition: all 0.5s ease;
  }

  ${NavItem}:nth-child(1):hover ~ & .rect {
    stroke-dasharray: 0 5 10 75 10 35;
  }
  ${NavItem}:nth-child(2):hover ~ & .rect {
    stroke-dasharray: 0 15 10 55 10 45;
  }
  ${NavItem}:nth-child(3):hover ~ & .rect {
    stroke-dasharray: 0 25 10 35 10 55;
  }
  ${NavItem}:nth-child(4):hover ~ & .rect {
    stroke-dasharray: 0 35 10 15 10 65;
  }
`;
