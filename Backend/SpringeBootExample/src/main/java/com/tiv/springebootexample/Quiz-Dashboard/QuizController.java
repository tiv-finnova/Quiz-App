// File: Backend/SpringeBootExample/src/main/java/com/tiv/springebootexample/QuizController.java

package com.tiv.springebootexample;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/quiz")
public class QuizController {

  @Autowired
  private QuizRepository quizRepository;

  @GetMapping("/dashboard")
  public List<QuizDashboard> getQuizDashboard() {
    return quizRepository.findAllByOrderByIdAsc();
  }
}