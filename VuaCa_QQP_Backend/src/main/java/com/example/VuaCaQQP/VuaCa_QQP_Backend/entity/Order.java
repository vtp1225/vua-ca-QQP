package com.example.VuaCaQQP.VuaCa_QQP_Backend.entity;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.Enum.OrderStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Table(name = "Orders")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    Integer orderId;

    @Column(name = "user_id", nullable = false)
    Integer userId;

    @Column(name = "order_date")
    Date orderDate;

    @Column(name = "total_amount")
    Double totalAmount;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    OrderStatus status;

    @Column(name = "shipping_address")
    String shippingAddress;

    @Column(name = "note")
    String note;
}
