package com.project.thebookwormsden.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    private String name;

    private String surname;

    private String role;

    private String email;

    private String password;

    private String phoneNumber;
}