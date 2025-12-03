package com.example.VuaCaQQP.VuaCa_QQP_Backend.controller;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.ApiResponse;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.ProductRespone;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.service.ProductService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE,makeFinal = true)
public class ProductController {
    ProductService productService;
    @GetMapping
    ApiResponse<List<ProductRespone>> getProducts(){
        return ApiResponse.<List<ProductRespone>>builder()
                .code(200)
                .message("OK")
                .result(productService.getAllProducts())
                .build();
    }
    @GetMapping("{id}")
    ApiResponse<ProductRespone> getProductById(@PathVariable Integer id){
        return ApiResponse.<ProductRespone>builder()
                .code(200)
                .message("OK")
                .result(productService.getProductById(id))
                .build();
    }
    @GetMapping("/search")
    ApiResponse<List<ProductRespone>> getProducts(
            @RequestParam(required = false) String name
    ) {
        List<ProductRespone> result;

        if (name == null || name.trim().isEmpty()) {
            result = productService.getAllProducts();
        } else {
            result = productService.getAllProductsByName(name);
        }

        return ApiResponse.<List<ProductRespone>>builder()
                .code(200)
                .message("OK")
                .result(result)
                .build();
    }

}
