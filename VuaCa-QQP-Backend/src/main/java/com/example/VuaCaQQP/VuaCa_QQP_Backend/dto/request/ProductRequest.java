package com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.request;

import jakarta.persistence.Column;
import lombok.*;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;

import java.util.Date;

@Slf4j
@Data
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ProductRequest {
    String name;
    private Double price;
    String imageUrl;
    String description;
    String information;
    String cachbaoquan;
    boolean isActive;
    Date createAt;
}
