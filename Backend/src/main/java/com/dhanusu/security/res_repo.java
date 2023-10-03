package com.dhanusu.security;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;


public interface res_repo extends JpaRepository<Result, Integer> {
     Optional <Result> findByEmail(String email);
}
