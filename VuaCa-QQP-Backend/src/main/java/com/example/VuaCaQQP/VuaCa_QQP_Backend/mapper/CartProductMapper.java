package com.example.VuaCaQQP.VuaCa_QQP_Backend.mapper;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.request.AddCartProductRequest;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.CartProductRespone;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.entity.CartProduct;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CartProductMapper {
    CartProduct toCartProduct(AddCartProductRequest cartProduct);
    CartProductRespone toCartProductRespone(CartProduct cartProduct);
}
