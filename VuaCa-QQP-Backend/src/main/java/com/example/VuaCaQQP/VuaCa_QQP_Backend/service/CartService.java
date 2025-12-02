package com.example.VuaCaQQP.VuaCa_QQP_Backend.service;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.request.CartRequest;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.CartRespone;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.entity.Cart;
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
    public CartRespone getCartById(int id)
    {
        Cart cart = repository.findById(id).orElseThrow(()-> new AppExceptions(ErrorCode.INVALID_KEY));
        return mapper.toCartRespone(cart);
    }
    public CartRespone getCartByUserId(int userId)
    {
        Cart cart = repository.findById(userId).orElseThrow(()-> new AppExceptions(ErrorCode.INVALID_KEY));
        return mapper.toCartRespone(cart);
    }
    public CartRespone createCart(CartRequest request)
    {
        Cart cart = mapper.toCart(request);
        cart.setUser(usersRepository.findById(request.getUserId()).orElseThrow(()-> new AppExceptions(ErrorCode.INVALID_KEY)));
        repository.save(cart);
        return mapper.toCartRespone(cart);
    }
    public CartRespone updateCart(CartRequest request)
    {
        Cart cart = mapper.toCart(request);
        repository.save(cart);
        return  mapper.toCartRespone(cart);
    }
    public void deleteCartById(int id)
    {
        repository.deleteById(id);
    }
}
