import api from "../Common/api";

const getPersons = (prodID) => api.get("/persons/getPersons/" + prodID);
const getPersonsPost = (data) => api.post("/persons/getPersons", data);

export default {
    getPersons,
    getPersonsPost
};