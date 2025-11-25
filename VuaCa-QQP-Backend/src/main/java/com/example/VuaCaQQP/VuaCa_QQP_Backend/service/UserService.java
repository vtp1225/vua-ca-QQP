package com.example.VuaCaQQP.VuaCa_QQP_Backend.service;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.request.UserRequest;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.ProductRespone;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.UsersRespone;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.entity.Product;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.entity.Users;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.mapper.ProductMapper;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.mapper.UsersMapper;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.repository.ProductRepository;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.repository.UsersRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
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
    public List<UsersRespone> getAllUsers(){
        List<Users> users = repository.findAll();
        List<UsersRespone> responses = new ArrayList<>();
        for (Users us : users) {
            responses.add(mapper.toUserRespone(us));
        }
        return responses;
    }
    public UsersRespone createUser(UserRequest request) {
        Users user = mapper.toUser(request);
        user.setCreated_at(new Date());
        Users savedUser = repository.save(user);
        return mapper.toUserRespone(savedUser);
    }
}
