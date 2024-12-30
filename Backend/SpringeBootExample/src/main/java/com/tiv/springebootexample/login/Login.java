package com.tiv.springebootexample.login;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Login {

  @Autowired
  private LoginRepository loginRepository;

  public boolean authenticate(String username, String password) {
    return loginRepository.existsByUsernameAndPassword(username, password);
  }

  @Entity
  @Table(name = "Accounts")
  public static class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String username;
    private String password;

    public String getUsername() {
      return username;
    }

    public String getPassword() {
      return password;
    }
  }

  public static class LoginRequest {
    private String username;
    private String password;

    public String getUsername() {
      return username;
    }

    public String getPassword() {
      return password;
    }
  }
}