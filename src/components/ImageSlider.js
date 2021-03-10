import React from "react";
import styled, { css } from "styled-components/macro";
import {
    HeroSection,
    HeroWrapper,
    HeroSlide,
    HeroSlider,
    HeroContent,
    HeroImage,
    SliderButtons,
} from "../styles/imageSlider/Hero";
import { Button } from "./Button";
import { IoPlaySharp, IoArrowForward, IoArrowBack } from "react-icons/io5";

const Arrow = styled(IoPlaySharp)``;

const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: #000d1a;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;

    &hover{
        background:	#ff0000 ;
        transform: scale(1.05)

    }
`;

const PrevArrow = styled(IoArrowBack)`
    ${arrowButtons}
`;

const NextArrow = styled(IoArrowForward)`
    ${arrowButtons}
`;

const ImageSlider = ({ slides }) => {
    return (
        <HeroSection>
            <HeroWrapper>
                {slides.map((slide, index) => {
                    return (
                        <HeroSlide key={index}>
                            <HeroSlider>
                                <HeroImage />
                                <HeroContent>
                                    <h1>{slide.title}</h1>
                                    <p>{slide.price}</p>
                                    <Button
                                        to={slide.path}
                                        primary="true"
                                        css={`
                                            max-width: 160px;
                                            margin: 2%;
                                        `}
                                    >
                                        {slide.label}
                                        <Arrow />
                                    </Button>
                                </HeroContent>
                            </HeroSlider>
                        </HeroSlide>
                    );
                })}
                <SliderButtons>
                    <PrevArrow />
                    <NextArrow />
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    );
};

export default ImageSlider;
