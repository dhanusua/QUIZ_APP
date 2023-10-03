package com.dhanusu.security.demo;

import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dhanusu.security.Repo;
import com.dhanusu.security.Result;
import com.dhanusu.security.res_repo;
import com.dhanusu.security.user.User;
import com.dhanusu.security.user.UserRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/admin")
@PreAuthorize("hasRole('ADMIN')")
@RequiredArgsConstructor
public class AdminController {
     private final res_repo Res_rep;
     @GetMapping("/score")
    @PreAuthorize("hasAuthority('admin:read')")
    public List<Result> score() {
		List<Result> data = Res_rep.findAll();
		return data;
    }   

   
  UserRepository userRepository;
    User user;
 
}
