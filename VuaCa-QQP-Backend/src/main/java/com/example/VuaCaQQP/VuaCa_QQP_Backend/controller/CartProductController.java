package com.example.VuaCaQQP.VuaCa_QQP_Backend.controller;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.request.AddCartProductRequest;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.ApiRespone;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.CartProductRespone;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.service.CartProductService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart/items")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE,makeFinal = true)
public class CartProductController {
    CartProductService cartProductService;
    @PostMapping
    ApiRespone<CartProductRespone> addProduct(@RequestBody AddCartProductRequest request)
    {
        return ApiRespone.<CartProductRespone>builder().code(200).message("success")
                .result(cartProductService.addCartProduct(request))
                .build();
    }
    @GetMapping("/{cartId}")
    ApiRespone<List<CartProductRespone>> getCartProducts(@PathVariable Integer cartId) {
        return ApiRespone.<List<CartProductRespone>>builder()
                .code(200)
                .message("success")
                .result(cartProductService.getCartProductByCartId(cartId))
                .build();
    }
}
