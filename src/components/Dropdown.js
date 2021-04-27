import React from "react";
import { Button } from "../components/Button";
import {
    DropdownContainer,
    Icon,
    CloseIcon,
    DropdownContent,
    DropMenu,
} from "../styles/navbar/Dropdown";
import { MenuLinks } from "../styles/navbar/Nav"
import { dropdownData } from "../data/MenuData";

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownContent>
                <DropMenu>
                    {dropdownData.map((item, idx) => {
                        return (
                            <MenuLinks
                                primary="true"
                                big="true"
                                to={item.link}
                                key={idx}
                                style = {{borderBottom:"3px solid black",borderRadius:"10%",alignItems:"space-between"}}
                            >
                                {item.title}
                            </MenuLinks>
                        );
                    })}
                </DropMenu>
                <Button style = {{background:"black"}}primary="true">Contact Us</Button>
            </DropdownContent>
        </DropdownContainer>
    );
};

export default Dropdown;
