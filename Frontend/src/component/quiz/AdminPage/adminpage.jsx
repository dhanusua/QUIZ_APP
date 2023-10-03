import { useLocation, useNavigate } from "react-router-dom"
import Scoreboard from "./Scoreboard";
import Service from "../data/Service";



const Adminpage= () =>{
  const nav =useNavigate();
      const location = useLocation();
      const logout =()=>{
        Service.logout();
        nav("/")

      }
      const quespage =()=>{
        nav("/admin/questionpage" , {state:{Token : location.state.Token }})
      }
      
   
      return(
        <div>
          <nav class="navbar navbar-expand-sm bg-dark navbar-dark">

       <div class="container-fluid">
  
       <ul class="navbar-nav">
       <li class="nav-item">
    <button  className ="btn btn-primary"onClick={quespage}>Questions</button>
    </li>
       <li class="nav-item">
       <button className="btn btn-danger" onClick={logout}>Logout</button>
     </li>
       
  </ul>
</div>
</nav>
          <div className="container"><Scoreboard token = {location.state.Token}> </Scoreboard></div>
        </div>
      )
}
export default Adminpage;