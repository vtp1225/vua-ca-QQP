package com.example.VuaCaQQP.VuaCa_QQP_Backend.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
//        registry.addMapping("/**") // Cho phép tất cả các API
//                .allowedOrigins("*") // Cho phép Frontend truy cập API
//                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Hỗ trợ preflight request
//                .allowedHeaders("*") // Cho phép mọi header từ FE
//                .allowCredentials(false); // Nếu FE gửi cookie hoặc xác thực
    }
}