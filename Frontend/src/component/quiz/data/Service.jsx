import axios from "axios";
const url = "http://localhost:8080/result";
const url1="http://localhost:8080/api/v1/auth/logout"
class Service{
    postresult(react,config){
        return axios.post(url,react,config);
    }
    logout(){
        
        return axios.get(url1)
    }
    
    }

export default new Service();