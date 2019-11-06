import axios from "axios";

export default {

    search: term => {
        return axios.get("/search", { data: { term } });
    }
}