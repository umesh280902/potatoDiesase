import axios from "axios";
import env from "../.env.json"
const {BASE_URL} =env;

const fetchPotatoDisease = async (file) => { // Accept uri and setUri as parameters
    try {
        const response = await axios.post(`${BASE_URL}/predict/`,  file ); // Pass the URI in the request body
        console.log(response); // Log the response from the server
        return response
    } catch (error) {
        console.log(error); // Log any errors that occur during the request
    }
};

export default fetchPotatoDisease;
