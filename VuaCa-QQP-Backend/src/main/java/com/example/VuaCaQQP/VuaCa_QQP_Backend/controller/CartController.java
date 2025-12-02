package com.example.VuaCaQQP.VuaCa_QQP_Backend.controller;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.request.CartRequest;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.ApiRespone;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.CartRespone;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.service.CartService;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cart")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class CartController {

    CartService cartService;

    // Lấy giỏ hàng bằng cartId
    @GetMapping("/{cartId}")
    ApiRespone<CartRespone> getCartById(@PathVariable("cartId") int cartId) {
        return ApiRespone.<CartRespone>builder()
                .code(200)
                .message("success")
                .result(cartService.getCartById(cartId))
                .build();
    }

    // Lấy giỏ hàng bằng userId
    @GetMapping("/user/{userId}")
    ApiRespone<CartRespone> getCartByUserId(@PathVariable("userId") int userId) {
        return ApiRespone.<CartRespone>builder()
                .code(200)
                .message("success")
                .result(cartService.getCartByUserId(userId))
                .build();
    }

    @PostMapping
    ApiRespone<CartRespone> createCart(@RequestBody CartRequest cartRequest) {
        return ApiRespone.<CartRespone>builder()
                .message("success")
                .code(200)
                .result(cartService.createCart(cartRequest))
                .build();
    }
    @DeleteMapping("/{id}")
    ApiRespone deleteCart(@PathVariable("id") int id) {
        cartService.deleteCartById(id);
        return ApiRespone.builder()
                .message("success")
                .code(200)
                .build();
    }
}

