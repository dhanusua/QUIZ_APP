import axios from "axios";
import {  useState } from "react";
import {  useNavigate } from "react-router-dom";
const url ='http://localhost:8080/api/v1/auth/register'

const SignUpPage =()=>{
    const nav = useNavigate();
    const [firstname, setfirstName] = useState('');
    const [lastname , setlastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [exist , setExist]= useState()
    
     if (exist === false){
        alert("User already exist")
        alert("Plss enter another email")
        setExist(null)
    }
    if (exist=== true){
        alert("registration success")
        nav("/")
    }

    const Submit =() =>{
        if(firstname.length<1 ||lastname.length<1|| email.length<1|| password.length<1){
            alert("Fill every details")
        }
       else{
        const info ={firstname:firstname,lastname:lastname,email:email,password:password}
        axios.post(url,info).then((res)=>setExist(res.data))
       }
    }
    return(
        <div>
          <nav class="navbar navbar-expand-sm bg-dark navbar-dark">

<div class="container-fluid">

<ul class="navbar-nav">

<li class="nav-item">
<button className="btn btn-danger" onClick={()=>nav("/")}>HomePage</button>
</li>

</ul>
</div>
</nav>
<section class="vh-100" >
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" >
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4">

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example1c">First Name</label>
                      <input type="text" id="form3Example1c" class="form-control" value={firstname} onChange={(e)=> setfirstName(e.target.value)}/>
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example1c">Last Name</label>
                      <input type="text" id="form3Example1c" class="form-control" value={lastname} onChange={(e)=> setlastname(e.target.value)}/>
                      
                    </div>
                  </div>
                  

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example3c">Your Email</label>
                      <input type="email" id="form3Example3c" class="form-control" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                      
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example4c" >Password</label>
                      <input type="password" id="form3Example4c" class="form-control" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                      
                    </div>
                  </div>
                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn btn-primary btn-lg" onClick={Submit}>Register</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
           
        </div>
    )
}
export default SignUpPage;