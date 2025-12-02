package com.example.VuaCaQQP.VuaCa_QQP_Backend.configuration;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.ApiResponse;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.exception.ErrorCode;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.MediaType;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import tools.jackson.databind.ObjectMapper;

import java.io.IOException;

// Class này chịu trách nhiệm trả về lỗi khi xác thực thất bại (401)
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException)
            throws IOException, ServletException {

        // 1. Định nghĩa lỗi (Sử dụng ErrorCode 1006 bạn đã khai báo)
        ErrorCode errorCode = ErrorCode.UNAUTHENTICATED;

        // 2. Set status code cho response (401)
        response.setStatus(errorCode.getStatus().value());

        // 3. Set kiểu dữ liệu trả về là JSON
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);

        // 4. Tạo đối tượng ApiResponse chuẩn của bạn
        ApiResponse<?> apiResponse = ApiResponse.builder()
                .code(errorCode.getCode())
                .message(errorCode.getMessage())
                .build();

        // 5. Ghi object ra response dưới dạng JSON string
        // (Vì ở tầng Filter không có @ResponseBody tự động convert nên phải dùng ObjectMapper)
        ObjectMapper objectMapper = new ObjectMapper();

        response.getWriter().write(objectMapper.writeValueAsString(apiResponse));

        // flush để đẩy dữ liệu đi ngay - Nói cách khác là commit
        response.flushBuffer();
    }
}