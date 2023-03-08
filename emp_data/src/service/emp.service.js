import axios from "axios";

const BASE_API_URL = "http://localhost:8080";

class empservice
{
    saveEmp(Emp)
    {
         return axios.post(BASE_API_URL + "/insert",Emp);
    }
    
    getempolyee()
    {

        return axios.get(BASE_API_URL + "/getlist");
    }

    getEmpById(id)
    {
       return axios.get(BASE_API_URL + "/" + id);
    }

    updateEmp(id,emp)
    {
       return axios.post(BASE_API_URL + "/update/" + id,emp);
    }

    deleteById(id)
    {
        return axios.delete(BASE_API_URL + "/delete/" + id);
    }
}

export default new empservice();
