package com.example.VuaCaQQP.VuaCa_QQP_Backend.controller;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.request.CreateOrderRequest;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.ApiResponse;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.OrderResponse;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/orders")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @PostMapping
    public ApiResponse<OrderResponse> createOrder(
            @RequestBody CreateOrderRequest request,
            @AuthenticationPrincipal Jwt jwt
    ) {
        Integer userId = Integer.parseInt(jwt.getClaims().get("userId").toString());
        return ApiResponse.<OrderResponse>builder()
                .code(200)
                .message("Create order success")
                .result(orderService.createOrder(userId, request))
                .build();
    }
}
