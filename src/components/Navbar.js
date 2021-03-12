import React from "react";
import { menuData } from "../data/MenuData";
import { Nav, Logo, MenuBars, NavMenu, MenuLinks } from "../styles/navbar/Nav";
import { Button, NavButton } from "./Button";
import { IoMenu } from "react-icons/io5";
import image from "../images/temp_logo4.png";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <Nav>
                <NavLink to="/">
                    <Logo src={image} />
                </NavLink>
                <MenuBars>
                    <IoMenu style={{ color: "white" }} />
                </MenuBars>
                <NavMenu>
                    {menuData.map((item, idx) => {
                        return (
                            <MenuLinks primary="true" to={item.link} key={idx}>
                                {item.title}
                            </MenuLinks>
                        );
                    })}
                </NavMenu>
                <NavButton>
                    <Button primary="true" to="/contact">
                        Contact Us{" "}
                    </Button>
                </NavButton>
            </Nav>
        </div>
    );
}

export default Navbar;
