package com.example.auth_service.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import com.example.auth_service.model.Role;

@Data
public class RegisterDTO {
    @NotNull
    private String name;

    @Email
    @NotNull
    private String email;

    @NotNull
    @Size(min = 6)
    private String password;

    private Role role = Role.USER;
}
