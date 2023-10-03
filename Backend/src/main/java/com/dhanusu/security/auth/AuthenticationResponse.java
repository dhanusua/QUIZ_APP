package com.dhanusu.security.auth;

import com.dhanusu.security.user.Role;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {
  
  @JsonProperty("Token")
  private String accessToken;
  private Role role;
  private String Username;
}
