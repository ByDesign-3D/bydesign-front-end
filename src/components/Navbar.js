import React from "react";
import { menuData } from "../data/MenuData";
import { Nav } from "../styles/navigation/nav";
import { Logo } from "../styles/navigation/logo";
import { MenuBars } from "../styles/navigation/menuBars";
import { NavMenu } from "../styles/navigation/navMenu";
import { MenuLinks } from "../styles/navigation/menuLinks";
import { Button, NavButton } from "./Button";
import { IoMenu } from "react-icons/io5"

function Navbar() {
    return (
        <div>
            <Nav>
                <Logo to="/">3D By Design</Logo>
                <MenuBars><IoMenu style = {{"color":"white"}} /></MenuBars>
                <NavMenu>
                    {menuData.map((item, idx) => {
                        return (
                            <MenuLinks to={item.link} key={idx}>
                                {item.title}
                            </MenuLinks>
                        );
                    })}
                </NavMenu>
                <NavButton>
                    <Button primary={true} to="/contact">
                        Contact Us{" "}
                    </Button>
                </NavButton>
            </Nav>
        </div>
    );
}

export default Navbar;
