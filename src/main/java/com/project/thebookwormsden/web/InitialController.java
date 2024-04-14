package com.project.thebookwormsden.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class InitialController {

    @GetMapping
    public String message(){
        return "The Bookworm's den";
    }
}
