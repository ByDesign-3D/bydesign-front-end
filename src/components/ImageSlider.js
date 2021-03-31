import React, { useState, useRef, useEffect } from "react";
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
import faker from "faker";

const Arrow = styled(IoPlaySharp)`
    margin-left: 0.5rem;
`;

const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: white;
    border-radius: 50px;
    background: red;
    cursor: pointer;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;

    &:hover {
        color: white;
        transform: scale(1.15);
    }
`;

const PrevArrow = styled(IoArrowBack)`
    ${arrowButtons}
`;

const NextArrow = styled(IoArrowForward)`
    ${arrowButtons}
`;

const ImageSlider = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    useEffect(() => {
        const next = () => {
            setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);

            console.log(currentSlide);
        };
        timeout.current = setTimeout(next, 4000);
        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
        };
    }, [currentSlide, length]);

    const nextSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);

        console.log(currentSlide);
    };

    const prevSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);

        console.log(currentSlide);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <HeroSection>
            <HeroWrapper>
                {slides.map((slide, index) => {
                    return (
                        <HeroSlide key={index}>
                            {index === currentSlide && (
                                <HeroSlider>
                                    <HeroImage
                                        src={slide.image}
                                        alt={slide.alt}
                                    />
                                    <HeroContent>
                                        <h1>{faker.company.catchPhrase()}</h1>
                                        <p>{faker.lorem.paragraph()}</p>
                                    </HeroContent>
                                </HeroSlider>
                            )}
                        </HeroSlide>
                    );
                })}
                <SliderButtons>
                    <PrevArrow onClick={prevSlide} />
                    <NextArrow onClick={nextSlide} />
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    );
};

export default ImageSlider;
