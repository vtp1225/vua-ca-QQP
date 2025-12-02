package com.example.VuaCaQQP.VuaCa_QQP_Backend.service;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.request.UserRequest;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.request.UserUpdateRequest;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.UserResponse;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.entity.Users;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.exception.AppExceptions;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.exception.ErrorCode;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.mapper.UsersMapper;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.repository.UsersRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE,makeFinal = true)
public class UserService {
    UsersRepository repository;
    UsersMapper mapper;
    public List<UserResponse> getAllUsers(){
        List<Users> users = repository.findAll();
        List<UserResponse> responses = new ArrayList<>();
        for (Users us : users) {
            responses.add(mapper.toUserResponse(us));
        }
        return responses;
    }
    public UserResponse getUser(int id) {
        return mapper.toUserResponse(
                repository.findById(id).orElseThrow(() -> new AppExceptions(ErrorCode.USER_NOT_EXISTED)));
    }
    public UserResponse createUser(UserRequest request) {

        if(repository.existsByEmail(request.getEmail()))
            throw new AppExceptions(ErrorCode.USER_EXISTED);
        Users user = mapper.toUser(request);
        user.setCreatedAt(new Date());
//        Password
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
        user.setPasswordHash(passwordEncoder.encode(request.getPasswordHash()));
        Users savedUser = repository.save(user);
        return mapper.toUserResponse(savedUser);
    }

    public UserResponse updateUser(int userID, UserUpdateRequest request) {
        Users user = repository.findById(userID).orElseThrow(() -> new AppExceptions(ErrorCode.USER_NOT_EXISTED));
        mapper.updateUser(user,request);
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
        user.setPasswordHash(passwordEncoder.encode(request.getPasswordHash()));
        Users updatedUser = repository.save(user);
        return mapper.toUserResponse(updatedUser);
    }

    public void deleteUser(int userID) {
        Users user = repository.findById(userID).orElseThrow(() -> new AppExceptions(ErrorCode.USER_NOT_EXISTED));
        repository.delete(user);
    }
}
