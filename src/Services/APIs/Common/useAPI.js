import { useState } from "react";

export default (apiFunc) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const request = async (...args) => {
        setLoading(true);
        try {
            const result = await apiFunc(...args);
            setData(result.data);
        } catch (err) {
            setError(err.message || "Unexpected Error!");
        } finally {
            setLoading(false);
        }
    };

    const requestPromise = async (...args) => {
        return new Promise((resolve, reject) => {            
            try {
                console.log(args);
                apiFunc(...args).then(result => {
                    resolve(result.data);
                })
                .catch(error => {    
                    console.log(error.response);                
                    console.log(error.message);                
                    reject(error)
                });                
            } catch (err) {
                reject(err.message || "Unexpected Error!")
            }
        })
    };    

    return {
        data,
        error,
        loading,
        request,
        requestPromise
    };
};