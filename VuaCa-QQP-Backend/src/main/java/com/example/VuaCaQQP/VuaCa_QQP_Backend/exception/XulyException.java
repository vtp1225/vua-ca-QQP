package com.example.VuaCaQQP.VuaCa_QQP_Backend.exception;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.ApiRespone;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class XulyException {

    @ExceptionHandler(value = AppExceptions.class)
    ResponseEntity<ApiRespone> xulyAppexception (AppExceptions exception)
    {
        ErrorCode errorCode=exception.getErrorCode();
        ApiRespone apiRespone=new ApiRespone();
        apiRespone.setCode(errorCode.getCode());
        apiRespone.setMessage(errorCode.getMessage() );
        return ResponseEntity.status(errorCode.getStatus()).body(apiRespone);
    }
}
