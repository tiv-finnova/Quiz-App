package com.tiv.springebootexample;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RegisterRepository extends JpaRepository<Register, Long> {
  Register findByUsernameAndPassword(String username, String password);
}
