package com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.request;

import lombok.Data;

@Data
public class CreateOrderRequest {
    private String shippingAddress;
    private String note;
}
