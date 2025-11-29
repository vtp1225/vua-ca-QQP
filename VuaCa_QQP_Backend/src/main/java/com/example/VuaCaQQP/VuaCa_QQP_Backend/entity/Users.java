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
    Integer userId;
    @Column(name = "full_name")
    String fullName;
    @Column(name = "email")
    String email;
    @Column(name = "password_hash")
    String passwordHash;
    @Column(name = "phone_number")
    String phoneNumber;
    @Column(name = "address")
    String address;
    @Enumerated(EnumType.STRING)
    @Column(name = "role")
    UserRole role;
    @Column(name = "created_at")
    Date createdAt;
}
