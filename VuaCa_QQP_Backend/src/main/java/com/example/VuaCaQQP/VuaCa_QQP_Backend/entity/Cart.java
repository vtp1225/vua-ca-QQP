package com.example.VuaCaQQP.VuaCa_QQP_Backend.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;

@Entity
@Table(name = "Carts")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cart_id")
    int cartId;
    @OneToOne
    @JoinColumn(name = "user_id")
    Users user;
    @Column(name = "created_at")
    Date createat;
    @Column(name = "updated_at")
    Date updateat;
}
