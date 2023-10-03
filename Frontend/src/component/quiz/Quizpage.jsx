import { useState } from "react";
import Ques from "./Questions";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import axios from 'axios';
import { useEffect } from "react";

import Service from "./data/Service";

const Quizpage=()=>{
  const url = "http://localhost:8080/Ques";
  const url1="http://localhost:8080/result/exist"
  const url2="http://localhost:8080/result"
  const nav = useNavigate();
  const location = useLocation();
  const [complete ,setcomplete] =useState()
  const[score1 ,setscore] = useState()
  const[id ,setid] = useState()
  
  const logout =()=>{
    Service.logout();
    nav("/")

  }
  const result ={
    email : location.state.email
  }

const [randData , setrandData] =useState([])

function shuffle(data){
  let shuffledQues =[];
  let usedindex =[];
  let i=0;
  while(i<data.length){
    let randNum = Math.floor(Math.random()*data.length)
    if(!usedindex.includes(randNum)){
      shuffledQues.push(data[randNum]);
      usedindex.push(randNum);
      i++
    }
    
  }
 
  if(shuffledQues.length===data.length){
    setrandData(shuffledQues)
  }
  
}
const config = {
  headers: { Authorization: `Bearer ${location.state.Token}` }
  };
  if(complete===false){
    axios.put(url2,result,config).then((res)=>{setscore(res.data.score)
      setid(res.data.id)
    })
  }

  const fetchInfo = () => {
    
   
    
    if(complete!== true){
      axios.post(url1,result,config).then((res)=>setcomplete(res.data))}
    return axios.get(url, config).then((res) => {
      shuffle(res.data)
    });
  };
          

  useEffect(() => {
    fetchInfo();
  }, []); 
      
    const [subiteddta,setsubmiteddata]=useState({});
    const updatesub =(index,value)=>{
        setsubmiteddata({...subiteddta,[index]:value})

 }    
let score =0
    randData.forEach((elem,i)=>{
      
      if(elem.ans===subiteddta[i]){
       score +=1
      }
    })   
     const[curreentquesId,setcurrentquesId]=useState(0)
    return(
      (complete===true?
      <div>
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">

<div class="container-fluid">

<ul class="navbar-nav">

<li class="nav-item">
<button className="btn btn-danger" onClick={logout}>logout</button>
</li>

</ul>
</div>
</nav>
        <div className="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
        <div class="card text-black" >
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
            <Ques 
            data={randData}
            curreentquesId={curreentquesId}
            updatesub={updatesub}
            selectedoption={subiteddta[curreentquesId]}/>
            <Button data ={randData} setcurrentquesId={setcurrentquesId} curreentquesId={curreentquesId}subiteddta={subiteddta} username={location.state.username} Token={location.state.Token} score={score} email={location.state.email} resId={id}/>
        </div></div></div></div></div></div>
        </div>: <div><nav class="navbar navbar-expand-sm bg-dark navbar-dark">

<div class="container-fluid">

<ul class="navbar-nav">

<li class="nav-item">
<button className="btn btn-danger" onClick={logout}>Logout</button>
</li>

</ul>
</div>
</nav> <div className="container">
          <h1>You have already Attend Quiz</h1>
          <p>Your score is {score1}</p>
          <button className ="btn btn-primary" onClick={()=>setcomplete(true)}>Retake Quiz</button></div> 
        </div>)
        
        
    );
}
export default Quizpage;