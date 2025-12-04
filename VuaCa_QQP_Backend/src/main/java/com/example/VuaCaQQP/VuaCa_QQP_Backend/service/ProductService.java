package com.example.VuaCaQQP.VuaCa_QQP_Backend.service;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.ProductRespone;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.entity.Product;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.exception.AppExceptions;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.exception.ErrorCode;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.mapper.ProductMapper;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.repository.ProductRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE,makeFinal = true)
public class ProductService {
    ProductRepository repository;
    ProductMapper mapper;
    public List<ProductRespone> getAllProducts(){
        List<Product> products = repository.findAll();
        List<ProductRespone> respones = new ArrayList<>();
        for (Product product : products) {
            respones.add(mapper.toProductRespone(product));
        }
        return respones;
    }
    public ProductRespone getProductById(Integer id){
        Product product = repository.findById(id).orElseThrow(()-> new AppExceptions(ErrorCode.INVALID_KEY));
        return mapper.toProductRespone(product);
    }
    public List<ProductRespone> getAllProductsByName(String name){
        List<Product> products = repository.findByNameContainingIgnoreCase(name);
        List<ProductRespone> respones = new ArrayList<>();
        for (Product product : products) {
            respones.add(mapper.toProductRespone(product));
        }
        return respones;
    }
}
