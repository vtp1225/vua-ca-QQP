package com.example.VuaCaQQP.VuaCa_QQP_Backend.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public enum ErrorCode {
    UNCATE_EXCEPTION(9999,"Toi Yeu Em, Nhung that bai roi", HttpStatus.INTERNAL_SERVER_ERROR),
    INVALID_KEY(9122,"KEY NOT VALID",HttpStatus.BAD_REQUEST);
    private int code;
    private String message;
    private HttpStatus status;
    ErrorCode(int code, String message, HttpStatus status) {
        this.code = code;
        this.message = message;
        this.status = status;
    }
}
