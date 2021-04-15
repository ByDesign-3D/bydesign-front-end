import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedEmployee({ component: Component, ...rest }) {
    let loggedIn = localStorage.getItem("token");

    setTimeout(1000);
    return (
        <Route
            {...rest}
            render={() => {
                if (loggedIn) {
                    return <Component />;
                } else {
                    return <Redirect to="/employeePortal" />;
                }
            }}
        />
    );
}
