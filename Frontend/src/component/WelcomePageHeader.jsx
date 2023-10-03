import { useNavigate } from "react-router-dom"
import "../component/css/welcomePage.css"

const WelcomePageHeader =() =>{
    const navigate = useNavigate()
   
    return(
        <div className="Welfooter">
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">

<div class="container-fluid">

<ul class="navbar-nav">
<li class="nav-item">
<button  className ="btn btn-primary"onClick={()=>navigate("/login")}>Login</button>
</li>
<li class="nav-item">
<button className="btn btn-danger" onClick={()=> navigate("/signup")}>SignUp</button>
</li>

</ul>
</div>
</nav>
            <div></div>
        </div>
    )
}
export default WelcomePageHeader;