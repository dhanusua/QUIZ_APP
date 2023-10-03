package com.dhanusu.security.demo;

import java.util.Optional;

import com.dhanusu.security.user.User;
import com.dhanusu.security.user.UserRepository;

public class RoleService {
    UserRepository userRepository;
    public Optional<User> Role(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        return user;

    }
}
