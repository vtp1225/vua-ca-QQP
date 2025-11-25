package com.example.VuaCaQQP.VuaCa_QQP_Backend.entity;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.Enum.UserRole;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;

@Entity
@Table(name = "Users")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id",  nullable = false)
    int user_id;
    @Column(name = "full_name")
    String full_name;
    @Column(name = "email")
    String email;
    @Column(name = "password_hash")
    String password_hash;
    @Column(name = "phone_number")
    String phone_number;
    @Column(name = "address")
    String address;
    @Enumerated(EnumType.STRING)
    @Column(name = "role")
    UserRole role;
    @Column(name = "created_at")
    Date created_at;
}
