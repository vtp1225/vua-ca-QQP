package com.example.VuaCaQQP.VuaCa_QQP_Backend.exception;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class XulyException {

    @ExceptionHandler(value = RuntimeException.class)
    ResponseEntity<ApiResponse> xulyRuntimeException (RuntimeException exception)
    {
        ApiResponse apiResponse =new ApiResponse();
        apiResponse.setCode(ErrorCode.UNAUTHORIZED.getCode());
        apiResponse.setMessage(ErrorCode.UNAUTHORIZED.getMessage());
        return ResponseEntity.badRequest().body(apiResponse);
    }

    @ExceptionHandler(value = AppExceptions.class)
    ResponseEntity<ApiResponse> xulyAppexception (AppExceptions exception)
    {
        ErrorCode errorCode=exception.getErrorCode();
        ApiResponse apiResponse =new ApiResponse();

        apiResponse.setCode(errorCode.getCode());
        apiResponse.setMessage(errorCode.getMessage() );

        return ResponseEntity.badRequest().body(apiResponse);
    }

    @ExceptionHandler(value = MethodArgumentNotValidException.class)
    ResponseEntity<ApiResponse> xulyValidation (MethodArgumentNotValidException exception){
        String enumKey = exception.getFieldError().getDefaultMessage();
        ErrorCode errorCode=ErrorCode.valueOf(enumKey);

        ApiResponse apiResponse =new ApiResponse();
        apiResponse.setCode(errorCode.getCode());
        apiResponse.setMessage(errorCode.getMessage());

        return ResponseEntity.badRequest().body(apiResponse);

    }

}
