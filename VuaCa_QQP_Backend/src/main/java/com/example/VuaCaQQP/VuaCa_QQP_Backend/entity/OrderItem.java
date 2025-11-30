package com.example.VuaCaQQP.VuaCa_QQP_Backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Order_Items")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    @Column(name = "order_id")
    Integer orderId;

    @Column(name = "product_id")
    Integer productId;

    @Column(name = "quantity")
    Integer quantity;

    @Column(name = "price_at_purchase")
    Double priceAtPurchase;

}
