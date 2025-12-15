package com.example.VuaCaQQP.VuaCa_QQP_Backend.controller;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.request.AddCartProductRequest;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.request.UpdateCartProductRQ;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.ApiResponse;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.CartProductRespone;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.service.CartProductService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart/items")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE,makeFinal = true)
public class CartProductController {
    CartProductService cartProductService;

    @PostMapping
    ApiResponse<CartProductRespone> addProduct(@RequestBody AddCartProductRequest request,@AuthenticationPrincipal Jwt jwt)
    {
        Integer userId = Integer.parseInt(jwt.getClaims().get("userId").toString());
        return ApiResponse.<CartProductRespone>builder().code(200).message("success")
                .result(cartProductService.addCartProduct(request,userId)).build();
    }
    @GetMapping
    ApiResponse<List<CartProductRespone>> getMyCartProducts(
            @AuthenticationPrincipal Jwt jwt
    ) {
        Integer userId = Integer.parseInt(jwt.getClaim("userId").toString());

        return ApiResponse.<List<CartProductRespone>>builder()
                .code(200)
                .message("success")
                .result(cartProductService.getCartProductByUserId(userId))
                .build();
    }

    @PutMapping("/{id}")
    ApiResponse<CartProductRespone> updateCartProduct(@PathVariable Integer id,
                                                      @RequestBody UpdateCartProductRQ request,
                                                      @AuthenticationPrincipal Jwt jwt)
    {
        Integer userId = Integer.parseInt(jwt.getClaims().get("userId").toString());
        return ApiResponse.<CartProductRespone>builder()
                .code(200)
                .message("success")
                .result(cartProductService.updateCartProduct(request,id,userId))
                .build();
    }
    @DeleteMapping("/{id}")
    ApiResponse deleteCartProduct(
            @PathVariable Integer id,
            @AuthenticationPrincipal Jwt jwt
    ) {
        Integer userId = Integer.parseInt(jwt.getClaim("userId").toString());

        cartProductService.deleteCartProduct(id, userId);

        return ApiResponse.builder()
                .code(200)
                .message("success")
                .build();
    }
}
