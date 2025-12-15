package com.example.VuaCaQQP.VuaCa_QQP_Backend.controller;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.request.UserRequest;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.request.UserUpdateRequest;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.ApiResponse;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.UserResponse;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.service.UserService;
import jakarta.validation.Valid;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE,makeFinal = true)
public class UserController {
    UserService userService;
    // ================= USER =================

    // Lấy thông tin user đang đăng nhập
    @GetMapping("/me")
    ApiResponse<UserResponse> getMyInfo(
            @AuthenticationPrincipal Jwt jwt
    ) {
        Integer userId = Integer.parseInt(jwt.getClaim("userId").toString());

        return ApiResponse.<UserResponse>builder()
                .code(200)
                .message("success")
                .result(userService.getUser(userId))
                .build();
    }

    // Update thông tin user đang đăng nhập
    @PutMapping("/me")
    ApiResponse<UserResponse> updateMyInfo(
            @AuthenticationPrincipal Jwt jwt,
            @RequestBody UserUpdateRequest request
    ) {
        Integer userId = Integer.parseInt(jwt.getClaim("userId").toString());

        return ApiResponse.<UserResponse>builder()
                .code(200)
                .message("success")
                .result(userService.updateUser(userId, request))
                .build();
    }

    // ================= ADMIN =================

    // Lấy danh sách user (ADMIN)
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping
    ApiResponse<List<UserResponse>> getUsers() {
        return ApiResponse.<List<UserResponse>>builder()
                .code(200)
                .message("success")
                .result(userService.getAllUsers())
                .build();
    }

    // Lấy user theo id (ADMIN)
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/{userId}")
    ApiResponse<UserResponse> getUser(@PathVariable Integer userId) {
        return ApiResponse.<UserResponse>builder()
                .code(200)
                .message("success")
                .result(userService.getUser(userId))
                .build();
    }

    // Xóa user (ADMIN)
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{userId}")
    ApiResponse<String> deleteUser(@PathVariable Integer userId) {
        userService.deleteUser(userId);

        return ApiResponse.<String>builder()
                .code(200)
                .message("success")
                .result("Deleted User")
                .build();
    }

    // ================= PUBLIC =================

    @PostMapping
    ApiResponse<UserResponse> createUser(
            @Valid @RequestBody UserRequest request
    ) {
        return ApiResponse.<UserResponse>builder()
                .code(201)
                .message("created")
                .result(userService.createUser(request))
                .build();
    }
}
