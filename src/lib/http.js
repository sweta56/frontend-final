import axios from "axios";

export const fetcher = async (url, method = "GET", token, data) => {
    try {   
        const res = await axios({
            method,
            url: `http://localhost:8000/api/${url}`,
            data,
            headers: { Authorization: "Bearer " + token },
        });

        return res.data;
    } catch (error) {
        console.log(error);
        const errMsg = error.response?.data?.error;
        throw new Error(errMsg || "something went wrong");
    }
};
