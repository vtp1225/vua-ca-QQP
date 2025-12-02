package com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class ApiResponse<T>{
    int code=300;
    private String message;
    private T result;
}
