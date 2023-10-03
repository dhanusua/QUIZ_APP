import React,{useState, useEffect } from 'react' 
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

const url ='http://localhost:8080/api/v1/auth/authenticate'

const Login=()=>{ 
	const [email,setEmail]=useState(""); 
	const [password,setPassw]=useState(""); 
	const[dataInput, setDataInput]=useState([]); 
	const nav = useNavigate();
	console.log(dataInput.username)
	
console.log(dataInput.Token)
if (dataInput.role ==="ADMIN"){
	nav("/adminpage" ,{state:{Token: dataInput.Token , username: dataInput.username}})
}
if (dataInput.role ==="CANDIDATE"){
	nav("/QuizPage" ,{state:{Token: dataInput.Token , username: dataInput.username ,email:email}})
}
	const submitThis=()=>{
		const info={email: email,password:password}; 
    axios.post(url,info).then((res => setDataInput(res.data))).catch(()=>{
		alert("user not exist")
	})
		
	
	}
	useEffect(() => {
		
	  }, []); 
	return(<div>
		<nav class="navbar navbar-expand-sm bg-dark navbar-dark">

<div class="container-fluid">

<ul class="navbar-nav">

<li class="nav-item">
<button className="btn btn-danger" onClick={()=>nav("/")}>HomePage</button>
</li>

</ul>
</div>
</nav>
	<div className='container h-100'>
		
  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="passw" class="form-label">Password</label>
    <input type="password" class="form-control" id="passw" value={password} onChange={(e)=>setPassw(e.target.value)}/>
  </div>
  
  <button type="submit" class="btn btn-primary"onClick={submitThis}>Login</button>

			
	</div>
	</div>
)} 
export default  Login;