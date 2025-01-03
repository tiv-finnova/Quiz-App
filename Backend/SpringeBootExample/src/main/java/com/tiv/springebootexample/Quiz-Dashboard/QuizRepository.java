// File: Backend/SpringeBootExample/src/main/java/com/tiv/springebootexample/QuizRepository.java

package com.tiv.springebootexample;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuizRepository extends JpaRepository<QuizDashboard, Integer> {
  List<QuizDashboard> findAllByOrderByIdAsc();
}