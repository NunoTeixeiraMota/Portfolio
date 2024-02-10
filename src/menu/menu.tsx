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
    padding: 0.5rem 1rem;
    border-radius: 3px;
    ${({ active }) =>
        active &&
        `
            background-color: var(--primary-color, #4C97D1);
            color: var(--text-contrast-color, white);
        `};
        padding-left: 20px; /* Add padding to the left of menu items */

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
    display: flex;
    padding: 0;
    list-style-type: none;
    margin: 0;
    @media (max-width: 768px) {
        flex-direction: column; /* Change to column layout on small screens */
        align-items: center; /* Center items vertically */
    }
`;

export default Menu;
