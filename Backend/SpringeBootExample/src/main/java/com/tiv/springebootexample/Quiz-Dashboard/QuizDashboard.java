// File: Backend/SpringeBootExample/src/main/java/com/tiv/springebootexample/QuizDashboard.java

package com.tiv.springebootexample;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "quiz_dashboard")
public class QuizDashboard {

  @Id
  private int id;
  private String quizName;
  private int quizVersion;
  private int quizLevel;
  private String quizDate;

  // Getters and setters
  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getQuizName() {
    return quizName;
  }

  public void setQuizName(String quizName) {
    this.quizName = quizName;
  }

  public int getQuizVersion() {
    return quizVersion;
  }

  public void setQuizVersion(int quizVersion) {
    this.quizVersion = quizVersion;
  }

  public int getQuizLevel() {
    return quizLevel;
  }

  public void setQuizLevel(int quizLevel) {
    this.quizLevel = quizLevel;
  }

  public String getQuizDate() { return quizDate;}

  public void setQuizDate(String quizDate) { this.quizDate = quizDate; }

}