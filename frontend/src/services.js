import axios from "axios";

const fetchData = async () => {
    const response = await axios.get("http://localhost:4000/get-address");
    return response.data;
}


export default fetchData;