package com.example.VuaCaQQP.VuaCa_QQP_Backend.mapper;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.OrderItemResponse;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.OrderResponse;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.entity.Order;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.entity.OrderItem;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface OrderMapper {

    @Mapping(target = "items", ignore = true)
    OrderResponse toOrderResponse(Order order);

    OrderItemResponse toOrderItemResponse(OrderItem item);
}