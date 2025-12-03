package com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.request;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.Enum.UserRole;
import lombok.*;
import lombok.experimental.FieldDefaults;

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