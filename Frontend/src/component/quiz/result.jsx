import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Service from "./data/Service";


const Result=()=>
{
    const location = useLocation();
    const nav = useNavigate();
    const logout =()=>{
        Service.logout();
        nav("/")
    
      }
    
    return (
        <div>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">

<div class="container-fluid">

<ul class="navbar-nav">

<li class="nav-item">
<button className="btn btn-danger t1" onClick={logout}>Logout</button>
</li>

</ul>
</div>
</nav>
            <div className="container">
            <p>Thanks for Attending Quiz</p>    
           <div>{location.state.username}</div> 
           <div> your score is {location.state.score}</div>
            </div>
        </div>
    )
}
export default Result;