package com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.Enum.UserRole;
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
public class UsersRespone {
    String full_name;
    String email;
    String password_hash;
    String phone_number;
    String address;
    UserRole role;
    Date created_at;
}
