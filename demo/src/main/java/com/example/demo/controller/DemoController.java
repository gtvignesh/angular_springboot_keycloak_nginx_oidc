package com.example.demo.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class DemoController {

    @GetMapping("/public")
    public String publicEndpoint() {
        return "Hello world (public)";
    }

    @GetMapping("/user")
    public String userEndpoint(@AuthenticationPrincipal Jwt jwt) {
        return "Hello %s (sub=%s)".formatted(jwt.getClaim("preferred_username"),
                jwt.getSubject());
    }
}