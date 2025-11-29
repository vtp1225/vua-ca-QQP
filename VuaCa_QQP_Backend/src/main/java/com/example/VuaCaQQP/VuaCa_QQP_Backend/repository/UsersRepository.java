package com.example.VuaCaQQP.VuaCa_QQP_Backend.repository;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsersRepository extends JpaRepository<Users,Integer> {
    boolean existsByEmail(String email);
    Optional<Users> findByEmail(String email);
}
