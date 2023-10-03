
const Ques=({data,curreentquesId, updatesub ,selectedoption})=>{
      
    return((data.length>0 && data.length>4 ?

        <div ><div className='container'><h3>{data[curreentquesId].title}</h3></div>
        <div>
            <label>
           <input type='radio'  className='form-check-input' id={data[curreentquesId].title} name={data[curreentquesId].title} value={data[curreentquesId].optionA} onChange={()=>updatesub(curreentquesId,1)}checked={1=== selectedoption}/><label for={data[curreentquesId].optionA}>{data[curreentquesId].optionA}</label><br></br>
           <input type='radio' className='form-check-input' id= {data[curreentquesId].title}name={data[curreentquesId].title} value={data[curreentquesId].optionB} onChange={()=>updatesub(curreentquesId,2)}checked={2===selectedoption}/><label for={data[curreentquesId].optionB}>{data[curreentquesId].optionB}</label><br/>
           <input type='radio' className='form-check-input' id ={data[curreentquesId].title}name={data[curreentquesId].title} value={data[curreentquesId].optionC} onChange={()=>updatesub(curreentquesId,3)} checked={3=== selectedoption}/><label for={data[curreentquesId].optionC}>{data[curreentquesId].optionC}</label>
           </label> 
           
           </div>
           </div>
        
    :<div class="spinner-border" role="status"/>))

}
export default Ques;