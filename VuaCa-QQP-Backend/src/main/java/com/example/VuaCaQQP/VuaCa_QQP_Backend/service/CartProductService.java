package com.example.VuaCaQQP.VuaCa_QQP_Backend.service;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.request.AddCartProductRequest;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.CartProductRespone;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.entity.CartProduct;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.mapper.CartProductMapper;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.repository.CartProductRepository;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.repository.CartRepository;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.repository.ProductRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE,makeFinal = true)
public class CartProductService {
    CartProductRepository repository;
    ProductRepository productRepository;
    CartRepository cartRepository;
    CartProductMapper mapper;
    public CartProductRespone getCartProductById(int id)
    {
        CartProduct cartProduct = repository.findById(id).get();
        return mapper.toCartProductRespone(cartProduct);
    }
    public List<CartProductRespone>  getCartProductByCartId(int cart_id)
    {
        List<CartProduct> cartProduct = repository.findAllByCart_CartId(cart_id);
        List<CartProductRespone> cartProductRespones = new ArrayList<>();
        for (CartProduct cartProduct1 : cartProduct) {
            cartProductRespones.add(mapper.toCartProductRespone(cartProduct1));
        }
        return cartProductRespones;
    }
    public CartProductRespone addCartProduct(AddCartProductRequest request)
    {
        CartProduct cartProduct = mapper.toCartProduct(request);
        cartProduct = repository.save(cartProduct);
        return mapper.toCartProductRespone(cartProduct);
    }
}
