import styled from "styled-components";

export const LandingSection = styled.section`
    height: 100%;
    width: 100%;
    padding: 4rem 0rem;
    display: flex;
    flex-direction: column;
`;

export const LandingWrapper = styled.div`
    padding: 3rem calc((100vw-1300px) / 2);
    height: 100%;
    width: 95%;
    margin-bottom: 3%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

export const LeftSideContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.4;
    padding: 1rem 2rem;

    h1 {
        margin-bottom: 2rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }

    p {
        margin-bottom: 2rem;
    }
    @media screen and (max-width: 768px) {
        order: 2;
        border: none !important;
    }
`;
export const RightSideContent = styled.div`
    padding: 1rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        order: 1;
        border: none !important;
    }
`;

export const MiddleImage = styled.div`
    width: 100%;
    height: 600px;
    object-fit: cover;
    margin-bottom: 5%;
    background-image: url("https://3dprinterchat.com/wp-content/uploads/2017/10/Gyeongnam-Center-for-Creative-Economy-Innovation-Makerspace-with-3D-printers-and-other-equipment.jpg");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0 0 30px #333;

    &::before {
        opacity: 0.4;
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.2) 50%,
            rgba(0, 0, 0, 0.6) 100%
        );
    }
`;
