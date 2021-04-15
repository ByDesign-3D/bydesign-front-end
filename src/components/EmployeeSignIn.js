import React, { useState } from "react";
import {
    EmployeeForm,
    EmployeeInput,
    EmployeeSignInSection,
    Error,
} from "../styles/employeePortal/employeePortal";
import image from "../images/Untitled.png";
import { PortalLogo } from "../styles/employeePortal/employeePortal";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Button } from "./Button";

const EmployeeSignIn = () => {
    const history = useHistory();
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const handleChanges = (e) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value,
        });
    };

    // AXIOS WITH AUTH NEEDED

    const loginFunc = async (values) => {
        console.log("credentials", values);
        const res = await axios.post(
            "http://localhost:5432/employee/login",
            values
        );
        if (res) {
            console.log(res);
            
        } else {
            console.log("nope");
        }
    };
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
                    value={credentials.username}
                    onChange={handleChanges}
                />
                <label htmlFor="password">Password:</label>
                <EmployeeInput
                    type="password"
                    name="password"
                    autocomplete="none"
                    value={credentials.password}
                    onChange={handleChanges}
                />

                <Error>
                    <p>Error Message Here</p>
                </Error>
                <br />
                <Button onClick={() => loginFunc(credentials)} primary="true">
                    Submit
                </Button>
            </EmployeeForm>
        </EmployeeSignInSection>
    );
};

export default EmployeeSignIn;
