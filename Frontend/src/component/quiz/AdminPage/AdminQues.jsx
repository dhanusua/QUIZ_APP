import axios from "axios";
import { useEffect, useState } from "react";
import { redirect, useLocation, useNavigate, useNavigation } from "react-router-dom";

import Service from "../data/Service";


const Adminques =() =>{
    const url = "http://localhost:8080/Ques"
    const url1 ="http://localhost:8080/"
    const logout =()=>{
      Service.logout();
      nav("/")

    }
    const[data,setData] =useState([])
    const location =useLocation();
    const nav =useNavigate();
    const config = {
      headers: { Authorization: `Bearer ${location.state.Token}` }
      };
      const update =(elem)=>{
        nav("/update",{state :{elem : elem , config : location.state.Token }})
      }
const fetchInfo = () => {
    
    return axios.get(url, config).then((res) => setData(res.data));
  };
  
const deleteinfo =(id)=>{
  axios.delete(url1+id,config)
  

}

useEffect(()=>{
    fetchInfo()
})
return(
  

  (data.length>0?<div >
     <nav class="navbar navbar-expand-sm bg-dark navbar-dark">

<div class="container-fluid">

<ul class="navbar-nav">
<li class="nav-item">
<button className="btn btn-primary" onClick={()=>nav("/addQues",{state :{config : location.state.Token }})}>AddQues</button>
</li>
<li class="nav-item">
<button className="btn btn-danger" onClick={logout}>logout</button>
</li>

</ul>
</div>
</nav>
  <div>
<table className="table">
    <thead>
  <tr>
    <th>Question</th>
    <th>Option1</th>
    <th>Option2</th>
    <th>Option3</th>
    <th>Ans</th>
    <th>Actions</th>
  </tr>
  </thead>
 <tbody>
 
    {
        data.map(element=><tr key={element.quesId}>
            <td>{element.title}</td>
            <td>{element.optionA}</td>
            <td>{element.optionB}</td>
            <td>{element.optionC}</td>
            <td>{element.ans}</td>
            <td><button className="btn btn-primary" onClick={(e)=>update(element)}>Update Ques</button>
             <button className="btn btn-danger" onClick={(e)=>deleteinfo(element.quesId)}>Delete</button></td>
        </tr>)
    }
 </tbody>
</table>
</div>
</div>:<div><nav class="navbar navbar-expand-sm bg-dark navbar-dark">

<div class="container-fluid">

<ul class="navbar-nav">
<li class="nav-item">
<button className="btn btn-primary" onClick={()=>nav("/addQues",{state :{config : location.state.Token }})}>AddQues</button>
</li>
<li class="nav-item">
<button className="btn btn-danger" onClick={logout}>logout</button>
</li>

</ul>
</div>
</nav>
<div>No question available</div></div>))
}
export default Adminques;