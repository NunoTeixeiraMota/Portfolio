import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface MenuItemProps {
    label: string;
    to: string;
    active: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, to, active }) => {
    return (
        <Item active={active}>
            <Link to={to}>{label}</Link>
        </Item>
    );
};


const Item = styled.li<{ active: boolean }>`
  /* Minimalistic styles */
  padding: 0.5rem 1rem;
  border-radius: 3px; /* Subtle rounding */  
  /* Active state styles */
  ${({ active }) =>
    active &&
    `
      background-color: var(--primary-color, #4C97D1);
      color: var(--text-contrast-color, white);
    `};

  /* No circle or number display */
  &::before {
    content: ""; /* Empty content to remove default bullet point */
  }
`;

interface MenuProps {
    links: { label: string; to: string }[];
    activeLink?: string;
}

const Menu: React.FC<MenuProps> = ({ links, activeLink }) => {
    return (
        <MenuList>
            {links.map((link, index) => (
                <MenuItem key={index} label={link.label} to={link.to} active={activeLink === link.to} />
            ))}
        </MenuList>
    );
};

const MenuList = styled.ul`
  display: flex; /* Make menu items horizontal */
  list-style-type: none; /* Remove default bullet points */
`;

export default Menu;
