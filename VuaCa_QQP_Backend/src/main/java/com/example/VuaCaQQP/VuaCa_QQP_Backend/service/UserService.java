package com.example.VuaCaQQP.VuaCa_QQP_Backend.service;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.request.UserRequest;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.request.UserUpdateRequest;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.UserResponse;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.entity.Cart;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.entity.Users;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.exception.AppExceptions;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.exception.ErrorCode;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.mapper.UsersMapper;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.repository.CartRepository;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.repository.UsersRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class UserService {

    UsersRepository repository;
    UsersMapper mapper;
    PasswordEncoder passwordEncoder;
    CartRepository  cartRepository;
    public List<UserResponse> getAllUsers() {
        List<Users> users = repository.findAll();
        List<UserResponse> responses = new ArrayList<>();

        for (Users user : users) {
            responses.add(mapper.toUserResponse(user));
        }
        return responses;
    }

    public UserResponse getUser(int userId) {
        Users user = repository.findById(userId)
                .orElseThrow(() -> new AppExceptions(ErrorCode.USER_NOT_EXISTED));
        return mapper.toUserResponse(user);
    }

    public void deleteUser(int userId) {
        Users user = repository.findById(userId)
                .orElseThrow(() -> new AppExceptions(ErrorCode.USER_NOT_EXISTED));
        repository.delete(user);
    }


    public UserResponse createUser(UserRequest request) {

        if (repository.existsByEmail(request.getEmail())) {
            throw new AppExceptions(ErrorCode.USER_EXISTED);
        }

        // 1. Tạo user
        Users user = mapper.toUser(request);
        user.setCreatedAt(new Date());
        user.setPasswordHash(passwordEncoder.encode(request.getPasswordHash()));
        Users savedUser = repository.save(user);

        // 2. Tạo cart cho user mới
        Cart cart = new Cart();
        cart.setUser(savedUser);
        cartRepository.save(cart);

        // 3. Trả response
        return mapper.toUserResponse(savedUser);
    }

    // ================= USER =================

    public UserResponse updateUser(int userId, UserUpdateRequest request) {

        Users user = repository.findById(userId)
                .orElseThrow(() -> new AppExceptions(ErrorCode.USER_NOT_EXISTED));

        // update các field thông thường
        mapper.updateUser(user, request);

        // chỉ đổi password khi có gửi password mới
        if (request.getPasswordHash() != null && !request.getPasswordHash().isBlank()) {
            user.setPasswordHash(passwordEncoder.encode(request.getPasswordHash()));
        }

        return mapper.toUserResponse(repository.save(user));
    }


}
