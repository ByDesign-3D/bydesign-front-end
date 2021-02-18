import styled from "styled-components";

export const MenuBars = styled.i`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
    }
`;
