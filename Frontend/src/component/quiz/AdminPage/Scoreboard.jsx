import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";
const Scoreboard=(token)=>{
    
    const url = "http://localhost:8080/api/v1/admin/score";
    const [data, setData] = useState([]);
    const fetchInfo = () => {
      const config = {
        headers: { Authorization: `Bearer ${token.token}` }
        };
      return axios.get(url, config).then((res) => setData(res.data));
    };
            
    useEffect(() => {
      fetchInfo();
    }, []); 
    return((data.length>0?<div><div  className=' score-container'>
      <h3>Scoreboard</h3>
      
         <table className='table' >
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">Name</th>
          <th scope="col">Score</th>
          </tr></thead>
          <tbody>
         {data.map((result, index) => {
        return (
          
            <tr>
              <td>{index+1}</td>
            <td >{result.username}</td>
            <td>{result.score}</td>
            </tr>
         
          )
        }
        
    )}
    </tbody>
 </table>
    </div> </div>:<div><p>Currently no data available</p>
    <div class="spinner-border" role="status">
  
</div> </div>))

} 
export default Scoreboard