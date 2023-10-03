
import { useNavigate } from "react-router-dom";
import Service from "./data/Service"

const Button =({ data,setcurrentquesId,curreentquesId,username,subiteddta ,score,Token ,email,resId})=>{
    const navigate=useNavigate();
    
     
    const result=()=>{
        const config = {
            headers: { Authorization: `Bearer ${Token}` }
            };
        const res={id:resId , email:email, score:score ,username:username }
         Service.postresult(res,config)
        navigate('/result',{state:{username:username , score:score}})
        

    }
    return(
        <div>
             <button className ="btn btn-primary"
            onClick={()=>setcurrentquesId(curreentquesId-1)} disabled={curreentquesId===0 }>Previous Question</button> 
            {curreentquesId<4? <button
           className ="btn btn-primary"
            onClick={()=>setcurrentquesId(curreentquesId+1)
            }disabled={!subiteddta[curreentquesId] }>Next Question</button> : <button className ="btn btn-primary"
            disabled={!subiteddta[curreentquesId]}
            onClick={()=>result()} >Submit</button> }
            
        

        </div>
    )
}
export default Button;