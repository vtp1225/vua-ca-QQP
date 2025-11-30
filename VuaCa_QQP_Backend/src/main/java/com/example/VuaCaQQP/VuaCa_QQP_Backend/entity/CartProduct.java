package com.example.VuaCaQQP.VuaCa_QQP_Backend.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;

@Entity
@Table(name = "cartProduct")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CartProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    // Giỏ hàng
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cart_id", nullable = false,
            foreignKey = @ForeignKey(name = "fk_cartproduct_cart"))
    Cart cart;

    // Sản phẩm
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id", nullable = false,
            foreignKey = @ForeignKey(name = "fk_cartproduct_product"))
     Product product;

    // Số lượng
    @Column(name = "quantity", nullable = false)
    Integer quantity = 1;

    // Thời điểm thêm vào
    @Column(name = "added_at", columnDefinition = "DATETIME")
    Date addedAt = new Date();
}
