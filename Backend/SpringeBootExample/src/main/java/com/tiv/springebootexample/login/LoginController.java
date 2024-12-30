package com.tiv.springebootexample.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/login")
public class LoginController {

  @Autowired
  private Login login;

  @PostMapping
  public ResponseEntity<?> login(@RequestBody Login.LoginRequest request) {
    boolean isAuthenticated = login.authenticate(request.getUsername(), request.getPassword());
    return isAuthenticated
        ? ResponseEntity.ok("Login erfolgreich")
        : ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Abgelehnt");
  }
}
