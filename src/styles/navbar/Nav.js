import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
    height: 80px;
    background: black;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;

    width: 100%;
`;

export const Logo = styled.img`
    position: relative;
    bottom: 40%;
    right: 30%;
    padding: 0 1rem;
    height: 80px;
    width: 250px;
    cursor: pointer;
`;

export const MenuBars = styled.i`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const MenuLinks = styled(Link)`
    font-weight: bold;
    color: ${({ primary }) => (primary ? "white" : "black")};
    font-size: 1rem;
    display: flex;
    align-items: center;
    padding: ${({ footer }) => (footer ? "0 0rem " : "0 2rem")};
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`;
