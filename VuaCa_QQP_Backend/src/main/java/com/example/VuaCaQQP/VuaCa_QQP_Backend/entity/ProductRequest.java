package com.example.VuaCaQQP.VuaCa_QQP_Backend.entity;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;

import java.util.Date;

@Slf4j
@Data
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ProductRequest {
    String name;
    private Double price;
    String imageUrl;
    String description;
    String information;
    String cachbaoquan;
    Integer stockQuantity;
    boolean isActive;
    Date createAt;
}
