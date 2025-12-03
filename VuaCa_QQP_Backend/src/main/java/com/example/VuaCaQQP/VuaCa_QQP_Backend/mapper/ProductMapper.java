package com.example.VuaCaQQP.VuaCa_QQP_Backend.mapper;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.request.ProductRequest;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.ProductRespone;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.entity.Product;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ProductMapper {
    Product toProduct (ProductRequest request);
    ProductRespone toProductRespone (Product product);
}
