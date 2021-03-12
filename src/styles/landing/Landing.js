import styled from "styled-components";

export const LandingSection = styled.section`
    height: 100%;
    width: 100%;
    padding: 4rem 0rem;
`;

export const LandingWrapper = styled.div`
    padding: 3rem calc((100vw-1300px) / 2);
    height: 100%;
    width: 95%;
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
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;

    h1 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }

    p {
        margin-bottom: 2rem;
    }
`;
export const RightSideContent = styled.div`
    padding: 1rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px) {
        order:2
    }
`;
