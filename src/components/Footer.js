import React from "react";
import { FooterContainer, FooterContent, FooterMenu } from "../styles/footer";
import { footerMenu } from "../data/MenuData";
import { MenuLinks } from "../styles/navbar/Nav";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterMenu>
                    {footerMenu.map((item, idx) => {
                        return (
                            <MenuLinks
                                footer="true"
                                style={{ fontSize: "0.7rem", margin: "1rem" }}
                                primary="true"
                                to={item.link}
                                key={idx}
                            >
                                {item.title}
                            </MenuLinks>
                        );
                    })}
                </FooterMenu>
                <p style={{ color: "white",marginRight:"250px" }}>&#169; 3D ByDesign</p>
                <FooterMenu>
                    <a href="https://facebook.com">
                        <FaFacebookSquare
                            style={{
                                color: "white",
                                fontSize: "2rem",
                                margin: "20px",
                            }}
                        />
                    </a>
                    <a href="https://instagram.com">
                        <FaInstagram
                            style={{ color: "white", fontSize: "2rem" }}
                        />
                    </a>
                    <a href="https://twitter.com">
                        <FaTwitter
                            style={{
                                color: "white",
                                fontSize: "2rem",
                                margin: "20px",
                            }}
                        />
                    </a>

                    
                </FooterMenu>
            </FooterContent>
        </FooterContainer>
    );
};

export default Footer;
