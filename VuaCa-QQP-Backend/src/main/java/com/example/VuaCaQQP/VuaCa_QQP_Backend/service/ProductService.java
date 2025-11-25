package com.example.VuaCaQQP.VuaCa_QQP_Backend.service;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.ProductRespone;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.entity.Product;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.mapper.ProductMapper;
import org.springframework.stereotype.Service;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.repository.ProductRepository;

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
}
