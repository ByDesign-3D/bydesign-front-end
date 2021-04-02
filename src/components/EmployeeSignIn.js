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
                <h2 style = {{marginBottom:"5%"}}>ByDesign Portal Sign-In</h2>
                <br/>
                <label htmlFor="username">Username:</label>
                <EmployeeInput type="text" name="username" />
                <label htmlFor="password">Password:</label>
                <EmployeeInput type="text" name="password" />

                <Error>
                    <p>Error Message Here</p>
                </Error>
                <br/>
                <Button primary="true">Submit</Button>
            </EmployeeForm>
        </EmployeeSignInSection>
    );
};

export default EmployeeSignIn;
