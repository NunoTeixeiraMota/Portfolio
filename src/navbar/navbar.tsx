import React from 'react';
import styled from 'styled-components';
import Menu from '../menu/menu';

interface NavbarProps {
    links: { label: string; to: string }[];
    logo: string;
    activeLink?: string;
}

const Navbar: React.FC<NavbarProps> = ({ links, logo, activeLink }) => {
    return (
        <NavContainer>
            <Logo src={logo} alt="Logo" className='logo' /> {/* Updated to use src */}
            {/* Render menu items using Menu component */}
            <MenuContainer>
                <Menu links={links} activeLink={activeLink} />
            </MenuContainer>
        </NavContainer>
    );
};

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Ensure it appears above other content */
  display: flex;
  justify-content: space-between; /* Distribute items evenly */
  align-items: center; /* Center vertically */
  padding: 1rem; /* Add some padding for spacing */
  
`;

const MenuContainer = styled.div`
  padding-right: 10rem; /* Add padding to the right of the menu */
`;

const Logo = styled.img``;

export default Navbar;
