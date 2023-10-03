import axios from "axios";
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Service from "../data/Service";
const url ="http://localhost:8080/update"
const Updateques=()=>{
const loc =useLocation();
const ques1 =loc.state.elem
const token =loc.state.config
const configs = {
    headers: { Authorization: `Bearer ${token}` }
    };
const nav =useNavigate();


    const submit =()=>{
       
        if(op3.length<1 || opt1.length<1||opt2.length<1||title.length<1||ans>3||ans===0 ||op3===opt1 || opt1===opt2){
            if(op3===opt1 || opt2===opt1 ){
                alert("option must be unique")
            }
            if(op3.length<1 || opt1.length<1||opt2.length<1||title.length<1){
            alert("fill every blanks")}
            if(ans>3||ans===0){
                alert("ans should be 1,2,3")
            }

        }
        else{
        const info ={quesId:quesId,title:title,optionA:opt1,optionB:opt2,optionC:op3,ans:ans}
        axios.put(url,info,configs)
        nav("/admin/questionpage",{state:{Token : token}})}
        
       }
       const[quesId] =useState(ques1.quesId)
       const[title,settitle] =useState(ques1.title)
       const[opt1,set1] =useState(ques1.optionA)
       const[opt2,set2] =useState(ques1.optionB)
       const[op3,set3] =useState(ques1.optionC)
       const[ans,seta] =useState(ques1.ans)
       const logout =()=>{
        Service.logout();
        nav("/")

      }
   
    return(
    <div> <nav class="navbar navbar-expand-sm bg-dark navbar-dark">

    <div class="container-fluid">

    <ul class="navbar-nav">
   
    <li class="nav-item">
    <button className="btn btn-danger t1" onClick={logout}>Logout</button>
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

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Update Question</p>

                <form class="mx-1 mx-md-4">
                <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example1c">Question</label>
                      <input type="text" id="form3Example1c" class="form-control" value={title} onChange={(e)=> settitle(e.target.value)}/>
                      
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example1c">Option1</label>
                      <input type="text" id="form3Example1c" class="form-control" value={opt1} onChange={(e)=> set1(e.target.value)}/>
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example1c">Option2</label>
                      <input type="text" id="form3Example1c" class="form-control" value={opt2} onChange={(e)=> set2(e.target.value)}/>
                    </div>
                  </div>
                  

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example3c">Option3</label>
                      <input type="text" id="form3Example3c" class="form-control" value={op3} onChange={(e)=> set3(e.target.value)}/>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example4c" >Answer</label>
                      <input type="text" id="form3Example4c" class="form-control" value={ans} onChange={(e)=> seta(e.target.value)}/>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                  <button className="btn btn-primary" onClick={submit}>Update</button><button  className="btn btn-primary"onClick={()=>nav("/admin/questionpage",{state:{Token : token}})}>Cancel</button>
                  </div>

                </form>

              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>)
}
export default Updateques;