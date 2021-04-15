import axios from "axios";

export const AuthAxios = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        baseURL: "http://localhost:5432",
        headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
        },
    });
};
