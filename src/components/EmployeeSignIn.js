import React, { useState, useEffect } from "react";
import {
    EmployeeForm,
    EmployeeInput,
    EmployeeSignInSection,
    Error,
} from "../styles/employeePortal/employeePortal";
import image from "../images/Untitled.png";
import { PortalLogo } from "../styles/employeePortal/employeePortal";
import { useHistory } from "react-router-dom";
import { Button } from "./Button";
import { AuthAxios } from "../util/AuthAxios";

const EmployeeSignIn = () => {
    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0);
    });
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

    const loginFunc = (values) => {
        AuthAxios()
            .post("/employee/login", values)
            .then((res) => {
                console.log(res, "yay");
                localStorage.setItem("token", res.data.token);
                history.push("/employee-dash");
            })
            .catch((err) => console.log(err));
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
