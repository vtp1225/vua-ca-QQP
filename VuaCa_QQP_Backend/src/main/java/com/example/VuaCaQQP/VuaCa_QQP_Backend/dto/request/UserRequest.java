package com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.request;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.Enum.UserRole;
import jakarta.validation.constraints.*;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;

import java.util.Date;

@Slf4j
@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserRequest {
    @NotBlank(message = "Họ và tên không được để trống")
    @Size(min = 2, max = 100, message = "Họ và tên phải từ 2 đến 100 ký tự")
    @Pattern(regexp = "^[\\p{L} ]+$", message = "Họ và tên chỉ được chứa chữ cái và khoảng trắng")
    String fullName;

    @NotBlank(message = "Email không được để trống")
    @Email(message = "Email không hợp lệ")
    String email;

    @NotBlank(message = "Mật khẩu không được để trống")
    @Size(min = 8, max = 50, message = "PASSWORD_INVALID")
    String passwordHash;

    @NotBlank(message = "Số điện thoại không được để trống")
    @Pattern(
            regexp = "^0\\d{9,10}$",
            message = "Số điện thoại phải bắt đầu bằng 0 và có 10–11 chữ số"
    )
    String phoneNumber;

    @Size(min = 5, max = 255, message = "Địa chỉ phải từ 5 đến 255 ký tự")
    String address;

    @NotNull(message = "Quyền người dùng không được để trống")
    UserRole role;

    @PastOrPresent(message = "Thời gian tạo phải là hiện tại hoặc trong quá khứ")
    Date createdAt;
}
