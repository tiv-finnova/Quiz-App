package com.tiv.springebootexample;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig {

  @Bean
  public WebMvcConfigurer corsConfigurer() {
    return new WebMvcConfigurer() {
      @Override
      public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Erlaubt alle Pfade
            .allowedOrigins("*") // Erlaubt alle Ursprünge
            .allowedMethods("*") // Erlaubt alle HTTP-Methoden
            .allowedHeaders("*") // Erlaubt alle Header
            .allowCredentials(false); // Deaktiviert Anmeldeinformationen, da alle erlaubt sind
      }
    };
  }
}
