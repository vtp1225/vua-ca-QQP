package com.example.VuaCaQQP.VuaCa_QQP_Backend.mapper;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.request.CartRequest;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.CartRespone;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.entity.Cart;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CartMapper {
    Cart toCart (CartRequest cartRequest);
    CartRespone toCartRespone (Cart cart);
}
