import styled, { css } from "styled-components/macro";

export const EmployeeSignInSection = styled.section`
    height: 100vh;
    width: 100%;
    padding: 4rem 0rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #8e0e00; /* fallback for old browsers */
    background: -webkit-linear-gradient(
        to right,
        #1f1c18,
        #8e0e00
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
        to right,
        #1f1c18,
        #8e0e00
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    @media screen and (max-width: 768px) {
        height: 125vh;
    }
`;

export const PortalLogo = styled.img`
    padding: 0 1rem;
    height: 200px;
    width: 400px;
    border-radius: 20px;
    @media screen and (max-width: 768px) {
        width: 200px;
        height: 100px;
    }
`;

export const sharedStyles = css`
    background-color: #eee;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
`;

export const EmployeeForm = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 500px;
    padding: 40px;
    background-color: #fff;
    border-radius: 10px;
    border:3px solid black;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    margin-top: 2rem;
    margin-bottom: 2rem;
    p,
    label {
        font-weight: 600;
    }
    @media screen and (max-width: 768px) {
        width: 90%;
    }
`;

export const EmployeeInput = styled.input`
    width: 100%;
    border-bottom: 2px solid black !important;
    ${sharedStyles}
`;

export const TextArea = styled.textarea``;

export const FieldSet = styled.fieldset``;
export const Error = styled.div``;
