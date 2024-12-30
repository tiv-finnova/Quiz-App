package com.tiv.springebootexample;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/register")
public class RegisterController {

  @Autowired
  private RegisterRepository registerRepository;

  @PostMapping
  public ResponseEntity<String> register(@RequestBody Register request) {
    registerRepository.save(request);
    return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully");
  }
}