package com.example.VuaCaQQP.VuaCa_QQP_Backend.service;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.CartRespone;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.entity.Cart;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.entity.Users;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.exception.AppExceptions;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.exception.ErrorCode;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.mapper.CartMapper;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.repository.CartRepository;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.repository.UsersRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE,makeFinal = true)
public class CartService {
    CartRepository repository;
    CartMapper mapper;
    UsersRepository usersRepository;
    public CartRespone getCartByUserId(Integer userId) {
        Users user = usersRepository.findById(userId)
                .orElseThrow(() -> new AppExceptions(ErrorCode.INVALID_KEY));
        Cart cart = repository.findByUser(user);
        if (cart == null) {
            cart = new Cart();
            cart.setUser(user);
        }
        return mapper.toCartRespone(cart);
    }
}
