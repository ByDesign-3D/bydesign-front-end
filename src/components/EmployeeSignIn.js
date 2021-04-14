import React from "react";
import {
    EmployeeButton,
    EmployeeForm,
    EmployeeInput,
    EmployeeSignInSection,
    Error,
} from "../styles/employeePortal/employeePortal";
import image from "../images/Untitled.png";
import { PortalLogo } from "../styles/employeePortal/employeePortal";
import { Button } from "./Button";

const EmployeeSignIn = () => {
    return (
        <EmployeeSignInSection>
            <PortalLogo src={image} />

            <EmployeeForm>
                <h2 style={{ marginBottom: "5%" }}>Employee Sign-In</h2>
                <br />
                <label htmlFor="username">Username:</label>
                <EmployeeInput
                    type="username"
                    name="username"
                    autocomplete="off"
                />
                <label htmlFor="password">Password:</label>
                <EmployeeInput type="password" name="password" />

                <Error>
                    <p>Error Message Here</p>
                </Error>
                <br />
                <Button primary="true">Submit</Button>
            </EmployeeForm>
        </EmployeeSignInSection>
    );
};

export default EmployeeSignIn;
