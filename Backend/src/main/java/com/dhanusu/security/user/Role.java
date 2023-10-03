package com.dhanusu.security.user;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import static com.dhanusu.security.user.Permission.ADMIN_CREATE;
import static com.dhanusu.security.user.Permission.ADMIN_DELETE;
import static com.dhanusu.security.user.Permission.ADMIN_READ;
import static com.dhanusu.security.user.Permission.ADMIN_UPDATE;
import static com.dhanusu.security.user.Permission.CANDIDATE_CREATE;
import static com.dhanusu.security.user.Permission.CANDIDATE_DELETE;
import static com.dhanusu.security.user.Permission.CANDIDATE_READ;
import static com.dhanusu.security.user.Permission.CANDIDATE_UPDATE;

import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RequiredArgsConstructor
public enum Role {

  USER(Collections.emptySet()),
  ADMIN(
          Set.of(
                  ADMIN_READ,
                  ADMIN_UPDATE,
                  ADMIN_DELETE,
                  ADMIN_CREATE,
                  CANDIDATE_READ,
                  CANDIDATE_UPDATE,
                  CANDIDATE_DELETE,
                  CANDIDATE_CREATE
          )
  ),
  CANDIDATE(
          Set.of(
                  CANDIDATE_READ,
                  CANDIDATE_UPDATE,
                  CANDIDATE_DELETE,
                  CANDIDATE_CREATE
          )
  )

  ;

  @Getter
  private final Set<Permission> permissions;

  public List<SimpleGrantedAuthority> getAuthorities() {
    var authorities = getPermissions()
            .stream()
            .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
            .collect(Collectors.toList());
    authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
    return authorities;
  }
}
