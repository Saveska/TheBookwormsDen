package com.project.thebookwormsden;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class TheBookwormsDenApplication {

    public static void main(String[] args) {
        SpringApplication.run(TheBookwormsDenApplication.class, args);
    }

    //@Bean
//    PasswordEncoder passwordEncoder() {
  //      return new BCryptPasswordEncoder(10);
    //}

}
