package com.tiv.springebootexample;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/register")
public class RegisterController {

  @Autowired
  private RegisterRepository registerRepository;

  @PostMapping
  public ResponseEntity<String> accounts(@RequestBody Register register) {
    registerRepository.save(register);
    return new ResponseEntity<>("User registered successfully", HttpStatus.CREATED);
  }
}