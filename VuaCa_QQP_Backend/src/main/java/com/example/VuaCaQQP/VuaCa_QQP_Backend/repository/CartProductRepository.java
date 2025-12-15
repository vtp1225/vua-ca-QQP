package com.example.VuaCaQQP.VuaCa_QQP_Backend.repository;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.entity.Cart;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.entity.CartProduct;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CartProductRepository extends JpaRepository<CartProduct,Integer> {

    List<CartProduct> findAllByCart(Cart cart);
    void deleteByCart(Cart cart);
    Optional<CartProduct> findByCartAndProduct(
        Cart cart, Product product
    );
}
