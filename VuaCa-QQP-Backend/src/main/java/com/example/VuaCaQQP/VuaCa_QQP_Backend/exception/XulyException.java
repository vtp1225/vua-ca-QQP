package com.example.VuaCaQQP.VuaCa_QQP_Backend.exception;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.ApiRespone;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class XulyException {

    @ExceptionHandler(value = RuntimeException.class)
    ResponseEntity<ApiRespone> xulyRuntimeException (RuntimeException exception)
    {
        ApiRespone apiRespone=new ApiRespone();
        apiRespone.setCode(ErrorCode.UNAUTHORIZED.getCode());
        apiRespone.setMessage(ErrorCode.UNAUTHORIZED.getMessage());
        return ResponseEntity.badRequest().body(apiRespone);
    }

    @ExceptionHandler(value = AppExceptions.class)
    ResponseEntity<ApiRespone> xulyAppexception (AppExceptions exception)
    {
        ErrorCode errorCode=exception.getErrorCode();
        ApiRespone apiRespone=new ApiRespone();

        apiRespone.setCode(errorCode.getCode());
        apiRespone.setMessage(errorCode.getMessage() );

        return ResponseEntity.badRequest().body(apiRespone);
    }

    @ExceptionHandler(value = MethodArgumentNotValidException.class)
    ResponseEntity<ApiRespone> xulyValidation (MethodArgumentNotValidException exception){
        String enumKey = exception.getFieldError().getDefaultMessage();
        ErrorCode errorCode=ErrorCode.valueOf(enumKey);

        ApiRespone apiRespone=new ApiRespone();
        apiRespone.setCode(errorCode.getCode());
        apiRespone.setMessage(errorCode.getMessage());

        return ResponseEntity.badRequest().body(apiRespone);

}

}
