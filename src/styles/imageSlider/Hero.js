import styled from "styled-components";

export const HeroSection = styled.section`
    height: 110vh;
    max-height: 1200px;
    position: relative;
    overflow: hidden;
    text-align: center;
`;

export const HeroWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    bottom:100px;
`;

export const SliderButtons = styled.div`
    position: absolute;
    bottom: 250px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 90%;
    z-index: 10;
`;

export const HeroSlide = styled.div`
    z-index: 1;
    height: 100%;
    width: 100%;
`;

export const HeroSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: "";
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;
        bottom: 0;
        left: 0;
        overflow: hidden;
        opacity: 0.4;

        /* for fade type effect on image */
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.2) 50%,
            rgba(0, 0, 0, 0.6) 100%
        );
    }
`;

export const HeroImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

export const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100%-100px);
    color: white;
   
    h1 {
        font-size: clamp(2rem, 12vw, 3rem);
        text-shadow:2px 2px 0px black;
        font-weight: 700;
        text-transform: uppercase;
       
        text-align: center;
        margin-bottom: 0.8rem;
    }

    p {
        margin-bottom: 1.2rem;
        font-size: clamp(0.3rem, 12vw, 1rem);
        text-shadow:2px 2px 0px black;
        font-weight:700;
    }
`;
