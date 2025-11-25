package com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.request;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.Enum.UserRole;
import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
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
public class UserRequest {
    String full_name;
    String email;

    @Size(min = 8, max = 50, message = "Mật khẩu phải lớn hơn 8 ký tự và nhỏ hơn 50 ký tự")
    String password_hash;
    String phone_number;
    String address;
    UserRole role;
    Date created_at;
}
