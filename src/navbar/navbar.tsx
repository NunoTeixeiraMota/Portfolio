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
            <Logo src={logo} alt="Logo" className='logo' />
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
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MenuContainer = styled.div`
    @media (max-width: 768px) {
        display: none; /* Hide menu on small screens */
    }
    padding-left: 20px; /* Add padding to the left of menu items */
`;

const Logo = styled.img``;

export default Navbar;
