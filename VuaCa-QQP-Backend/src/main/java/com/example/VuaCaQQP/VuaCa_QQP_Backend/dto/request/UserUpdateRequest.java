package com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.request;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.Enum.UserRole;
import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserUpdateRequest {
    String fullName;
    String passwordHash;
    String phoneNumber;
    String address;
    UserRole role;
}