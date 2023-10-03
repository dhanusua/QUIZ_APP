package com.dhanusu.security.demo;

import java.util.List;
import java.util.Optional;

import javax.print.DocFlavor.READER;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dhanusu.security.Repo;
import com.dhanusu.security.Result;
import com.dhanusu.security.ques;
import com.dhanusu.security.res_repo;

import lombok.RequiredArgsConstructor;
@CrossOrigin("http://localhost:3000/")
@RestController
@RequiredArgsConstructor
public class CandidateControlle {
    private final Repo repo;
    private final res_repo res_repo;
     @GetMapping("/Ques")
    public List<ques> getQuestions() {
		List<ques> allQues = repo.findAll();
	     
		return allQues ;
	}
    @PostMapping("/result")
	public Result resut(@RequestBody Result result) {
		Optional<Result> result2 = res_repo.findByEmail(result.getEmail());
		
		if(result2.isPresent()){
			Result result3 = result2.get();
		    result.setId(result3.getId());
			return res_repo.save(result);
		}
		else{
		return res_repo.save(result);}
	
		
	}
	 @PutMapping("/update")
    @PreAuthorize("hasAuthority('admin:create')")
    public ques post(@RequestBody ques ques) {

        return repo.save(ques);
    }
	@DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('admin:delete')")
	  public String delete(@PathVariable("id") int id){
      repo.deleteById(id);
      return "deleted";

    }
	@PostMapping("/result/exist")
	public Boolean exist(@RequestBody Result result){
		Optional<Result> result2 = res_repo.findByEmail(result.getEmail());
		if(result2.isPresent()){
			return false;
		}
		return true;

	}
	@PutMapping("/result")
	public Optional<Result> result(@RequestBody Result result){
		Optional<Result> result2 = res_repo.findByEmail(result.getEmail());
		return result2;
	}

    
}
