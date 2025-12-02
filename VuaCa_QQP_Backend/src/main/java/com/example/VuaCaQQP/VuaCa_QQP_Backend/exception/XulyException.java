package com.example.VuaCaQQP.VuaCa_QQP_Backend.exception;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.ApiResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.text.ParseException;

@ControllerAdvice
@Slf4j
public class XulyException {

    @ExceptionHandler(value = RuntimeException.class)
    ResponseEntity<ApiResponse> xulyRuntimeException (RuntimeException exception)
    {
        // In lỗi ra console để bạn biết nó chết ở đâu (Quan trọng!)
        log.error("Exception occurred: ", exception);

        ApiResponse apiResponse = new ApiResponse();

        // Thay vì UNAUTHORIZED, hãy dùng UNCATEGORIZED (9999)
        apiResponse.setCode(ErrorCode.UNCATEGORIZED.getCode());

        // Lấy message lỗi chính
        String message = exception.getMessage();

        // NẾU CÓ NGUYÊN NHÂN SÂU XA (ROOT CAUSE), NỐI THÊM VÀO ĐỂ DỄ ĐỌC LỖI
        if (exception.getCause() != null) {
            message += " -> Caused by: " + exception.getCause().getMessage();
            // Đào sâu thêm 1 lớp nữa nếu có (thường là lỗi SQL nằm ở đây)
            if (exception.getCause().getCause() != null) {
                message += " -> Root: " + exception.getCause().getCause().getMessage();
            }
        }

        // Kèm theo message thực tế của lỗi để debug
        apiResponse.setMessage(ErrorCode.UNCATEGORIZED.getMessage() + ": " + exception.getMessage());

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

    @ExceptionHandler(ParseException.class)
    public ResponseEntity<ApiResponse> handleParseException(ParseException exception) {
        ApiResponse apiResponse = new ApiResponse();
        apiResponse.setCode(ErrorCode.INVALID_FORMAT.getCode());
        apiResponse.setMessage("Dữ liệu không đúng định dạng: " + exception.getMessage());

        return ResponseEntity.badRequest().body(apiResponse);
    }


}
