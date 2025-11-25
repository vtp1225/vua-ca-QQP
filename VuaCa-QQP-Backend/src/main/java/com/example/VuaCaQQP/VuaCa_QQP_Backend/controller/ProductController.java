package com.example.VuaCaQQP.VuaCa_QQP_Backend.controller;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.ApiRespone;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.ProductRespone;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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
     ApiRespone<List<ProductRespone>> getProducts(){
        return ApiRespone.<List<ProductRespone>>builder()
                .code(200)
                .message("OK")
                .result(productService.getAllProducts())
                .build();
    }
}
