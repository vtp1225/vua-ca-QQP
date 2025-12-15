package com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.Enum.UserRole;
import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;

import java.util.Date;

@Slf4j
@Data
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserResponse {
    int userId;
    String fullName;
    String email;
    String passwordHash;
    String phoneNumber;
    String address;
    UserRole role;
    Date createdAt;
}
