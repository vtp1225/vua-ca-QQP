package com.example.VuaCaQQP.VuaCa_QQP_Backend.controller;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.request.UserRequest;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.ApiRespone;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.ProductRespone;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.UsersRespone;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.entity.Users;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.service.ProductService;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.service.UserService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE,makeFinal = true)
public class UserController {
    UserService userService;
    @GetMapping
    private ApiRespone<List<UsersRespone>> getProducts(){
        return ApiRespone.<List<UsersRespone>>builder()
                .code(200)
                .message("OK")
                .result(userService.getAllUsers())
                .build();
    }

    @PostMapping
    private ApiRespone<UsersRespone> createUser(@RequestBody UserRequest request){
        return ApiRespone.<UsersRespone>builder()
                .code(200)
                .message("OK")
                .result(userService.createUser(request))
                .build();
    }
}
