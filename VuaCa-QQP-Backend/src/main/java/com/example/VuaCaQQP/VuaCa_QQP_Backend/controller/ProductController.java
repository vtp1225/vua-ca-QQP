package com.example.VuaCaQQP.VuaCa_QQP_Backend.controller;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.ApiResponse;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.ProductRespone;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.service.ProductService;

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
    ApiRespone<ProductRespone> getProductById(@PathVariable Integer id){
        return ApiRespone.<ProductRespone>builder()
                .code(200)
                .message("OK")
                .result(productService.getProductById(id))
                .build();
    }
}
