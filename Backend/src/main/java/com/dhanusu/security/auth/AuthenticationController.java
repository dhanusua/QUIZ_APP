package com.dhanusu.security.auth;

import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import static com.dhanusu.security.user.Role.CANDIDATE;

import com.dhanusu.security.user.User;
import com.dhanusu.security.user.UserRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

  private final AuthenticationService service;
  private final UserRepository userRepository;
  @PostMapping("/register")
  public  Boolean register(
      @RequestBody RegisterRequest request
  ) {
    Optional<User> user = userRepository.findByEmail(request.getEmail());
    if (user.isPresent()) {
      return false;
      
    }
    request.setRole(CANDIDATE);
    service.register(request);
    return true;
    
  }
  @PostMapping("/authenticate")
  public ResponseEntity<AuthenticationResponse> authenticate(
      @RequestBody AuthenticationRequest request
  ) {
    return ResponseEntity.ok(service.authenticate(request));
  }




}
