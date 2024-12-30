package com.tiv.springebootexample.login;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepository extends JpaRepository<Login.Account, Integer> {
  boolean existsByUsernameAndPassword(String username, String password);
}
