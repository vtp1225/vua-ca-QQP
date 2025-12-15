package com.example.VuaCaQQP.VuaCa_QQP_Backend.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;

@Entity
@Table(name = "Products")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id", nullable = false)
    int productId;
    @Column(name = "name", nullable = false)
    String name;
    @Column(name = "price", nullable = false)
    private Double price;
    @Column(name = "image_url")
    String imageUrl;
    @Column(name = "description")
    String description;
    @Column(name = "information")
    String information;
    @Column(name = "cachbaoquan")
    String cachbaoquan;
    @Column(name = "stock_quantity")
    Integer stockQuantity;
    @Column(name = "is_active")
    boolean isActive;
    @Column(name = "created_at")
    Date createAt;
}
