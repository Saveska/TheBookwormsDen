package com.project.thebookwormsden;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan
public class TheBookwormsDenApplication {

    public static void main(String[] args) {
        SpringApplication.run(TheBookwormsDenApplication.class, args);
    }

}
