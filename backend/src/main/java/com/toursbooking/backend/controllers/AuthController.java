package com.toursbooking.backend.controllers;

import com.toursbooking.backend.models.User;
import com.toursbooking.backend.security.JwtUtil;
import com.toursbooking.backend.services.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final UserService userService;
    private final JwtUtil jwtUtil;
    @PostMapping("/register")
    public ResponseEntity<?> createAccount(@Valid @RequestBody User user) {
        User newUser = userService.registerUser(user);
        return ResponseEntity.ok("Usuario registrado con éxito: " + newUser.getUsername());
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody User loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtil.generateToken(authentication);
        return ResponseEntity.ok("Bearer " + jwt);
    }
}
