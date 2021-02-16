import React from "react";
import { menuData } from "../data/MenuData";
import { Nav } from "../styles/navigation/nav";
import { Logo } from "../styles/navigation/logo";
import { MenuBars } from "../styles/navigation/menuBars";
import { NavMenu } from "../styles/navigation/navMenu";
import { MenuLinks } from "../styles/navigation/menuLinks";

function Navbar() {
    return (
        <div>
            <Nav>
                <Logo>3D By Design</Logo>
                <MenuBars></MenuBars>
                <NavMenu>
                    {menuData.map((item, idx) => {
                        return (
                            <MenuLinks to={item.link} key={idx}>
                                {item.title}
                            </MenuLinks>
                        );
                    })}
                </NavMenu>
                <h1>Nav </h1>
            </Nav>
        </div>
    );
}

export default Navbar;
