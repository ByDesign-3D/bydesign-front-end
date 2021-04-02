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
                    <blockquote style={{ color: "white", fontSize: "0.7rem" }}>
                        Current Customer?
                    </blockquote>
                    <Button
                        short="true"
                        round="true"
                        primary="true"
                        to="/sign-in"
                    >
                        Sign in{" "}
                    </Button>
                </NavButton>
            </Nav>
        </div>
    );
}

export default Navbar;
