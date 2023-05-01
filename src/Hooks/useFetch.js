import { useEffect, useState } from "react";
import axios from "axios";


const useFetch = (uri) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true)
            try {
               const response = await axios.get(uri);
               const json = response?.data;
               console.log(json)
               
               setData(json);
               setLoading(false);
            }catch (error){
                setError(error);
                setLoading(false);
            }
        }
        fetchData();
    }, [uri]);

    return { loading, error, data}
}
export default useFetch;