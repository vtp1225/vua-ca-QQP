package com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.Enum.OrderStatus;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class OrderResponse {
     Integer orderId;
     Double totalAmount;
     OrderStatus status;
     Date orderDate;
     String shippingAddress;
     String note;
     List<OrderItemResponse> items;
}