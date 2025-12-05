package com.example.VuaCaQQP.VuaCa_QQP_Backend.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public enum ErrorCode {
    UNCATEGORIZED(9999,"Lỗi chung chung, chả biết nó là gì", HttpStatus.INTERNAL_SERVER_ERROR),
    USER_EXISTED(9998,"Da ton tai user",HttpStatus.BAD_REQUEST),
    INVALID_KEY(9122,"KEY NOT VALID",HttpStatus.BAD_REQUEST),
    USER_NOT_EXISTED(1005, "User not existed", HttpStatus.NOT_FOUND),
    FULL_NAME_INVALID(1008, "Full name invalid", HttpStatus.BAD_REQUEST),
    EMAIL_INVALID(1009, "Email invalid", HttpStatus.BAD_REQUEST),
    PASSWORD_INVALID(1010, "Password invalid, 8<pass<50", HttpStatus.BAD_REQUEST),
    UNAUTHENTICATED(1006, "Unauthenticated", HttpStatus.UNAUTHORIZED),
    INVALID_FORMAT(1007, "Invalid format", HttpStatus.BAD_REQUEST),
    UNAUTHORIZED(1007, "UNAUTHORIZED", HttpStatus.FORBIDDEN);
    private int code;
    private String message;
    private HttpStatus status;
    ErrorCode(int code, String message, HttpStatus status) {
        this.code = code;
        this.message = message;
        this.status = status;
    }
}
