package com.example.VuaCaQQP.VuaCa_QQP_Backend.repository;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.entity.Cart;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.entity.CartProduct;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Dictionary;
import java.util.List;

public interface CartProductRepository extends JpaRepository<CartProduct,Integer> {

    List<CartProduct> findAByCart(Cart cart);
}
