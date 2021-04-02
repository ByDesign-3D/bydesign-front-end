import styled from "styled-components";

export const FooterContainer = styled.section`
    background: black;
    height: 70px;
    width: 100%;
    position: fixed !important;
    bottom: 0 !important;
    left: 0 !important;
    z-index: 100;
`;

export const FooterContent = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        @media screen and (max-width: 768px) {
            margin-left: 44%;
            font-size:0.7rem;
        }
    }
`;

export const FooterMenu = styled.div`
    display: flex;
    align-items: center;
    padding: 2rem;
    margin-right: 5%;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
