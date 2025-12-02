package com.example.VuaCaQQP.VuaCa_QQP_Backend.controller;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.request.AuthenticationRequest;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.request.IntrospectRequest;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.request.LogoutRequest;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.request.RefreshRequest;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.ApiResponse;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.AuthenticationResponse;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.IntrospectResponse;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.service.AuthenticationService;
import com.nimbusds.jose.JOSEException;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AuthenticationController {
    @Autowired
    AuthenticationService service;

    //login
    @PostMapping("/token")
    ApiResponse<AuthenticationResponse> taoToken(@RequestBody AuthenticationRequest request) {
        var result = service.authenticate(request);

        return ApiResponse.<AuthenticationResponse>builder()
                .result(result)
                .build();
    }

    @PostMapping("/introspect")
    ApiResponse<IntrospectResponse> kiemTraToken(@RequestBody IntrospectRequest request) throws ParseException, JOSEException {
        var result = service.introspect(request);
        return ApiResponse.<IntrospectResponse>builder()
                .result(result)
                .build();
    }

    @PostMapping("/logout")
    ApiResponse<Void> logout(@RequestBody LogoutRequest request)
            throws ParseException, JOSEException {
        service.logout(request);

        return ApiResponse.<Void>builder()
                .message("Đăng xuất thành công") // Thêm dòng này
                .build();
    }

    @PostMapping("/refresh")
    ApiResponse<AuthenticationResponse> refreshToken(@RequestBody RefreshRequest request)
            throws ParseException, JOSEException {
        var result = service.refreshToken(request);
        return ApiResponse.<AuthenticationResponse>builder()
                .result(result)
                .build();
    }
}
