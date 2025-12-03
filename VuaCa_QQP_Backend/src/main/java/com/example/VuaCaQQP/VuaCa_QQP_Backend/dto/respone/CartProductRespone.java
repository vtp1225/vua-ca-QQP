package com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone;

import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;

import java.util.Date;

@Slf4j
@Data
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CartProductRespone {
    int id;
    CartRespone cart;
    ProductRespone product;
    int quantity;
    Date added_at;
}
