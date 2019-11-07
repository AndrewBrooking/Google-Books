import axios from "axios";

export default {

    search: term => {
        console.log(term);
        return axios.get("/api/search/" + term);
    }
}