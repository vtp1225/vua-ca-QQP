package com.example.VuaCaQQP.VuaCa_QQP_Backend.repository;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface ProductRepository extends JpaRepository<Product,Integer> {
    List<Product> findByNameContainingIgnoreCase(String name);
}
